---
title: 修复 WSL2 无法访问 Windows 宿主机代理 — 防火墙隐形拦截
description: WSL2 内 ping/nc 宿主机无响应，所有防火墙入站规则显示 NotApplicable，根因是 vEthernet(WSL) 虚拟网卡无 Network Profile，一条命令彻底修复。
date: 2026-04-02
tags: [WSL2, Windows防火墙, 网络代理, 开发环境, VSCode, Claude-Code, Roo]
authors: [cclee]
schema: FAQPage
faqs:
  - q: "WSL2 里 curl 能直连外网，但走代理就 ConnectionRefused，为什么？"
    a: "vEthernet(WSL) 虚拟网卡没有 Network Profile，Windows 防火墙入站规则对它全部 NotApplicable，代理端口被静默拦截。"
  - q: "为什么加了防火墙端口入站规则还是不通？"
    a: "入站规则绑定到 Profile（Domain/Private/Public），vEthernet(WSL) 不属于任何 Profile，规则根本不会对这个接口生效。"
  - q: "一条命令怎么修复？会留安全隐患吗？"
    a: "Set-NetFirewallProfile -DisabledInterfaceAliases 'vEthernet (WSL)' 仅对 WSL 虚拟网卡禁用防火墙，其他物理网卡不受影响，设置重启保留。"
---

在 WSL2 环境下使用 Claude Code、Roo 等 AI 编程工具时，工具需要通过 Windows 宿主机代理访问 API，却反复报 `ConnectionRefused`。排查过程踩了 5 个坑，记录根因与解法。

## TL;DR

WSL2 的 `vEthernet (WSL)` 虚拟网卡每次启动重建，Windows 防火墙无法为其分配 Network Profile，导致**所有入站规则对这个接口都不生效**（`EnforcementStatus: NotApplicable`）。不需要加规则，直接对接口禁用防火墙即可：

```powershell
# 在 Windows PowerShell (管理员) 中执行
Set-NetFirewallProfile -DisabledInterfaceAliases "vEthernet (WSL)"
```

## 问题现象

环境：Windows 10 21H2 + WSL2 2.5.10.0（NAT 模式），宿主机运行 Clash Verge（端口 7897，Allow LAN 已开）。

症状链：

```bash
# WSL 内 ping 宿主机 — 无响应
ping 172.22.80.1

# WSL 内测试代理端口 — 无响应
nc -zv 172.22.80.1 7897

# Claude Code / Roo 报错
# API Error: ConnectionRefused

# 但直连外网正常
curl https://example.com  # OK
```

Windows 侧确认 Clash 正常：`netstat` 显示监听 `0.0.0.0:7897`，本机 `Test-NetConnection localhost 7897` 也能通。

## 根因

**`vEthernet (WSL)` 是 WSL2 每次启动时动态创建的虚拟网卡**，Windows 防火墙的 Network Profile（Domain / Private / Public）无法关联到这个接口。

这意味着：

1. 防火墙入站规则绑定到 Profile
2. vEthernet(WSL) 不属于任何 Profile
3. 所有入站规则对该接口的 `EnforcementStatus` 都是 `NotApplicable`
4. **规则根本没执行**，不是被拒绝，是被跳过

所以无论加多少条端口规则、怎么绑定 InterfaceAlias，都不会生效。

## 解决方案

### 第一步：确认根因

在 Windows PowerShell（管理员）中检查：

```powershell
# 查看虚拟网卡接口
Get-NetAdapter | Where-Object { $_.Name -like "*WSL*" }

# 查看入站规则的 EnforcementStatus
Get-NetFirewallRule -DisplayName "*7897*" |
  Get-NetFirewallInterfaceFilter |
  Get-NetFirewallPortFilter |
  Format-Table -Property * -AutoSize
```

如果规则存在但 WSL 仍不通，大概率就是 Profile 不生效。

### 第二步：一条命令修复

```powershell
# 直接对 vEthernet(WSL) 禁用防火墙
Set-NetFirewallProfile -DisabledInterfaceAliases "vEthernet (WSL)"
```

这条命令的效果：
- 仅对 `vEthernet (WSL)` 这一个虚拟网卡接口生效
- 物理网卡（Wi-Fi、以太网）的防火墙规则完全不受影响
- 设置持久化，重启后保留

### 第三步：验证

```bash
# WSL 内测试连通性
nc -zv 172.22.80.1 7897
# 输出: Connection to 172.22.80.1 7897 port [tcp/*] succeeded!

# 测试代理
curl -x http://172.22.80.1:7897 https://api.anthropic.com
```

<InfoBox variant="warning" title="注意事项">

- 如果你的 Clash 端口不是 7897，替换成实际端口即可，关键是修复防火墙接口而非端口
- WSL 更新或 Windows 大版本更新可能重置虚拟网卡配置，复发时重新执行同一条命令
- Windows 10 不支持 WSL2 的 `mirrored` 网络模式（仅 Windows 11 23H2+），不要尝试这个方向
- `vEthernet (WSL)` 的 IP 每次启动可能变化，建议在 `.bashrc` 中动态获取：

```bash
# .bashrc 中自动获取宿主机 IP
export WINDOWS_IP=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}')
export http_proxy="http://${WINDOWS_IP}:7897"
export https_proxy="http://${WINDOWS_IP}:7897"
```

</InfoBox>

## 排除过程：5 个踩坑方向

以下是已经排除的方向，供正在排查的同学参考：

| # | 方向 | 结果 | 原因 |
|---|------|------|------|
| 1 | 代理环境变量问题 | 排除 | `.bashrc` 中 unset/export 交替是切换函数设计，不是根因 |
| 2 | Clash 没开局域网 | 排除 | Allow LAN 已开，端口监听 `0.0.0.0:7897`，本机可通 |
| 3 | 防火墙端口规则 | 排除 | 加了 7897 入站规则仍不通，EnforcementStatus: NotApplicable |
| 4 | 绑定 InterfaceAlias | 排除 | `Set-NetFirewallRule -InterfaceAlias "vEthernet (WSL)"` 无效 |
| 5 | mirrored 网络模式 | 排除 | Windows 10 不支持 |

核心误区：**一直试图加规则，但问题不是规则不够，是规则对这个接口根本不生效。**

---

<div className="text-center my-8">
  <a href="/about" className="button button--primary button--lg">联系合作</a>
</div>
