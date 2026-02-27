# Docs Site Context

> 产品文档与官网 - Docusaurus 静态站点

## References
- 服务器 / 基础设施: `../CONTEXT.md`
- Nginx: `../nginx-configs/CONTEXT.md`

## 项目

- 状态: **已上线运行**

## 域名

- 主域名: `www.aigent.ren`
- 重定向: `aigent.ren` → `www.aigent.ren`

## 部署

| 方式 | 路径 |
|------|------|
| 构建 | `npm run build` |
| 输出 | `/root/workspace/docs-site/build/` |
| 托管 | Nginx 静态文件 |

## 技术栈

| 层 | 技术 |
|----|------|
| 框架 | Docusaurus 3.x |
| 语言 | TypeScript / MDX |
| 样式 | TailwindCSS |
| 部署 | Nginx 静态托管 |

**环境要求**: Node >= 20.0

## 管理命令

```bash
# 本地开发（端口 3004）
npm run start

# 构建
npm run build

# 带环境变量构建
RAG_API_URL=https://rag.aigent.ren/query npm run build:with-api

# 其他
npm run clear      # 清理缓存
npm run serve      # 本地预览构建结果
```

## RAG 同步

已迁移到 rag-service，通过 Analytics 后台操作：
- 文档 frontmatter 需加 `rag: true` 才会被同步
- 扫描 GitHub 文档变更
- 选择性同步到知识库

详见 `../rag-service/docs/sync.md`

## 核心功能

| 功能 | 位置 | 说明 |
|------|------|------|
| FloatingChat | `src/components/FloatingChat.jsx` | 智能客服浮窗，支持 browser-plugin / ai-analytics 场景化欢迎语和快捷问题 |
| RAG API 配置 | `src/rag-api-config.js` | 连接 rag-service 的 API 地址配置入口 |
| 国际化 | `docusaurus.config.ts` + `i18n/` | 支持 zh / en 双语 |

## Nginx 配置

> 详见 `../nginx-configs/CONTEXT.md`

## 插件

### plugin-json-ld

SEO JSON-LD 结构化数据插件，构建时自动注入 Schema：

| Schema 类型 | 用途 |
|-------------|------|
| Organization | 全局，公司信息 |
| WebSite | 全局，网站信息 |
| Article | 页面级，文章 |
| HowTo | 页面级，教程 |
| FAQPage | 页面级，FAQ |

**使用方式** - 文档 frontmatter 添加：
```yaml
schema: Article  # 或 HowTo / FAQPage
```

## 内容结构

```
docs/
├── intro.md                    # 产品介绍
├── ai-analytics.md             # AI 分析文档
├── browser-plugin.md           # 浏览器插件文档
├── customer-service.md         # AI 客服文档
└── *-updates.md                # 更新日志

docs-private/                   # 私有文档（不对外发布）
├── DEVELOPMENT.md              # 开发指南
├── RAG-AI-DEVELOPER.md         # RAG 开发文档
├── RAG-AI-FLOATING-SOLUTION.md # 浮窗方案
├── floating-chat-data-flow.md  # 数据流文档
└── Claude_提示词指南_中文版.md

developers/                     # 开发者文档（独立路由 /developers）
i18n/                           # 国际化（zh/en）
```