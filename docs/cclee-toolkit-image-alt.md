---
title: 图片 Alt 管理
description: CCLEE Toolkit 插件图片 Alt 自动生成选项卡完整指南
project: cclee-toolkit
schema: HowTo
steps:
  - name: 开启 AI 模块
    text: 在通用设置中配置好 API Key、Provider、Model
  - name: 开启自动生成
    text: 勾选上传时自动生成 alt
  - name: 批量处理
    text: 设置处理数量，点击开始批量处理
rag: true
rag_tags: ["WordPress", "CCLEE Toolkit", "图片Alt", "SEO", "无障碍"]
---

# CCLEE Toolkit — 图片 Alt 管理

后台路径：**CCLEE Toolkit → 图片 Alt 管理**

![Image Alt 设置区域](/images/docs/cclee-toolkit/general-image-alt-section.webp)

---

## 前置条件

图片 Alt 自动生成依赖 AI 模块。请先在 **CCLEE Toolkit → 通用设置** 中开启 AI Assistant 并完成配置（API Key、Provider、Model）。

---

## 自动生成

1. 勾选 **上传时自动为无 alt 的图片生成描述**
2. 保存设置

开启后，通过 WordPress 媒体库上传的图片会自动调用 AI 生成 alt 属性。

---

## 批量处理

1. 勾选 **开启批量 alt 文本处理**
2. 设置每次处理图片数量（默认 10，最大 50）
3. 点击 **开始批量处理** 开始处理

批量处理会查找媒体库中缺少 alt 文本的图片，逐个调用 AI 生成。

---

## 常见问题

### 图片 Alt 自动生成没反应？

确认 AI Assistant 已开启并保存。自动生成依赖 AI 模块，单独开启图片 Alt 不会生效。

### 批量处理中断了怎么办？

重新点击 **开始批量处理** 即可，已处理过的图片不会重复生成。

### 生成的 Alt 文本质量不好怎么办？

AI 生成质量取决于通用设置中配置的模型。可尝试切换更强的模型（如 gpt-4o）以获得更好的描述质量。
