# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Docusaurus 3.x 静态站点，CCLHUB 产品文档与官网，域名 www.aigent.ren

## 开发命令

```bash
npm run start              # 开发服务器（端口 3004）
npm run build              # 构建
npm run build:with-api     # 带环境变量构建：RAG_API_URL=xxx npm run build:with-api
npm run clear              # 清理 Docusaurus 缓存
npm run serve              # 本地预览构建结果
```

**环境要求**: Node >= 20.0

## 架构

### 技术栈
- 框架: Docusaurus 3.x
- 语言: TypeScript / MDX
- 样式: TailwindCSS
- 图标: Lucide React

### 核心组件

| 组件 | 位置 | 说明 |
|------|------|------|
| FloatingChat | `src/components/FloatingChat.jsx` | 智能客服浮窗，调用 rag-service API |
| RAG API 配置 | `src/rag-api-config.js` | API 地址配置，生产环境 https://rag.aigent.ren/query |
| JSON-LD 插件 | `plugins/plugin-json-ld.js` | SEO 结构化数据，支持 Article/HowTo/FAQPage |

### 内容目录

| 目录 | 路由 | 说明 |
|------|------|------|
| `docs/` | `/docs/` | 公开产品文档 |
| `blog/` | `/blog/` | 技术博客 |
| `docs-private/` | 不发布 | 私有开发文档 |
| `i18n/zh/` `i18n/en/` | - | 国际化 |

### FloatingChat 场景化配置

根据 URL 路径自动切换欢迎语和快捷问题：
- `/browser-plugin` → 浏览器插件场景
- `/ai-analytics` → 数据分析场景
- 其他 → 默认场景

## 部署

构建输出到 `build/` 目录，由 Nginx 静态托管。

## 文档 Frontmatter

```yaml
---
title: 标题
description: 描述
schema: Article  # 可选：Article / HowTo / FAQPage
rag: true        # 可选：标记为 RAG 同步
---
```

## RAG 同步

文档同步到 rag-service 的标记：frontmatter 添加 `rag: true`，通过 Analytics 后台操作同步。
