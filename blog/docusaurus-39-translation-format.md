---
title: 修复 Docusaurus 3.9 翻译文件验证错误
description: 升级 Docusaurus 3.9 后 i18n 翻译文件报 ValidationError，需将字符串格式改为 message 对象格式
date: 2026-03-01
tags: [Docusaurus, i18n, Bug修复]
schema: Article
---

## TL;DR

Docusaurus 3.9 对翻译文件格式有严格要求，`code.json` 和 `current.json` 中的值必须是 `{ "message": "xxx" }` 对象格式，不能是纯字符串或嵌套对象。

## 问题现象

启动英文版开发服务器时报错：

```
[ERROR] Invalid translation file at "i18n/en/docusaurus-plugin-content-docs/current.json".

[ERROR] Error [ValidationError]: "version.label.message" is required.
"sidebar.tutorialSidebar.category.AI运营" must be of type object.
```

错误配置示例：

```json
{
  "version.label": {
    "Getting Started": "Getting Started"
  },
  "sidebar.tutorialSidebar.category.AI运营": "AI Analytics"
}
```

## 根因

Docusaurus 3.9 使用 Joi 进行翻译文件验证，要求所有翻译值必须是包含 `message` 字段的对象：

- `"key": "value"` ❌ 字符串不合法
- `"key": { "subkey": "value" }` ❌ 嵌套对象不合法
- `"key": { "message": "value" }` ✓ 正确格式

旧版本的宽松格式在 3.9 中被严格校验拒绝。

## 解决方案

将所有翻译值改为 `message` 对象格式：

```json
{
  "version.label": {
    "message": "Getting Started"
  },
  "sidebar.tutorialSidebar.category.AI运营": {
    "message": "AI Analytics"
  }
}
```

同样适用于 `code.json`：

```json
{
  "footer.support": {
    "message": "Support"
  },
  "footer.getStarted": {
    "message": "Quick Start"
  }
}
```

## FAQ

### Q: Docusaurus 翻译文件 code.json 和 current.json 有什么区别？

A: `code.json` 用于组件中 `<Translate>` 标签的翻译，`current.json` 用于 docs 插件的版本标签和侧边栏分类翻译。

### Q: 升级 Docusaurus 后原有翻译文件还能用吗？

A: 3.9 版本要求严格的 `message` 对象格式，旧格式会报 ValidationError。需要批量转换格式后才能正常启动。
