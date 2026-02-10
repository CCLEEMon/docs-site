# CCLHUB 官方文档网站

AI驱动的电商运营工具平台官方文档

## 网站信息

- **官网**: [www.aigent.ren](https://www.aigent.ren)
- **产品**: CCLHUB - AI驱动的电商运营工具平台

## 产品功能

### 电商工具箱
实时获取商品数据、价格监控、竞品分析。支持淘宝、京东、拼多多等主流电商平台。

### AI运营
基于大语言模型的智能分析，自动洞察市场趋势、用户行为、销售数据，提供精准运营策略。

### AI客服
7×24小时智能客服，快速解答产品使用问题，提供专业运营建议和最佳实践指导。

## 技术栈

- **框架**: Docusaurus 3.x
- **语言**: TypeScript
- **样式**: TailwindCSS
- **图标**: Lucide React

## 本地开发

### 环境要求

- Node.js >= 20.0
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run start
```

访问 http://localhost:3004 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run serve
```

## 项目结构

```
docs-site/
├── docs/               # 文档内容
├── src/
│   ├── components/    # React 组件
│   ├── css/           # 样式文件
│   └── pages/         # 页面组件
├── static/            # 静态资源 (llm.txt, robots.txt)
├── plugins/           # 自定义插件 (JSON-LD Schema)
├── docusaurus.config.ts
└── package.json
```

## 许可证

MIT © 2026 caichen.lee

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

