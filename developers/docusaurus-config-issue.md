---
title: Docusaurus 配置问题记录
description: themeConfig.Head JSX 解析错误的排查过程
---

# Docusaurus 配置问题记录

## 问题描述

`docusaurus.config.ts` 中的 `themeConfig.Head` 配置导致开发服务器无法启动。

### 错误信息

```
ParseError: E:\: Type parameter list cannot be empty.
E:\projects\docs-site\docusaurus.config.ts:89:8
```

错误指向第89行第8列，即 JSX Fragment `<>` 的 `<` 符号。

## 问题配置

错误的 `docusaurus.config.ts` 配置：

```typescript
Head: () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Security-Policy" content="..." />
    </>
  );
},
```

## 排查过程

### 尝试 1：添加 React 导入

在文件顶部添加 `import React from 'react'`

**结果**：失败，错误相同

### 尝试 2：使用显式 React.Fragment

```typescript
<React.Fragment>
  <meta ... />
  <meta ... />
</React.Fragment>
```

**结果**：失败，错误变为 `Unexpected token, expected ","` at 90:14

### 尝试 3：使用数组语法

```typescript
Head: () => [
  <meta key="charset" charSet="utf-8" />,
  <meta key="csp" httpEquiv="Content-Security-Policy" content="..." />
]
```

**结果**：失败，错误 `Unexpected token, expected ","` at 88:12

### 尝试 4：使用 themeConfig.metadata

参考 [官方文档](https://docusaurus.io/docs/api/themes/configuration) 尝试：

```typescript
metadata: [
  { charSet: 'utf-8' },
  { httpEquiv: 'Content-Security-Policy', content: "..." }
]
```

**结果**：失败，多个解析错误

### 尝试 5：使用顶层 headTags

参考 [SEO 文档](https://docusaurus.io/docs/seo) 尝试：

```typescript
headTags: [
  {
    tagName: 'meta',
    attributes: { charSet: 'utf-8' }
  },
  {
    tagName: 'meta',
    attributes: {
      httpEquiv: 'Content-Security-Policy',
      content: "..."
    }
  }
]
```

**结果**：失败，`Unexpected token, expected ","` at 101:32

### 验证：恢复原始配置

执行 `git checkout docusaurus.config.ts` 恢复原始配置

**结果**：**仍然报相同的错误**

## 关键发现

**原始配置也无法启动服务器**，说明此问题不是最近的修改引起，而是之前就存在的兼容性问题。

可能原因：
1. Docusaurus 3.9.2 版本与当前 JSX/TSX 语法不兼容
2. TypeScript 配置解析器限制
3. tsconfig.json 配置问题

## 环境信息

- Docusaurus 版本：3.9.2
- Node 版本：v24.12.0
- 配置文件类型：TypeScript (.ts)

## 官方规范确认

根据 [官方主题配置文档](https://docusaurus.io/zh-CN/docs/api/themes/configuration) 和 [TypeScript 支持文档](https://docusaurus.io/docs/typescript-support)：

### `themeConfig.Head` 不是有效的配置字段

官方文档中 `themeConfig` 的完整字段列表包括：
- `colorMode` - 颜色模式配置
- `metadata` - HTML 元数据
- `navbar` - 导航栏
- `footer` - 页脚
- 等...

**但不存在 `Head` 字段**。

### `Head` 组件的正确使用方式

根据 [Docusaurus 客户端 API](https://docusaurus.io/zh-CN/docs/docusaurus-core)：

`<Head>` 是一个 **React 组件**（React Helmet 的包装），用于在主题文件中管理文档 `<head>` 的更改。

**正确用法**：在主题组件文件（如 `src/theme/Footer`）中使用：
```typescript
import Head from '@docusaurus/Head';

function MyComponent() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Security-Policy" content="..." />
      </Head>
      {/* 其他内容 */}
    </>
  );
}
```

**而非**：在 `docusaurus.config.ts` 的 `themeConfig` 中使用。

### TypeScript 配置支持确认

根据 [官方文档](https://docusaurus.io/docs/typescript-support)：

- Docusaurus 3.9 **完全支持** `.ts` 配置文件
- `tsconfig.json` **仅用于编辑器体验**，不影响配置解析
- 配置文件会被正确类型检查

## 解决方案

### 修复内容

1. **移除无效的 `themeConfig.Head` 字段**
2. **使用 `themeConfig.metadata` 数组添加元数据**
3. **修复主配置对象闭合大括号缺失问题**

### 修复后配置

正确的 `docusaurus.config.ts` 配置：

```typescript
themeConfig: {
  // ... 其他配置
  metadata: [
    { charSet: 'utf-8' },
    {
      'http-equiv': 'Content-Security-Policy',
      content: "default-src 'self' 'unsafe-inline'; connect-src 'self' https://rag.aigent.ren; ..."
    },
  ],
} satisfies Preset.ThemeConfig,
};  // 修复：添加主配置对象闭合大括号
```

### 关键修复点

| 问题 | 原因 | 修复 |
|------|------|------|
| JSX 解析错误 | `themeConfig.Head` 不支持 JSX 语法 | 改用 `metadata` 数组 |
| 类型错误 | `Head` 不是有效的配置字段 | 移除该字段 |
| 语法错误 | 主配置对象缺少闭合 `}` | 添加闭合大括号 |

### 验证结果

```
[SUCCESS] Docusaurus website is running at: http://localhost:3004/
```

开发服务器启动成功，网站可正常访问。
