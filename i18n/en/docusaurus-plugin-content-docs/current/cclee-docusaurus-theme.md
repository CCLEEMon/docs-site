---
title: CCLEE Docusaurus Theme — Open Source Documentation Theme
description: Advanced documentation theme based on Docusaurus 3.x, purple theme + dark mode + Tailwind typography enhancements, production-ready documentation site template out of the box
project: cclee-docusaurus-theme
schema: Article
date: 2026-04-29
rag: true
rag_tags: ["Docusaurus", "Open Source", "Documentation Theme"]
---

# CCLEE Docusaurus Theme

<FeatureCard title="Out of the Box">
Based on Docusaurus 3.x with integrated purple theme, dark mode, and Tailwind CSS typography enhancements. Clone it, configure slightly, and a production-grade documentation site is up and running.
</FeatureCard>

## Features

### Purple Theme + Dark Mode

The theme uses purple as the brand color, managed through CSS variables:

- **Light mode**: Purple #4C1D95 as primary color
- **Dark mode**: Light purple #8B5CF6 as primary color, contrast ratio ≥4.5:1 (WCAG AA standard)
- One-click toggle, styles adapt automatically

### Tailwind CSS Integration

Docusaurus doesn't support Tailwind natively. CCLEE Theme integrates it this way:

```bash
# Install dependencies
npm install tailwindcss postcss autoprefixer @tailwindcss/typography
```

```css
/* src/css/custom.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

After integration, you can:

- Use all Tailwind utility classes
- Customize theme by modifying `tailwind.config.js`
- Use `@tailwindcss/typography` for better article typography

### Enhanced Documentation Typography

| Feature | Description |
|---------|-------------|
| Title underline | H1 has gradient underline, H2 has purple left border |
| Blockquote animation | Slide right on hover + purple shadow |
| Code block styling | Rounded corners, lift + enhanced shadow on hover |
| Table hover | Row highlight + slight scale |

### Custom Components

The theme provides MDX components out of the box, no manual import needed:

<InfoBox variant="info" title="Usage Tip">
These components are globally registered in MDXComponents.tsx, use them directly in any .md/.mdx file.
</InfoBox>

**FeatureCard** - Feature Card

```mdx
<FeatureCard title="Feature Name" icon={<Icon />}>
Card content description
</FeatureCard>
```

**InfoBox** - Info Box

```mdx
<InfoBox variant="info|warning|success" title="Title">
Box content
</InfoBox>
```

**ComparisonTable** - Comparison Table

```mdx
<ComparisonTable
  headers={["Feature", "Free", "Pro"]}
  rows={[
    ["Docs", "Unlimited", "Unlimited"],
    ["Custom Domain", "Not supported", "Supported"],
  ]}
/>
```

**StepBox** - Step Container

```mdx
<StepBox title="Step Title">
Step content
</StepBox>
```

### SEO Optimization

#### Automatic Schema Generation

Plugin `plugin-json-ld.js` automatically scans documents and generates structured data:

| Frontmatter schema | Generated Schema |
|--------------------|-----------------|
| `schema: Article` | Article |
| `schema: HowTo` | HowTo + Step |
| `schema: FAQPage` | FAQPage |

#### Multi-language SEO

- Automatically generate `hreflang` tags
- Cross-reference between Chinese and English sites (aigent.ren ↔ aidevhub.ai)
- Auto-generate XML Sitemap

### Internationalization Support

Theme has built-in dual-language routing:

```bash
# Chinese site
npm run start          # → www.aigent.ren:3004

# English site
SITE=ai npm run start  # → aidevhub.ai:3004
```

Translation files are located in `i18n/` directory, using Docusaurus native i18n system.

## Quick Start

### Option 1: Fork the Project

```bash
# 1. Fork https://github.com/cclee-hub/docs-site

# 2. Clone your fork
git clone https://github.com/your-username/docs-site
cd docs-site

# 3. Install dependencies
npm install

# 4. Start dev server
npm run start
```

### Option 2: Integrate into Existing Project

```bash
# 1. Copy necessary files to your Docusaurus project
cp -r src/css/docs-site/src/css/
cp -r src/theme/MDXComponents.tsx your-project/src/theme/

# 2. Install Tailwind
npm install tailwindcss postcss autoprefixer @tailwindcss/typography

# 3. Modify docusaurus.config.ts to enable Tailwind
```

### Configure Theme Colors

Modify in `src/css/custom.css` under `:root` and `[data-theme='dark']`:

```css
:root {
  --ifm-color-primary: #4C1D95;  /* Light mode primary */
  --ifm-color-primary-light: #6D28D9;
}

[data-theme='dark'] {
  --ifm-color-primary: #8B5CF6;  /* Dark mode primary */
  --ifm-color-primary-light: #A78BFA;
}
```

## Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| Docusaurus | 3.9+ | Documentation framework |
| React | 18.3+ | UI library |
| Tailwind CSS | 3.4+ | Styling utility |
| TypeScript | 5.7+ | Type support |
| Node.js | ≥20.0 | Runtime |

## Next Steps

- [CCLEE Theme](/docs/cclee-theme) — WordPress FSE block theme
- [CCLEE Toolkit](/docs/cclee-toolkit) — WordPress AI enhancement plugin
- [GitHub Repository](https://github.com/cclee-hub/docs-site) — View source code

<InfoBox variant="success" title="Open Source & Free">
CCLEE Docusaurus Theme is open source under MIT license, free for personal and commercial projects.
</InfoBox>
