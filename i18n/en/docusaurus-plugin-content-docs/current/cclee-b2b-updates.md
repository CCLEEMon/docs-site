---
title: CCLEE B2B Updates
description: CCLEE B2B plugin update log
project: cclee-b2b
schema: Article
date: 2026-04-29
rag: true
rag_tags: ["CCLEE B2B", "Plugin Updates", "Update Log", "Version Update"]
---

# AI Customer Service — Update Log

## 2026-04-28 Feature Rewrite

This update expands from **7 basic scenarios to 18 complete scenarios**, covering all customer conversation paths.

### New Features

| Scenario | Description |
|----------|-------------|
| SKU Exact Search | Customer enters SKU code (e.g., `8586`), AI returns exact product and exclusive price |
| Tiered Pricing Calculation | When customer asks about bulk pricing, AI calculates total cost for requested quantity |
| Order Status/Tracking | Supports tracking by order number, showing processing progress |
| RFQ Page Guidance | When customer is on the quote page, AI provides contextual form guidance |
| RFQ Status Query | Customers can query the status of submitted quote requests |
| Multi-turn Conversation | AI maintains context, supports follow-up questions for natural product exploration and RFQ |
| Cross-Language Support | AI automatically detects language and responds, supports Chinese, English, and more |
| Shortcode Embed | Use `[cclee_b2b_chat]` shortcode to embed chat panel into any page |
| Conversation History Persistence | Logged-in users' conversations saved to database, auto-restored on different devices |
| Clear History | Users can manually clear conversation records |

### Feature Improvements

- **Product Keyword Search**: Expanded to include price and stock status
- **Stock Query**: Added alternative product recommendations
- **Rate Limiting**: Adjusted to per-IP-per-60-seconds configuration, more flexible
- **Intent Routing**: Added two independent intent types: SKU Query and RFQ Related

### Image Updates

18 new scenario screenshots added, copied to `static/images/docs/cclee-b2b/ai/` directory.

---

## 2026-04-29 Knowledge Base Enhancement

### New Features

| Feature | Description |
|---------|-------------|
| MD File Upload | Knowledge base now supports Markdown files. Supported formats: PDF, TXT, MD |
| Small KB Full Injection | When total KB content is ≤50KB, all documents are injected directly into the AI prompt, no keyword matching needed |
| Cross-Language Q&A | Customers can ask questions in any language and match documents in another language (e.g., Chinese query "起订量" matches English "MOQ") |

### Improvements

- **Chunking algorithm upgrade**: Adjacent paragraphs are greedily merged, single chunk size increased from 500 to 1500 characters for better context
- **Upload error feedback**: Specific error messages shown on upload failure (format mismatch, size exceeded, directory not writable, etc.)
- **Delete permission check**: File permissions verified before deletion to prevent silent failures

### Bug Fixes

- Fixed knowledge base directory permission issue on certain server environments that prevented file uploads

<InfoBox variant="info" title="Cross-Language Q&A Note">
When total knowledge base content exceeds 50KB, the system automatically switches to keyword search mode. In keyword search mode, cross-language matching may not work — consider using bilingual keywords in documents.
</InfoBox>
