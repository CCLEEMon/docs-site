# AI 工具导航站设计文档

> 创建日期: 2026-03-16
> 状态: 已批准

## 1. 产品定位

**核心价值**: 全球 AI 工具信息桥梁，帮助中国用户发现海外工具，帮助海外用户发现中国工具。

**商业模式**: 推广链接变现 + 评测博客导流。

**目标用户**: 全球用户，中等规模收录 (30-50 个工具)。

## 2. 页面结构

**路由**: `/tool`

**入口位置**:
- 导航栏: 与"产品"、"案例"并列
- 页脚: 网址栏区域

### 页面布局

```
┌─────────────────────────────────────────────────────────┐
│  🔍 搜索 AI 工具...                                     │
├─────────────────────────────────────────────────────────┤
│  [全部] [写作与内容] [图像与设计] [视频与音频]          │
│  [编程与开发] [自动化工作流] [电商运营] [AI模型API]     │
├─────────────────────────────────────────────────────────┤
│  地区: [ ]国内 [ ]海外 [ ]全球    成本: [全部 ▼]       │
├─────────────────────────────────────────────────────────┤
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │ ⭐推荐  │ │         │ │         │ │         │       │
│  │ [Logo]  │ │ [Logo]  │ │ [Logo]  │ │ [Logo]  │       │
│  │ ChatGPT │ │ Midjour │ │ Claude  │ │ 文心... │       │
│  │ 描述... │ │ 描述... │ │ 描述... │ │ 描述... │       │
│  │ 🌐全球  │ │ 🌍海外  │ │ 🌍海外  │ │ 🇨🇳国内 │       │
│  │ 💰日常  │ │ 💰💰专业│ │ 💰💰高级│ │ 💰日常  │       │
│  │[查看评测]│ │         │ │[查看评测]│ │         │       │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
└─────────────────────────────────────────────────────────┘
```

### 卡片结构

```
┌─────────────────────────────────────┐
│  [Logo]  工具名称                    │
│  一句话描述...                       │
│  🌐全球  💰💰专业  ⭐推荐            │
│                                     │
│  [查看评测 →]  ← 仅当有 reviewUrl 时显示
└─────────────────────────────────────┘
```

## 3. 分类体系

### 7 个主分类

| ID | 名称 | 英文名 | 说明 |
|----|------|--------|------|
| `writing` | 写作与内容 | Writing & Content | 文案、翻译、笔记 |
| `image-design` | 图像与设计 | Image & Design | 绘图、设计、修图 |
| `video-audio` | 视频与音频 | Video & Audio | 剪辑、配音、音乐 |
| `dev-coding` | 编程与开发 | Dev & Coding | 代码助手、API、基础设施 |
| `automation` | 自动化工作流 | Automation | RPA、集成、机器人 |
| `ecommerce` | 电商运营 | E-commerce | 选品、客服、营销 |
| `ai-api` | AI模型API | AI Model API | LLM API、向量服务 |

### 3 个筛选维度

| 维度 | 选项 | 说明 |
|------|------|------|
| 地区 | 🇨🇳国内 / 🌍海外 / 🌐全球 | 工具服务区域 |
| 成本 | 💰日常 / 💰💰专业 / 💰💰💰高级 | 价格层级 |
| 推荐 | ⭐推荐 | 重点推广工具 |

## 4. 数据结构

**文件位置**: `src/data/tools.json`

