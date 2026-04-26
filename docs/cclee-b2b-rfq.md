---
title: 报价系统
description: CCLEE B2B 插件报价系统完整指南 — 询价表单、报价审批、谈判流程、订单转换
project: cclee-b2b
schema: HowTo
steps:
  - name: 配置 RFQ 表单
    text: 在 RFQ 设置中自定义表单标题、字段、谈判规则
  - name: 添加 RFQ 表单页面
    text: 在页面中添加 [cclee_rfq_form] 短代码
  - name: 管理报价请求
    text: 在 WP Admin 审批报价、填写价格、发送客户
  - name: 客户响应报价
    text: 客户在 My Quotes 页面接受、拒绝或还价
  - name: 转换为订单
    text: 接受报价后转为 WooCommerce 正式订单
rag: true
rag_tags: ["CCLEE B2B", "RFQ", "报价系统", "询价", "批发谈判"]
---

# CCLEE B2B — 报价系统（RFQ）

后台路径：**CCLEE B2B → RFQ**

![RFQ 设置页概览](/images/docs/cclee-b2b/rfq/settings-overview.webp)

---

## 表单配置

### 基本设置

1. 进入 **CCLEE B2B → RFQ**
2. 配置表单标题、副标题、按钮文字、成功提示信息

### 可选字段

| 字段 | 说明 |
|------|------|
| Phone | 联系电话 |
| Company | 公司名称 |
| Country | 国家/地区 |
| Message | 留言备注 |
| Inquiry Type | 询价类型 |

每个字段可单独设置是否显示、是否必填。

### 工作流设置

| 参数 | 说明 | 默认值 |
|------|------|--------|
| Max Negotiation Rounds | 最大还价轮次 | 3 |
| Quote Expiry Days | 报价有效期（天） | 7 |
| Allow Guest RFQ | 允许游客提交 | Yes |
| Email Notifications | 邮件通知 | 开启 |

---

## 前台表单页面

### 添加表单

在页面中添加短代码：
- 通用询价：`[cclee_rfq_form]`
- 指定产品询价：`[cclee_rfq_form product_id="123"]`

![RFQ 表单](/images/docs/cclee-b2b/rfq/rfq-form.webp)

### 填写提交

![RFQ 表单填写后](/images/docs/cclee-b2b/rfq/rfq-form-filled.webp)

---

## 管理员报价管理

### 查看报价请求

进入 **WP Admin → WooCommerce → Quote Requests**

![报价请求列表](/images/docs/cclee-b2b/rfq/admin-rfq-list.webp)

### 报价状态

| 状态 | 说明 |
|------|------|
| Pending | 待处理 |
| Quoted | 已报价，等待客户响应 |
| Accepted | 客户接受，转为订单 |
| Rejected | 客户拒绝 |
| Expired | 过期 |
| Cancelled | 取消 |

### 报价操作

1. 点击报价查看详情
2. 填写报价金额
3. 选择报价有效期
4. 点击 **Send Quote** 发送给客户

### 邮件通知

报价发送后，系统自动邮件通知客户。

---

## 客户我的报价

### 添加 My Quotes 页面

在页面中添加短代码：`[cclee_b2b_my_quotes]`

### 客户响应

客户登录后访问 My Account → My Quotes，可查看所有报价并响应：

| 操作 | 说明 |
|------|------|
| Accept | 接受报价，确认购买 |
| Reject | 拒绝报价 |
| Counter-offer | 还价（消耗谈判轮次） |

![客户我的报价页](/images/docs/cclee-b2b/rfq/my-quotes-page.webp)

### 订单转换

客户接受报价后：
1. 系统生成 WooCommerce 订单
2. 订单金额为报价金额
3. 客户完成支付流程

---

## 常见问题

### 报价过期了怎么办？

过期报价状态自动变为 Expired，客户需要重新提交询价。

### 游客可以提交 RFQ 吗？

可以。在 RFQ 设置中开启 **Allow Guest RFQ**。

### 可以附加产品到 RFQ 吗？

可以。使用 `[cclee_rfq_form product_id="123"]` 短代码，表单自动附加指定产品信息。

### 最多能还价几轮？

由 Max Negotiation Rounds 设置，默认 3 轮。达到轮次上限后客户只能接受或拒绝当前报价。

### RFQ 如何转为正式订单？

客户接受报价后，系统自动创建 WooCommerce 订单，无需手动操作。
