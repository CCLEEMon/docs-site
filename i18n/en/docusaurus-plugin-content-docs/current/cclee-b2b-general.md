---
title: General Settings
description: Complete guide to CCLEE B2B General settings — Enable B2B, catalog visibility, payment gateways, variation matrix, bulk order
project: cclee-b2b
schema: HowTo
steps:
  - name: Enable B2B Functionality
    text: Toggle the Enable B2B switch in General settings to activate all B2B modules
  - name: Configure Catalog Visibility
    text: Set hide prices for guests, purchase restrictions for pending users
  - name: Configure Payment Gateways
    text: Set available payment methods per user group (Invoice, Pay Later, Purchase Order)
  - name: Use Variation Matrix
    text: Display variants as a table for batch add-to-cart
  - name: Use Bulk Order
    text: Quickly add multiple products to cart by pasting SKUs
rag: true
rag_tags: ["CCLEE B2B", "B2B Wholesale", "WooCommerce", "Catalog Visibility", "Bulk Order"]
---

import StatusTag from '@site/src/components/StatusTag'

# CCLEE B2B — General Settings

Admin path: **CCLEE B2B → General**

![General Settings Overview](/images/docs/cclee-b2b/general/settings-overview.webp)

---

## Enable B2B Functionality

**Path:** CCLEE B2B → General

1. Toggle the **Enable B2B** switch
2. Click **Save Changes**

<InfoBox variant="info" title="Note">
When B2B is disabled, all B2B modules are completely unloaded without affecting normal retail functionality.
</InfoBox>

---

## Feature Switches

Independently control each B2B module on/off:

| Module | Description |
|--------|-------------|
| Tier Pricing | Volume-based pricing |
| Catalog Visibility | Catalog access control |
| Bulk Order | Bulk ordering |
| Variation Matrix | Variant matrix table |

When a module is disabled, its frontend assets and hooks are completely unloaded.

---

## Catalog Visibility Control

### Hide Prices from Guests

When enabled, guest visitors cannot see product prices and see a login prompt instead.

**Effect:**
- Shop page: Price area shows "Login to view price"
- Product page: Shows "Login to view price" and "Login" button

![Guest Shop Hidden Prices](/images/docs/cclee-b2b/general/guest-shop-hidden-prices.webp)

### Block Purchase for Pending Users

When enabled, pending enterprise users cannot purchase directly. They see a "Request Quote" button directing them to the RFQ workflow.

![Pending Product Quote CTA](/images/docs/cclee-b2b/general/pending-product-quote-cta.webp)

### Guest Product Page Login CTA

Guest visitors to a product page see a login prompt instead of the add-to-cart form.

![Guest Product Login CTA](/images/docs/cclee-b2b/general/guest-product-login-cta.webp)

---

## Payment Gateway Permissions

Control available payment methods per user group:

| User Group | Available Gateways |
|------------|-------------------|
| Verified Enterprise | Invoice, Pay Later, Purchase Order |
| Pending Enterprise | Restricted payment methods |
| Retail | Standard retail payments |

Admins can configure allowed payment gateways for each group in settings.

---

## Variation Matrix

Verified enterprise users see a matrix table instead of variation dropdowns when viewing variable products.

**Features:**
- Display all variants with thumbnails, SKU, price
- Quantity input fields for batch entry
- Select multiple variants and click "Add Selected to Cart" to add all at once

![Variation Matrix Table](/images/docs/cclee-b2b/general/variation-matrix.webp)

---

## Bulk Order

Verified enterprise users can quickly order multiple products by pasting SKUs and quantities.

**Path:** Add shortcode `[cclee_b2b_bulk_order]` to a page

**How to use:**

1. On the bulk order page, paste SKUs and quantities
2. Click **Look Up Products** to find products
3. Confirm product matching results
4. Click **Add All to Cart** to add all to cart at once

![Bulk Order Page](/images/docs/cclee-b2b/general/bulk-order-page.webp)

![Bulk Order Filled](/images/docs/cclee-b2b/general/bulk-order-filled.webp)

<InfoBox variant="info" title="AI-Assisted Matching">
With AI configured, non-exact SKU matches will use LLM fuzzy matching. Low confidence results will prompt for confirmation.
</InfoBox>

---

## FAQ

### Guests can't see prices and can't register. What to do?

Confirm **Enable B2B** and **Hide Prices from Guests** are both enabled. If guests need to register for enterprise accounts, check if registration is allowed in Registration settings.

### Pending users can't place orders but I want to test. What to do?

In WP Admin → Users, approve the test account to Verified status to experience full B2B functionality.
