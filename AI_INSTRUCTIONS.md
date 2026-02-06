# Nextra 4 AI 指令标准

## 核心格式

```
动作 + 位置 + 内容/目标
```

## 操作场景

| 操作 | 路径 | 示例 |
|------|------|------|
| 新增页面 | `app/[path]/page.mdx` | "在 `app/api/page.mdx` 创建 API 参考页面，包含 REST 端点说明" |
| 更新内容 | `app/[page].mdx` | "在 `app/page.mdx` 的 Features 章节，添加搜索功能说明" |
| 调整样式 | `app/layout.jsx` | "在 `app/layout.jsx` 修改 navbar logo 为 `<b>My Docs</b>`" |
| 添加导航 | `app/_meta.js` | "在 `app/_meta.js` 添加 `tutorial: '教程'` 导航项" |
| 插入组件 | `[page].mdx` | "在 `app/page.mdx` 插入 `<Callout type='info'>` 提示框" |

## 常用组件

- `Cards` - 卡片网格
- `Callout` - 提示框（`type='info|warning|error'`）
- `Tabs` - 标签页
- `Steps` - 步骤列表
- `FileTree` - 文件树

## 无歧义标准

✅ **必须包含：**
1. 完整文件路径
2. 明确操作类型
3. 具体内容描述

❌ **避免：**
1. "更新一下"、"添加一些"
2. "关于X的页面"
3. "调整样式"

