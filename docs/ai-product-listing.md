---
title: 跨境铺货助手 — 使用帮助
description: 一键从淘宝/1688采集商品，AI自动生成英文描述和定价，审核后直接上架WooCommerce，支持多店铺管理
schema: HowTo
steps:
  - name: 配置店铺和AI
    text: 在 Settings 页面填写 WooCommerce 凭据和 AI 供应商配置
  - name: 采集商品
    text: 在淘宝/1688商品页使用浏览器插件一键采集
  - name: AI处理
    text: 在 Raw 页面触发 AI 自动生成英文内容、定价和属性
  - name: 审核与上架
    text: 在 Products 页面逐字段审核修正，一键上传到 WooCommerce
rag: true
rag_tags: ["WooCommerce", "淘宝采集", "1688采集", "AI商品上架", "跨境电商", "多店铺管理"]
---

# 跨境铺货助手（WooCommerce × 淘宝/1688）

自动化商品采集与上架系统。一键从淘宝/1688抓取商品，AI生成英文描述和定价，人工审核后直接上架WooCommerce。

## 产品是什么

跨境卖家从淘宝/1688采购商品后，上架到独立站需要：手动翻译标题和描述、逐个填写规格和变体、逐张下载上传图片、手动计算汇率定价——一个含 10 个变体的商品，人工完整上架约需 30-45 分钟。批量操作 50 个商品需要一周以上。

**跨境铺货助手** 把整个流程压缩到 3-5 分钟/个。

## 产品如何工作

```
浏览器插件采集 → 后端接收 → AI处理 → 人工审核 → 一键上架
```

**第一步：采集** — 浏览器插件在淘宝/天猫/1688 商品页一键采集标题、规格、变体（含价格）、图片。自动发送至后端，重复采集自动更新，不产生冗余数据。

**第二步：AI 处理** — GPT-4o Vision 分析产品图片生成英文命名与属性，GPT-4o Text 生成英文描述和规格表，自动获取实时汇率（CNY→SGD）按规则加价定价（尾数取 8），自动映射到 WooCommerce 属性和自定义字段。

**第三步：人工审核** — Web 界面查看所有 AI 处理结果，可逐字段编辑修正，批准或丢弃。

**第四步：一键上架** — 图片自动 SEO 重命名后上传 WordPress 媒体库，自动创建 WooCommerce 可变商品（含变体、属性、标签、ACF 字段），上传结果可追溯。

## 核心能力

**智能采集** — Chrome 浏览器插件，淘宝/天猫/1688 商品页一键采集。自动识别平台，提取商品 ID 实现去重（重复采集自动覆盖更新）。

**AI 视觉 + 文本双模型处理** — Vision Model 分析产品图片，自动生成英文命名、风格、类目、设计描述、颜色、形状、材质、适用空间、标签；Text Model 生成完整英文产品描述（HTML 格式）、规格表、变体名称翻译。北欧风命名系统自动生成唯一品牌风格名称，内置查重机制。AI 供应商可配置：API Key、Base URL、Vision/Text 模型均可自定义，不锁定 OpenAI（支持千问、DeepSeek 等兼容 API）。

**汇率实时计算** — 自动调用公开汇率 API 获取实时 CNY→SGD 汇率，1 小时缓存自动刷新。汇率来源可配置（支持切换为其他汇率源）。审核界面展示完整定价明细：CNY 原价 → SGD 换算 → × 倍率 → 取整后最终价格。

**自动定价 + 灵活手动调价** — 可配置加价倍率（淘宝 4.5x / 1688 6.0x，按渠道利润率区分），价格尾数自动取 8。支持单个 SKU 独立修改售价，批量定价与单品定价灵活组合。

**属性自动映射** — 7 个 WooCommerce 全局属性自动匹配（颜色类型、尺寸、形状、风格、材质、房间、灯头接口），5 个 ACF 自定义字段自动填充。属性查表映射，确保与站点已有选项一致。

