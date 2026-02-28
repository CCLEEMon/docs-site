---
title: 主题开发规范
date: 2026-02-10
tags: [Docusaurus, TailwindCSS, 样式]
---

# 主题开发规范

<!-- truncate -->

## 技术架构

本项目混合使用 **Docusaurus CSS 变量** 和 **TailwindCSS**，两者通过 `data-theme` 属性协同工作。

### 核心配置

**tailwind.config.js** - 必须配置 darkMode 以兼容 Docusaurus：
```js
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],  // 关键配置
  // ...
}
```

**Docusaurus 主题切换机制**：
- `data-theme='light'` → 浅色模式
- `data-theme='dark'` → 深色模式

---

## 样式规范

### 1. 深色模式样式

**✅ 正确写法** - 使用 Tailwind `dark:` 前缀：
```tsx
<div className="text-gray-900 dark:text-gray-100">
  文字颜色自动响应主题切换
</div>
```

**❌ 错误写法** - CSS 覆盖 Tailwind 类：
```css
/* 禁止：优先级冲突且难以维护 */
[data-theme='dark'] .text-gray-900 {
  color: #F9FAFB !important;
}
```

**❌ 错误写法** - 硬编码颜色：
```tsx
<div style={{ color: '#111827' }}>  /* 无法响应主题切换 */
```

### 2. 图标组件规范

**统一使用 `className` prop**（兼容 Tailwind）：
```tsx
// ✅ 正确
<ZapIcon size={24} className="text-white dark:text-purple-300" />

// ❌ 错误（不推荐）
<ZapIcon size={24} color="#fff" />  /* 无法响应深色模式 */
```

**图标组件定义规范**：
```tsx
// src/components/Icons.jsx
export const ZapIcon = ({ size = 24, className }) => (
  <Zap size={size} className={className} />
)
```

### 3. 颜色对比度标准

遵循 [WCAG 2.1 AA 级](https://www.w3.org/WAI/WCAG21/quickref/)：

| 元素类型 | 最低对比度 | 示例 |
|---------|-----------|------|
| 正文文字 | 4.5:1 | `text-gray-700` on white |
| 大标题（≥18pt） | 3:1 | `text-gray-900` on white |
| 图标/图形 | 3:1 | - |

**验证工具**：[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 4. CSS 优先级规则

```
Docusaurus 变量 < Tailwind 类 < 内联样式 < !important（禁止）
```

**优先级示例**：
```tsx
// 优先级从低到高
<div                     // Docusaurus 变量
  className="text-gray-900"  // Tailwind 类
  style={{ color: 'red' }}   // 内联样式（不推荐）
>
```

### 5. Docusaurus CSS 变量

**在 custom.css 中定义**：
```css
:root {
  --ifm-color-primary: #4C1D95;
  --ifm-background-color: #FAFBFC;
}

[data-theme='dark'] {
  --ifm-color-primary: #8B5CF6;
  --ifm-background-color: #0F0F1A;
}
```

**使用场景**：全局颜色、布局间距
```tsx
<div style={{ color: 'var(--ifm-color-primary)' }}>
```

---

## 常见错误案例

### 错误 1：CSS 覆盖 Tailwind 类

```css
/* ❌ 错误 */
[data-theme='dark'] .bg-white {
  background-color: #181824 !important;
}
```

**问题**：所有带 `bg-white` 的元素在深色模式下被强制覆盖，导致浅色模式的页面元素也显示深色。

**正确做法**：
```tsx
<div className="bg-white dark:bg-gray-900">
```

### 错误 2：图标组件未传递 className

```tsx
// ❌ 错误定义
export const ZapIcon = ({ size = 24 }) => <Zap size={size} />

// 导致 Tailwind 类名失效
<ZapIcon size={24} className="text-white" />  // className 被忽略
```

**正确做法**：
```tsx
export const ZapIcon = ({ size = 24, className }) => (
  <Zap size={size} className={className} />
)
```

### 错误 3：混用 color 和 className

```tsx
// ❌ 优先级混乱
<PluginIcon size={32} color="#fff" className="text-white" />

// ✅ 统一使用 className
<PluginIcon size={32} className="text-white" />
```

---

## 组件开发检查清单

开发新组件时，确保：

- [ ] 深色模式样式正确（使用 `dark:` 前缀）
- [ ] 颜色对比度 ≥ 4.5:1
- [ ] 图标组件支持 `className` prop
- [ ] 无 CSS 覆盖 Tailwind 类
- [ ] 浅色/深色模式均手动测试通过

---

## 参考资源

- [Docusaurus Styling](https://docusaurus.io/docs/styling-layout)
- [TailwindCSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [WCAG 2.1 对比度标准](https://www.w3.org/WAI/WCAG21/quickref/)
