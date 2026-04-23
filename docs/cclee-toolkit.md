---
title: 通用设置
description: CCLEE Toolkit 插件通用选项卡完整指南 — AI 辅助写作、案例展示 CPT
project: cclee-toolkit
schema: HowTo
steps:
  - name: 配置 AI 模块
    text: 在设置中填写 API Key、Provider、Model
  - name: 使用 AI Assistant 生成内容
    text: 在编辑器侧边栏用 AI 辅助生成标题、段落、列表等
  - name: 创建案例展示内容
    text: 新建案例、填写客户信息和成果指标、发布
rag: true
rag_tags: ["WordPress", "CCLEE Toolkit", "AI写作", "案例展示"]
---

import StatusTag from '@site/src/components/StatusTag'

# CCLEE Toolkit — 通用设置

后台路径：**CCLEE Toolkit → 通用设置**

![General 设置页概览](/images/docs/cclee-toolkit/general-settings-overview.webp)

---

## AI Assistant — 编辑器 AI 辅助

### 开启 AI 模块

**路径：** CCLEE Toolkit → General

1. 勾选 **Enable AI content assistant in editor**
2. 填写配置：

| 字段 | 说明 | 示例 |
|------|------|------|
| API Key | AI 服务 API Key，必填 | `sk-...` |
| Provider | AI 服务商 | OpenAI / DeepSeek / Anthropic / Custom |
| API Base URL | 仅 Custom 模式需填写，以 `/v1` 结尾 | `https://api.example.com/v1` |
| Model | 留空使用默认模型 | `gpt-4o-mini` |

| Provider | 默认模型 |
|----------|---------|
| OpenAI | gpt-4o-mini |
| DeepSeek | deepseek-chat |
| Anthropic | claude-haiku-4-5-20251101 |
| Custom | 需手动填写 |

3. 保存设置

### 使用 AI 生成内容

1. 打开任意文章/页面编辑器（Gutenberg）
2. 右侧边栏找到 **CCLEE AI Assistant** 面板
3. 选择内容类型：段落 / 标题 / 列表 / CTA / FAQ
4. 输入提示词，点击 **生成内容**
5. 生成完成后点击 **复制到剪贴板**，粘贴到编辑器

<InfoBox variant="warning" title="API Key 无效时">
点击生成会提示错误。请检查 Key 是否有效、Provider 是否选对、API 地址是否可访问。
</InfoBox>

---

## 案例展示 CPT

新建案例：**案例 → 新建**

填写内容：

| 字段 | 说明 | 示例 |
|------|------|------|
| 标题 | 案例标题 | 智能工厂升级 |
| Client Name | 客户名称 | TechCorp Manufacturing |
| Project Duration | 项目周期 | 8 个月 |
| Company Size | 公司规模 | 500+ employees |
| Metric 1~4 Value/Label | 成果指标 | +200% / 营收增长 |
| Testimonial Content | 客户评价 | 解决方案显著提升了产线效率 |
| Testimonial Author | 评价者姓名 | 张伟 |

右侧 **行业分类** 面板选择行业。填完后点击 **发布** 。

前台自动渲染 4 个 Block：案例 Hero / 案例数据 / 案例评价 / 案例元信息。

访问路径：`/case-study/{slug}/`

![案例编辑页](/images/docs/cclee-toolkit/case-study-edit-screen.webp)

---

## 常见问题

### AI 生成报错怎么办？

检查三点：API Key 是否有效、Provider 是否选对、网络是否能访问 API 地址。

### 案例菜单没出现？

确认 **启用案例展示 CPT 和 Blocks** 已勾选。刷新后台页面即可。

### 案例 Block 没显示数据？

Block 从文章 Meta 读取数据，确认 Meta Box 中字段已填写并保存。
