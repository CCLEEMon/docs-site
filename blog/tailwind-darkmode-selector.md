---
title: 配置 Tailwind CSS 精确匹配 data-theme 深色模式
description: Tailwind darkMode 使用 selector 模式精确匹配 data-theme="dark"，避免与其他 data-theme 值冲突
date: 2026-03-01
tags: [Tailwind CSS, Docusaurus, 深色模式]
schema: Article
---

## TL;DR

Docusaurus 使用 `data-theme` 属性控制主题，Tailwind 默认的 `attribute` 模式会匹配任意 `data-theme` 值。改用 `selector` 模式可精确匹配 `data-theme="dark"`。

## 问题现象

Docusaurus 在 `<html>` 标签上设置 `data-theme` 属性：

```html
<html data-theme="dark">
```

Tailwind 默认 `attribute` 配置：

```js
// tailwind.config.js
darkMode: ['attribute', 'data-theme']
```

这种配置下，`data-theme="light"` 也会触发 `dark:` 变体，因为只要属性存在就会匹配。

## 根因

Tailwind 的 `attribute` 模式只检查属性是否存在，不检查属性值：

- `<html data-theme="dark">` → 触发 dark 变体 ✓
- `<html data-theme="light">` → 也触发 dark 变体 ❌
- `<html data-theme="xxx">` → 也触发 dark 变体 ❌

这导致切换到亮色主题时，深色样式仍然生效。

## 解决方案

使用 `selector` 模式精确匹配属性值：

```js
// tailwind.config.js
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  // ...
}
```

CSS 选择器 `[data-theme="dark"]` 只匹配属性值完全等于 `dark` 的情况：

- `<html data-theme="dark">` → 触发 dark 变体 ✓
- `<html data-theme="light">` → 不触发 ✓

## FAQ

### Q: Tailwind darkMode 有哪几种模式？

A: 三种模式：`media`（跟随系统偏好）、`class`（通过 .dark 类控制）、`selector`（自定义 CSS 选择器）。Docusaurus 场景推荐 `selector` 模式。

### Q: 为什么不用 class 模式？

A: Docusaurus 使用 `data-theme` 属性而非 class 控制主题，改用 class 需要修改 Docusaurus 源码或额外脚本，`selector` 模式更简单直接。
