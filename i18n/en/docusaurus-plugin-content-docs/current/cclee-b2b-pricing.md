---
title: Pricing
description: Complete guide to CCLEE B2B Pricing settings — Global discount rate, tier pricing, product-level pricing
project: cclee-b2b
schema: HowTo
steps:
  - name: Configure Global Discount Rate
    text: Set default discount percentage for Verified and Pending enterprise users in Pricing settings
  - name: Set Product-Level Fixed Prices
    text: Set fixed wholesale prices for different user groups in the product edit B2B Pricing tab
  - name: Configure Tier Pricing
    text: Add quantity tiers in product edit page. Different quantity ranges apply different unit prices
  - name: Display Tier Pricing Table
    text: Enable Show Tier Pricing Table to display quantity breaks and prices on product page
rag: true
rag_tags: ["CCLEE B2B", "B2B Pricing", "Tier Pricing", "Wholesale Price", "Volume Discount"]
---

# CCLEE B2B — Pricing Settings

Admin path: **CCLEE B2B → Pricing**

![Pricing Settings Overview](/images/docs/cclee-b2b/pricing/settings-overview.webp)

---

## Global Discount Rate

Set a default wholesale discount percentage for all products.

### Configuration Steps

1. Go to **CCLEE B2B → Pricing**
2. Set **Verified Enterprise Discount (%)** — Discount for Verified enterprise users
3. Set **Pending Enterprise Discount (%)** — Discount for Pending enterprise users
4. Save settings

<InfoBox variant="info" title="Discount Priority">
Product-level fixed price > Product-level tier price > Global discount rate
If a product has fixed price or tier price set, it overrides the global discount.
</InfoBox>

---

## Product-Level Fixed Prices

Set exclusive B2B prices for individual products.

### Configuration Steps

1. Go to **WP Admin → Products → Edit**
2. Switch to the **B2B Pricing** tab
3. Fill in **Verified Enterprise Price** — Price for Verified users
4. Fill in **Pending Enterprise Price** — Price for Pending users
5. Update product

![Product B2B Pricing Tab](/images/docs/cclee-b2b/pricing/product-b2b-pricing-tab.webp)

---

## Tier Pricing (Volume Discount)

Provide tiered pricing based on purchase quantity to encourage bulk purchasing.

### Configuration Steps

1. In the product edit **B2B Pricing** tab
2. Add quantity tiers, for example:

| Quantity Range | Unit Price |
|---------------|------------|
| 1-9 | $89.99 |
| 10-49 | $79.99 |
| 50-99 | $69.99 |
| 100+ | $59.99 |

3. Save

### Frontend Display

With **Show Tier Pricing Table** enabled, the product page displays a tier pricing table.

![Tier Pricing Table on Frontend](/images/docs/cclee-b2b/pricing/tier-pricing-table-frontend.webp)

**Effect:**
- Verified users see a tier pricing table on the product page
- When cart quantity reaches a tier threshold, the tier unit price is automatically applied
- Cart and checkout pages display the actual tier price applied

---

## Internal Product ID (Inventory Tab)

You can also set the internal product ID in the product Inventory tab for B2B procurement reference.

![Product Inventory Tab Internal ID](/images/docs/cclee-b2b/pricing/product-inventory-source-id.webp)

---

## FAQ

### Global discount not applying?

1. Check if the product has a product-level fixed price set (overrides global discount)
2. Confirm user belongs to the correct user group (Verified or Pending)
3. Check if the Pricing module is enabled in General settings

### Tier pricing not automatically applying?

1. Confirm the product has tier pricing data set
2. Confirm current user is a Verified enterprise user
3. Cart quantity must reach the minimum tier threshold

### Pending users can't see price changes?

Pending user discounts are set via global discount rate or product-level Pending Enterprise Price. Tier pricing also applies to Pending users.
