# AI 工具导航站 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 创建 AI 工具导航单页面 `/tool`，支持分类筛选、搜索、双点击区卡片，通过推广链接变现。

**Architecture:** Docusaurus 静态页面 + JSON 数据文件。前端实现搜索和筛选逻辑，卡片主体跳推广链接，"查看评测"按钮跳博客。

**Tech Stack:** React, TypeScript, TailwindCSS, Docusaurus 3.9

---

## Task 1: 创建工具数据文件

**Files:**
- Create: `src/data/tools.json`

**Step 1: 创建数据目录和文件**

```bash
mkdir -p /home/aptop/workspace/projects/docs-site/src/data
```

**Step 2: 写入初始数据结构**

创建 `src/data/tools.json`:

```json
{
  "categories": [
    { "id": "all", "name": "全部", "nameEn": "All" },
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
      "affiliateUrl": "https://chat.openai.com"
    },
    {
      "id": "midjourney",
      "name": "Midjourney",
      "logo": "midjourney.png",
      "description": "AI 图像生成，艺术创作首选工具",
      "descriptionEn": "AI image generation, top choice for artistic creation",
      "category": "image-design",
      "region": "overseas",
      "pricing": "tier2",
      "featured": true,
      "affiliateUrl": "https://midjourney.com"
    },
    {
      "id": "claude",
      "name": "Claude",
      "logo": "claude.png",
      "description": "Anthropic 对话 AI，长文本理解出色",
      "descriptionEn": "Anthropic conversational AI, excellent at long context",
      "category": "writing",
      "region": "overseas",
      "pricing": "tier2",
      "featured": false,
      "affiliateUrl": "https://claude.ai"
    },
    {
      "id": "wenxin",
      "name": "文心一言",
      "logo": "wenxin.png",
      "description": "百度大模型，中文理解能力强",
      "descriptionEn": "Baidu's LLM, strong Chinese language understanding",
      "category": "writing",
      "region": "china",
      "pricing": "tier1",
      "featured": false,
      "affiliateUrl": "https://yiyan.baidu.com"
    },
    {
      "id": "cursor",
      "name": "Cursor",
      "logo": "cursor.png",
      "description": "AI 代码编辑器，编程效率倍增",
      "descriptionEn": "AI code editor, multiply your coding productivity",
      "category": "dev-coding",
      "region": "global",
      "pricing": "tier2",
      "featured": true,
      "affiliateUrl": "https://cursor.sh"
    },
    {
      "id": "hostinger",
      "name": "Hostinger",
      "logo": "hostinger.png",
      "description": "高性价比云主机，新手建站首选",
      "descriptionEn": "Affordable cloud hosting, best for beginners",
      "category": "dev-coding",
      "region": "global",
      "pricing": "tier1",
      "featured": true,
      "affiliateUrl": "https://hostinger.com",
      "reviewUrl": "/blog/hostinger-review"
    }
  ]
}
```

**Step 3: 验证 JSON 格式**

```bash
cd /home/aptop/workspace/projects/docs-site && cat src/data/tools.json | jq . > /dev/null && echo "JSON valid"
```

Expected: `JSON valid`

**Step 4: Commit**

```bash
git add src/data/tools.json
git commit -m "feat: 添加 AI 工具导航数据文件

- 7 个分类 + 全部
- 3 个地区选项
- 3 个成本层级
- 6 个示例工具数据"
```

---

## Task 2: 创建工具 Logo 占位目录

**Files:**
- Create: `static/img/tools/.gitkeep`

**Step 1: 创建目录**

```bash
mkdir -p /home/aptop/workspace/projects/docs-site/static/img/tools
```

**Step 2: 添加 .gitkeep**

```bash
touch /home/aptop/workspace/projects/docs-site/static/img/tools/.gitkeep
```

**Step 3: Commit**

```bash
git add static/img/tools/.gitkeep
git commit -m "chore: 创建工具 Logo 图片目录"
```

---

## Task 3: 创建导航站页面组件

**Files:**
- Create: `src/pages/tool.tsx`

**Step 1: 创建页面组件**

创建 `src/pages/tool.tsx`:

```tsx
import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import { translate } from '@docusaurus/Translate';
import toolsData from '@site/src/data/tools.json';

type Tool = typeof toolsData.tools[0];
type Category = typeof toolsData.categories[0];

export default function ToolPage(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string>('');

  // 获取当前语言
  const isZh = typeof window !== 'undefined' && window.location.pathname.startsWith('/en') === false;

  // 筛选逻辑
  const filteredTools = useMemo(() => {
    return toolsData.tools.filter((tool) => {
      // 搜索过滤
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const name = tool.name.toLowerCase();
        const desc = isZh ? tool.description : tool.descriptionEn;
        if (!name.includes(query) && !desc.toLowerCase().includes(query)) {
          return false;
        }
      }

      // 分类过滤
      if (selectedCategory !== 'all' && tool.category !== selectedCategory) {
        return false;
      }

      // 地区过滤
      if (selectedRegions.length > 0 && !selectedRegions.includes(tool.region)) {
        return false;
      }

      // 成本过滤
      if (selectedPricing && tool.pricing !== selectedPricing) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedRegions, selectedPricing, isZh]);

  // 地区筛选切换
  const toggleRegion = (regionId: string) => {
    setSelectedRegions((prev) =>
      prev.includes(regionId)
        ? prev.filter((r) => r !== regionId)
        : [...prev, regionId]
    );
  };

  // 获取标签显示文本
  const getRegionLabel = (regionId: string) => {
    const region = toolsData.regions.find((r) => r.id === regionId);
    return isZh ? region?.label : region?.labelEn;
  };

  const getPricingLabel = (pricingId: string) => {
    const pricing = toolsData.pricings.find((p) => p.id === pricingId);
    return isZh ? pricing?.label : pricing?.labelEn;
  };

  const getCategoryName = (category: Category) => {
    return isZh ? category.name : category.nameEn;
  };

  const title = translate({ id: 'tool.page.title', message: 'AI 工具导航' });
  const description = translate({ id: 'tool.page.description', message: '全球 AI 工具精选' });

  return (
    <Layout title={title} description={description}>
      <main className="max-w-[1400px] mx-auto px-4 py-12">
        {/* 页面标题 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          <Translate id="tool.page.title">AI 工具导航</Translate>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          <Translate id="tool.page.subtitle">全球 AI 工具精选，发现国内外优质 AI 工具</Translate>
        </p>

        {/* 搜索框 */}
        <div className="mb-6">
          <input
            type="text"
            placeholder={translate({ id: 'tool.search.placeholder', message: '搜索 AI 工具...' })}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-80 px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-colors"
          />
        </div>

        {/* 分类 Tab */}
        <div className="flex flex-wrap gap-2 mb-6">
          {toolsData.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div>

        {/* 筛选器 */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
          {/* 地区筛选 */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              <Translate id="tool.filter.region">地区</Translate>:
            </span>
            {toolsData.regions.map((region) => (
              <button
                key={region.id}
                onClick={() => toggleRegion(region.id)}
                className={`px-3 py-1 rounded text-sm transition-all ${
                  selectedRegions.includes(region.id)
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-500'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-transparent'
                }`}
              >
                {isZh ? region.label : region.labelEn}
              </button>
            ))}
          </div>

          {/* 成本筛选 */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              <Translate id="tool.filter.pricing">成本</Translate>:
            </span>
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-3 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 outline-none"
            >
              <option value="">
                <Translate id="tool.filter.pricing.all">全部</Translate>
              </option>
              {toolsData.pricings.map((pricing) => (
                <option key={pricing.id} value={pricing.id}>
                  {isZh ? pricing.label : pricing.labelEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 工具数量 */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {filteredTools.length} <Translate id="tool.count.tools">个工具</Translate>
        </p>

        {/* 工具卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} isZh={isZh} getRegionLabel={getRegionLabel} getPricingLabel={getPricingLabel} />
          ))}
        </div>

        {/* 无结果提示 */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            <Translate id="tool.noresults">没有找到匹配的工具</Translate>
          </div>
        )}
      </main>
    </Layout>
  );
}

// 工具卡片组件
function ToolCard({
  tool,
  isZh,
  getRegionLabel,
  getPricingLabel,
}: {
  tool: Tool;
  isZh: boolean;
  getRegionLabel: (id: string) => string | undefined;
  getPricingLabel: (id: string) => string | undefined;
}) {
  const description = isZh ? tool.description : tool.descriptionEn;

  return (
    <div className="group relative bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300">
      {/* 卡片主体 - 点击跳推广链接 */}
      <a
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* 推荐标签 */}
        {tool.featured && (
          <span className="absolute top-3 right-3 text-sm">⭐</span>
        )}

        {/* Logo + 名称 */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center overflow-hidden">
            <img
              src={`/img/tools/${tool.logo}`}
              alt={tool.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/img/logo.png';
              }}
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {tool.name}
          </h3>
        </div>

        {/* 描述 */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            {getRegionLabel(tool.region)}
          </span>
          <span className="px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            {getPricingLabel(tool.pricing)}
          </span>
        </div>
      </a>

      {/* 查看评测按钮 - 独立点击区域 */}
      {tool.reviewUrl && (
        <a
          href={tool.reviewUrl}
          className="mt-4 block text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
        >
          <Translate id="tool.card.readReview">查看评测</Translate> →
        </a>
      )}
    </div>
  );
}
```

