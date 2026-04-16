---
title: CCLEE Toolkit User Guide
description: Complete guide to CCLEE Toolkit plugin — AI-assisted writing, automatic SEO optimization, and case study showcases
project: cclee-toolkit
schema: HowTo
steps:
  - name: Enable and configure plugin modules
    text: Toggle modules on the WordPress settings page
  - name: Generate content with AI Assistant
    text: Use the editor sidebar to generate headlines, paragraphs, lists, and more
  - name: Verify SEO tag output
    text: Check page source for OG/Twitter/JSON-LD tags
  - name: Create and publish case studies
    text: Add a new Case Study, fill in client info and metrics, then publish
rag: true
rag_tags: ["WordPress", "CCLEE Toolkit", "AI Writing", "SEO Optimization", "Case Study", "Plugin"]
---

import { RocketIcon, ZapIcon, CheckIcon, LightbulbIcon } from '@site/src/components/Icons'
import StatusTag from '@site/src/components/StatusTag'

# <RocketIcon size={28} /> CCLEE Toolkit User Guide

An enhancement toolkit for B2B corporate websites. Four modules you can toggle independently.

| Module | Function | Default |
|--------|----------|---------|
| AI Assistant | AI-powered content generation in the editor sidebar | <StatusTag type="warning">Off</StatusTag> |
| SEO Enhancer | Auto-output OG + Twitter Card + JSON-LD | <StatusTag type="success">On</StatusTag> |
| Case Study CPT | Case study post type + 4 dynamic blocks | <StatusTag type="success">On</StatusTag> |

---

## Quick Start

<InfoBox variant="info" title="Requirements">
WordPress 6.4+ / PHP 8.0+. SEO and Case Study modules are enabled by default — no extra setup needed.
</InfoBox>