**图片采集与 SEO** — 浏览器端直接下载图片（绕过 CDN 限流），支持主图、SKU 变体图、详情图三类分类存储。上架时 SEO 文件名重命名（风格-描述-类目-房间-序号），上传 WordPress 媒体库并设置 alt-text。

**WooCommerce 完整商品创建** — 创建可变商品（Variable Product）、批量创建变体、7 个全局属性 + 变体属性、ACF 字段 + 标签自动关联、WC 类目自动匹配。

**多店铺管理** — 管理多个 WooCommerce 站点，每个站点独立配置 WC 凭据和 WP 账号。上架时选择目标店铺，同一产品可上架到不同站点。店铺连接测试：一键验证 WC API 凭据是否可用。上传日志按店铺记录，每次上架结果可追溯。

**高效审核工作流** — 分栏布局：左侧产品列表（筛选/搜索/分页）+ 右侧详情编辑，无需跳页。快捷键操作：↑↓ 切换产品、S 保存、A 批准、D 丢弃。批准/丢弃后自动跳下一个产品。原文对照：折叠显示中文原文标题和描述。来源双向链接：可跳转原始平台商品页 + 上架后可跳转 WC 商品页。

## 效果示例

### 定价计算

```
淘宝商品 CNY 49.9
× 实时汇率 0.18（CNY→SGD）
× 渠道倍率 4.5x（淘宝）
= SGD 40.42
→ 尾数取8 → SGD 48
```

1688 同款商品因倍率不同：`CNY 49.9 × 0.18 × 6.0 = SGD 53.89 → SGD 58`

### AI 生成效果

| | 内容 |
|---|---|
| **中文原标题** | 北欧风格后现代创意客厅吊灯 黄铜分子灯多头餐厅灯饰 |
| **AI 生成英文标题** | Freja Modern Molecular Pendant Light |
| **AI 生成描述片段** | *Transform your living space with the Freja Modern Molecular Pendant Light — a striking fusion of art and illumination. Inspired by molecular structures, this statement piece features interconnected brass-finish arms that radiate warmth and contemporary sophistication.* |

AI 从产品图片中识别出分子结构造型、黄铜材质、现代风格，自动生成北欧风命名「Freja」、创意描述词「Molecular」、品类「Pendant Light」。

### 图片 SEO 命名

原始文件名（无意义）：`img_20240315_a3x7k.jpg`

SEO 重命名后：`modern-matte-black-pendant-light-living-room-01.jpg`

命名规则：`{style}-{descriptor}-{category}-{room}-{序号}.jpg`，全部小写，连字符分隔。Alt text 自动生成为「Modern Matte Black Pendant Light Living Room」。

### 属性映射

以「黄铜分子吊灯」为例，AI 分析图片后自动映射：

| WooCommerce 属性 | AI 识别结果 | 映射值 |
|------------------|------------|--------|
| Color Type | 黄铜色 | Brass |
| Style | 现代简约 | Modern |
| Material | 金属/黄铜 | Metal/Aluminum |
| Shape | 分子结构 | Geometric |
| Room | 客厅/餐厅 | Living Room |
| Light Bulb Fitting Type | E27灯头 | E27/E14 |
| Size Type | 最大尺寸 65cm | 61cm-80cm |

ACF 自定义字段同步填充：灯头接口 E27/E14、颜色 Brass、尺寸 65cm、材质 Metal/Aluminum、保修 1 year product warranty。

## 效率对比

