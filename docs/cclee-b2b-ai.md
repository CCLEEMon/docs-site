---
title: AI 客服
description: CCLEE B2B 插件 AI 客服完整指南 — 18 个常用场景覆盖产品咨询、订单查询、库存检查、报价追踪、知识库问答
project: cclee-b2b
schema: HowTo
steps:
  - name: 配置 AI API
    text: 在 AI & KB 设置中填写 API Base URL、API Key、选择模型
  - name: 开启聊天气泡
    text: 启用 Chat Enabled，前台显示浮动聊天气泡
  - name: 上传知识库文档
    text: 上传 PDF 或 TXT 文档，AI 基于文档回答客户问题
  - name: 使用 AI 客服
    text: 访客/客户点击聊天气泡，发送产品、订单、知识库问题
rag: true
rag_tags: ["CCLEE B2B", "AI 客服", "智能问答", "浮动气泡", "多轮对话", "知识库"]
---

# CCLEE B2B — AI 客服

后台路径：**CCLEE B2B → AI & KB**

AI 客服功能支持 **18 个常用场景**，涵盖产品咨询、订单追踪、库存查询、报价请求、知识库问答。无论访客还是已登录客户，都能获得即时回复。

![AI 客服概览](/images/docs/cclee-b2b/ai/settings-overview.webp)

---

## 快速开始

1. **配置 API**：填写 AI Base URL、API Key、选择模型
2. **开启气泡**：启用 `Chat Enabled`，前台显示浮动聊天气泡
3. **上传知识库**（可选）：上传公司文档，AI 基于文档回答政策类问题
4. **开始使用**：访客点击气泡即可发起对话

---

## 使用场景

### 1. 产品关键词查询

任何访客都可以用自然语言搜索产品。AI 在产品目录中查找匹配项，返回名称、价格、库存状态。

**示例对话**：
> 用户：「你们有台式焊接台吗？」

![产品关键词查询](/images/docs/cclee-b2b/ai/s01-product-keyword.webp)

---

### 2. 按 SKU 精确查询

已登录的 B2B 客户可以输入 SKU 编码（如 `8586`）精确查找产品。AI 识别 SKU 格式，返回对应产品及客户的专属价格和阶梯折扣。

**示例对话**：
> 用户：「8586」

![SKU 查询](/images/docs/cclee-b2b/ai/s02-product-sku.webp)

---

### 3. 阶梯定价计算

已登录 B2B 客户可询问批量采购价格。AI 查询阶梯定价表，计算指定数量的订单总价。

**示例对话**：
> 用户：「如果我订购 100 个这件产品，价格是多少？」

![阶梯定价](/images/docs/cclee-b2b/ai/s03-tiered-pricing.webp)

---

### 4. 库存状态查询

访客可查询任意产品的库存情况。AI 返回有货/缺货状态，缺货时可能推荐替代产品。

**示例对话**：
> 用户：「这件有货吗？」

![库存查询](/images/docs/cclee-b2b/ai/s04-stock-check.webp)

---

### 5. 订单状态查询

已登录用户可查询最近订单。AI 返回订单状态、日期、商品列表、总金额。

**示例对话**：
> 用户：「我最近的订单状态怎么样了？」

![订单状态](/images/docs/cclee-b2b/ai/s05-order-status.webp)

---

### 6. 按订单号追踪

已登录用户输入订单号查询详情。AI 返回订单详情和预计处理时间。

**示例对话**：
> 用户：「订单 387 到哪了？」

![订单追踪](/images/docs/cclee-b2b/ai/s06-order-tracking.webp)

---

### 7. 访客订单查询

访客（非登录用户）询问订单时，AI 提示需要登录才能查询订单。

**示例对话**：
> 用户：「我想查一下订单状态」

AI 回复：「查询订单需要登录账号，请先登录。」

![访客订单](/images/docs/cclee-b2b/ai/s07-order-guest.webp)

---

### 8. 知识库政策问答

AI 从已上传的公司文档中搜索答案，回复关于退换货政策、保修条款、运输说明等问题。

**示例对话**：
> 用户：「你们的退货政策是什么？」

![知识库 FAQ](/images/docs/cclee-b2b/ai/s08-kb-faq.webp)

---

### 9. 超出范围问题（兜底回复）

当问题超出 AI 客服范围（如推荐餐厅），AI 礼貌拒绝并引导到合适渠道（如 RFQ 表单）。

**示例对话**：
> 用户：「附近有推荐的餐厅吗？」

![超出范围](/images/docs/cclee-b2b/ai/s09-out-of-scope.webp)

---

### 10. RFQ 表单填写指导

当用户停留在「请求报价」页面时，AI 提供上下文指导，说明必填字段并鼓励提交。

**示例对话**：
> 用户：「我需要填写什么信息？」

![RFQ 引导](/images/docs/cclee-b2b/ai/s10-rfq-guidance.webp)

---

### 11. RFQ 状态查询

已登录并提交过报价请求的客户可查询 RFQ 状态。AI 返回最近一条报价请求的当前状态。

**示例对话**：
> 用户：「你们收到我的报价请求了吗？」

