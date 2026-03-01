---
title: Fix Docusaurus Heading Styles Lost After Adding Tailwind CSS
description: Tailwind Preflight resets Docusaurus markdown heading styles. Restore them with CSS selectors in custom.css.
date: 2026-03-01
tags: [Docusaurus, TailwindCSS, CSS, Bug Fix]
schema: Article
---

## TL;DR

After adding Tailwind CSS to a Docusaurus project, markdown heading styles (h1-h6) lose their default formatting. This happens because Tailwind Preflight resets font-size and font-weight for all headings. Fix it by adding explicit styles in `custom.css` with the `.markdown` selector.

## Problem

After integrating Tailwind CSS, Docusaurus markdown documents show styling issues:

- All headings appear the same size, losing visual hierarchy
- Heading font-weight becomes lighter, less prominent
- Only affects markdown content area; navbar and other components remain normal

```css
/* Tailwind Preflight default reset */
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
```

## Root Cause

Tailwind CSS Preflight (based on modern-normalize) resets all heading element styles, making `font-size` and `font-weight` inherit from parent elements.

Docusaurus renders markdown content inside a `.markdown` container, relying on browser defaults for heading styles. After Preflight resets these, the defaults are lost.

## Solution

Add the following styles to `src/css/custom.css`:

```css
/* ========== Override Tailwind Preflight Heading Reset ========== */
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

/* Heading color inherits from theme */
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6 {
  color: var(--ifm-heading-color, inherit);
}
```

Restart the dev server to apply:

```bash
npm run start
```

## FAQ

### Q: Why use `.markdown` selector instead of directly resetting h1-h6?

A: `.markdown` is the specific container for Docusaurus content, so styles only affect document content, not other components like navbar or sidebar. Directly resetting h1-h6 could affect global styles.

### Q: Can I wrap these styles in Tailwind's @layer?

A: You can, but it's unnecessary. Docusaurus loads styles in a fixed order, so placing them at the end of `custom.css` ensures priority. Using `@layer` might actually lower specificity.

### Q: Do blog page headings also need fixing?

A: Blog posts use `article header h1/h2` selectors. Add these if needed:

```css
article header h1 {
  font-size: 2.25rem;
  font-weight: 700;
}
```