| 环节 | 人工操作 | 系统处理 |
|------|---------|---------|
| 商品信息采集 | 手动复制粘贴，5-10分钟/个 | 浏览器一键采集，＜5秒/个 |
| 标题翻译 | 手动翻译或机翻+校对，3-5分钟 | GPT-4o 自动生成，＜10秒 |
| 产品描述撰写 | 15-20分钟/个 | GPT-4o 自动生成 HTML 描述，＜10秒 |
| 汇率计算+定价 | 查汇率+计算器+逐个填写 | 实时汇率+自动加价，实时完成 |
| 属性填写 | 逐项查表选择，5-10分钟 | 自动查表映射，实时完成 |
| 图片处理 | 逐张下载+重命名+上传 | 自动下载+SEO命名+上传 |
| 变体创建 | 逐个手动添加 | 批量自动创建含 SKU |
| **单个商品总耗时** | **30-45分钟** | **审核约 3-5 分钟** |
| **50 个商品** | **约 2 周** | **约半天** |

## 适合谁用

**跨境卖家** — 从淘宝/1688 采购商品，通过 WooCommerce 独立站销售，需要批量上架减少人工翻译和录入成本。适用于灯具、家居、饰品等任意品类。当前版本针对灯具品类深度优化（含灯头接口、北欧风命名等专属逻辑），其他品类可定制配置。

**服务商与技术团队** — 代运营团队需要为客户批量上架商品，或技术团队希望将采集→处理→上架能力集成到自有工作流。可作为独立模块嵌入现有系统，API 驱动。

## 使用指南

### 一、配置 WooCommerce 店铺

![Settings 页面](/images/docs/lightct/page-settings.webp)

首次使用需先配置 WooCommerce 店铺凭据和 AI 供应商。

上架流程使用两套认证：

- **WC Consumer Key + Secret**：用于 WC REST API（创建产品、变体）
  - 后台路径：WP-Admin → WooCommerce → Settings → Advanced → REST API → Add key
- **WP User + App Password**：用于 WordPress Media REST API（上传图片）
  - 后台路径：WP-Admin → Users → Profile → Application Passwords

点击 **Add Store** 填写 Store ID、WC URL、CK/CS、WP User、WP App Password。点击 **Test** 验证连接。支持添加多个店铺，上架时选择目标站点。**Edit** 修改已有店铺凭据，**Delete** 确认后删除店铺（不影响已上架的商品）。

### 二、配置 AI 供应商

![AI 配置](/images/docs/lightct/page-settings-ai.webp)

支持所有兼容 OpenAI API 格式的模型，分为两个模型执行不同任务：

- **Vision Model**：分析产品图片，生成英文命名、风格、类目、颜色、材质等属性
- **Text Model**：生成英文产品描述（HTML）、规格表、变体名称翻译

填写 API Key、Base URL、模型名称，点击 **Save AI Config** 保存，热重载生效。不锁定 OpenAI，千问、DeepSeek 等兼容 API 均可使用。

### 三、采集商品

![浏览器插件](/images/docs/lightct/extension-popup.webp)

在淘宝/天猫/1688 商品页点击插件图标弹出，一键采集当前商品。

![采集中](/images/docs/lightct/extension-collecting.webp)

采集模拟人类行为，过程中呼吸灯闪烁提示进度，直到提示「完成」即采集结束。商品数据（标题、规格、变体、价格、图片）已自动发送到后端，数据出现在 Raw 页面等待 AI 处理。

如果采集同一个商品（平台+商品ID相同），系统自动覆盖更新，不会产生重复数据。

### 四、AI 处理

![Raw 页面](/images/docs/lightct/page-raw.webp)

采集完成后数据自动出现在 Raw 页面。

- **Process**：点击某行的 Process 按钮，系统依次执行 Vision 分析图片 → Text 生成描述 → 汇率换算定价 → 属性映射，处理完成后该行淡出移除
- **Batch Process**：勾选多行后批量触发，显示进度 "Processing 1/N..."
- **全选**：一键勾选全部行
- **Title 链接**：点击跳转原始平台商品页

### 五、审核产品

![Products 页面](/images/docs/lightct/page-products.webp)

AI 处理完成后产品进入 Products 页面等待人工审核。分栏布局：左侧产品列表，右侧详情编辑，无需跳页。

**左侧列表**

