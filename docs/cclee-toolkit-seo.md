---
title: SEO 设置
description: CCLEE Toolkit SEO 选项卡完整指南 — 站点验证、IndexNow、Google Indexing API、手动提交、Open Graph、JSON-LD、llms.txt
project: cclee-toolkit
schema: HowTo
steps:
  - name: 开启 SEO 总开关
    text: 确认 SEO Enhancer 模块已启用
  - name: 配置站点验证
    text: 填写 Google/Bing/Yandex 验证代码
  - name: 配置 Indexing
    text: 开启 IndexNow 和/或 Google Indexing API
  - name: 验证输出
    text: 查看页面源代码确认标签输出
rag: true
rag_tags: ["WordPress", "CCLEE Toolkit", "SEO", "IndexNow", "Google Indexing", "Open Graph"]
---

import StatusTag from '@site/src/components/StatusTag'

# CCLEE Toolkit — SEO

后台路径：**CCLEE Toolkit → SEO**

![SEO 设置页概览](/images/docs/cclee-toolkit/seo-settings-overview.webp)

<InfoBox variant="success" title="默认开启">
SEO Enhancer 模块默认开启，激活插件后自动生效。
</InfoBox>

---

## SEO 总开关

**开启 SEO 增强器模块** 控制整个 SEO Tab 全部功能。

关闭后不输出任何 meta 标签、验证代码、Indexing 请求。

![SEO 总开关](/images/docs/cclee-toolkit/seo-master-switch.webp)

---

## 站点验证

在对应搜索引擎 webmaster 工具验证域名后，粘贴验证代码。

| 搜索引擎 | 输入内容 | 输出标签 |
|----------|---------|---------|
| Google Search Console | 验证码 | `<meta name="google-site-verification">` |
| Bing Webmaster Tools | 验证码 | `<meta name="msvalidate.01">` |
| Yandex Webmaster | 验证码 | `<meta name="yandex-verification">` |

![站点验证设置](/images/docs/cclee-toolkit/seo-site-verification.webp)

---

## Indexing — 自动通知搜索引擎

### 配置 IndexNow

开启后，发布或更新文章时自动向 IndexNow 兼容的搜索引擎（Bing、Yandex 等）发送通知。

### 配置 IndexNow

勾选 **开启 IndexNow**，点击 **生成 Key** 生成 API Key（Key 文件自动托管于 `/{key}.txt`），保存设置。

发布/更新文章时自动通知 Bing、Yandex 等 IndexNow 兼容搜索引擎。

![IndexNow 设置](/images/docs/cclee-toolkit/seo-indexing.webp)

### Google Indexing API

直接推送 URL 到 Google 索引，适合需要快速更新 Google 收录的站点。

1. 在 Google Cloud Console 创建 Service Account，启用 Indexing API
2. 在 Google Search Console 授予该 Service Account "Site owner" 权限
3. 勾选 **开启 Google Indexing API**，粘贴 Service Account JSON
4. 保存设置

<InfoBox variant="warning" title="权限要求">
Service Account 必须在 Google Search Console 中被授予 Site owner 权限，否则提交会失败。
</InfoBox>

**自动行为：**
- 发布/更新文章 → 提交 `URL_UPDATED`
- 删除文章 → 提交 `URL_DELETED`
- Access Token 通过 JWT 签名获取，缓存 50 分钟（无第三方库依赖）

### 手动提交 — 手动提交单条 URL

无需任何配置，SEO 模块开启时始终可用。

1. 输入完整 URL
2. 勾选发送通道：IndexNow 和/或 Google
3. 点击 **Submit**

![手动提交](/images/docs/cclee-toolkit/seo-manual-submit.webp)

### 提交日志

IndexNow 和 Google Indexing API 的提交记录显示在 SEO Tab 底部表格：

| 列 | 说明 |
|----|------|
| 来源 | indexnow / google |
| URL | 提交的页面地址 |
| 状态 | Success / Fail |
| HTTP Code | 响应码 |
| 时间 | 提交时间 |

---

## Open Graph + JSON-LD

### Open Graph 标签

勾选后所有前台页面输出：

- `og:title`、`og:description`、`og:url`、`og:type`、`og:site_name`
- `og:image`（有特色图时）
- Twitter Card：`twitter:card`、`twitter:title`、`twitter:description`

![Open Graph 设置](/images/docs/cclee-toolkit/seo-opengraph.webp)

### JSON-LD Schema

勾选后输出结构化数据：

- 单篇文章/页面：`Article` Schema
- 首页：`WebPage` Schema

---

## llms.txt — LLM 爬虫文本

开启后生成纯文本站点摘要，供 AI 助手和 LLM 搜索引擎使用。

**访问地址：** `/llms.txt`

**内容包含：**
- 站点名称和描述
- Core Pages（主要页面列表）
- 产品列表（若有 WooCommerce）
- Sitemap 链接
- 自定义追加内容（可选）

<StepBox title="1. 勾选启用 llms.txt">

在 SEO Tab 勾选 **启用 llms.txt — auto-generate a text file for LLM crawlers**。

</StepBox>

<StepBox title="2. 追加自定义内容（可选）">

在 **Custom extra content** 字段追加内容（如版权声明），追加在自动生成内容之后。

</StepBox>

<StepBox title="3. 保存并验证">

保存后访问 `/llms.txt` 检查输出内容。

</StepBox>

![llms.txt 设置](/images/docs/cclee-toolkit/seo-llms.webp)

---

## 验证 SEO 输出

<StepBox title="1. 查看页面源代码">

访问任意前台页面，右键 → **查看页面源代码**。

</StepBox>

<StepBox title="2. 搜索标签">

搜索对应标签验证输出：

```bash
# OG 标签
og:title

# Twitter Card
twitter:card

# JSON-LD
application/ld+json

# 站点验证
google-site-verification
```

</StepBox>

---

## 常见问题

### SEO 标签没有输出？

确认 **SEO Enhancer** 选项已开启（默认开启）。若使用缓存插件，清除缓存后重试。

### 配置 IndexNow key 文件 404？

Key 文件由 WordPress 虚拟托管，确保固定链接已保存（设置 → 固定链接 → 保存）。

### Google Indexing API 提交失败？

检查三点：Service Account JSON 是否有效、是否在 Search Console 授予 Site owner 权限、Indexing API 是否已在 Cloud Console 启用。

### llms.txt 访问 404？

确认 **llms.txt** 选项已开启，并保存一次固定链接设置。
