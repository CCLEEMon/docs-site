---
title: CCLEE Docusaurus Theme — 开源文档主题
description: 基于 Docusaurus 3.x 的高级文档主题，紫色主题 + 深色模式 + Tailwind 排版增强，开箱即用的生产级文档站点模板
project: cclee-docusaurus-theme
schema: Article
date: 2026-04-29
rag: true
rag_tags: ["Docusaurus", "开源", "文档主题"]
---

# CCLEE Docusaurus Theme

<FeatureCard title="开箱即用">
基于 Docusaurus 3.x，集成了紫色主题、深色模式、Tailwind CSS 排版增强。Clone 下来，稍作配置，一个生产级的文档站点就跑起来了。
</FeatureCard>

## 特色功能

### 紫色主题 + 深色模式

主题使用紫色作为品牌色，通过 CSS 变量系统管理颜色：

- **浅色模式**：紫色 #4C1D95 作为主色
- **深色模式**：浅紫色 #8B5CF6 作为主色，对比度 ≥4.5:1（WCAG AA 标准）
- 一键切换，样式自动适配

### Tailwind CSS 集成

Docusaurus 原生不支持 Tailwind，CCLEE Theme 通过以下方式集成：

```bash
# 安装依赖
npm install tailwindcss postcss autoprefixer @tailwindcss/typography
```

```css
/* src/css/custom.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

集成后，你可以：

- 使用所有 Tailwind Utility 类
- 自定义 `tailwind.config.js` 扩展主题
- 利用 `@tailwindcss/typography` 优化文章排版

### 增强的文档排版

| 特性 | 说明 |
|------|------|
| 标题下划线 | H1 底部渐变横线，H2 左侧紫色竖条 |
| 引用块动效 | 悬浮时向右偏移 + 紫色阴影 |
| 代码块圆角 | 悬浮时上浮 + 阴影增强 |
| 表格悬停 | 行高亮 + 轻微放大 |

### 自定义组件

主题提供开箱即用的 MDX 组件，无需手动导入：

<InfoBox variant="info" title="使用提示">
这些组件在 MDXComponents.tsx 中全局注册，在任何 .md/.mdx 文件中直接使用即可。
</InfoBox>

**FeatureCard** - 功能卡片

```mdx
<FeatureCard title="功能名称" icon={<Icon />}>
卡片内容描述
</FeatureCard>
```

**InfoBox** - 信息提示框

```mdx
<InfoBox variant="info|warning|success" title="标题">
提示内容
</InfoBox>
```

**ComparisonTable** - 对比表格

```mdx
<ComparisonTable
  headers={["功能", "免费版", "专业版"]}
  rows={[
    ["文档数量", "无限", "无限"],
    ["自定义域名", "不支持", "支持"],
  ]}
/>
```

**StepBox** - 步骤容器

```mdx
<StepBox title="步骤标题">
步骤内容
</StepBox>
```

### SEO 优化

#### 自动生成 Schema

插件 `plugin-json-ld.js` 自动扫描文档，生成结构化数据：

| Frontmatter schema | 生成的 Schema |
|--------------------|----------------|
| `schema: Article` | Article |
| `schema: HowTo` | HowTo + Step |
| `schema: FAQPage` | FAQPage |

#### 多语言 SEO

- 自动生成 `hreflang` 标签
- 中英文站点互指（aigent.ren ↔ aidevhub.ai）
- 自动生成 XML Sitemap

### 国际化支持

主题内置双语言路由方案：

```bash
# 中文站
npm run start          # → www.aigent.ren:3004

# 英文站
SITE=ai npm run start  # → aidevhub.ai:3004
```

翻译文件位于 `i18n/` 目录，使用 Docusaurus 原生 i18n 系统。

## 快速开始

### 方式一：Fork 项目

```bash
# 1. Fork https://github.com/cclee-hub/docs-site

# 2. 克隆你的 Fork
git clone https://github.com/你的用户名/docs-site
cd docs-site

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run start
```

### 方式二：集成到现有项目

```bash
# 1. 复制必要文件到你的 Docusaurus 项目
cp -r src/css/docs-site/src/css/
cp -r src/theme/MDXComponents.tsx 你的项目/src/theme/

# 2. 安装 Tailwind
npm install tailwindcss postcss autoprefixer @tailwindcss/typography

# 3. 修改 docusaurus.config.ts 启用 Tailwind
```

### 配置主题颜色

在 `src/css/custom.css` 的 `:root` 和 `[data-theme='dark']` 中修改：

```css
:root {
  --ifm-color-primary: #4C1D95;  /* 浅色模式主色 */
  --ifm-color-primary-light: #6D28D9;
}

[data-theme='dark'] {
  --ifm-color-primary: #8B5CF6;  /* 深色模式主色 */
  --ifm-color-primary-light: #A78BFA;
}
```

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Docusaurus | 3.9+ | 文档框架 |
| React | 18.3+ | UI 库 |
| Tailwind CSS | 3.4+ | 样式工具 |
| TypeScript | 5.7+ | 类型支持 |
| Node.js | ≥20.0 | 运行环境 |

## 下一步

- [CCLEE Theme](/docs/cclee-theme) — WordPress FSE 区块主题
- [CCLEE Toolkit](/docs/cclee-toolkit) — WordPress AI 增强插件
- [GitHub 仓库](https://github.com/cclee-hub/docs-site) — 查看源码

<InfoBox variant="success" title="开源免费">
CCLEE Docusaurus Theme 基于 MIT 协议开源，可免费用于个人和商业项目。
</InfoBox>
