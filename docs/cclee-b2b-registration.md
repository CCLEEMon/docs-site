---
title: 企业注册
description: CCLEE B2B 插件企业注册审批完整指南 — 注册表单、字段配置、管理员审批、邮件通知
project: cclee-b2b
schema: HowTo
steps:
  - name: 配置注册字段
    text: 在 Registration 设置中启用/禁用各个字段，设置必填项
  - name: 添加注册表单页面
    text: 在页面中添加 [cclee_b2b_register] 短代码
  - name: 审批企业申请
    text: 在 WP Admin 用户列表中 Approve 或 Reject 待审批用户
  - name: 邮件自动通知
    text: 审批后系统自动发送邮件通知申请人结果
rag: true
rag_tags: ["CCLEE B2B", "企业注册", "审批工作流", "B2B 用户", "邮件通知"]
---

# CCLEE B2B — 企业注册审批

后台路径：**CCLEE B2B → Registration**

![Registration 设置页概览](/images/docs/cclee-b2b/registration/settings-overview.webp)

---

## 注册字段配置

### 可用字段

| 字段 | 说明 | 用途 |
|------|------|------|
| Company Name | 公司名称 | 识别企业身份 |
| Tax ID | 税号/营业执照号 | 验证企业合法性 |
| Contact Person | 联系人姓名 | 主要对接人 |
| Phone | 电话号码 | 联系方式 |
| Industry | 行业 | 了解客户背景 |
| Company Size | 公司规模 | 评估采购能力 |

### 配置步骤

1. 进入 **CCLEE B2B → Registration**
2. 为每个字段设置：
   - **Enabled** — 是否显示该字段
   - **Required** — 是否为必填项
3. 保存设置

---

## 前台注册表单

### 添加表单页面

1. 创建新页面（例：Become a Wholesale Customer）
2. 添加短代码：`[cclee_b2b_register]`
3. 发布页面

### 表单填写

访客/客户填写企业信息后提交。

![注册表单](/images/docs/cclee-b2b/registration/registration-form.webp)

![注册表单填写后](/images/docs/cclee-b2b/registration/registration-form-filled.webp)

### 提交后流程

1. 系统创建用户账号，B2B 状态为 **Pending**
2. 管理员收到新申请通知（邮件）
3. 申请人收到提交确认邮件

---

## 管理员审批

### 查看待审批用户

进入 **WP Admin → Users**，新增 **B2B Status** 列显示每个用户的审批状态。

![用户列表 B2B 状态列](/images/docs/cclee-b2b/registration/users-b2b-status-column.webp)

### 审批操作

1. 在用户列表找到 Pending 状态的用户
2. 点击 **Approve** 或 **Reject** 快捷操作
3. 或进入用户编辑页面，修改 B2B 相关字段和状态

![用户资料 B2B 字段](/images/docs/cclee-b2b/registration/user-profile-b2b-fields.webp)

### 审批结果

| 操作 | 用户获得角色 | 用户状态 | 邮件通知 |
|------|-------------|----------|----------|
| Approve | `cclee_b2b_verified` | approved | 批准邮件 |
| Reject | 保持原角色 | rejected | 拒绝邮件 |

---

## 邮件通知

系统自动发送以下邮件：

| 触发时机 | 收件人 | 内容 |
|----------|--------|------|
| 提交注册 | 申请人 | 确认信息已收到，等待审批 |
| 审批通过 | 申请人 | 账号已激活，可以批发采购 |
| 审批拒绝 | 申请人 | 申请未通过，可联系客服申诉 |

<InfoBox variant="info" title="邮件配置">
确保网站邮件发送功能正常（wp_mail 工作）。可在 WP Admin → Settings → General 中确认邮箱地址，或安装邮件插件。
</InfoBox>

---

## 常见问题

### 用户没有收到邮件？

1. 检查垃圾邮件文件夹
2. 确认网站邮件发送功能正常
3. 联系管理员检查邮件日志

### 审批按钮不显示？

1. 确认用户 B2B 状态为 Pending
2. 确认当前登录用户有管理员权限
3. 清除浏览器缓存后重试

### 如何修改用户 B2B 信息？

在 **WP Admin → Users → Edit User** 页面，找到 B2B 相关字段（公司名称、税号、联系人等）可直接修改。

### 可以批量审批吗？

目前需要逐个审批。如有批量需求，可通过 WP-CLI 或数据库操作实现。
