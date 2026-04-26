---
title: AI Customer Service
description: Complete guide to CCLEE B2B AI Customer Service — API configuration, floating chat bubble, intent routing, knowledge base
project: cclee-b2b
schema: HowTo
steps:
  - name: Configure AI API
    text: Fill in API Base URL, API Key, select model in AI & KB settings
  - name: Enable Chat Bubble
    text: Enable Chat Enabled to show floating chat bubble on frontend
  - name: Upload Knowledge Base Documents
    text: Upload PDF or TXT documents. AI answers customer questions based on documents
  - name: Use AI Customer Service
    text: Visitors/customers click chat bubble to ask product, order, or knowledge base questions
rag: true
rag_tags: ["CCLEE B2B", "AI Customer Service", "Knowledge Base", "RAG", "Smart Q&A", "Floating Bubble"]
---

# CCLEE B2B — AI Customer Service & Knowledge Base

Admin path: **CCLEE B2B → AI & KB**

![AI & KB Settings Overview](/images/docs/cclee-b2b/ai/settings-overview.webp)

---

## AI API Configuration

### Basic Settings

| Field | Description | Example |
|-------|-------------|---------|
| API Base URL | AI service endpoint, supports OpenAI-compatible API | `https://api.openai.com/v1` |
| API Key | AI service API Key, AES-256-CBC encrypted | `sk-...` |
| Model | Model identifier | `gpt-4o-mini`, `gemini-2.5-flash` |
| Chat Enabled | Master switch for floating chat bubble | — |
| Chat Welcome | Welcome message shown on first open | `How can I help you?` |
| Rate Limit | Max messages per IP per hour | `30` |

### Supported AI Services

Supports any OpenAI-compatible API:
- OpenAI (GPT-4o, GPT-4o-mini, etc.)
- DeepSeek
- Claude (via compatible endpoint)
- Custom API

<InfoBox variant="warning" title="API Key Security">
API Key is encrypted and never displayed in plain text after saving. To change, simply overwrite the field.
</InfoBox>

---

## Frontend Floating Chat Bubble

### Chat Bubble Icon

When enabled, a floating chat bubble icon appears in the bottom-right corner of all frontend pages.

![Chat Bubble Icon](/images/docs/cclee-b2b/ai/chat-bubble.webp)

### Chat Panel

Visitors click the bubble to open the chat panel and type questions.

![Chat Panel Open](/images/docs/cclee-b2b/ai/chat-panel-open.webp)

---

## AI Intent Routing

AI customer service automatically identifies question types and responds:

| Intent | Trigger Condition | AI Returns |
|--------|------------------|-------------|
| Product Inquiry | Asking about product, price, inventory | Product name, SKU, price, inventory |
| Order Query | Logged-in user asking about orders | Order summary, status, shipping info |
| Knowledge Base | Asking about policies, services, guides | Document excerpts, related links |
| General | Other questions | Friendly response, guide to other channels |

<InfoBox variant="info" title="Product Queries">
When asking about products, returns matching product name, SKU, price (if any), inventory status. Supports querying by SKU or product name.
</InfoBox>

---

## Knowledge Base Function

### Upload Documents

1. Go to **AI & KB Settings**
2. In **Knowledge Base** section, upload PDF or TXT files
3. System automatically parses and chunks content (~500 chars/chunk)
4. Content stored in MySQL FULLTEXT index table

### Document Search

When customer asks questions related to document content:
1. AI searches for related excerpts in knowledge base
2. Generates answer combined with excerpts
3. Returns answer with reference source

### Supported Documents

| Format | Description |
|--------|-------------|
| PDF | Automatically extracts text content |
| TXT | Plain text directly chunked |

<InfoBox variant="info" title="Knowledge Base Updates">
New documents are immediately available after upload. Deleting documents requires manual operation.
</InfoBox>

---

## Rate Limiting

**Rate Limit** setting prevents API abuse:
- Max N messages per IP address per hour
- Automatically resets next hour after limit
- When exceeded, AI returns friendly message

Recommended values:
- Normal use: `30-50` messages/hour
- High traffic sites: `100` messages/hour

---

## FAQ

### Chat panel not displaying?

1. Confirm **Chat Enabled** is on
2. Check if API Key is valid in AI & KB settings
3. Check browser console for JS errors

### AI responses not accurate?

1. Confirm knowledge base documents uploaded and relevant
2. Try more specific question descriptions
3. Check if API Key quota is sufficient

### Knowledge base search not finding content?

1. Confirm documents uploaded successfully
2. Check if document content contains relevant keywords
3. Knowledge base needs processing time after upload

### Rate limit reached?

Wait for the next hour to automatically reset, or contact admin to adjust the limit.

### Can guests use AI customer service?

Yes. Chat bubble is displayed to all visitors. Order queries require login to use.
