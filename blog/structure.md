---
title: 项目结构
date: 2026-02-10
tags: [Docusaurus, 架构]
---

# 项目结构

<!-- truncate -->

```
docs-site/
├── docs/               # 产品文档内容
├── developers/         # 开发者文档（当前目录）
├── src/
│   ├── components/    # React 组件
│   ├── css/           # 样式文件
│   └── pages/         # 页面组件
├── static/            # 静态资源
├── plugins/           # 自定义插件
├── scripts/           # 工具脚本
├── docusaurus.config.ts
├── sidebars.ts        # 产品文档侧边栏
└── sidebarsDevelopers.ts  # 开发者文档侧边栏
```

## 核心目录

| 目录 | 说明 |
|------|------|
| `docs/` | 产品使用文档（面向商家用户）|
| `developers/` | 技术文档（面向开发者）|
| `src/components/` | 自定义 React 组件 |
| `plugins/` | Docusaurus 自定义插件 |
