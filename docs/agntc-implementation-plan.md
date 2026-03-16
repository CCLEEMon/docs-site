# agntc 产品上线执行方案

**创建时间**: 2026-03-16
**状态**: 待执行
**目标**: 一次完成中英文，产品指向 app.agent.ren

---

## 一、产品信息确认

| 项目 | 中文 | 英文 |
|------|------|------|
| **产品名称** | AI Agent Platform | AI Agent Platform |
| **品牌域名** | agntc | agntc |
| **Slogan** | 说出来就能做到，不用找开发者 | Say It, Done. No developers needed. |
| **CTA 链接** | https://app.agent.ren | https://app.agent.ren |
| **定价** | MVP 免费（BYOK） | MVP Free (BYOK) |

### 核心功能（5 个）

| # | 功能 | 中文描述 | 英文描述 |
|---|------|---------|---------|
| 1 | 自然语言驱动 | 说出来就能做到，无需技术背景 | Natural language driven, no coding required |
| 2 | 执行透明 | 每一步实时可见，随时叫停 | Full transparency, every step visible |
| 3 | BYOK | 自带 API Key，数据不经平台 | Bring Your Own Key, your data stays yours |
| 4 | 沙箱安全 | 三层防护，隔离执行环境 | Sandboxed execution with triple protection |
| 5 | 智能记忆 | 越用越懂你，不用重复交代 | Smart memory, learns your preferences |

### 目标用户

| 用户群 | 痛点 | 产品价值 |
|--------|------|---------|
| 非技术业务方 | 每次改需求花 $300-800 找人 | 自己对话搞定，$15/月 |
| Manus 不满用户 | 黑盒执行、计费不透明 | 透明执行 + BYOK |
| OpenClaw 用户 | 配置复杂、安全风险 | Chat UI 零门槛 + 沙箱 |

---

## 二、文件结构

```
docs-site/
├── src/pages/
│   └── products.tsx                    # [修改] 新增 agntc 卡片
├── docs/
│   ├── agntc.md                        # [新增] 中文产品文档
│   └── agntc-updates.md                # [新增] 中文更新日志
├── i18n/en/docusaurus-plugin-content-docs/current/
│   ├── agntc.md                        # [新增] 英文产品文档
│   └── agntc-updates.md                # [新增] 英文更新日志
├── sidebars.ts                         # [修改] 新增分类
└── static/images/
    └── agntc-*.png                     # [新增] 产品截图（如需）
```

---

## 三、执行任务清单

### 任务 1：sidebars.ts 新增分类

**文件**: `sidebars.ts`

```ts
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'AI运营',
      items: ['ai-analytics', 'ai-analytics-updates'],
    },
    {
      type: 'category',
      label: '浏览器插件',
      items: ['browser-plugin', 'browser-plugin-updates'],
    },
    {
      type: 'category',
      label: 'AI客服',
      items: ['customer-service', 'ai-customer-service-updates'],
    },
    {
      type: 'category',
      label: 'AI Agent',
      items: ['agntc', 'agntc-updates'],
    },
  ],
};
```

### 任务 2：products.tsx 新增卡片

**文件**: `src/pages/products.tsx`

在现有 3 个产品卡片后新增第 4 个：

```tsx
<Link
  to="/docs/agntc"
  id="agntc"
  className="animate-enter group p-8 rounded-2xl bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 text-inherit block shadow-md hover:shadow-xl hover:shadow-purple hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 scroll-mt-20"
  style={{ animationDelay: '0.4s' }}
>
  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:shadow-purple group-hover:rotate-6 transition-all duration-300">
    <ZapIcon size={32} className="text-white" />
  </div>
  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
    <Translate id="homepage.products.agntc.title">AI Agent</Translate>
  </h3>
  <div className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-5">
    <Translate id="homepage.products.agntc.description">
      自然语言驱动的 AI Agent，说出来就能做到。自带 API Key，执行透明，数据自主。
    </Translate>
  </div>
  <div className="text-purple-700 dark:text-purple-400 font-semibold text-sm flex items-center gap-1.5">
    <ZapIcon size={16} />
    <Translate id="homepage.products.agntc.cta">访问 app.agent.ren</Translate>
  </div>
</Link>
```

### 任务 3：中文产品文档

**文件**: `docs/agntc.md`

**内容结构**:
```yaml
---
title: AI Agent Platform
description: 自然语言驱动的 AI Agent 平台 - 说出来就能做到，不用找开发者
project: agntc
schema: Article
date: 2026-03-16
rag: true
rag_tags: ["AI Agent", "自动化", "BYOK", "自然语言"]
---
```

**正文结构**:
1. 标题 + 一句话定位 + CTA 按钮
2. 核心功能（5个）
3. 为什么选择（对比竞品）
4. 使用方式
5. 定价说明
6. 常见问题
7. 更新日志

### 任务 4：英文产品文档

**文件**: `i18n/en/docusaurus-plugin-content-docs/current/agntc.md`

翻译中文文档，保持结构一致。

### 任务 5：更新日志文件

**文件**: `docs/agntc-updates.md`

```markdown
---
title: AI Agent 更新日志
---

## MVP (2026-03)

- 首次发布
- 自然语言驱动执行
- SSE 实时流式输出
- BYOK 支持
- 会话记忆 + 短期记忆
```

---

## 四、验证清单

| 检查项 | 命令 |
|--------|------|
| 本地预览 | `npm run start` |
| 构建测试 | `npm run build` |
| 中文站构建 | `npm run build:ren` |
| 英文站构建 | `npm run build:ai` |
| 链接检查 | 确认 `/docs/agntc` 可访问 |
| CTA 检查 | 确认按钮链接到 app.agent.ren |

---

## 五、部署步骤

```bash
# 1. 本地验证
cd /home/aptop/workspace/projects/docs-site
npm run start

# 2. 构建测试
npm run build

# 3. 部署中文站
npm run build:ren
# 同步到服务器...

# 4. 部署英文站
npm run build:ai
# Vercel 自动部署...
```

---

## 六、后续优化（非 MVP）

- [ ] 独立落地页 `/agntc`
- [ ] 产品截图/演示视频
- [ ] SEO 优化（独立 meta）
- [ ] 用户案例

---

*执行方案 v1.0 · 2026-03-16*
