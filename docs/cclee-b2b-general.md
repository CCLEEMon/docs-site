---
title: 通用设置
description: CCLEE B2B 插件通用设置完整指南 — 启用 B2B 功能、目录可见性、支付网关、变体矩阵、批量下单
project: cclee-b2b
schema: HowTo
steps:
  - name: 启用 B2B 功能
    text: 在 General 设置中开启 Enable B2B 开关，激活所有 B2B 模块
  - name: 配置目录可见性
    text: 设置游客价格隐藏、Pending 用户购买限制
  - name: 配置支付网关
    text: 按用户组设置可用支付方式（发票、延期付款、采购订单）
  - name: 使用变体矩阵
    text: 以表格形式批量展示和添加变体产品
  - name: 使用批量下单
    text: 通过 SKU 粘贴快速批量添加产品到购物车
rag: true
rag_tags: ["CCLEE B2B", "B2B 批发", "WooCommerce", "目录可见性", "批量下单"]
---

import StatusTag from '@site/src/components/StatusTag'

# CCLEE B2B — 通用设置

后台路径：**CCLEE B2B → General**

![General 设置页概览](/images/docs/cclee-b2b/general/settings-overview.webp)

---

## 启用 B2B 功能

**路径：** CCLEE B2B → General

1. 勾选 **Enable B2B** 开关
2. 点击 **保存更改**

<InfoBox variant="info" title="提示">
关闭 Enable B2B 后，所有 B2B 模块将完全不加载，不影响店铺正常零售功能。
</InfoBox>

---

## 功能开关（Feature Switches）

独立控制每个 B2B 模块的开启/关闭：

| 模块 | 说明 |
|------|------|
| Tier Pricing | 阶梯定价 |
| Catalog Visibility | 目录可见性控制 |
| Bulk Order | 批量下单 |
| Variation Matrix | 变体矩阵表格 |

关闭某个模块后，该模块的前端资产和钩子将完全不加载。

---

## 目录可见性控制

### 游客价格隐藏

开启后，游客访客在店铺页和产品页看不到价格，显示登录提示。

**效果：**
- 店铺页：价格区域显示 "Login to view price"
- 产品页：显示 "Login to view price" 和 "Login" 按钮

![游客店铺页隐藏价格](/images/docs/cclee-b2b/general/guest-shop-hidden-prices.webp)

### Pending 用户购买限制

开启后，等待审批的企业用户不能直接购买，看到 "Request Quote" 按钮引导进入报价流程。

![Pending 用户产品页报价按钮](/images/docs/cclee-b2b/general/pending-product-quote-cta.webp)

### 游客产品页登录 CTA

游客访问单个产品页时，看到登录提示而非加入购物车表单。

![游客产品页登录按钮](/images/docs/cclee-b2b/general/guest-product-login-cta.webp)

---

## 支付网关权限

按用户组控制可用支付方式：

| 用户组 | 可用网关 |
|--------|----------|
| Verified Enterprise | 发票、延期付款、采购订单 |
| Pending Enterprise | 受限支付方式 |
| Retail | 标准零售支付 |

管理员可在设置中为每个组单独配置允许的支付网关。

---

## 变体矩阵

Verified 企业用户访问变体产品时，看到矩阵表格而非下拉选择器。

**功能特点：**
- 展示所有变体的缩略图、SKU、价格
- 数量输入框可批量填写
- 一次选择多个变体，点击 "Add Selected to Cart" 批量加入购物车

![变体矩阵表格](/images/docs/cclee-b2b/general/variation-matrix.webp)

---

## 批量下单

Verified 企业用户可以通过粘贴 SKU 和数量快速下单。

**路径：** 页面中添加短代码 `[cclee_b2b_bulk_order]`

**使用方法：**

1. 在批量下单页面，粘贴 SKU 和数量
2. 点击 **Look Up Products** 查找产品
3. 确认产品匹配结果
4. 点击 **Add All to Cart** 一次性加入购物车

![批量下单页](/images/docs/cclee-b2b/general/bulk-order-page.webp)

![批量下单填写](/images/docs/cclee-b2b/general/bulk-order-filled.webp)

<InfoBox variant="info" title="AI 辅助匹配">
配置 AI 后，未精确匹配的 SKU 会进行 LLM 模糊匹配，低置信度结果会提示确认。
</InfoBox>

---

## 常见问题

### 游客看不到价格，也无法注册怎么办？

确认 **Enable B2B** 和 **Hide Prices from Guests** 已开启。如果需要游客也能注册企业账号，检查 Registration 设置中是否允许游客提交。

### Pending 用户无法下单但想测试怎么办？

在 WP Admin → Users 中将测试账号审批为 Verified 状态，即可体验完整 B2B 功能。
