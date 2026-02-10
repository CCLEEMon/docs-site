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
| `npm run sync-rag:dry` | RAG 同步预览 |

## 项目结构

```
docs-site/
├── docs/               # 文档内容
├── src/
│   ├── components/    # React 组件
│   ├── css/           # 样式文件
│   └── pages/         # 页面组件
├── static/            # 静态资源
├── plugins/           # 自定义插件
├── scripts/           # 工具脚本
└── docusaurus.config.ts
```

## 部署

详见 [DEV.md](DEV.md)

## 更新记录

### 2026-02-10
- 新增 JSON-LD Schema 插件
- 新增 RAG 知识库同步脚本
- 文档添加 SEO 优化字段

---

MIT © 2026 caichen.lee
