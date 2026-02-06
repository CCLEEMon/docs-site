# AI Development Guide

## Project Structure

```
docs-site/               ← 项目根目录
├── frontend/           ← Nextra应用
│   ├── app/           ← MDX页面
│   │   ├── components/  ← 自定义组件
│   │   ├── lib/         ← 工具函数
│   │   └── messages/    ← i18n翻译文件
│   ├── next.config.mjs
│   └── package.json
├── backend/            ← Express API
│   ├── server.js
│   └── package.json
└── package.json        ← Monorepo
```

## Tech Stack

```yaml
nextra: 4.6.1
nextjs: 15.1.9
react: 19.2.4
router: App Router only
ports:
  frontend: 3004
  backend: 3005
```

## Nextra 4 Core API

### layout.jsx (Required)

```jsx
import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export default async function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Layout
          navbar={<Navbar logo={<b>Site</b>} />}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
```

### mdx-components.jsx

```jsx
import { useMDXComponents as getTheme } from 'nextra-theme-docs'
export function useMDXComponents(components) {
  return getTheme(components)
}
```

### MDX Frontmatter

```yaml
---
title: Page Title
description: Description
---
```

### _meta.global

```js
export default {
  docs: {
    type: 'page',
    items: { index: 'Start' }
  }
}
```

## Breaking Changes from v3

| v3 | v4 |
|----|-----|
| `pages/` | `app/` |
| `theme.config` | Component props |
| FlexSearch | Pagefind |
| `import { useRouter } from 'next/router'` | `import { useRouter } from 'next/navigation'` |

## UI Components

### Built-in (nextra-theme-docs)
- Callout, Card, Steps, Tabs, FileTree
- Code blocks with syntax highlighting

### Compatible Libraries
- Tailwind CSS (pre-configured)
- shadcn/ui (Radix + Tailwind)
- Radix UI Primitives
- Headless UI
- Lucide React (icons)

### Layout Components
```jsx
import { Layout, Navbar, Sidebar } from 'nextra-theme-docs'
```

## UI Development Rules
- ✅ Use Nextra theme components first
- ✅ Add shadcn/ui for custom components
- ✅ Tailwind for styling
- ❌ Avoid CSS-in-JS libraries (RSC issues)

## DO NOT

- ❌ Create `pages/` directory
- ❌ Create `theme.config.js`
- ❌ Use `themeSwitch` prop on Layout (use `darkMode` instead)
- ❌ Use `next/router`
- ❌ Use Nextra 2/3 APIs
- ❌ Access `document`/`window` outside `useEffect` (SSR error)

## Project-Specific Components

### Custom Components (`app/components/`)
- **Icons** - 图标组件库 (使用 Lucide React)
  - PluginIcon, AIIcon, ZapIcon, ShieldIcon 等
- **NavbarMenu** - 导航菜单 + 语言切换入口
- **LocaleSwitch** - 语言切换器 (zh/en)
- **TranslationProvider** - i18n Context Provider
- **FloatingChat** - 客服聊天悬浮窗
- **HideCopyButton** - 隐藏代码块复制按钮

### i18n Implementation
```yaml
Locales: zh (default), en
Storage: Cookie (locale=zh|en)
Files: messages/{locale}.json
Helper: app/lib/i18n.js
Types: app/i18n.ts
```

### Backend API (`backend/server.js`)
```
GET  /api/health           → { status: 'ok', timestamp }
POST /api/customer-service → { success, data: { receivedMessage, timestamp } }
```

## File Organization
```yaml
Pages:       app/{route}/page.mdx
Components:  app/components/*.{jsx,js}
Utils:       app/lib/*.{js,ts}
i18n Types:  app/i18n.ts
Translations: messages/{locale}.json
Global Styles: app/globals.css
Nav Config:  app/_meta.js
```

### Page Structure Example
```
app/
├── page.mdx              → /
├── browser-plugin/
│   └── page.mdx          → /browser-plugin
├── ai-analytics/
│   └── page.mdx          → /ai-analytics
├── customer-service/
│   └── page.mdx          → /customer-service
└── _meta.js              → Navigation menu config
```

## Layout Props

```jsx
<Layout
  darkMode={false}  // Hide theme switcher (default: true)
  pageMap={pageMap}
>
```

## Known Issues

**Next.js 16 incompatible with Nextra 4**
- Symptom: `Module not found: next-mdx-import-source-file`
- Cause: Turbopack cannot parse Nextra MDX
- Solution: Use Next.js 15.1.9 (not 16.x)

## Commands

```bash
npm run dev      # Start both servers
npm run build    # Build frontend
npm start        # Production mode
```

## MDX 注意事项

**HTML 标签使用**:
- ❌ 避免使用 `<p>` 标签（MDX 会自动包裹导致 `<p>` 嵌套）
- ✅ 文本块使用 `<div>`
- ✅ 列表内容使用 `<ul><li>`

**样式规范**:
- ⚠️ 避免内联 `style={{}}`（可能导致 Hydration 问题）
- ✅ 使用 Tailwind `className`

**示例**:
```jsx
// ❌ 错误 - 会导致 <p> 嵌套
<p className="text-lg">描述文本</p>

// ✅ 正确
<div className="text-lg">描述文本</div>

// ❌ 避免
<div style={{ color: 'red' }}>错误</div>

// ✅ 推荐
<div className="text-red-500">正确</div>
```
