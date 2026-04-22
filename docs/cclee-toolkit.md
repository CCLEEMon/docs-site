---
title: CCLEE Toolkit 使用帮助 — General
description: CCLEE Toolkit 插件 General 选项卡完整指南 — AI 辅助写作、图片 Alt 自动生成、案例展示 CPT
project: cclee-toolkit
schema: HowTo
steps:
  - name: 配置 AI 模块
    text: 在 General Tab 填写 API Key、Provider、Model
  - name: 使用 AI Assistant 生成内容
    text: 在编辑器侧边栏用 AI 辅助生成标题、段落、列表等
  - name: 开启图片 Alt 自动生成
    text: 上传时自动为无 alt 图片生成描述文本
  - name: 创建案例展示内容
    text: 新建 Case Study、填写客户信息和成果指标、发布
rag: true
rag_tags: ["WordPress", "CCLEE Toolkit", "AI写作", "图片Alt", "案例展示"]
---

import StatusTag from '@site/src/components/StatusTag'

# CCLEE Toolkit 使用帮助 — General

后台路径：**CCLEE Toolkit → General**

![General 设置页概览](/images/docs/cclee-toolkit/general-settings-overview.webp)

---

## AI Assistant — 编辑器 AI 辅助

### 开启 AI 模块

<StepBox title="1. 进入 CCLEE Toolkit">

在 WordPress 后台左侧菜单点击 **CCLEE Toolkit**，进入 General Tab。

![General 设置概览](/images/docs/cclee-toolkit/general-settings-overview.webp)

</StepBox>

<StepBox title="2. 勾选 AI Assistant">

勾选 **Enable AI content assistant in editor**。

</StepBox>

<StepBox title="3. 填写 AI 配置">

| 字段 | 说明 | 示例 |
|------|------|------|
| API Key | AI 服务 API Key，必填 | `sk-...` |
| Provider | AI 服务商 | OpenAI / DeepSeek / Anthropic / Custom |
| API Base URL | 仅 Custom 模式需填写，以 `/v1` 结尾 | `https://api.example.com/v1` |
| Model | 留空使用默认模型 | `gpt-4o-mini` |

**默认模型：**

| Provider | 默认模型 |
|----------|---------|
| OpenAI | gpt-4o-mini |
| DeepSeek | deepseek-chat |
| Anthropic | claaude-haiku-4-5-20251001 |
| Custom | 需手动填写 |

</StepBox>

<StepBox title="4. 保存设置">

点击页面底部 **保存设置** 按钮。

</StepBox>

### 使用 AI 生成内容

<StepBox title="1. 打开编辑器">

新建或编辑任意文章/页面，使用块编辑器（Gutenberg）。

</StepBox>

<StepBox title="2. 找到 AI 面板">

右侧边栏找到 **CCLEE AI Assistant** 面板。

![AI Assistant 面板](/images/docs/cclee-toolkit/editor-ai-panel.webp)

</StepBox>

<StepBox title="3. 选择内容类型">

| 类型 | 输出格式 |
|------|---------|
| Paragraph | 段落文本 |
| Headline | 标题建议 |
| List | 列表项 |
| CTA | 行动号召文案 |
| FAQ | 问答对 |

</StepBox>

<StepBox title="4. 输入提示词并生成">

在 Topic/Prompt 输入框描述你需要的内容，点击 **Generate Content**。

</StepBox>

<StepBox title="5. 复制到编辑器">

生成完成后点击 **Copy to Clipboard**，粘贴到编辑器正文。

</StepBox>

<InfoBox variant="warning" title="API Key 无效时">
点击生成会提示错误。请检查 Key 是否有效、Provider 是否选对、API 地址是否可访问。
</InfoBox>

---

## Image Alt Auto — 图片 Alt 自动生成

### 开启方式

<StepBox title="1. 确认 AI 模块已开启">

Image Alt 自动生成依赖 AI 模块。先确认 **Enable AI content assistant in editor** 已勾选并配置好 API Key。

