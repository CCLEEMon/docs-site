---
title: 部署与开发
description: 开发环境配置、构建部署流程和常见问题解决
---

# 部署与开发

## 技术栈

```yaml
docusaurus: 3.9.0
react: 18.3.1
typescript: 5.7.2
tailwindcss: 3.4.19
node: >=20.0
```

## 项目结构

```
docs-site/
├── docs/                       # 默认语言（中文）文档
│   ├── guide.md
│   ├── ai-analytics.md
│   ├── browser-plugin.md
│   └── customer-service.md
├── src/
│   ├── components/             # React 组件
│   ├── css/custom.css          # Tailwind + 自定义样式
│   └── pages/index.tsx         # 自定义首页
├── static/                     # 静态资源
├── i18n/                       # 国际化翻译
│   ├── zh/                     # 中文翻译
│   │   ├── code.json           # React 组件翻译
│   │   └── docusaurus-plugin-content-docs/current/
│   │       └── *.md            # 中文文档翻译
│   └── en/                     # 英文翻译
│       ├── code.json           # React 组件翻译
│       └── docusaurus-plugin-content-docs/current/
│           └── *.md            # 英文文档翻译
├── docusaurus.config.ts        # 主配置
├── sidebars.ts                 # 侧边栏配置
└── tailwind.config.js
```

## 开发环境

### 启动开发服务器

```bash
npm run start              # 启动中文开发服务器（端口 3004）
npm run start -- --locale en  # 启动英文开发服务器
npm run serve              # 启动生产服务器（支持所有语言切换）
npm run clear              # 清理缓存
```

### 构建生产版本

```bash
npm run build              # 构建所有语言的生产版本
```

构建产物位于 `build/` 目录，可由任何静态托管服务部署。

### 环境变量

构建时如需使用外部 API：

```bash
API_URL=https://your-api-url npm run build
```

## 部署方式

### 静态托管部署

#### Vercel

1. 连接 Git 仓库
2. 构建命令: `npm run build`
3. 输出目录: `build`

#### Netlify

1. 连接 Git 仓库
2. 构建命令: `npm run build`
3. 发布目录: `build`

#### Docker 容器

```dockerfile
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "run", "serve"]
```

### Nginx 静态托管

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 国际化 (i18n)

### 配置

```typescript
// docusaurus.config.ts
i18n: {
  defaultLocale: 'zh',
  locales: ['zh', 'en'],
  localeConfigs: {
    zh: {
      label: '简体中文',
      htmlLang: 'zh-CN',
    },
    en: {
      label: 'English',
      htmlLang: 'en-US',
    },
  },
}
```

### 生成翻译文件

```bash
npm run write-translations -- --locale en
npm run write-translations -- --locale zh
```

### 翻译文件位置

```
i18n/en/code.json          - React 组件翻译（英文）
i18n/zh/code.json          - React 组件翻译（中文）
i18n/en/docusaurus-theme-classic/navbar.json - 导航栏翻译
```

### 组件中使用翻译

```jsx
// 使用 <Translate> 组件
import Translate from '@docusaurus/Translate'

function MyComponent() {
  return (
    <p>
      <Translate id="footer.tagline">AI驱动的电商运营工具平台</Translate>
    </p>
  )
}

// 使用 translate() 函数（用于 props）
import {translate} from '@docusaurus/Translate'

<img alt={translate({message: 'Home icon'})} />
```

### 多语言开发注意事项

⚠️ **开发模式限制**：
- 开发模式一次只能运行一个 locale
- 启动中文：`npm run start`
- 启动英文：`npm run start -- --locale en`

✅ **生产模式支持所有语言**：
```bash
npm run build && npm run serve
# 访问 http://localhost:3000/ (中文)
# 访问 http://localhost:3000/en/ (英文)
```

## 路径约定

- 组件引用: `@site/src/components/ComponentName`
- 静态资源: `/images/filename.png`（static/ 目录）
- 文档链接: `/docs/page-name`

## 创建新文档

```bash
# 1. 创建文件
docs/new-page.md

# 2. 添加 frontmatter
---
title: 页面标题
description: 页面描述
---

# 3. 更新 sidebars.ts
tutorialSidebar: ['guide', 'new-page']

# 4. 测试
npm run start
```

## 创建新组件

```bash
# 1. 创建文件
src/components/MyComponent.jsx

# 2. 在 MDX 中导入
import MyComponent from '@site/src/components/MyComponent'
<MyComponent />

# 3. 测试
npm run start
```

## 常见问题修复

### i18n 语言切换无效

**症状**：点击语言切换后页面语言没有变化

**原因**：默认语言缺少翻译文件

**解决方案**：
```bash
# 1. 检查 i18n 目录结构
ls -la i18n/zh/docusaurus-plugin-content-docs/current/
ls -la i18n/en/docusaurus-plugin-content-docs/current/

# 2. 如果默认语言目录为空，复制文档
cp -r docs/* i18n/zh/docusaurus-plugin-content-docs/current/

# 3. 清理缓存并重启
npm run clear && npm run build && npm run serve
```

### HTML lang 属性错误

**症状**：英文页面显示 `lang="zh-CN"`

**解决方案**：
```typescript
// docusaurus.config.ts
i18n: {
  defaultLocale: 'zh',
  locales: ['zh', 'en'],
  localeConfigs: {
    zh: { htmlLang: 'zh-CN' },
    en: { htmlLang: 'en-US' },
  },
}
```

### Chunk Load Error

```bash
rm -rf .docusaurus build node_modules/.cache && npm run start
```

### 组件导入失败

```bash
# 检查路径必须使用 @site/ 前缀
import Component from '@site/src/components/Component'
```

### Tailwind 样式不生效

```bash
# 检查 tailwind.config.js 的 content 配置
# 重启服务器
npm run start
```

### 构建失败

```bash
# 检查: MDX 语法、import 路径、未闭合标签
npm run build
```

## Git 提交规范

```bash
# 提交格式
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复 bug"
git commit -m "docs: 更新文档"

# 推送
git push
```

## Chrome 截图技巧

```
1. F12 打开开发者工具
2. Ctrl+Shift+P 打开命令面板
3. 输入 screenshot
   - Capture screenshot - 全屏
   - Capture node screenshot - 元素
   - Capture full size screenshot - 整页
```
