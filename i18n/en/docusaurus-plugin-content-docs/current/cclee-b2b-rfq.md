---
title: Quote System (RFQ)
description: Complete guide to CCLEE B2B Quote System — RFQ form, quote approval, negotiation workflow, order conversion
project: cclee-b2b
schema: HowTo
steps:
  - name: Configure RFQ Form
    text: Customize form title, fields, negotiation rules in RFQ settings
  - name: Add RFQ Form Page
    text: Add shortcode [cclee_rfq_form] to a page
  - name: Manage Quote Requests
    text: Approve quotes in WP Admin, fill in prices, send to customers
  - name: Customer Responds to Quotes
    text: Customer views quotes on My Quotes page, accepts, rejects, or counter-offers
  - name: Convert to Order
    text: After accepting quote, convert to WooCommerce order
rag: true
rag_tags: ["CCLEE B2B", "RFQ", "Quote System", "Quote Request", "Wholesale Negotiation"]
---

# CCLEE B2B — Quote System (RFQ)

Admin path: **CCLEE B2B → RFQ**

![RFQ Settings Overview](/images/docs/cclee-b2b/rfq/settings-overview.webp)

---

## Form Configuration

### Basic Settings

1. Go to **CCLEE B2B → RFQ**
2. Configure form title, subtitle, button text, success message

### Optional Fields

| Field | Description |
|-------|-------------|
| Phone | Contact phone |
| Company | Company name |
| Country | Country/Region |
| Message | Message/Notes |
| Inquiry Type | Type of inquiry |

Each field can be set individually: show/hide and required/optional.

### Workflow Settings

| Parameter | Description | Default |
|-----------|-------------|---------|
| Max Negotiation Rounds | Maximum counter-offer rounds | 3 |
| Quote Expiry Days | Quote validity period (days) | 7 |
| Allow Guest RFQ | Allow guest submission | Yes |
| Email Notifications | Email notifications | Enabled |

---

## Frontend Form Page

### Add Form

Add shortcode to page:
- General inquiry: `[cclee_rfq_form]`
- Specific product inquiry: `[cclee_rfq_form product_id="123"]`

![RFQ Form](/images/docs/cclee-b2b/rfq/rfq-form.webp)

### Fill and Submit

![RFQ Form Filled](/images/docs/cclee-b2b/rfq/rfq-form-filled.webp)

---

## Admin Quote Management

### View Quote Requests

Go to **WP Admin → WooCommerce → Quote Requests**

![Quote Requests List](/images/docs/cclee-b2b/rfq/admin-rfq-list.webp)

### Quote Status

| Status | Description |
|--------|-------------|
| Pending | Awaiting processing |
| Quoted | Quoted, waiting for customer response |
| Accepted | Customer accepted, converted to order |
| Rejected | Customer rejected |
| Expired | Expired |
| Cancelled | Cancelled |

### Quote Actions

1. Click quote to view details
2. Fill in quote amount
3. Select quote validity period
4. Click **Send Quote** to send to customer

### Email Notifications

After sending quote, system automatically emails customer.

---

## Customer My Quotes

### Add My Quotes Page

Add shortcode to page: `[cclee_b2b_my_quotes]`

### Customer Response

After logging in, customer visits My Account → My Quotes to view all quotes and respond:

| Action | Description |
|--------|-------------|
| Accept | Accept quote, confirm purchase |
| Reject | Reject quote |
| Counter-offer | Counter-offer (consumes negotiation rounds) |

![My Quotes Page](/images/docs/cclee-b2b/rfq/my-quotes-page.webp)

### Order Conversion

After customer accepts quote:
1. System generates WooCommerce order
2. Order amount is the quoted amount
3. Customer completes payment process

---

## FAQ

### Quote expired. What to do?

Expired quote status automatically changes to Expired. Customer needs to resubmit the inquiry.

### Can guests submit RFQ?

Yes. Enable **Allow Guest RFQ** in RFQ settings.

### Can I attach products to RFQ?

Yes. Use `[cclee_rfq_form product_id="123"]` shortcode. Form automatically attaches specified product info.

### How many counter-offer rounds maximum?

Set by Max Negotiation Rounds, default is 3 rounds. After reaching the limit, customer can only accept or reject the current quote.

### How to convert RFQ to regular order?

After customer accepts quote, system automatically creates WooCommerce order. No manual operation needed.
