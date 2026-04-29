---
title: FedEx Registration Guide
description: Complete FedEx business account registration and API developer registration process
project: cclee-shipping
schema: HowTo
steps:
  - name: Register Business Account
    text: Register a business account on FedEx website and complete qualification review
  - name: Register Developer Account
    text: Register a developer account on FedEx Developer Portal
  - name: Apply for API Permissions
    text: Create an app and apply for Ship, Rate and other API permissions
  - name: Get Credentials
    text: Obtain Client ID, Client Secret, and Account Number
rag: true
rag_tags: ["FedEx", "WooCommerce", "Shipping", "API Registration"]
---

# FedEx Registration Guide

Before using the cclee-shipping plugin, you need to register a FedEx business account and obtain API credentials. The process consists of two parts: business account registration and API developer registration.

## Part 1: Business Account Registration

### Step 1: Register Business Account

1. Visit [FedEx Official Website](https://www.fedex.com/)
2. Click "Register"
3. Select "Business Account"
4. Fill in company information:
   - Company Name
   - Tax ID (EIN)
   - Company Address
   - Contact Information
5. Submit and wait for FedEx review (usually 1-3 business days)
6. After approval, you will receive a **9-digit user ID** for login

### Step 2: Complete Service Safety Agreement

1. Fill in the "FedEx Service and Safety Agreement", ensuring:
   - FedEx service account number
   - Payment bank account information
2. Sign and apply company seal

### Step 3: Submit Qualification Documents

You will receive an email requesting the following documents:

1. **FedEx Service and Safety Agreement** (with company seal) - 2 copies
2. **Latest business license copy** (with company seal) - 1 copy

After preparation, contact FedEx via the phone number in the email to arrange pickup.

<InfoBox variant="warning" title="Special Approval Required for Certain Business Types">
The following business types must contact FedEx sales for special approval before submitting documents:
- Logistics companies
- Sole proprietorships
- Individual businesses
- Companies with non-local business licenses
</InfoBox>

:::tip
If you don't have a business license, you can provide copies of registration certificates or permits with equivalent validity (with company seal).
:::

### Step 4: Account Activation Confirmation

Your account is ready to use once you receive the activation email. Sample email:

> Your FedEx customer account: ****5281 is now active as a credit account.

---

## Part 2: API Developer Registration

### Step 5: Register FedEx Developer Account

1. Visit [FedEx Developer Portal](https://developer.fedex.com/)
2. Click "Sign Up"
3. Fill in business email and company information
4. Verify email and complete login

After login, the left menu contains the following modules:

| Menu | Description |
|------|------------|
| **Manage Organization** | Organization management, manage company account info |
| **My Projects** | My projects, manage development projects |
| **Getting Started** | Getting started guide for beginners |
| **API Catalog** | API catalog, browse available API services |
| **API Recipes** | API recipes, sample code and best practices |
| **Guides** | Development guides, technical documentation |
| **Announcements** | Announcements, platform update notifications |
| **API Validation** | API validation, test API calls |
| **API Status** | API status, check service status |
| **Settings** | Settings, account configuration |
| **Support/FAQs** | Help and support, FAQs |

![API Menu](/images/docs/cclee-shipping/fedex-api-menu.webp)

Go to **Manage Organization** and fill in:

- **Company Name**
- **Region**
- **Country**
- **Address**
- **User ID** (9-digit number received in email)

![Manage Organization](/images/docs/cclee-shipping/fedex-manage-organization.webp)

### Step 6: Create App and Apply for API Permissions

1. Click **My Projects** → **Create App**
2. On the **Step 1 - Select API(s) for your project** page, select **Ship, Rate & other APIs**

<InfoBox variant="warning" title="API Selection Note">
- Basic Integrated Visibility only includes tracking (Track), **cannot be used for rate inquiry or shipping**
- WooCommerce integration must select **Ship, Rate & other APIs**
</InfoBox>

![Select APIs](/images/docs/cclee-shipping/fedex-select-apis.webp)

After selecting **Ship, Rate & other APIs**, you can access 14 APIs. Here are recommendations for WooCommerce integration:

| Category | API | Description |
|---------|-----|-------------|
| **Required** | **Ship API** | Create shipments, generate labels |
| **Required** | **Rates and Transit Times API** | Display shipping rates and delivery time at checkout |
| **Recommended** | **Address Validation API** | Validate recipient address, reduce delivery errors |
| **Recommended** | **Service Availability API** | Check available service types for destination |
| **Not Needed** | Consolidation API | For consolidation shipping |
| **Not Needed** | Freight LTL API | For heavy cargo/freight |
| **Not Needed** | Global Trade API | For compliance documents, generally not needed |

3. Submit application and wait for FedEx approval (usually 1-2 business days)

### Step 7: Get API Credentials

![My Projects](/images/docs/cclee-shipping/fedex-my-projects.webp)

After approval, get credentials from **My Projects** project details:

| Credential | Description | Location |
|------------|-------------|----------|
| **Client ID** | API Key | Project details page |
| **Client Secret** | Secret Key | Project details page |
| **Account Number** | FedEx Account | 9-digit number received in email |

<InfoBox variant="success" title="Credentials Obtained">
Once you have Client ID, Client Secret, and Account Number, you can configure FedEx shipping in WooCommerce.
</InfoBox>

:::info
Use `apis-sandbox.fedex.com` for testing environment, `apis.fedex.com` for production environment.
:::

---

## Next Steps

After obtaining credentials, go to **WooCommerce → Settings → Shipping** and configure FedEx using the credentials obtained from FedEx Developer Portal. See [cclee-shipping User Guide](../cclee-shipping) for detailed plugin configuration.

