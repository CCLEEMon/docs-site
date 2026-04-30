---
title: WooCommerce
description: Complete guide to CCLEE Toolkit WooCommerce tab — Product Schema structured data output
project: cclee-toolkit
schema: HowTo
steps:
  - name: Enable Product Schema
    text: Check the enable switch
  - name: Verify Structured Data
    text: Check product page source to confirm Schema output
rag: true
rag_tags: ["WordPress", "CCLEE Toolkit", "WooCommerce", "Structured Data", "SEO"]
---

import StatusTag from '@site/src/components/StatusTag'

# CCLEE Toolkit — WooCommerce

Admin path: **CCLEE Toolkit → WooCommerce**

![WooCommerce settings overview](/images/docs/cclee-toolkit/woo-settings-overview.webp)

---

## Product Schema

Check **Enable WooCommerce Product Schema** to enable (enabled by default).

When enabled, all WooCommerce product pages automatically output Product structured data to `<head>`.

### Output Content

| Schema Field | Description |
|-------------|-------------|
| name | Product title |
| image | Featured image |
| description | Product description |
| sku | SKU |
| gtin | GTIN (if available) |
| mpn | MPN (if available) |
| brand | Brand (if available) |
| offers | Price, availability, merchant info |
| aggregateRating | Rating and review count (if available) |
| BreadcrumbList | Path: Home > Category > Product |

**Variable products:** Outputs `AggregateOffer`, including price range (lowest~highest) and offer count.

![Product page Schema example](/images/docs/cclee-toolkit/woo-product-page.webp)

### Verification Method

### Verify Product Schema

1. Visit any WooCommerce product page
2. Right-click → **View Page Source**, search for `<script type="application/ld+json">`
3. Confirm JSON contains `"@type":"Product"`

---

## Relationship with SEO Tab

Product Schema output depends on **SEO Enhancer Master Switch** (SEO Tab).

When SEO master switch is off, Product Schema will not output even if WooCommerce tab is checked.

---

## FAQ

### Product page not outputting Schema?

1. Confirm **SEO Enhancer** (SEO Tab) is enabled
2. Confirm **WooCommerce Product Schema** is checked
3. If using caching plugin, clear cache and retry

### Structured data error in Google Rich Results Test?

Check if product has SKU, GTIN and other fields filled in. Fields not filled will not appear in Schema, which is normal behavior.

### Ratings and reviews not showing?

Ensure product has WooCommerce built-in review feature enabled, and Average Rating > 0. Aggregate rating field only outputs when there are reviews.