---
title: Configure Tailwind CSS to Precisely Match data-theme Dark Mode
description: Use Tailwind darkMode selector mode to precisely match data-theme="dark", avoiding conflicts with other data-theme values
date: 2026-03-01
tags: [Tailwind CSS, Docusaurus, Dark Mode]
schema: Article
---

## TL;DR

Docusaurus uses the `data-theme` attribute to control themes. Tailwind's default `attribute` mode matches any `data-theme` value. Use `selector` mode to precisely match `data-theme="dark"`.

## Problem

Docusaurus sets the `data-theme` attribute on the `<html>` tag:

```html
<html data-theme="dark">
```

Tailwind default `attribute` configuration:

```js
// tailwind.config.js
darkMode: ['attribute', 'data-theme']
```

With this configuration, `data-theme="light"` also triggers `dark:` variants because the attribute exists.

## Root Cause

Tailwind's `attribute` mode only checks if the attribute exists, not its value:

- `<html data-theme="dark">` → triggers dark variant ✓
- `<html data-theme="light">` → also triggers dark variant ❌
- `<html data-theme="xxx">` → also triggers dark variant ❌

This causes dark styles to remain active when switching to light theme.

## Solution

Use `selector` mode to precisely match the attribute value:

```js
// tailwind.config.js
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  // ...
}
```

The CSS selector `[data-theme="dark"]` only matches when the attribute value equals `dark`:

- `<html data-theme="dark">` → triggers dark variant ✓
- `<html data-theme="light">` → doesn't trigger ✓

## FAQ

### Q: What are the different Tailwind darkMode modes?

A: Three modes: `media` (follows system preference), `class` (controlled via .dark class), `selector` (custom CSS selector). For Docusaurus, `selector` mode is recommended.

### Q: Why not use class mode?

A: Docusaurus uses `data-theme` attribute instead of class to control themes. Using class would require modifying Docusaurus source or adding extra scripts. `selector` mode is simpler and more direct.
