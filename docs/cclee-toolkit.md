---
title: CCLEE Toolkit 使用帮助
description: CCLEE Toolkit 插件使用教程 — AI 辅助写作、SEO 自动优化、案例展示的完整操作指南
project: cclee-toolkit
schema: HowTo
steps:
  - name: 启用和配置插件模块
    text: 在 WordPress 后台设置页开启所需模块
  - name: 使用 AI Assistant 生成内容
    text: 在编辑器侧边栏用 AI 辅助生成标题、段落、列表等
  - name: 验证 SEO 标签输出
    text: 查看页面源代码确认 OG/Twitter/JSON-LD 标签
  - name: 创建和发布案例展示
    text: 新建 Case Study、填写客户信息和成果指标、发布
rag: true
rag_tags: ["WordPress", "CCLEE Toolkit", "AI写作", "SEO优化", "案例展示", "插件使用"]
---

import { RocketIcon, ZapIcon, CheckIcon, LightbulbIcon } from '@site/src/components/Icons'
import StatusTag from '@site/src/components/StatusTag'

# <RocketIcon size={28} /> CCLEE Toolkit 使用帮助

B 端企业官网增强工具包，4 个模块可独立开关，按需启用。

| 模块 | 功能 | 默认 |
|------|------|------|
| AI Assistant | 编辑器侧边栏 AI 辅助生成内容 | <StatusTag type="warning">关闭</StatusTag> |
| SEO Enhancer | 自动输出 OG + Twitter Card + JSON-LD | <StatusTag type="success">开启</StatusTag> |
| Case Study CPT | 案例展示文章类型 + 4 个动态 Block | <StatusTag type="success">开启</StatusTag> |

---

## 快速开始

<InfoBox variant="info" title="环境要求">
WordPress 6.4+ / PHP 8.0+。插件安装后 SEO 和 Case Study 默认开启，无需额外配置即可使用。
</InfoBox>

---

## 插件设置

后台路径：**设置 → CCLEE Toolkit**（`/wp-admin/options-general.php?page=cclee-toolkit`）

![插件设置页](/images/docs/cclee-toolkit/s1-settings.png)

| 设置项 | 说明 |
|--------|------|
| AI Assistant | 勾选后编辑器加载 AI 面板 |
| AI API Key | 所选 AI 服务的 API Key |
| AI Provider | OpenAI / DeepSeek / Anthropic / Custom |
| API Base URL | 仅 Custom 模式需填写，以 `/v1` 结尾 |
| AI Model | 留空使用默认模型 |
| SEO Enhancer | 自动输出社交标签和结构化数据 |
| Case Study CPT | 注册案例文章类型和 Block |

---

## AI Assistant — 编辑器 AI 辅助

### 开启 AI

1. 进入 **设置 → CCLEE Toolkit**
2. 勾选 **AI Assistant**
3. 选择 Provider（如 OpenAI、DeepSeek、Anthropic 或 Custom）
4. 填写对应的 **API Key**
5. Custom 模式需额外填写 **API Base URL** 和 **Model**
6. 点击 **保存设置**

### 生成内容

1. 新建或编辑任意文章/页面
2. 右侧边栏找到 **"CCLEE AI Assistant"** 面板
3. 选择内容类型：

| 类型 | 输出格式 |
|------|----------|
| Paragraph | 段落文本 |
| Headline | 标题建议 |
| List | 列表项 |
| CTA | 行动号召文案 |
| FAQ | 问答对 |

4. 在 Topic/Prompt 输入框描述你需要的内容
5. 点击 **Generate Content**
6. 生成完成后点击 **Copy to Clipboard**，粘贴到编辑器

![AI Assistant 面板](/images/docs/cclee-toolkit/s2-ai-panel.png)

<InfoBox variant="warning" title="注意">
API Key 未填写或无效时，点击生成会提示错误。确保 Key 有效且有余额。
</InfoBox>

---

## SEO Enhancer — 自动 SEO

<InfoBox variant="success" title="无需配置">
模块默认开启，激活插件后自动生效，无需任何操作。
</InfoBox>

### 自动输出内容

所有前台页面的 `<head>` 区域自动注入：