| 元素 | 功能 |
|------|------|
| All / Pending(N) / Approved(N) / Uploaded(N) | 按状态 Tab 筛选，括号内实时计数 |
| Search | 按英文标题模糊搜索 |
| 勾选 + Approve / Discard | 批量批准或丢弃 |
| ← / → | 翻页，每页 20 条 |

**右侧详情**

| 元素 | 功能 |
|------|------|
| Source | 跳转原始平台商品页 |
| View on WC | 上架后出现，跳转 WC 商品页 |
| Info / Media & Specs / WC Attributes | 三个详情面板 |
| ▶ Original Text | 折叠展开原始中文标题+描述，与英文翻译对照 |
| Markup 输入框 | 修改加价倍数，自动重算所有变体 SGD 价格 |
| Save | 保存当前编辑 |
| Approve | 状态 → approved，自动跳下一个 |
| Store Selector | 选择目标店铺（仅 approved 后显示） |
| Upload to WC | 上传到所选 WooCommerce 站点（仅 approved 后显示） |
| Discard | 丢弃产品，需确认，自动跳下一个 |

**快捷键**：↑↓ 切换产品 · S 保存 · A 批准 · D 丢弃（输入框获焦时自动禁用）

<InfoBox variant="info" title="数据与图片全链路 SEO">

系统对商品数据做全链路 SEO 优化：图片上传时自动重命名为「风格-描述-类目-房间-序号」格式并设置 alt-text；英文标题和描述由 AI 生成，天然包含关键词。

</InfoBox>

### 六、上架到 WooCommerce

产品批准后上架操作栏出现。选择目标店铺，点击 **Upload to WC**，系统自动执行图片 SEO 重命名后上传 WordPress 媒体库、创建 WooCommerce 可变商品（含所有变体、属性、标签、ACF 字段、WC 类目匹配）。上架完成后状态变为 **Uploaded**，出现 **View on WC** 链接。

同一产品可以上架到不同店铺，各店铺的上传日志独立记录，结果可追溯。

<InfoBox variant="warning" title="上架前确认">

上架前请确认产品信息审核完毕，尤其是价格和图片。上架后修改需要到 WooCommerce 后台操作。

</InfoBox>

### 七、查看历史记录

![History 页面](/images/docs/lightct/page-history.webp)

已审核产品在 History 页面以只读表格展示，按状态 Tab 筛选查看。

**产品状态流转：**

| 状态 | 含义 |
|------|------|
| Pending | AI 已处理，等待人工审核 |
| Approved | 审核通过，可上传到 WC |
| Uploaded | 已上架到 WooCommerce |
| Discarded | 已丢弃（不在列表显示） |

点击 **Product 标题** 跳转 Detail 独立详情页，点击 **Source URL** 跳转原始平台商品页。

## 常见问题

### 需要什么 AI 模型？

推荐 GPT-4o（Vision + Text）。系统支持任何兼容 OpenAI API 格式的模型，包括千问、DeepSeek 等。你只需在 Settings 页面填写对应的 API Key、Base URL 和模型名称。

### 支持哪些采集平台？

目前支持淘宝、天猫、1688。插件会自动识别当前页面所属平台。

### 重复采集同一个商品会怎样？

系统根据平台 + 商品 ID 自动去重，重复采集会覆盖更新原有数据，不会产生重复记录。

### 价格是怎么计算的？

系统自动获取实时 CNY→SGD 汇率，按可配置的加价倍率计算售价（淘宝默认 4.5x，1688 默认 6.0x），价格尾数自动取 8。你可以在审核界面调整 Markup 倍数或逐个 SKU 修改价格。审核界面展示完整定价明细：CNY 原价 → SGD 换算 → × 倍率 → 取整后最终价格。

### 支持多少个店铺？

没有数量限制。每个店铺独立配置 WC 凭据和 WP 账号，上架时自由选择目标店铺。适合管理多个站点的卖家批量分发商品。
