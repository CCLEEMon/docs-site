# AI Development Guide

## Tech Stack

```yaml
nextra: 4.6.1
nextjs: 15.1.9
react: 19.2.4
tailwindcss: 3.4.17
router: App Router only
ports:
  frontend: 3004
  backend: 3005
```

## Project Structure

```
docs-site/
├── frontend/
│   ├── app/
│   │   ├── layout.jsx              ← 根布局
│   │   ├── mdx-components.jsx      ← MDX组件映射
│   │   ├── globals.css             ← 全局样式
│   │   ├── _meta.js                ← 导航配置
│   │   ├── i18n.ts                 ← i18n类型定义
│   │   ├── page.mdx                ← 首页
│   │   ├── ai-analytics/
│   │   │   └── page.mdx            ← AI分析页
│   │   ├── browser-plugin/
│   │   │   └── page.mdx            ← 浏览器插件页
│   │   ├── customer-service/
│   │   │   └── page.mdx            ← 客服页
│   │   ├── guide/
│   │   │   └── page.mdx            ← 指南页
│   │   ├── chat/
│   │   │   ├── page.jsx            ← 聊天页
│   │   │   └── components/
│   │   │       └── ChatWidget.jsx  ← 聊天组件
│   │   ├── components/             ← 自定义组件
│   │   │   ├── Icons.jsx           ← 图标库
│   │   │   ├── CustomFooter.jsx    ← 页脚
│   │   │   ├── FloatingChat.jsx    ← 悬浮聊天
│   │   │   ├── NavbarMenu.jsx      ← 导航菜单
│   │   │   ├── LocaleSwitch.jsx    ← 语言切换
│   │   │   ├── TranslationProvider.jsx ← i18n Provider
│   │   │   ├── HideCopyButton.jsx  ← 隐藏复制按钮
│   │   │   ├── HoverCard.jsx       ← 悬停卡片
│   │   │   ├── NavbarActions.jsx   ← 导航操作
│   │   │   ├── ThemeSwitch.jsx     ← 主题切换
│   │   │   └── page.mdx            ← 组件文档
│   │   ├── lib/
│   │   │   └── i18n.js             ← i18n工具函数
│   │   └── messages/               ← i18n翻译文件
│   │       ├── zh.json
│   │       └── en.json
│   ├── tailwind.config.js          ← Tailwind配置
│   ├── postcss.config.js           ← PostCSS配置
│   ├── next.config.mjs             ← Next.js配置
│   └── package.json                ← 前端依赖
├── backend/
│   ├── server.js                   ← Express API
│   └── package.json                ← 后端依赖
├── package.json                    ← Monorepo根
└── DEV.md                          ← 开发文档
```

## Nextra 4 Core APIs

```jsx
// layout.jsx (必需)
import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export default async function RootLayout({ children }) {
  return <html suppressHydrationWarning><body>
    <Layout navbar={<Navbar logo={<b>Logo</b>} />} pageMap={await getPageMap()}>
      {children}
    </Layout>
  </body></html>
}

// mdx-components.jsx (必需)
import { useMDXComponents as getTheme } from 'nextra-theme-docs'
export function useMDXComponents(components) { return getTheme(components) }
```

## MDX Frontmatter

```yaml
---
title: Page Title
description: Description
---
```

## Navigation Config (`_meta.js`)

```js
export default {
  docs: { type: 'page', items: { index: 'Start' } }
}
```

## Custom Components

| Component | Location | Purpose |
|-----------|----------|---------|
| Icons | `app/components/Icons.jsx` | Lucide React封装 |
| NavbarMenu | `app/components/NavbarMenu.jsx` | 导航菜单 |
| LocaleSwitch | `app/components/LocaleSwitch.jsx` | 语言切换 |
| FloatingChat | `app/components/FloatingChat.jsx` | 客服聊天 |
| CustomFooter | `app/components/CustomFooter.jsx` | 页脚 |

## i18n

```yaml
Locales: zh (default), en
Storage: Cookie (locale=zh\|en)
Files: messages/{locale}.json
Helper: app/lib/i18n.js
Types: app/i18n.ts
```

## Backend API

```
GET  /api/health           → { status: 'ok', timestamp }
POST /api/customer-service → { success, data: { receivedMessage, timestamp } }
```

## Rules

### DO
- Nextra theme组件优先
- Tailwind CSS样式
- `app/` 目录结构
- `next/navigation` useRouter
- 交互组件必须 `'use client'`
- Canvas/动画组件必须 `'use client'`

### DO NOT
- `pages/` 目录
- `theme.config.js`
- `next/router`
- CSS-in-JS库 (RSC问题)
- `document`/`window` 在`useEffect`外
- 服务端组件使用浏览器API

## Client Components

**必须添加 `'use client'` 的组件：**
- Canvas渲染 (粒子、图表)
- 动画 (IntersectionObserver、requestAnimationFrame)
- 事件监听 (click、scroll、resize)
- 浏览器API (window、document、localStorage)
- React hooks (useState、useEffect、useRef)

**示例：**
```jsx
'use client'  // 文件第一行

export default function AnimatedComponent() {
  // 可以使用 hooks 和浏览器 API
}
```

**动态导入 (禁用SSR)：**
```jsx
// page.mdx
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(
  () => import('./components/ParticleBackground'),
  { ssr: false }
)
```

## MDX Notes

**HTML标签**:
- AVOID `<p>` - MDX自动包裹导致嵌套
- USE `<div>` - 文本块
- USE `<ul><li>` - 列表

**SVG**:
- `d="..."` 属性值必须在单行内，无换行符

**样式**:
- USE Tailwind `className`
- ACCEPT 静态 `style={{}}` (如 animationDelay)

**JSX表达式**:
- 所有 `{}` 内必须是合法JS表达式
- AVOID 单独 `<` `>` 符号，用 `&lt;` `&gt;`
- 模板字符串必须闭合 `` `...` ``
- 对象/数组字面量必须完整: `{key: 'value'}` `[1, 2, 3]`

**常见Acorn解析错误**:
```
Could not parse expression with acorn
```
原因: 
- 未转义的 `<` `>` 符号
- 不完整的模板字符串
- 花括号不匹配 `{` `}`
- 对象字面量语法错误

## Known Issues

| Issue | Solution |
|-------|----------|
| Next.js 16 + Nextra 4 | 使用 Next.js 15.1.9 |
| Turbopack MDX解析失败 | 使用 webpack |
| Hydration mismatch | 交互组件加 `'use client'` 或用 `dynamic(..., {ssr: false})` |

## Commands

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm start        # 生产模式运行
```