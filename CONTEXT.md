# Docs Site Context

> 产品文档与官网 - Docusaurus 静态站点

## References
- 服务器 / 基础设施: `../CONTEXT.md`
- Nginx: `../nginx-configs/CONTEXT.md`

## 项目

- 服务器路径: `/root/workspace/docs-site/`
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
| 框架 | Docusaurus |
| 语言 | MDX |
| 部署 | Nginx 静态托管 |

## 管理命令

```bash
# 本地开发
npm run start

# 构建
npm run build

# 部署到服务器
npm run build
# Nginx 自动指向 build 目录
```

## Nginx 配置

- 配置文件: `/etc/nginx/sites-available/docs-site`
- SSL 证书: `/etc/letsencrypt/live/analytics.aigent.ren/`
- 到期时间: 2026-05-10

## 内容结构

```
docs/
├── intro.md           # 产品介绍
├── ai-analytics/      # AI 分析文档
├── browser-plugin/    # 浏览器插件文档
└── customer-service/  # AI 客服文档
```