![RFQ 状态](/images/docs/cclee-b2b/ai/s11-rfq-status.webp)

---

### 12. 多轮对话

AI 跨消息记忆上下文，用户可以追问、跟进，自然地探索产品并发起报价请求。

**示例对话**：
> 第一轮：「你们有适合无铅焊接的设备吗？」
> 第二轮：「这个保修多久？」
> 第三轮：「我想申请报价，100 台，带延保」

![多轮对话](/images/docs/cclee-b2b/ai/s12-multi-turn.webp)

---

### 13. 跨语言支持

AI 自动检测用户消息语言并使用相同语言回复。支持中文、英文等多种语言。

**示例对话**：
> 用户：「你们有支持无铅焊接的设备吗？」

![中文对话](/images/docs/cclee-b2b/ai/s13-chinese.webp)

---

### 14. 速率限制

系统默认限制每 IP 每 60 秒最多 20 条消息，防止 API 滥用。超限后显示友好提示。

**提示**：可在后台 AI & KB 设置中调整限制数值。

<InfoBox variant="warning" title="速率限制">
普通站点建议设置 30-50 条/小时，高流量站点可设 100 条/小时。超限后需等待一段时间后自动恢复。
</InfoBox>

---

### 15. 未配置 AI

如果管理员未配置 API Key，前台不显示聊天气泡。配置并启用后，气泡会在所有页面显示。

后台设置路径：**WooCommerce → 设置 → B2B → AI & Knowledge Base**

---

### 16. 页面嵌入模式（Shortcode）

除浮动气泡外，还可用短代码将聊天面板直接嵌入任意页面：

```
[cclee_b2b_chat]
```

这会创建一个页面内常驻的聊天面板，适合专用的「在线咨询」页面。

![短代码嵌入](/images/docs/cclee-b2b/ai/s16-inline-shortcode.webp)

---

### 17. 对话历史持久化

已登录用户的对话历史会保存到数据库。换浏览器或设备后，历史记录会自动恢复。

**关闭浏览器前** — 与客服聊产品问题：

![关闭前对话](/images/docs/cclee-b2b/ai/s17-history-before-close.webp)

**重新打开网站** — 消息从数据库恢复：

![恢复对话](/images/docs/cclee-b2b/ai/s17-history-restored.webp)

---

### 18. 清除历史

用户可在聊天面板顶部点击「Clear History」按钮手动清空对话记录。清除后显示欢迎语。

**清除前** — 现有对话：

![清除前](/images/docs/cclee-b2b/ai/s18-before-clear.webp)

**清除后** — 显示欢迎语：

![清除后](/images/docs/cclee-b2b/ai/s18-after-clear.webp)

---

## AI 意图路由

AI 客服自动识别问题类型并分发响应：

| 意图 | 触发条件 | AI 返回内容 |
|------|----------|-------------|
| 产品咨询 | 询问产品名称、价格、库存 | 产品信息、价格、库存状态 |
| SKU 查询 | 输入 SKU 编码 | 精确产品匹配、专属价格 |
| 订单查询 | 登录用户询问订单 | 订单摘要、状态、发货信息 |
| 库存查询 | 任何访客查询库存 | 有货/缺货状态 |
| RFQ 相关 | 询问报价或提交 RFQ | 表单指导或 RFQ 状态 |
| 知识库 | 询问政策、服务、指南 | 文档摘录、相关链接 |
| 通用 | 其他问题 | 友好回复、引导其他渠道 |

---

## 管理员配置

### 基本设置

| 字段 | 说明 | 示例 |
|------|------|------|
| API Base URL | AI 服务端点 | `https://api.openai.com/v1` |
| API Key | API 密钥（AES-256-CBC 加密存储） | `sk-...` |
| Model | 模型标识符 | `gpt-4o-mini`、`gemini-2.5-flash` |
| Chat Enabled | 浮动聊天气泡总开关 | — |
| Chat Welcome | 首次打开欢迎语 | `有什么可以帮您？` |
| Rate Limit | 每 IP 每 60 秒最大消息数 | `20` |

### 支持的 AI 服务

支持任何 OpenAI 兼容 API：
- OpenAI（GPT-4o、GPT-4o-mini 等）
- DeepSeek
- Claude（通过兼容端点）
- 自定义 API

<InfoBox variant="warning" title="API Key 安全">
API Key 加密存储，保存后不再明文显示。定期更换 Key 时直接覆盖填写即可。
</InfoBox>

---

## 常见问题

### 聊天面板不显示？

1. 确认 **Chat Enabled** 已开启
2. 检查 AI & KB 设置中 API Key 有效
3. 查看浏览器控制台是否有 JS 错误

### AI 回复不准确？

1. 确认知识库文档已上传且内容相关
2. 尝试更具体的问题描述
3. 检查 API Key 额度是否充足

### 访客可以使用 AI 客服吗？

可以。浮动气泡对所有访客显示，但订单查询需要登录后才能使用。

### 对话历史会自动保存吗？

仅对登录用户自动保存。访客的对话在关闭浏览器后不会被保留。

### 怎么清除对话历史？

点击聊天面板顶部的「Clear History」按钮，可手动清空当前对话记录。
