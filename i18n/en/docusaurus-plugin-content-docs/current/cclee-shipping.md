---
title: cclee-shipping Plugin User Guide
description: Configure WooCommerce international shipping in 5 minutes, supporting real-time FedEx and SF Express rates
project: cclee-shipping
schema: HowTo
steps:
  - name: Install Plugin
    text: Upload and activate cclee-shipping plugin
  - name: Create Shipping Zone
    text: Set up shipping zone in WooCommerce
  - name: Configure Carrier
    text: Add FedEx or SF Express, enter API credentials
  - name: Test Shipping Rates
    text: Verify shipping rates display on checkout page
rag: true
rag_tags: ["WooCommerce", "Shipping", "FedEx", "SF Express", "International Shipping"]
---

# cclee-shipping Plugin User Guide

cclee-shipping is a WooCommerce multi-carrier shipping plugin that supports real-time shipping rates from **FedEx** and **SF Express International**. Customers see actual shipping costs at checkout, no manual rate tables needed.

## Quick Start

### Prerequisites

- WordPress 6.4+
- WooCommerce 8.0+
- Existing FedEx or SF Express account

### Step 1: Install Plugin

1. Go to WordPress Admin → **Plugins** → **Add Plugin** → **Upload Plugin**
2. Select `cclee-shipping.zip` → Click **Install Now**
3. After installation, click **Activate**

<InfoBox variant="success" title="Installation Complete">
After activation, FedEx and SF Express shipping methods are automatically registered. No additional activation needed.
</InfoBox>

### Step 2: Create Shipping Zone

WooCommerce uses **shipping zones** to match customer addresses with shipping rules.

1. Go to **WooCommerce** → **Settings** → **Shipping** → **Shipping Zones**
2. Click **Add Shipping Zone**
3. Enter zone name (e.g., "International Shipping")
4. Select shipping destinations in **Zone Regions** (e.g., "All Countries" or specific countries)
5. Click **Add Shipping Method**

### Step 3: Add Carrier

Add FedEx or SF Express to your shipping zone:

1. In the **Select Shipping Method** dropdown, choose **FedEx (CCLEE Shipping)** or **SF Express International (CCLEE Shipping)**
2. Click **Add Shipping Method**
3. Click **Manage** on the right side of the method to enter settings

### Step 4: Configure FedEx Credentials

