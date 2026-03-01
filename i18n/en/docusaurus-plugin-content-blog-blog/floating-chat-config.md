---
title: Smart Consultation Widget Configuration
date: 2026-02-22
tags: [Widget, Configuration, UX]
---

# Smart Consultation Widget Configuration

> Temporary documentation - Recording widget optimization configuration

<!-- truncate -->

## Optimization Goals

Based on user behavior and UED analysis, optimize the click-to-open experience for the smart consultation widget.

## Contextual Welcome Messages

| Page Path | Detection Condition | Welcome Message |
|-----------|---------------------|-----------------|
| Homepage | `/` or `/docs` | "Hello! I'm the CCLHUB Smart Assistant. I can help you with: Product features, Usage guides, FAQ" |
| E-commerce Toolkit | `browser-plugin` | "Hello! About the browser plugin, I can help you with: Installation, Feature usage, Data export, Platform support" |
| AI Operations | `ai-analytics` | "Hello! About the analytics platform, I can help you with: Account setup, Feature operations, Report interpretation, API integration" |

## Quick Questions Configuration

| Page | Quick Question 1 | Quick Question 2 |
|------|------------------|------------------|
| Homepage | "How to get started?" | "Which platforms are supported?" |
| E-commerce Toolkit | "How to install the plugin?" | "Plugin not showing data?" |
| AI Operations | "How to connect data?" | "How to view analytics reports?" |

## Collection Mapping

| Page | Collection | Description |
|------|------------|-------------|
| Homepage | `product_help` | General product help |
| E-commerce Toolkit | `product_help` | Browser plugin help |
| AI Operations | `product_help` | Analytics platform help |

## Mobile Adaptation

```jsx
// Responsive size configuration
const getChatWindowStyles = () => {
  const isMobile = window.innerWidth < 640
  return {
    width: isMobile ? 'calc(100vw - 32px)' : '380px',
    height: isMobile ? '60vh' : '520px'
  }
}
```

## First Visit Guidance

- First visit: Widget button shows breathing animation + red dot
- Auto-dismiss after 3-5 seconds
- Use localStorage to track first visit status

## Naming Conventions

- **Widget Button**: "Smart Consultation"
- **Widget Title**: "Smart Consultation"
- **Product Name**: "AI Support" (not "Smart Support")

## Implementation Priority

1. ✅ Product context detection + contextual welcome messages
2. ⏳ Quick question presets
3. ⏳ First visit guidance
4. ⏳ Mobile adaptation
