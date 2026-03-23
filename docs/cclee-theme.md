---
title: CCLEE Theme
description: 轻量级 WordPress FSE 区块主题 - 干净架构、可定制设计令牌、SEO 友好
project: cclee-theme
schema: Article
date: 2026-03-23
rag: true
rag_tags: ["WordPress", "FSE主题", "区块主题", "网站建设", "开源主题", "免费主题", "WooCommerce"]
---

import { RocketIcon, ZapIcon, CheckIcon, LightbulbIcon, GithubIcon, GlobeIcon, FileIcon } from '@site/src/components/Icons'
import StatusTag from '@site/src/components/StatusTag'

# <RocketIcon size={28} /> CCLEE Theme

轻量级 FSE 区块主题，为开发者打造。干净架构、可定制设计令牌、SEO 友好。

<div className="flex gap-4 my-6 justify-center flex-wrap">
  <a href="https://github.com/cclee-hub/cclee-theme"
     className="button button--primary button--lg"
     target="_blank">
    <GithubIcon size={16} />
    GitHub 下载
  </a>
  <a href="https://demo.aigent.ren"
     className="button button--secondary button--lg"
     target="_blank">
    <GlobeIcon size={16} />
    在线 Demo
  </a>
</div>

---

## 基本信息

| 项目 | 说明 |
|------|------|
| Requires WP | 6.4+ |
| Tested up to | 6.7 |
| Requires PHP | 8.0+ |
| License | GPLv2 or later |

---

## 核心特性

### <ZapIcon size={20} /> 全站编辑 (FSE)

- theme.json 设计系统，一处改全站变
- 20+ 区块模式（Hero、特性、CTA、证言、定价等）
- 5 种风格变体（商业、工业、专业、自然、科技）
- 响应式布局，可配置断点

### <CheckIcon size={20} /> WooCommerce 兼容

- CSS-only 样式，零模板覆盖
- 支持商店页、产品页、购物车、结账页

### <LightbulbIcon size={20} /> 设计令牌

- 颜色、字体、间距、阴影全面可定制
- 子主题友好，升级不丢失定制

---

## 模板清单

### 页面模板

| 模板 | 用途 |
|------|------|
| `index` | 默认归档 |
| `single` | 文章详情 |
| `page` | 普通页面 |
| `archive` | 归档列表 |
| `search` | 搜索结果 |
| `404` | 未找到页面 |
| `front-page` | 首页 |
| `home` | 博客首页 |
| `page-no-sidebar` | 无侧边栏页面 |
| `page-landing` | 落地页 |
| `author` | 作者归档 |
| `page-about-us` | 关于我们 |
| `page-contact` | 联系页面 |

### WooCommerce 模板

| 模板 | 用途 |
|------|------|
| `archive-product` | 产品列表 |
| `single-product` | 产品详情 |
| `cart` | 购物车 |
| `checkout` | 结账页 |

### 模板部件

- `header` - 页头
- `footer` - 页脚
- `sidebar` - 侧边栏

---

## 安装方式

### 手动上传

1. 下载主题 ZIP 文件
2. 进入 WordPress 后台 > 外观 > 主题 > 添加 > 上传主题
3. 启用主题

### WP-CLI

```bash
wp theme install /path/to/cclee-theme --activate
```

---

## 常见问题

### 需要安装插件吗？

<StatusTag type="info">不需要</StatusTag> CCLEE 开箱即用。WooCommerce 支持是可选的。

### 可以商用吗？

<StatusTag type="success">可以</StatusTag> CCLEE 采用 GPLv2 或更高版本协议，商用免费。

### 如何自定义颜色和字体？

使用站点编辑器（外观 > 编辑器），或创建子主题自定义 theme.json。

### 为什么 WooCommerce 显示"产品"而不是"商店"？

CCLEE 默认使用 B2B 友好的术语。"商店"标签替换为"产品"更适合面向企业的网站。这只是文本显示偏好，不修改 WooCommerce 功能。如需恢复，可在子主题中移除过滤器。

---

## 更新日志

### v1.1.1

- 新增作者归档模板和文章布局模式
- 新增 WooCommerce 购物车/结账页模板

### v1.1.0

- 新增 5 种风格变体
- 新增落地页模式
- 新增 WooCommerce 进度条和信任徽章模式

### v1.0.0

- 初始发布

---

## 资源致谢

| 资源 | 协议 |
|------|------|
| [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) | SIL Open Font License |
| [Inter](https://fonts.google.com/specimen/Inter) | SIL Open Font License |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | SIL Open Font License |

---

## 技术标签

`full-site-editing` `block-themes` `one-column` `two-columns` `custom-colors` `custom-menu` `custom-logo` `featured-images` `sticky-post` `threaded-comments` `translation-ready`

---

<div className="text-center my-8">
  <a href="https://github.com/cclee-hub/cclee-theme"
     className="button button--primary button--lg"
     target="_blank">
    <GithubIcon size={18} />
    <span className="ml-2">GitHub 获取源码</span>
  </a>
</div>

:::tip 提示

CCLEE Theme 完全免费开源，基于 GPLv2 协议。欢迎 Star、Fork、提交 PR！

:::