- **Open Graph** 标签 — og:title, og:description, og:url, og:type, og:image
- **Twitter Card** 标签 — twitter:card, twitter:title, twitter:description
- **JSON-LD Schema** — 单篇文章/页面额外输出 Article 结构化数据

### 验证是否生效

1. 访问任意前台页面
2. 右键 → **查看源代码**
3. 搜索 `og:title` 或 `twitter:card`，确认标签存在
4. 单篇文章页搜索 `application/ld+json`，确认 JSON-LD 存在

![SEO 标签输出](/images/docs/cclee-toolkit/s3-seo-source.png)

---

## Case Study — 案例展示

### 创建案例

<StepBox title="1. 进入案例管理">

后台左侧菜单点击 **"Case Studies"** → **"Add New"**。

![案例列表](/images/docs/cclee-toolkit/cs-list.webp)

</StepBox>

<StepBox title="2. 填写标题">

在编辑器顶部的标题区域输入案例标题（如"智能工厂升级 - XX 制造"）。

</StepBox>

<StepBox title="3. 填写客户信息">

页面下方的 **"Case Study Details"** Meta Box 中填写：

| 字段 | 说明 | 示例 |
|------|------|------|
| Client Name | 客户名称 | TechCorp Manufacturing |
| Project Duration | 项目周期 | 8 months |
| Company Size | 公司规模 | 500+ employees |

</StepBox>

<StepBox title="4. 填写成果指标">

最多 4 组指标，每组包含 Value（值）和 Label（标签）：

| 字段 | 示例 |
|------|------|
| Metric 1 Value | +200% |
| Metric 1 Label | Revenue Growth |
| Metric 2 Value | -45% |
| Metric 2 Label | Defect Rate |

填写多组时依次往下填即可，留空的不显示。

</StepBox>

<StepBox title="5. 填写客户评价">

| 字段 | 说明 | 示例 |
|------|------|------|
| Testimonial Content | 评价内容 | 解决方案显著提升了产线效率 |
| Testimonial Author | 评价者姓名 | Zhang Wei |
| Testimonial Title | 评价者职位 | VP of Operations |

</StepBox>

<StepBox title="6. 设置行业分类">

右侧边栏的 **Industries** 面板可选择或新建行业分类（如"制造业"、"SaaS"）。

</StepBox>

<StepBox title="7. 发布">

点击右上角 **Publish** → 确认发布。

![新建案例编辑器](/images/docs/cclee-toolkit/cs-new-editor.webp)

</StepBox>

### 前台展示效果

案例详情页模板自动渲染 4 个动态 Block：

| Block | 显示内容 |
|-------|----------|
| Case Hero | 客户名称 + 公司规模 |
| Case Metrics | 成果指标网格（最多 4 组） |
| Case Testimonial | 客户评价 + 评价者信息 |
| Case Meta | 项目时长 + 团队规模 |

![前台案例详情](/images/docs/cclee-toolkit/cs-frontend.webp)

<InfoBox variant="info" title="自动渲染">
模板 `single-case-study.html` 已内置 4 个 Block，发布后自动渲染，无需手动插入 Block。
</InfoBox>

### 访问路径

| 页面 | URL 格式 |
|------|----------|
| 单篇案例 | `/case-study/{slug}/` |
| 行业归档 | `/case-industry/{term-slug}/` |
| 全部案例 | `/case-study/`（需配置固定链接） |

![案例归档页](/images/docs/cclee-toolkit/cs-archive.webp)

---

## 常见问题

### AI 生成报错怎么办？

检查三点：API Key 是否有效、Provider 是否选对、网络是否能访问 API 地址。

### SEO 标签没有输出？

确认 **SEO Enhancer** 选项已开启（默认开启）。如果用的是缓存插件，清除缓存后重试。

### 案例详情页 Block 没显示数据？

确认 Meta Box 中的字段已填写并保存。Block 从 post meta 读取数据，字段为空时不输出。

### 可以在案例编辑器中插入其他 Block 吗？

可以。模板在 post content 上方和下方渲染 Case Study Block，编辑器中插入的 Block 会显示在中间区域。

### Case Studies 菜单没出现？

确认 **Case Study CPT** 选项已开启。如果刚开启，刷新后台页面即可。