**Step 2: 验证 TypeScript 编译**

```bash
cd /home/aptop/workspace/projects/docs-site && npx tsc --noEmit src/pages/tool.tsx 2>&1 | head -20
```

Expected: 无错误或仅有 React 导入警告

**Step 3: 本地启动验证**

```bash
cd /home/aptop/workspace/projects/docs-site && npm run start -- --port 3004 &
sleep 10
curl -s http://localhost:3004/tool | grep -o '<title>.*</title>' | head -1
```

Expected: `<title>AI 工具导航 | ...</title>`

**Step 4: Commit**

```bash
git add src/pages/tool.tsx
git commit -m "feat: 创建 AI 工具导航页面组件

- 搜索框实时过滤
- 7 个分类 Tab
- 地区 + 成本筛选器
- 卡片双点击区：主体跳推广链接，评测按钮跳博客
- 响应式网格布局"
```

---

## Task 4: 添加国际化翻译

**Files:**
- Modify: `i18n/zh/code.json`
- Modify: `i18n/en/code.json`

**Step 1: 添加中文翻译**

在 `i18n/zh/code.json` 中添加:

```json
{
  "tool.page.title": {
    "message": "AI 工具导航",
    "description": "AI Tools page title"
  },
  "tool.page.subtitle": {
    "message": "全球 AI 工具精选，发现国内外优质 AI 工具",
    "description": "AI Tools page subtitle"
  },
  "tool.search.placeholder": {
    "message": "搜索 AI 工具...",
    "description": "Search input placeholder"
  },
  "tool.filter.region": {
    "message": "地区",
    "description": "Region filter label"
  },
  "tool.filter.pricing": {
    "message": "成本",
    "description": "Pricing filter label"
  },
  "tool.filter.pricing.all": {
    "message": "全部",
    "description": "All pricing option"
  },
  "tool.count.tools": {
    "message": "个工具",
    "description": "Tools count suffix"
  },
  "tool.noresults": {
    "message": "没有找到匹配的工具",
    "description": "No results message"
  },
  "tool.card.readReview": {
    "message": "查看评测",
    "description": "Read review button text"
  }
}
```

**Step 2: 添加英文翻译**

在 `i18n/en/code.json` 中添加:

```json
{
  "tool.page.title": {
    "message": "AI Tools Directory",
    "description": "AI Tools page title"
  },
  "tool.page.subtitle": {
    "message": "Curated global AI tools, discover the best AI tools worldwide",
    "description": "AI Tools page subtitle"
  },
  "tool.search.placeholder": {
    "message": "Search AI tools...",
    "description": "Search input placeholder"
  },
  "tool.filter.region": {
    "message": "Region",
    "description": "Region filter label"
  },
  "tool.filter.pricing": {
    "message": "Pricing",
    "description": "Pricing filter label"
  },
  "tool.filter.pricing.all": {
    "message": "All",
    "description": "All pricing option"
  },
  "tool.count.tools": {
    "message": "tools",
    "description": "Tools count suffix"
  },
  "tool.noresults": {
    "message": "No matching tools found",
    "description": "No results message"
  },
  "tool.card.readReview": {
    "message": "Read Review",
    "description": "Read review button text"
  }
}
```