**Download**: [cclee-plugins (GitHub)](https://github.com/cclee-hub/cclee-plugins)

---

## Plugin Settings

Navigate to **Settings → CCLEE Toolkit** (`/wp-admin/options-general.php?page=cclee-toolkit`)

![Plugin settings page](/images/docs/cclee-toolkit/s1-settings.png)

| Setting | Description |
|---------|-------------|
| AI Assistant | Check to load the AI panel in the editor |
| AI API Key | API Key for your chosen AI provider |
| AI Provider | OpenAI / DeepSeek / Anthropic / Custom |
| API Base URL | Required only for Custom mode, must end with `/v1` |
| AI Model | Leave empty to use the provider's default |
| SEO Enhancer | Auto-output social tags and structured data |
| Case Study CPT | Register case study post type and blocks |

---

## AI Assistant — Editor AI Helper

### Enabling AI

1. Go to **Settings → CCLEE Toolkit**
2. Check **AI Assistant**
3. Select a Provider (OpenAI, DeepSeek, Anthropic, or Custom)
4. Enter the corresponding **API Key**
5. For Custom mode, also fill in **API Base URL** and **Model**
6. Click **Save Changes**

### Generating Content

1. Create or edit any post/page
2. Find the **"CCLEE AI Assistant"** panel in the right sidebar
3. Choose a content type:

| Type | Output |
|------|--------|
| Paragraph | Body text |
| Headline | Title suggestions |
| List | List items |
| CTA | Call-to-action copy |
| FAQ | Q&A pairs |

4. Describe what you need in the Topic/Prompt field
5. Click **Generate Content**
6. Once generated, click **Copy to Clipboard** and paste into the editor

![AI Assistant panel](/images/docs/cclee-toolkit/s2-ai-panel.png)

<InfoBox variant="warning" title="Note">
If the API Key is missing or invalid, you'll see an error when generating. Make sure your key is valid and has available credits.
</InfoBox>

---

## SEO Enhancer — Automatic SEO

<InfoBox variant="success" title="Zero Configuration">
This module is enabled by default and works automatically after plugin activation.
</InfoBox>

### What It Outputs

All front-end pages automatically get these tags in `<head>`:

- **Open Graph** tags — og:title, og:description, og:url, og:type, og:image
- **Twitter Card** tags — twitter:card, twitter:title, twitter:description
- **JSON-LD Schema** — Single posts/pages also get Article structured data

### Verifying Output

1. Visit any front-end page
2. Right-click → **View Page Source**
3. Search for `og:title` or `twitter:card` to confirm tags are present
4. On a single post page, search for `application/ld+json` to confirm JSON-LD output

![SEO tags in source](/images/docs/cclee-toolkit/s3-seo-source.png)

---

## Case Study — Project Showcases

### Creating a Case Study

<StepBox title="1. Open Case Study Management">

In the admin sidebar, click **"Case Studies"** → **"Add New"**.

![Case Studies list](/images/docs/cclee-toolkit/cs-list.webp)

</StepBox>

<StepBox title="2. Enter the Title">

Type the case study title in the editor's title area (e.g., "Smart Factory Upgrade - TechCorp").

</StepBox>

<StepBox title="3. Fill in Client Information">

In the **"Case Study Details"** Meta Box below the editor:

| Field | Description | Example |
|-------|-------------|---------|
| Client Name | Client company name | TechCorp Manufacturing |
| Project Duration | Project timeline | 8 months |
| Company Size | Company scale | 500+ employees |

</StepBox>

<StepBox title="4. Add Performance Metrics">

Up to 4 metric groups, each with a Value and a Label:

| Field | Example |
|-------|---------|
| Metric 1 Value | +200% |
| Metric 1 Label | Revenue Growth |
| Metric 2 Value | -45% |
| Metric 2 Label | Defect Rate |

Leave unused fields empty — they won't display.

</StepBox>

<StepBox title="5. Add Client Testimonial">

| Field | Description | Example |
|-------|-------------|---------|
| Testimonial Content | The quote | The solution significantly improved our production line efficiency |
| Testimonial Author | Person's name | Zhang Wei |
| Testimonial Title | Person's role | VP of Operations |

</StepBox>

<StepBox title="6. Set Industry Category">

In the **Industries** panel on the right sidebar, select or create an industry category (e.g., "Manufacturing", "SaaS").

</StepBox>

<StepBox title="7. Publish">

Click **Publish** in the top-right corner → confirm.

![New case study editor](/images/docs/cclee-toolkit/cs-new-editor.webp)

</StepBox>

### Front-End Display

The case study template automatically renders 4 dynamic blocks:

| Block | Display |
|-------|---------|
| Case Hero | Client name + company size |
| Case Metrics | Performance metrics grid (up to 4 groups) |
| Case Testimonial | Client quote + reviewer info |
| Case Meta | Project duration + team size |

![Front-end case study page](/images/docs/cclee-toolkit/cs-frontend.webp)

<InfoBox variant="info" title="Automatic Rendering">
The `single-case-study.html` template includes all 4 blocks. They render automatically after publishing — no need to insert blocks manually.
</InfoBox>

### URL Structure

| Page | URL Format |
|------|------------|
| Single case study | `/case-study/{slug}/` |
| Industry archive | `/case-industry/{term-slug}/` |
| All case studies | `/case-study/` (requires pretty permalinks) |

![Case study archive](/images/docs/cclee-toolkit/cs-archive.webp)

---

## FAQ

### AI generation returns an error?

Check three things: Is the API Key valid? Is the correct Provider selected? Can your server reach the API endpoint?

### SEO tags not showing?

Confirm **SEO Enhancer** is enabled (it's on by default). If you're using a caching plugin, clear the cache and retry.

### Case study blocks show no data?

Make sure the Meta Box fields are filled and saved. Blocks read from post meta — empty fields produce no output.

### Can I insert other blocks in the case study editor?

Yes. The template renders Case Study blocks above and below the post content. Any blocks you insert in the editor appear in the middle.

### Case Studies menu not showing?

Confirm **Case Study CPT** is enabled. If you just enabled it, refresh the admin page.
