---
title: PDF 目录
description: CCLEE B2B 插件 PDF 目录生成完整指南 — 下载权限、品牌样式、产品内容、附加页
project: cclee-b2b
schema: HowTo
steps:
  - name: 开启 PDF 功能
    text: 在 PDF 设置中启用 Enable PDF Catalog
  - name: 配置下载权限
    text: 按用户组设置谁可以下载 PDF（Verified、Pending、Retail、Guest）
  - name: 自定义品牌样式
    text: 设置品牌颜色、封面标题、封面图片
  - name: 配置产品内容
    text: 选择 PDF 中显示的产品信息（描述、二维码、阶梯价、库存）
  - name: 添加附加页
    text: 添加公司简介、条款、联系方式等附加页
rag: true
rag_tags: ["CCLEE B2B", "PDF 目录", "产品目录", "品牌定制", "批发文档"]
---

# CCLEE B2B — PDF 目录

后台路径：**CCLEE B2B → PDF**

![PDF 设置页概览](/images/docs/cclee-b2b/pdf/settings-overview.webp)

---

## 开启 PDF 功能

1. 进入 **CCLEE B2B → PDF**
2. 勾选 **Enable PDF Catalog**
3. 保存设置

开启后，店铺页、产品页、分类页会显示 PDF 下载按钮。

---

## 下载权限控制

### 用户组权限

| 用户组 | 可下载 | 默认设置 |
|--------|--------|----------|
| Verified Enterprise | ✅ | 允许 |
| Pending Enterprise | ⚠️ 可选 | 可选 |
| Retail Customer | ⚠️ 可选 | 禁止 |
| Guest | ⚠️ 可选 | 禁止 |

### 配置步骤

1. 在 **Group Permissions** 部分
2. 为每个用户组设置是否允许下载
3. 保存

---

## 品牌样式定制

### 品牌颜色

| 设置项 | 说明 |
|--------|------|
| Primary Color | 主色调，用于标题、强调 |
| Accent Color | 辅助色，用于边框、装饰 |

### 封面设置

| 设置项 | 说明 |
|--------|------|
| Cover Title | 封面大标题 |
| Cover Image | 封面图片（可选） |

---

## 产品内容配置

### 可选内容

| 内容项 | 说明 |
|--------|------|
| Product Description | 产品描述 |
| QR Code | 二维码，扫描跳转产品页 |
| Tier Pricing Table | 阶梯价格表（如有） |
| Stock Status | 库存状态 |

### 配置步骤

1. 在 **Product Content** 部分勾选需要显示的内容
2. 保存

---

## 附加页

### 可添加的附加页

| 页面类型 | 用途 |
|----------|------|
| Company Introduction | 公司简介 |
| Terms & Conditions | 条款与条件 |
| Contact Information | 联系方式 |

每个附加页使用富文本编辑器，可添加文字、图片、链接。

---

## 前台下载按钮

### 产品页 PDF

单个产品页显示 "Download PDF" 按钮，下载该产品 PDF。

![产品页 PDF 下载按钮](/images/docs/cclee-b2b/pdf/product-pdf-button.webp)

### 店铺页 PDF

店铺页和分类页显示 "Download Full Catalog (PDF)" 或 "Download Category Catalog (PDF)" 按钮。

![店铺页 PDF 下载按钮](/images/docs/cclee-b2b/pdf/shop-pdf-button.webp)

---

## PDF 结构

生成的 PDF 包含以下部分：

| 部分 | 说明 |
|------|------|
| 封面 | 品牌色、封面标题、图片 |
| 目录 | PDF 内容导航 |
| 产品列表 | 按分类或全店产品，含配置的内容项 |
| 附加页 | 公司简介、条款、联系方式（如有） |
| 尾页 | 结束语、版权信息 |

---

## 常见问题

### PDF 下载按钮不显示？

1. 确认 **Enable PDF Catalog** 已勾选
2. 确认当前用户组有下载权限
3. 清除浏览器缓存后重试

### PDF 内容不完整？

1. 检查产品是否填写了描述等信息
2. 确认 PDF 设置中相应内容项已勾选
3. 有些内容（如阶梯价）需要产品有相关配置才显示

### 可以自定义 PDF 模板吗？

目前支持颜色、封面、内容项配置。如需完全自定义模板样式，需要开发定制。

### PDF 生成很慢怎么办？

全店目录产品较多时生成较慢，建议：
- 分批生成（按分类）
- 避开高峰时段
- 考虑预生成静态 PDF

### 支持哪些语言？

PDF 内容直接使用产品数据语言。如需多语言 PDF，需要配置多语言插件。
