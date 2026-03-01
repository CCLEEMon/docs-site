---
title: 修复 Docusaurus Rspack 构建后 Logo 尺寸异常
description: Rspack 构建后 Navbar Logo 显示原始尺寸，通过 CSS 显式覆盖解决。
date: 2026-02-28
tags: [Docusaurus, Rspack, CSS, Bug修复]
schema: Article
---

## TL;DR

Docusaurus 切换 Rspack 构建后，Navbar Logo 可能显示原始图片尺寸覆盖页面。在 `custom.css` 中显式覆盖 `.navbar__logo` 样式即可解决。

## 问题现象

Rspack 构建后，网站导航栏的 Logo 以原始图片尺寸显示，导致：
- Logo 过大，遮挡导航栏其他元素
- 页面布局错乱
- 仅在生产构建（`npm run build`）后出现，开发模式正常

## 根因

Docusaurus 默认使用 Webpack，其图片处理 pipeline 会自动约束图片尺寸。切换到 Rspack 后：
- Rspack 的图片处理机制与 Webpack 不同
- 默认的 Logo 尺寸约束可能失效
- 原始图片尺寸直接应用到 DOM

## 解决方案

在 `src/css/custom.css` 中添加显式样式覆盖：

```css
/* Navbar Logo 尺寸限制 - Rspack 构建后需显式覆盖 */
.navbar__logo {
  height: 2rem !important;
  width: auto !important;
}
.navbar__logo img {
  height: 100% !important;
  width: auto !important;
  max-height: 2rem !important;
}
```

重新构建即可：

```bash
npm run build
```

## FAQ

### Q: 为什么开发模式正常，构建后才出现问题？

A: 开发模式和生产模式使用不同的构建优化策略。Rspack 在生产构建时对静态资源的处理方式不同，导致尺寸约束失效。

### Q: 为什么要用 `!important`？

A: Docusaurus 的默认样式优先级较高，需要 `!important` 确保自定义样式生效。也可以通过增加选择器特异性来避免。
