---
title: 修复 Docusaurus 引入 Tailwind 后标题样式丢失
description: Tailwind Preflight 重置了 Docusaurus markdown 标题样式，通过 CSS 选择器手动恢复即可解决。
date: 2026-03-01
tags: [Docusaurus, TailwindCSS, CSS, Bug修复]
schema: Article
---

## TL;DR

Docusaurus 项目引入 Tailwind CSS 后，markdown 文档中的标题（h1-h6）会失去默认样式。原因是 Tailwind Preflight 重置了所有标题的 font-size 和 font-weight。在 `custom.css` 中使用 `.markdown` 选择器手动恢复即可。

## 问题现象

引入 Tailwind CSS 后，Docusaurus 站点的 markdown 文档出现样式异常：

- 所有标题变成相同大小，失去层级区分
- 标题字重变轻，不再醒目
- 仅影响 markdown 内容区，导航栏等组件正常

```css
/* Tailwind Preflight 默认重置 */
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
```

## 根因

Tailwind CSS 的 Preflight（基于 modern-normalize）会重置所有标题元素的默认样式，使 `font-size` 和 `font-weight` 继承自父元素。

Docusaurus 的 markdown 内容渲染在 `.markdown` 容器内，标题样式依赖浏览器默认值。Preflight 重置后，这些默认值失效。

## 解决方案

在 `src/css/custom.css` 中添加以下样式：

```css
/* ========== 覆盖 Tailwind Preflight 标题重置 ========== */
.markdown h1 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
}

.markdown h2 {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
}

.markdown h3 {
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.4;
}

.markdown h4 {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
}

.markdown h5 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
}

.markdown h6 {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
}

/* 标题颜色继承主题 */
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  color: var(--ifm-heading-color, inherit);
}
```

重启开发服务器即可生效：

```bash
npm run start
```

## FAQ

### Q: 为什么用 `.markdown` 选择器而不是直接重置 h1-h6？

A: `.markdown` 是 Docusaurus 内容区的特定容器，只影响文档内容，不影响其他组件（如导航、侧边栏）。直接重置 h1-h6 可能影响全局样式。

### Q: 可以用 Tailwind 的 @layer 包装这些样式吗？

A: 可以，但没必要。Docusaurus 的样式加载顺序固定，放在 `custom.css` 末尾即可保证优先级。用 `@layer` 反而可能降低优先级。

### Q: 博客页面的标题也需要修复吗？

A: 博客文章页面使用 `article header h1/h2` 选择器，如需统一样式可额外添加：

```css
article header h1 {
  font-size: 2.25rem;
  font-weight: 700;
}
```
