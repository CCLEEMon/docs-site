---
title: Theme Development Guidelines
date: 2026-02-10
tags: [Docusaurus, TailwindCSS, Styling]
---

# Theme Development Guidelines

<!-- truncate -->

## Technical Architecture

This project uses a hybrid of **Docusaurus CSS variables** and **TailwindCSS**, working together through the `data-theme` attribute.

### Core Configuration

**tailwind.config.js** - Must configure darkMode for Docusaurus compatibility:
```js
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],  // Key configuration
  // ...
}
```

**Docusaurus Theme Switching Mechanism**:
- `data-theme='light'` → Light mode
- `data-theme='dark'` → Dark mode

---

## Styling Guidelines

### 1. Dark Mode Styles

**✅ Correct** - Use Tailwind `dark:` prefix:
```tsx
<div className="text-gray-900 dark:text-gray-100">
  Text color automatically responds to theme changes
</div>
```

**❌ Wrong** - CSS overriding Tailwind classes:
```css
/* Prohibited: Priority conflicts and hard to maintain */
[data-theme='dark'] .text-gray-900 {
  color: #F9FAFB !important;
}
```

**❌ Wrong** - Hardcoded colors:
```tsx
<div style={{ color: '#111827' }}>  /* Cannot respond to theme changes */
```

### 2. Icon Component Guidelines

**Use `className` prop consistently** (Tailwind compatible):
```tsx
// ✅ Correct
<ZapIcon size={24} className="text-white dark:text-purple-300" />

// ❌ Wrong (not recommended)
<ZapIcon size={24} color="#fff" />  /* Cannot respond to dark mode */
```

**Icon component definition standard**:
```tsx
// src/components/Icons.jsx
export const ZapIcon = ({ size = 24, className }) => (
  <Zap size={size} className={className} />
)
```

### 3. Color Contrast Standards

Follow [WCAG 2.1 Level AA](https://www.w3.org/WAI/WCAG21/quickref/):

| Element Type | Minimum Contrast | Example |
|--------------|------------------|---------|
| Body text | 4.5:1 | `text-gray-700` on white |
| Large headings (≥18pt) | 3:1 | `text-gray-900` on white |
| Icons/graphics | 3:1 | - |

**Validation Tool**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 4. CSS Priority Rules

```
Docusaurus variables < Tailwind classes < Inline styles < !important (prohibited)
```

**Priority example**:
```tsx
// Priority from low to high
<div                     // Docusaurus variables
  className="text-gray-900"  // Tailwind class
  style={{ color: 'red' }}   // Inline style (not recommended)
>
```

### 5. Docusaurus CSS Variables

**Define in custom.css**:
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

**Use cases**: Global colors, layout spacing
```tsx
<div style={{ color: 'var(--ifm-color-primary)' }}>
```

---

## Common Mistakes

### Mistake 1: CSS Overriding Tailwind Classes

```css
/* ❌ Wrong */
[data-theme='dark'] .bg-white {
  background-color: #181824 !important;
}
```

**Problem**: All elements with `bg-white` are forcefully overridden in dark mode, causing light mode page elements to also appear dark.

**Correct approach**:
```tsx
<div className="bg-white dark:bg-gray-900">
```

### Mistake 2: Icon Component Not Passing className

```tsx
// ❌ Wrong definition
export const ZapIcon = ({ size = 24 }) => <Zap size={size} />

// Causes Tailwind class names to be ignored
<ZapIcon size={24} className="text-white" />  // className is ignored
```

**Correct approach**:
```tsx
export const ZapIcon = ({ size = 24, className }) => (
  <Zap size={size} className={className} />
)
```

### Mistake 3: Mixing color and className

```tsx
// ❌ Priority confusion
<PluginIcon size={32} color="#fff" className="text-white" />

// ✅ Use className consistently
<PluginIcon size={32} className="text-white" />
```

---

## Component Development Checklist

When developing new components, ensure:

- [ ] Dark mode styles are correct (using `dark:` prefix)
- [ ] Color contrast ≥ 4.5:1
- [ ] Icon components support `className` prop
- [ ] No CSS overriding Tailwind classes
- [ ] Both light/dark modes tested manually

---

## Reference Resources

- [Docusaurus Styling](https://docusaurus.io/docs/styling-layout)
- [TailwindCSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [WCAG 2.1 Contrast Standards](https://www.w3.org/WAI/WCAG21/quickref/)
