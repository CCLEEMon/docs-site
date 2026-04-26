---
title: PDF Catalog
description: Complete guide to CCLEE B2B PDF Catalog — Download permissions, brand styling, product content, extra pages
project: cclee-b2b
schema: HowTo
steps:
  - name: Enable PDF Function
    text: Enable Enable PDF Catalog in PDF settings
  - name: Configure Download Permissions
    text: Set who can download PDF per user group (Verified, Pending, Retail, Guest)
  - name: Customize Brand Styling
    text: Set brand colors, cover title, cover image
  - name: Configure Product Content
    text: Select product info to display in PDF (description, QR code, tier pricing, inventory)
  - name: Add Extra Pages
    text: Add company introduction, terms, contact info as extra pages
rag: true
rag_tags: ["CCLEE B2B", "PDF Catalog", "Product Catalog", "Brand Customization", "Wholesale Documents"]
---

# CCLEE B2B — PDF Catalog

Admin path: **CCLEE B2B → PDF**

![PDF Settings Overview](/images/docs/cclee-b2b/pdf/settings-overview.webp)

---

## Enable PDF Function

1. Go to **CCLEE B2B → PDF**
2. Check **Enable PDF Catalog**
3. Save settings

After enabling, PDF download buttons appear on shop, product, and category pages.

---

## Download Permission Control

### User Group Permissions

| User Group | Can Download | Default |
|------------|-------------|---------|
| Verified Enterprise | ✅ | Allowed |
| Pending Enterprise | ⚠️ Optional | Optional |
| Retail Customer | ⚠️ Optional | Disallowed |
| Guest | ⚠️ Optional | Disallowed |

### Configuration Steps

1. In **Group Permissions** section
2. Set allow/disallow for each user group
3. Save

---

## Brand Styling

### Brand Colors

| Setting | Description |
|---------|-------------|
| Primary Color | Main color, used for headers, emphasis |
| Accent Color | Secondary color, used for borders, decoration |

### Cover Settings

| Setting | Description |
|---------|-------------|
| Cover Title | Cover headline |
| Cover Image | Cover image (optional) |

---

## Product Content Configuration

### Available Content

| Content | Description |
|---------|-------------|
| Product Description | Product description |
| QR Code | QR code linking to product page |
| Tier Pricing Table | Tier pricing table (if available) |
| Stock Status | Inventory status |

### Configuration Steps

1. In **Product Content** section, check content to display
2. Save

---

## Extra Pages

### Available Extra Pages

| Page Type | Purpose |
|-----------|---------|
| Company Introduction | Company profile |
| Terms & Conditions | Terms and conditions |
| Contact Information | Contact details |

Each extra page uses a rich text editor where you can add text, images, and links.

---

## Frontend Download Buttons

### Product Page PDF

Single product page shows "Download PDF" button to download that product's PDF.

![Product Page PDF Button](/images/docs/cclee-b2b/pdf/product-pdf-button.webp)

### Shop Page PDF

Shop and category pages show "Download Full Catalog (PDF)" or "Download Category Catalog (PDF)" button.

![Shop Page PDF Button](/images/docs/cclee-b2b/pdf/shop-pdf-button.webp)

---

## PDF Structure

Generated PDFs contain:

| Section | Description |
|---------|-------------|
| Cover | Brand colors, cover title, image |
| Table of Contents | PDF navigation |
| Product List | Products by category or full shop, with configured content |
| Extra Pages | Company intro, terms, contact (if configured) |
| Back Page | Closing message, copyright info |

---

## FAQ

### PDF download button not showing?

1. Confirm **Enable PDF Catalog** is checked
2. Confirm current user group has download permission
3. Clear browser cache and retry

### PDF content incomplete?

1. Check if products have descriptions and other info filled in
2. Confirm related content items are checked in PDF settings
3. Some content (like tier pricing) only displays if product has relevant configuration

### Can I customize PDF template?

Currently supports color, cover, and content configuration. Full template style customization requires custom development.

### PDF generation is slow?

Full shop catalogs with many products take longer to generate. Consider:
- Generate in batches (by category)
- Avoid peak hours
- Consider pre-generating static PDFs

### What languages are supported?

PDF content uses product data language directly. For multi-language PDFs, configure a multi-language plugin.
