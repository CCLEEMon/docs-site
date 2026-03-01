---
title: Fixing Docusaurus Logo Size Issue After Rspack Build
description: After Rspack build, Navbar Logo displays at original image size. Fixed by explicitly overriding CSS styles.
date: 2026-02-28
tags: [Docusaurus, Rspack, CSS, Bug Fix]
schema: Article
---

## TL;DR

After switching Docusaurus to Rspack build, the Navbar Logo may display at its original image size, covering the page. Add explicit CSS overrides for `.navbar__logo` in `custom.css` to fix this.

## Symptoms

After Rspack build, the website navigation bar logo displays at original image size, causing:
- Logo too large, overlapping other navbar elements
- Broken page layout
- Only occurs after production build (`npm run build`), dev mode works fine

## Root Cause

Docusaurus uses Webpack by default, whose image processing pipeline automatically constrains image dimensions. After switching to Rspack:
- Rspack's image processing mechanism differs from Webpack
- Default logo size constraints may not work
- Original image dimensions are applied directly to DOM

## Solution

Add explicit style overrides in `src/css/custom.css`:

```css
/* Navbar Logo size constraint - explicit override needed after Rspack build */
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

Rebuild:

```bash
npm run build
```

## FAQ

### Q: Why does dev mode work fine but production build has issues?

A: Dev mode and production mode use different build optimization strategies. Rspack handles static assets differently in production builds, causing size constraints to fail.

### Q: Why use `!important`?

A: Docusaurus default styles have high specificity. `!important` ensures custom styles take effect. You can also increase selector specificity to avoid it.
