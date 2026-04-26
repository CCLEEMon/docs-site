---
title: Product Page
description: Complete guide to CCLEE B2B Product Page settings — Product badges, internal ID, recommended accessories
project: cclee-b2b
schema: HowTo
steps:
  - name: Configure Product Badges
    text: Set badge text in Product Page settings. Non-Verified users will see badges on product pages
  - name: Configure Internal Product ID
    text: Fill in the Internal Product ID in the product edit Inventory tab. Displayed on frontend for procurement reference
  - name: Configure Recommended Accessories
    text: Add Cross-sell products. Recommended accessories horizontal card row displays automatically on product page
rag: true
rag_tags: ["CCLEE B2B", "Product Badges", "Internal ID", "Recommended Accessories", "Cross-sell"]
---

# CCLEE B2B — Product Page Settings

Admin path: **CCLEE B2B → Product Page**

![Product Page Settings Overview](/images/docs/cclee-b2b/product/settings-overview.webp)

---

## Product Badges

Add custom labels to products to highlight selling points for non-enterprise users.

**Use cases:**
- Factory Direct / OEM & ODM
- Lead time notice
- Minimum order quantity
- Special certifications

### Configuration Steps

1. Go to **CCLEE B2B → Product Page**
2. Enter badges in the **Badges** text area, one per line
3. Save settings

**Example:**
```
Factory Direct
OEM & ODM Available
7-Day Lead Time
```

### Frontend Display

Non-Verified visitors see badge tags displayed below the product title on the product page.

![Product Badges on Frontend](/images/docs/cclee-b2b/product/product-badges-frontend.webp)

<InfoBox variant="info" title="Badge Display Rules">
Badges are only shown to Pending and Retail users. Verified enterprise users see wholesale pricing by default and don't need badge guidance.
</InfoBox>

---

## Internal Product ID (Source ID)

Set an internal product number in the backend for B2B buyers' reference.

### Configuration Steps

1. Go to **WP Admin → Products → Edit**
2. Switch to the **Inventory** tab
3. Fill in the **Internal Product ID** field
4. Update product

![Product Inventory Tab](/images/docs/cclee-b2b/product/source-id-frontend.webp)

### Frontend Display

The internal ID is displayed in the product meta area, making it easy for procurement to reference the correct product when ordering by phone or email.

---

## Recommended Accessories

Based on Cross-sell associations, display related accessory recommendations at the bottom of the product page.

### Configuration Steps

1. Go to **WP Admin → Products → Edit**
2. In the **Linked Products** panel, find **Cross-sells**
3. Search and add related products
4. Update product

### Frontend Display

Below the add-to-cart button, a "Recommended Accessories" horizontal card row appears.

![Recommended Accessories on Frontend](/images/docs/cclee-b2b/product/accessories-section.webp)

**Card content:**
- Accessory product image
- Accessory name
- Accessory price (if any)
- Click to navigate to accessory product page

---

## FAQ

### Badges not displaying?

1. Confirm Badges text area has content in Product Page settings
2. Confirm current user is not a Verified enterprise user (Verified users don't see badges)
3. Clear browser cache or test in incognito mode

### Recommended accessories not showing?

1. Confirm the product has Cross-sell associations added
2. Confirm current user is a Verified enterprise user
3. Check if the product has valid Cross-sell products

### Where does the internal ID display?

It displays in the product meta information area near the add-to-cart button.
