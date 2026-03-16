# AI Agent Landing Page 设计文档

**创建时间**: 2026-03-16
**状态**: 已批准
**目标**: 为 AI Agent 产品创建独立 Landing Page，展示产品价值并引导注册

---

## 一、设计决策

| 决策项 | 选择 | 理由 |
|--------|------|------|
| 视觉风格 | 保持一致 | 复用现有 purple 主题、组件，品牌统一 |
| 页面路径 | `/agntc` | 独立页面，与文档区分 |
| 目标受众 | 技术 + 业务用户 | 内容层次分明 |

---

## 二、 页面结构

```
/agntc
├── Hero Section
│   ├── 标题: AI Agent Platform
│   ├── Slogan: 说出来就能做到，不用找开发者
│   └── CTA: 立即体验 → app.agent.ren
├── 核心功能（5 个功能卡片）
│   ├── 自然语言驱动
│   ├── 执行透明
│   ├── BYOK
│   ├── 沙箱安全
│   └── 智能记忆
├── 使用场景（3 个场景）
│   ├── 日常任务自动化
│   ├── 成本透明可控
│   └── 安全执行环境
└── CTA Section
    └── 立即体验 → app.agent.ren
```

---

## 三、 内容规划

### Hero Section

- **标题**: AI Agent Platform
- **Slogan**: 说出来就能做到，不用找开发者
- **CTA**: [立即体验](https://app.agent.ren)

### 功能卡片

| 功能 | 图标 | 标题 | 描述 |
|------|------|------|------|
| 自然语言驱动 | MessageCircleIcon | 说出来就能做到 | 用日常语言描述需求，Agent 自动理解并执行，零代码门槛 |
| 执行透明 | EyeIcon | 每一步实时可见 | 实时查看执行过程，随时叫停，完全掌控 |
| BYOK | KeyIcon | 自带 API Key | 你的 API Key 你自己保管，数据不经平台，成本透明 |
| 沙箱安全 | ShieldIcon | 三层防护 | 隔离执行环境，保护系统安全，放心使用 |
| 智能记忆 | BrainIcon | 越用越懂你 | 记住你的偏好和习惯，不用重复交代，效率倍增 |

### 使用场景

| 场景 | 描述 |
|------|------|
| 日常任务自动化 | 数据整理、报告生成、流程编排，说出来就执行 |
| 成本透明可控 | 自带 API Key，无中间商，用多少付多少 |
| 安全执行环境 | 沙箱隔离，实时可见，随时叫停 |

### CTA Section

- **文案**: 现在就开始，让 AI Agent 为你工作
- **按钮**: [免费体验](https://app.agent.ren)

---

## 四、 技术实现

### 文件结构

```
docs-site/
├── src/pages/
│   └── agntc.tsx           # [新增] Landing Page
└── src/components/
    └── FeatureCard.tsx    # [复用] 功能卡片组件
```

### 组件复用

- `FeatureCard` - 功能卡片
- `HeroBackground` - Hero 背景（可选）
- Icons - 图标组件

### 样式规范

- 使用 Tailwind CSS
- 必须使用 `dark:` 前缀
- 颜色对比度 ≥ 4.5:1

---

## 五、 验证清单

| 检查项 | 命令 |
|--------|------|
| 本地预览 | `npm run start` |
| 构建测试 | `npm run build` |
| 链接检查 | 确认 `/agntc` 可访问 |
| CTA 检查 | 确认按钮链接到 app.agent.ren |