</StepBox>

<StepBox title="2. 勾选 Image Alt 选项">

勾选以下选项：

- **Enable auto-generate alt on image upload** — 上传时自动生成
- **Enable batch alt text processing** — 开启批量处理

</StepBox>

<StepBox title="3. 保存设置">

点击 **保存设置**。

</StepBox>

![Image Alt 设置区域](/images/docs/cclee-toolkit/general-image-alt-section.webp)

### 批量处理

勾选批量处理后，General Tab 底部显示处理面板：

- 显示当前无 alt 图片数量
- 可设置每次处理的图片数量（默认 10，最大 50）
- 点击 **Start Batch Processing** 开始处理
- 处理完成后可继续直至全部完成

---

## Case Study CPT — 案例展示

### 创建案例

<StepBox title="1. 进入案例管理">

后台左侧菜单点击 **Case Studies** → **Add New**。

![案例列表](/images/docs/cclee-toolkit/case-study-admin-list.webp)

</StepBox>

<StepBox title="2. 填写标题">

在编辑器顶部的标题区域输入案例标题。

</StepBox>

<StepBox title="3. 填写客户信息">

页面下方 **Case Study Details** Meta Box 中填写：

| 字段 | 说明 | 示例 |
|------|------|------|
| Client Name | 客户名称 | TechCorp Manufacturing |
| Project Duration | 项目周期 | 8 months |
| Company Size | 公司规模 | 500+ employees |

</StepBox>

<StepBox title="4. 填写成果指标">

最多 4 组，每组包含 Value（值）和 Label（标签）：

| 字段 | 示例 |
|------|------|
| Metric 1 Value | +200% |
| Metric 1 Label | Revenue Growth |
| Metric 2 Value | -45% |
| Metric 2 Label | Defect Rate |

填写多组时依次往下填，留空的不显示。

</StepBox>

<StepBox title="5. 填写客户评价">

| 字段 | 示例 |
|------|------|
| Testimonial Content | 解决方案显著提升了产线效率 |
| Testimonial Author | Zhang Wei |
| Testimonial Title | VP of Operations |

</StepBox>

<StepBox title="6. 设置行业分类">

右侧边栏 **Industries** 面板选择或新建行业分类（如"制造业"、"SaaS"）。

</StepBox>

<StepBox title="7. 发布">

点击 **Publish** 发布。

![案例编辑页](/images/docs/cclee-toolkit/case-study-edit-screen.webp)

</StepBox>

### 前台展示效果

案例详情页自动渲染 4 个动态 Block：

| Block | 显示内容 |
|-------|---------|
| Case Hero | 客户名称 + 公司规模 |
| Case Metrics | 成果指标网格（最多 4 组） |
| Case Testimonial | 客户评价 + 评价者信息 |
| Case Meta | 项目时长 + 团队规模 |

![前台案例效果](/images/docs/cclee-toolkit/case-study-frontend.webp)

<InfoBox variant="info" title="自动渲染">
模板 `single-case-study.html` 已内置 4 个 Block，发布后自动渲染，无需手动插入。
</InfoBox>

### 访问路径

| 页面 | URL 格式 |
|------|---------|
| 单篇案例 | `/case-study/{slug}/` |
| 行业归档 | `/case-industry/{term-slug}/` |
| 全部案例 | `/case-study/` |

---

## 常见问题

### AI 生成报错怎么办？

检查三点：API Key 是否有效、Provider 是否选对、网络是否能访问 API 地址。

### Image Alt 自动生成没反应？

确认 AI Assistant 已开启并保存。自动生成依赖 AI 模块，单独开启 Image Alt 不会生效。

### Case Studies 菜单没出现？

确认 **Enable Case Study CPT and blocks** 已勾选。刷新后台页面即可。

### 案例 Block 没显示数据？

Block 从 post meta 读取数据，确认 Meta Box 中字段已填写并保存。