| Setting | Value | Where to Get |
|---------|-------|--------------|
| API Key | FedEx API Key | [FedEx Developer Portal](https://developer.fedex.com/) |
| Secret Key | FedEx Secret Key | Same as above |
| Account Number | FedEx Account | FedEx account settings |
| Environment | production | Select sandbox for testing |

<InfoBox variant="info" title="Getting FedEx Credentials">
1. Visit [FedEx Developer Portal](https://developer.fedex.com/)
2. Register developer account and create project
3. Get API Key and Secret Key from project details page
4. Account Number is in your FedEx account settings
</InfoBox>

### Step 5: Test Shipping Rates

1. Add product to cart on frontend
2. Go to checkout page
3. Enter shipping address
4. Check if FedEx rates are displayed

---

## Carrier Configuration Details

### FedEx Settings

| Setting | Description | Recommended Value |
|---------|-------------|-------------------|
| **API Key** | FedEx Developer API Key | — |
| **Secret Key** | FedEx Developer Secret Key | — |
| **Account Number** | FedEx Account | — |
| **Environment** | Environment | Select production for live |
| **Enabled Services** | Enabled service types | INTERNATIONAL_PRIORITY + INTERNATIONAL_ECONOMY for international |
| **Rate Modifier Type** | Rate markup method | Fixed amount or percentage |
| **Rate Modifier Value** | Markup value | 0 for original price, set profit margin |
| **Package Type** | Default package type | Your Packaging |
| **Shipping Payment Type** | Shipping payer | SENDER (merchant prepaid) |
| **Duties Payment Type** | Duties payer | SENDER or RECIPIENT |
| **Debug Mode** | Debug mode | Turn off for normal operation, enable for troubleshooting |

### SF Express International Settings

| Setting | Description | Where to Get |
|---------|-------------|--------------|
| **Customer Code** | Customer code | SF Express Open Platform |
| **Check Word** | Check code | SF Express Open Platform |
| **Environment** | Environment | Select production for live |
| **Enabled Services** | Enabled services | 36/37/38/44 for international recommended |

<InfoBox variant="warning" title="SF Express Credentials">
SF Express International API requires activation through your SF account manager. Get customer code and check word from [SF Express Open Platform](https://open.sf-express.com/).
</InfoBox>

#### SF Express International Service Types

| Code | Name | Use Case |
|------|------|----------|
| 36 | Cross-border Express | Fast cross-border delivery |
| 37 | International Economy | Economical international shipping |
| 38 | International Standard | Standard international shipping |
| 44 | International eCommerce | Cross-border eCommerce专用 |

---

## FedEx Sandbox Testing Tool

cclee-shipping includes a built-in **Label Test** admin tool for testing the FedEx Ship API in the sandbox environment to verify your API credentials and account configuration.

<InfoBox variant="info" title="When to Use">
After completing FedEx API registration, use this tool to verify the Ship API works in the sandbox. For the registration process, see the [FedEx Registration Guide](../../docs/fedex-registration.md).
</InfoBox>

### Open Label Test

1. Go to WordPress Admin → **WooCommerce** → **Label Test**
2. The page displays FedEx connection status at the top:
   - **Credentials**: Whether configured (requires adding a FedEx method in Shipping Zones with credentials)
   - **Environment**: Current environment (Sandbox or Production)
   - **Account Number**: FedEx account in use

<InfoBox variant="warning" title="Prerequisites">
Label Test uses credentials from the FedEx method in your shipping zones. If it shows "Not configured", complete the FedEx configuration in [Quick Start](#quick-start) first.
</InfoBox>

### Generate Test Label

1. Confirm connection status shows **Configured** and Environment is **Sandbox**
2. Click **Generate Test Label**
3. Wait for the FedEx Ship API response (timeout limit: 30 seconds)

On success, the following is displayed:
- **Tracking Number**: Test tracking number
- **Preview**: View raw ZPL text content
- **Download**: Download `.zpl` label file (for thermal printers)
- **Print**: Disabled — ZPL format requires a thermal printer

<InfoBox variant="success" title="Test Passed">
A successful Tracking Number confirms the FedEx Ship API is working. You can now apply for production access. See "How to switch to production environment?" in the FAQ below.
</InfoBox>

### Troubleshooting Test Failures

| Error Message | Cause | Solution |
|---------------|-------|----------|
| FedEx shipping method not configured | FedEx not added to shipping zones | Add FedEx shipping method and fill in credentials |
| FedEx OAuth authentication failed | API Key or Secret is incorrect | Check Client ID and Secret in Developer Portal |
| FedEx API error (4xx/5xx) | FedEx rejected the request | Check the specific error message, verify API permissions |
| Label data not found | No label data in response | Check WooCommerce → Status → Logs (source: cclee-shipping-label-test) |

---

## Shipping Payment Options

### Shipping Payer (Shipping Payment)

| Option | Meaning | Checkout Display |
|--------|---------|-------------------|
| **SENDER (Merchant Prepaid)** | Shipping deducted from merchant's FedEx account | Customer pays product + shipping |
| **RECIPIENT (Collect)** | Shipping paid by recipient | Shipping shows $0, collected at delivery |

<InfoBox variant="info" title="Which to Choose?">
- **Cross-border B2C eCommerce**: Choose SENDER, customer pays everything at checkout
- **Samples/Large customers**: Choose RECIPIENT, let them pay shipping
</InfoBox>

### Duties Payer (Duties & Taxes Payment)

Only applies to international shipments, determines who pays customs duties and taxes.

| Option | Meaning |
|--------|---------|
| **SENDER** | Merchant prepays duties, no extra charge for customer |
| **RECIPIENT** | Customer pays duties at delivery |

<InfoBox variant="warning" title="Duties Risk">
Choosing RECIPIENT may require customer to pay duties upon delivery, which could lead to refusal. Recommended to prepay or inform customer in advance.
</InfoBox>

---

## Rate Markup Settings

cclee-shipping supports markup on carrier base rates to cover packaging costs or add profit.

### Fixed Amount Markup

Add fixed amount per package (e.g., $5).

**Example**: FedEx quoted $20 → Display $25

### Percentage Markup

Add percentage markup on carrier quoted rate (e.g., 10%).

**Example**: FedEx quoted $20 → Display $22

---

## FAQ

### Shipping rates not showing?

<InfoBox variant="warning" title="Troubleshooting Steps">

1. **Check credentials**: Confirm API Key, Secret Key, Account Number are correct
2. **Check environment**: Select production for live environment
3. **Enable debug**: Turn on Debug Mode in settings, check WooCommerce → Status → Logs
4. **Check address**: Ensure shipping zone covers customer shipping address
5. **Check product weight**: Products must have weight set, otherwise shipping cannot be calculated

</InfoBox>

### How to set free shipping threshold?

cclee-shipping only handles shipping rate calculation. For free shipping, use WooCommerce free shipping method:

1. Add **Free Shipping** method to the same shipping zone
2. Set minimum order amount (e.g., $100)
3. Customers meeting the condition will see free shipping option automatically

### Domestic shipping supported?

- **FedEx**: Supports US domestic FedEx Ground
- **SF Express**: Currently only supports international (service types 36-38, 44)

For domestic SF Express shipping, please contact SF business to activate domestic API.

### Shipping rate differs from actual charge?

Shipping rates are based on:

- Product weight and dimensions (please fill in product settings)
- Package type (default: Your Packaging)
- Origin and destination addresses

If the difference is significant, please check if product weight is set accurately.

### How to switch to production environment?

1. Apply for Production Key in FedEx Developer Portal
2. Replace API Key, Secret Key, Account Number with production credentials
3. Change Environment to **production** in plugin settings
4. Save settings

---

## Support

- **GitHub**: [cclee-hub/cclee-shipping](https://github.com/cclee-hub/cclee-shipping)
- **Issue Reporting**: GitHub Issues

<a className="button button--primary button--lg" href="https://github.com/cclee-hub/cclee-shipping" target="_blank" rel="noopener noreferrer">
  Visit GitHub Repository
</a>