**Step 3: 验证 JSON 格式**

```bash
cd /home/aptop/workspace/projects/docs-site && cat i18n/zh/code.json | jq . > /dev/null && echo "zh OK"
cat i18n/en/code.json | jq . > /dev/null && echo "en OK"
```

Expected: `zh OK` 和 `en OK`

**Step 4: Commit**

```bash
git add i18n/zh/code.json i18n/en/code.json
git commit -m "feat: 添加 AI 工具导航页面国际化翻译

- 中英文页面标题、副标题
- 搜索框、筛选器标签
- 无结果提示、评测按钮文本"
```

---

## Task 5: 添加导航栏入口

**Files:**
- Modify: `docusaurus.config.ts`

**Step 1: 添加导航栏项**

在 `docusaurus.config.ts` 的 `navbar.items` 数组中，在"产品"后面添加"工具"入口:

```typescript
// 在 items 数组中找到 { to: '/products', label: '产品', position: 'left' },
// 在其后添加:
{ to: '/tool', label: '工具', position: 'left' },
```

**Step 2: 添加页脚链接**

在 `footer.links` 中添加:

```typescript
{
  title: '网址',
  items: [
    // 现有项...
    {
      label: 'AI 工具',
      to: '/tool',
    },
  ],
},
```

**Step 3: 验证配置**

```bash
cd /home/aptop/workspace/projects/docs-site && npx tsc --noEmit docusaurus.config.ts 2>&1 | head -5
```

Expected: 无错误

**Step 4: Commit**

```bash
git add docusaurus.config.ts
git commit -m "feat: 添加 AI 工具导航入口

- 导航栏新增"工具"入口
- 页脚网址栏新增"AI 工具"链接"
```

---

## Task 6: 构建验证

**Files:**
- None (验证步骤)

**Step 1: 运行构建**

```bash
cd /home/aptop/workspace/projects/docs-site && npm run build 2>&1 | tail -30
```

Expected: 构建成功，无错误

**Step 2: 验证页面生成**

```bash
ls -la /home/aptop/workspace/projects/docs-site/build/tool/
```

Expected: 存在 `index.html`

**Step 3: Commit (如果有修复)**

```bash
# 仅当有修改时
git add -A && git commit -m "fix: 修复构建问题"
```

---

## Task 7: 添加示例工具 Logo

**Files:**
- Create: `static/img/tools/*.png`

**Step 1: 下载/添加 Logo 占位图**

说明：实际 Logo 需要从各工具官网获取，此处使用占位图。

```bash
# 创建占位图说明文件
echo "Logo files should be placed here:
- chatgpt.png
- midjourney.png
- claude.png
- wenxin.png
- cursor.png
- hostinger.png

Recommended size: 64x64 or 128x128, format: PNG/WebP" > /home/aptop/workspace/projects/docs-site/static/img/tools/README.md
```

**Step 2: Commit**

```bash
git add static/img/tools/README.md
git commit -m "docs: 添加工具 Logo 目录说明"
```

---

## Summary

**完成后的文件结构:**

```
docs-site/
├── src/
│   ├── data/
│   │   └── tools.json          # 工具数据
│   └── pages/
│       └── tool.tsx            # 导航页面
├── static/
│   └── img/
│       └── tools/              # Logo 图片目录
├── i18n/
│   ├── zh/code.json            # 中文翻译 (已更新)
│   └── en/code.json            # 英文翻译 (已更新)
├── docusaurus.config.ts        # 导航栏+页脚配置 (已更新)
└── docs/plans/
    ├── 2026-03-16-ai-tools-directory-design.md  # 设计文档
    └── 2026-03-16-ai-tools-directory.md         # 本实施计划
```

**验证清单:**
- [ ] `/tool` 页面可访问
- [ ] 搜索功能正常
- [ ] 分类切换正常
- [ ] 筛选器组合正常
- [ ] 卡片点击跳推广链接
- [ ] 评测按钮跳博客
- [ ] 中英文切换正常
- [ ] 导航栏显示"工具"入口
- [ ] 页脚显示"AI 工具"链接
- [ ] 构建无错误
