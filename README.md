# CCLHUB 文档站点

基于 Docusaurus 3.x 的官方文档网站

## 快速开始

```bash
npm install
npm run start
```

访问 http://localhost:3004

## 技术栈

- **框架**: Docusaurus 3.x
- **语言**: TypeScript
- **样式**: TailwindCSS
- **图标**: Lucide React

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run start` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run serve` | 预览构建结果 |

## 项目结构

```
docs-site/
├── docs/               # 公开文档
├── docs-private/       # 私有文档
├── developers/         # 开发者文档
├── i18n/               # 国际化 (zh/en)
├── src/
│   ├── components/     # React 组件
│   ├── css/            # 样式文件
│   ├── pages/          # 页面组件
│   ├── theme/          # 主题覆盖
│   └── rag-api-config.js
├── static/             # 静态资源
├── plugins/            # 自定义插件
├── build/              # 构建输出
└── docusaurus.config.ts
```

## 部署

```bash
npm run build
# 输出到 build/ 目录，由 Nginx 托管
```

## 更新记录

### 2026-02-27
- 移除本地 RAG 同步脚本（改用 rag-service GitHub 同步）

### 2026-02-10
- 新增 JSON-LD Schema 插件
- 文档添加 SEO 优化字段

---

MIT © 2026 caichen.lee
