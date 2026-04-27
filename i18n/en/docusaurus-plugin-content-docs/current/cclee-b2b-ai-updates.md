---
title: AI Customer Service Updates
description: CCLEE B2B AI Customer Service feature update log
project: cclee-b2b
schema: Article
date: 2026-04-28
rag: true
rag_tags: ["CCLEE B2B", "AI Customer Service", "Update Log", "Version Update"]
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
