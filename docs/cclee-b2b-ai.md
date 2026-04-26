---
title: AI 客服
description: CCLEE B2B 插件 AI 客服与知识库完整指南 — API 配置、浮动聊天气泡、意图路由、知识库问答
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
rag_tags: ["CCLEE B2B", "AI 客服", "知识库", "RAG", "智能问答", "浮动气泡"]
---

# CCLEE B2B — AI 客服与知识库

后台路径：**CCLEE B2B → AI & KB**

![AI & KB 设置页概览](/images/docs/cclee-b2b/ai/settings-overview.webp)

---

## AI API 配置

### 基本设置

| 字段 | 说明 | 示例 |
|------|------|------|
| API Base URL | AI 服务端点，支持 OpenAI 兼容 API | `https://api.openai.com/v1` |
| API Key | AI 服务 API Key，AES-256-CBC 加密存储 | `sk-...` |
| Model | 模型标识符 | `gpt-4o-mini`、`gemini-2.5-flash` |
| Chat Enabled | 浮动聊天气泡总开关 | — |
| Chat Welcome | 首次打开的欢迎语 | `有什么可以帮您？` |
| Rate Limit | 每 IP 每小时最大消息数 | `30` |

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

## 前台浮动聊天气泡

### 聊天气泡图标

开启后，所有前台页面右下角显示浮动聊天气泡图标。

![聊天气泡图标](/images/docs/cclee-b2b/ai/chat-bubble.webp)

### 聊天面板

访客点击气泡打开聊天面板，可输入问题。

![聊天面板打开](/images/docs/cclee-b2b/ai/chat-panel-open.webp)

---

## AI 意图路由

AI 客服自动识别问题类型并响应：

| 意图 | 触发条件 | AI 返回内容 |
|------|----------|-------------|
| 产品咨询 | 询问产品、价格、库存 | 产品名称、SKU、价格、库存 |
| 订单查询 | 登录用户询问订单 | 订单摘要、状态、发货信息 |
| 知识库 | 询问政策、服务、指南 | 文档摘录、相关链接 |
| 通用 | 其他问题 | 友好回复、引导其他渠道 |

<InfoBox variant="info" title="产品查询">
询问产品时，返回匹配产品的名称、SKU、价格（如有）、库存状态。支持按 SKU 或产品名称查询。
</InfoBox>

---

## 知识库功能

### 上传文档

1. 进入 **AI & KB 设置**
2. 在 **Knowledge Base** 部分上传 PDF 或 TXT 文件
3. 系统自动解析、分块（~500字符/块）
4. 内容存入 MySQL FULLTEXT 索引表

### 文档搜索

当客户询问与文档内容相关的问题时：
1. AI 在知识库中搜索相关片段
2. 结合片段内容生成回答
3. 返回答案并附带参考来源

### 支持的文档

| 格式 | 说明 |
|------|------|
| PDF | 自动提取文本内容 |
| TXT | 纯文本直接分块 |

<InfoBox variant="info" title="知识库更新">
上传新文档后，知识库即时更新。删除文档需要手动操作。
</InfoBox>

---

## 速率限制

**Rate Limit** 设置防止 API 滥用：
- 每 IP 地址每小时最多发送 N 条消息
- 超限后等待下一小时自动恢复
- 超限时 AI 返回友好提示

建议值：
- 普通使用：`30-50` 条/小时
- 高流量站点：`100` 条/小时

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

### 知识库搜索不到内容？

1. 确认文档已上传成功
2. 检查文档内容是否包含相关关键词
3. 知识库刚上传需要等待处理完成

### Rate Limit 达到怎么办？

等待一小时后自动恢复，或联系管理员调整限制数值。

### 游客可以使用 AI 客服吗？

可以。浮动气泡对所有访客显示，但订单查询需要登录后才能使用。