```json
{
  "categories": [
    { "id": "writing", "name": "写作与内容", "nameEn": "Writing & Content" },
    { "id": "image-design", "name": "图像与设计", "nameEn": "Image & Design" },
    { "id": "video-audio", "name": "视频与音频", "nameEn": "Video & Audio" },
    { "id": "dev-coding", "name": "编程与开发", "nameEn": "Dev & Coding" },
    { "id": "automation", "name": "自动化工作流", "nameEn": "Automation" },
    { "id": "ecommerce", "name": "电商运营", "nameEn": "E-commerce" },
    { "id": "ai-api", "name": "AI模型API", "nameEn": "AI Model API" }
  ],
  "regions": [
    { "id": "china", "label": "🇨🇳国内", "labelEn": "🇨🇳 China" },
    { "id": "overseas", "label": "🌍海外", "labelEn": "🌍 Overseas" },
    { "id": "global", "label": "🌐全球", "labelEn": "🌐 Global" }
  ],
  "pricings": [
    { "id": "tier1", "label": "💰日常", "labelEn": "💰 Budget" },
    { "id": "tier2", "label": "💰💰专业", "labelEn": "💰💰 Pro" },
    { "id": "tier3", "label": "💰💰💰高级", "labelEn": "💰💰💰 Premium" }
  ],
  "tools": [
    {
      "id": "chatgpt",
      "name": "ChatGPT",
      "logo": "chatgpt.png",
      "description": "OpenAI 对话式 AI，写作编程全能助手",
      "descriptionEn": "OpenAI conversational AI, all-in-one assistant for writing and coding",
      "category": "writing",
      "region": "global",
      "pricing": "tier1",
      "featured": true,
      "affiliateUrl": "https://...",
      "reviewUrl": "/blog/chatgpt-review"
    }
  ]
}
```

### 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | ✅ | 唯一标识 |
| `name` | string | ✅ | 工具名称 |
| `logo` | string | ✅ | Logo 文件名 (存放在 `static/img/tools/`) |
| `description` | string | ✅ | 中文描述 (20-30字) |
| `descriptionEn` | string | ✅ | 英文描述 |
| `category` | string | ✅ | 分类 ID |
| `region` | string | ✅ | 地区 ID: china/overseas/global |
| `pricing` | string | ✅ | 成本 ID: tier1/tier2/tier3 |
| `featured` | boolean | ❌ | 是否推荐 (默认 false) |
| `affiliateUrl` | string | ✅ | 推广链接 |
| `reviewUrl` | string | ❌ | 评测博客链接 (无则不显示按钮) |

## 5. 交互行为

| 操作 | 行为 |
|------|------|
| 点击卡片主体 | 跳转 `affiliateUrl`（新标签页 `_blank`） |
| 点击"查看评测"按钮 | 跳转 `reviewUrl`（站内路由） |
| 搜索框输入 | 实时过滤工具名称/描述（前端过滤） |
| 分类 Tab 切换 | 切换分类，保留当前筛选状态 |
| 筛选器 | 多选组合过滤（地区可多选，成本单选） |

## 6. 文件清单

| 文件 | 说明 |
|------|------|
| `src/pages/tool.tsx` | 导航站页面组件 |
| `src/data/tools.json` | 工具数据 |
| `static/img/tools/` | 工具 Logo 图片目录 |
| `i18n/zh/docusaurus-plugin-content-pages/` | 中文翻译 |
| `i18n/en/docusaurus-plugin-content-pages/` | 英文翻译 |
| `docusaurus.config.ts` | 导航栏 + 页脚配置修改 |

## 7. 国际化

复用现有 i18n 体系:

| 元素 | 中文 | 英文 |
|------|------|------|
| 页面标题 | AI 工具导航 | AI Tools Directory |
| 页面副标题 | 全球 AI 工具精选 | Curated Global AI Tools |
| 搜索占位 | 搜索 AI 工具... | Search AI tools... |
| 查看评测 | 查看评测 → | Read Review → |
| 全部 | 全部 | All |
| 筛选地区 | 地区 | Region |
| 筛选成本 | 成本 | Pricing |

## 8. 注意事项

- 基础设施工具（如 Hostinger）合并到"编程与开发"分类，通过 `featured: true` 确保曝光
- 推广链接使用 `rel="noopener noreferrer"` 确保安全
- Logo 图片建议尺寸: 64x64 或 128x128，格式: PNG/WebP
