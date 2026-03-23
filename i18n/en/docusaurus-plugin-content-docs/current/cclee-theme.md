---
title: CCLEE Theme
description: Lightweight WordPress FSE block theme - clean architecture, customizable design tokens, SEO-friendly
project: cclee-theme
schema: Article
date: 2026-03-23
rag: true
rag_tags: ["WordPress", "FSE Theme", "Block Theme", "Website Builder", "Open Source Theme", "Free Theme", "WooCommerce"]
---

import { RocketIcon, ZapIcon, CheckIcon, LightbulbIcon, GithubIcon, GlobeIcon, FileIcon } from '@site/src/components/Icons'
import StatusTag from '@site/src/components/StatusTag'

# <RocketIcon size={28} /> CCLEE Theme

A lightweight FSE block theme for developers. Clean architecture, customizable design tokens, SEO-friendly.

<div className="flex gap-4 my-6 justify-center flex-wrap">
  <a href="https://github.com/cclee-hub/cclee-theme"
     className="button button--primary button--lg"
     target="_blank">
    <GithubIcon size={16} />
    Download on GitHub
  </a>
  <a href="https://demo.aigent.ren"
     className="button button--secondary button--lg"
     target="_blank">
    <GlobeIcon size={16} />
    Live Demo
  </a>
</div>

---

## Basic Info

| Item | Details |
|------|---------|
| Requires WP | 6.4+ |
| Tested up to | 6.7 |
| Requires PHP | 8.0+ |
| License | GPLv2 or later |

---

## Key Features

### <ZapIcon size={20} /> Full Site Editing (FSE)

- theme.json design system - change once, update everywhere
- 20+ block patterns (hero, features, CTA, testimonials, pricing, etc.)
- 5 style variations (commerce, industrial, professional, nature, tech)
- Responsive layout with configurable breakpoints

### <CheckIcon size={20} /> WooCommerce Compatible

- CSS-only styling, zero template overrides
- Supports shop, product, cart, and checkout pages

### <LightbulbIcon size={20} /> Design Tokens

- Fully customizable colors, typography, spacing, and shadows
- Child theme friendly - customizations survive updates

---

## Template List

### Page Templates

| Template | Usage |
|----------|-------|
| `index` | Default archive |
| `single` | Single post |
| `page` | Standard page |
| `archive` | Archive list |
| `search` | Search results |
| `404` | Not found |
| `front-page` | Front page |
| `home` | Blog home |
| `page-no-sidebar` | No sidebar page |
| `page-landing` | Landing page |
| `author` | Author archive |
| `page-about-us` | About page |
| `page-contact` | Contact page |

### WooCommerce Templates

| Template | Usage |
|----------|-------|
| `archive-product` | Product list |
| `single-product` | Product detail |
| `cart` | Shopping cart |
| `checkout` | Checkout page |

### Template Parts

- `header` - Site header
- `footer` - Site footer
- `sidebar` - Sidebar

---

## Installation

### Manual Upload

1. Download the theme ZIP file
2. Go to WordPress Admin > Appearance > Themes > Add New > Upload Theme
3. Activate the theme

### WP-CLI

```bash
wp theme install /path/to/cclee-theme --activate
```

---

## FAQ

### Does this theme require any plugins?

<StatusTag type="info">No</StatusTag> CCLEE works out of the box. WooCommerce support is optional.

### Can I use this theme for commercial projects?

<StatusTag type="success">Yes</StatusTag> CCLEE is licensed under GPLv2 or later, free for commercial use.

### How do I customize colors and fonts?

Use the Site Editor (Appearance > Editor), or create a child theme with custom theme.json.

### Why does WooCommerce say "Products" instead of "Shop"?

CCLEE uses B2B-friendly terminology by default. "Products" is more appropriate for business-focused websites. This is a text display preference only - it doesn't modify WooCommerce functionality. To restore "Shop", remove the filter in a child theme.

---

## Changelog

### v1.1.1

- Add author archive template and post layout patterns
- Add WooCommerce cart/checkout templates

### v1.1.0

- Add 5 style variations
- Add landing page patterns
- Add WooCommerce progress steps and trust badges patterns

### v1.0.0

- Initial release

---

## Resources

| Resource | License |
|----------|---------|
| [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) | SIL Open Font License |
| [Inter](https://fonts.google.com/specimen/Inter) | SIL Open Font License |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | SIL Open Font License |

---

## Technical Tags

`full-site-editing` `block-themes` `one-column` `two-columns` `custom-colors` `custom-menu` `custom-logo` `featured-images` `sticky-post` `threaded-comments` `translation-ready`

---

<div className="text-center my-8">
  <a href="https://github.com/cclee-hub/cclee-theme"
     className="button button--primary button--lg"
     target="_blank">
    <GithubIcon size={18} />
    <span className="ml-2">Get Source on GitHub</span>
  </a>
</div>

:::tip

CCLEE Theme is fully open source under GPLv2 license. Star, Fork, and PRs are welcome!

:::
