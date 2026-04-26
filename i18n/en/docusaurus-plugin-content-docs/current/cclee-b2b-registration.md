---
title: Enterprise Registration
description: Complete guide to CCLEE B2B Enterprise Registration — Registration form, field configuration, admin approval, email notifications
project: cclee-b2b
schema: HowTo
steps:
  - name: Configure Registration Fields
    text: Enable/disable each field in Registration settings, set required fields
  - name: Add Registration Form Page
    text: Add shortcode [cclee_b2b_register] to a page
  - name: Approve Enterprise Applications
    text: Approve or Reject pending users in WP Admin user list
  - name: Automatic Email Notifications
    text: System automatically sends email notifications to applicants after approval
rag: true
rag_tags: ["CCLEE B2B", "Enterprise Registration", "Approval Workflow", "B2B Users", "Email Notifications"]
---

# CCLEE B2B — Enterprise Registration

Admin path: **CCLEE B2B → Registration**

![Registration Settings Overview](/images/docs/cclee-b2b/registration/settings-overview.webp)

---

## Registration Field Configuration

### Available Fields

| Field | Description | Purpose |
|-------|-------------|---------|
| Company Name | Company name | Identify enterprise identity |
| Tax ID | Tax ID / Business Registration Number | Verify business legitimacy |
| Contact Person | Contact person name | Primary contact |
| Phone | Phone number | Contact information |
| Industry | Industry | Understand customer background |
| Company Size | Company size | Evaluate purchasing power |

### Configuration Steps

1. Go to **CCLEE B2B → Registration**
2. For each field, set:
   - **Enabled** — Whether to display the field
   - **Required** — Whether it's a required field
3. Save settings

---

## Frontend Registration Form

### Add Form Page

1. Create a new page (e.g., Become a Wholesale Customer)
2. Add the shortcode: `[cclee_b2b_register]`
3. Publish the page

### Form Filling

Visitors/customers fill in enterprise information and submit.

![Registration Form](/images/docs/cclee-b2b/registration/registration-form.webp)

![Registration Form Filled](/images/docs/cclee-b2b/registration/registration-form-filled.webp)

### After Submission

1. System creates user account with B2B status as **Pending**
2. Admin receives new application notification (email)
3. Applicant receives submission confirmation email

---

## Admin Approval

### View Pending Users

Go to **WP Admin → Users**. The new **B2B Status** column shows each user's approval status.

![Users List B2B Status Column](/images/docs/cclee-b2b/registration/users-b2b-status-column.webp)

### Approval Actions

1. Find users with Pending status in the user list
2. Click **Approve** or **Reject** quick action
3. Or go to user edit page to modify B2B fields and status

![User Profile B2B Fields](/images/docs/cclee-b2b/registration/user-profile-b2b-fields.webp)

### Approval Results

| Action | User Gets Role | User Status | Email Notification |
|--------|----------------|--------------|-------------------|
| Approve | `cclee_b2b_verified` | approved | Approval email |
| Reject | Keep original role | rejected | Rejection email |

---

## Email Notifications

System automatically sends the following emails:

| Trigger | Recipient | Content |
|---------|-----------|---------|
| Submit registration | Applicant | Confirmation that info was received, awaiting approval |
| Approval | Applicant | Account activated, can now wholesale purchase |
| Rejection | Applicant | Application not approved, can contact support to appeal |

<InfoBox variant="info" title="Email Configuration">
Make sure the website email function works (wp_mail works). You can confirm the email address in WP Admin → Settings → General, or install an email plugin.
</InfoBox>

---

## FAQ

### User didn't receive email?

1. Check spam folder
2. Confirm website email function works
3. Contact admin to check email logs

### Approval button not showing?

1. Confirm user's B2B status is Pending
2. Confirm current logged-in user has admin permissions
3. Clear browser cache and retry

### How to modify user's B2B info?

In **WP Admin → Users → Edit User** page, find B2B fields (company name, tax ID, contact person, etc.) to modify directly.

### Can I batch approve?

Currently requires individual approval. For batch needs, use WP-CLI or database operations.
