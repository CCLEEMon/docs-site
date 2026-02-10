# SEO/AEO 补充文件使用说明

## 文件清单

| 文件 | 放置位置 | 作用 |
|------|---------|------|
| `llm.txt` | `static/llm.txt` | 引导 AI 爬虫识别网站关键信息 |
| `plugin-json-ld.js` | `plugins/plugin-json-ld.js` | 全局 + 页面级 JSON-LD Schema |

## 安装步骤

### 1. 安装依赖

```bash
npm install gray-matter cheerio
```

### 2. 放置文件

```
docs-site/
  static/
    llm.txt           ← 新增
    robots.txt         ← 已有
  plugins/
    plugin-json-ld.js  ← 新建目录和文件
```

### 3. 注册插件

在 `docusaurus.config.ts` 中添加：

```ts
plugins: [
  './plugins/plugin-json-ld',
  // ...其他插件
],
```

### 4. 构建验证

```bash
npm run build
# 检查 build/index.html 是否包含 Organization + WebSite Schema
# 检查 build/docs/ai-analytics/index.html 是否包含 Article Schema
```

---

## Frontmatter 规范

### Article（文档/文章类）

```md
---
title: AI数据分析
description: 如何使用AI进行电商数据分析
schema: Article
date: 2026-02-10
---
```

### HowTo（教程/步骤类）

```md
---
title: 浏览器插件安装指南
description: 如何安装和配置CCLHUB浏览器插件
schema: HowTo
steps:
  - name: 下载插件
    text: 访问Chrome应用商店搜索CCLHUB并点击安装
  - name: 登录账号
    text: 点击插件图标，使用CCLHUB账号登录
  - name: 开始使用
    text: 打开任意电商平台页面，插件自动激活
---
```

### FAQPage（常见问题类）

```md
---
title: 常见问题
description: CCLHUB常见问题解答
schema: FAQPage
faqs:
  - q: CCLHUB支持哪些电商平台？
    a: 目前支持淘宝、京东、拼多多等主流电商平台。
  - q: 如何开始使用？
    a: 注册账号后，安装浏览器插件即可开始使用。
---
```

### 不需要页面级 Schema 的文档

不写 `schema` 字段即可，只会有全局的 Organization + WebSite Schema。

```md
---
title: 关于我们
description: 了解CCLHUB
---
```

---

## robots.txt 补充

在已有的 robots.txt 末尾加一行：

```
# AI Crawlers
# llm.txt: https://www.aigent.ren/llm.txt
```
