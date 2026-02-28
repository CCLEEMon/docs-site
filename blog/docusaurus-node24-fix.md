---
title: Node 24 升级后 Docusaurus 构建失败的解决方案
date: 2026-02-28
tags: [Docusaurus, Node.js, 构建问题]
---

# Node 24 升级后 Docusaurus 构建失败的解决方案

<!-- truncate -->

## 问题描述

将本地 Node 版本从 v20 升级到 v24 后，执行 `npm run build` 构建失败：

```
[ERROR] Client bundle compiled with errors therefore further build is impossible.
assets/files/index-xxx.js from Terser plugin
Unexpected token: operator (<) [assets/files/index-xxx.js:7,undefined]
```

## 原因分析

Node.js v24 与 Docusaurus 3.9.x 使用的 Terser 压缩器存在兼容性问题：

1. Terser 在 Node 24 环境下处理包含 JSX 语法的 JS 文件时出错
2. `<` 符号被误认为是比较运算符而非 JSX 标签起始
3. 错误链路：`Node 24 → Terser 5.46.0 → JSX 解析失败`

## 解决方案

使用 Docusaurus 官方的 Faster 方案（SWC 替代 Terser）。

### 步骤 1：安装依赖

```bash
npm install @docusaurus/faster --save-dev
```

### 步骤 2：修改配置

编辑 `docusaurus.config.ts`，添加 `future` 配置：

```typescript
const config: Config = {
  // ... 其他配置

  future: {
    v4: true,
    experimental_faster: true,
  },

  // ...
};
```

### 步骤 3：验证构建

```bash
npm run build
```

## 方案说明

| 配置项 | 作用 |
|--------|------|
| `v4: true` | 启用 Docusaurus v4 未来标志 |
| `experimental_faster: true` | 使用 SWC/Rspack 替代 Terser/webpack |

**优势：**
- 保持 Node 24 版本一致性
- 构建速度更快（SWC 比 Terser 快 20x+）
- 官方支持的方案

## 版本对照

| 环境 | 升级前 | 升级后 |
|------|--------|--------|
| Node.js | v20.20.0 | v24.13.1 |
| 压缩器 | Terser | SWC |
| 打包器 | webpack | Rspack |

## 参考

- [Docusaurus Future Flags](https://docusaurus.io/docs/api/docusaurus-config#future)
- [Docusaurus Faster](https://docusaurus.io/docs/faster)
