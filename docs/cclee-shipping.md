---
title: cclee-shipping 物流插件使用指南
description: 5 分钟配置 WooCommerce 国际物流，支持 FedEx、顺丰国际实时运费报价
project: cclee-shipping
schema: HowTo
steps:
  - name: 安装插件
    text: 上传并激活 cclee-shipping 插件
  - name: 创建配送区域
    text: 在 WooCommerce 中设置配送区域
  - name: 配置承运商
    text: 添加 FedEx 或顺丰，填写 API 凭证
  - name: 测试运费
    text: 前台结算页验证运费显示
rag: true
rag_tags: ["WooCommerce", "物流", "FedEx", "顺丰", "国际配送"]
---

# cclee-shipping 物流插件使用指南

cclee-shipping 是 WooCommerce 多承运商物流插件，支持 **FedEx**、**顺丰国际** 等承运商实时运费报价。客户结算时自动显示真实运费，无需手动维护运费表。

## 快速入门

### 前提条件

- WordPress 6.4+
- WooCommerce 8.0+
- 已有 FedEx 或顺丰国际账户

### 第一步：安装插件

1. 进入 WordPress 后台 → **插件** → **安装插件** → **上传插件**
2. 选择 `cclee-shipping.zip` 文件 → 点击**现在安装**
3. 安装完成后点击**启用**

<InfoBox variant="success" title="安装成功">
插件启用后会自动注册 FedEx 和顺丰两种配送方式，无需额外激活。
</InfoBox>

### 第二步：创建配送区域

WooCommerce 通过**配送区域**来匹配客户地址和运费规则。

1. 进入 **WooCommerce** → **设置** → **配送** → **配送区域**
2. 点击**添加配送区域**
3. 填写区域名称（如「国际配送」）
4. 在**区域范围**中选择配送目的地（如「所有国家」或指定国家）
5. 点击**添加配送方式**

### 第三步：添加承运商

在配送区域中添加 FedEx 或顺丰：

1. 在**选择配送方式**下拉框中选择 **FedEx (CCLEE Shipping)** 或 **顺丰国际 (CCLEE Shipping)**
2. 点击**添加配送方式**
3. 点击该方式右侧的**管理**按钮，进入设置页面

### 第四步：配置 FedEx 凭证

| 设置项 | 填写内容 | 获取位置 |
|--------|----------|----------|
| API Key | FedEx API Key | [FedEx Developer Portal](https://developer.fedex.com/) |
| Secret Key | FedEx Secret Key | 同上 |
| Account Number | FedEx 账号 | FedEx 账户后台 |
| Environment | production | 沙箱测试选 sandbox |

<InfoBox variant="info" title="FedEx 凭证获取">
1. 访问 [FedEx Developer Portal](https://developer.fedex.com/)
2. 注册开发者账号并创建项目
3. 在项目详情页获取 API Key 和 Secret Key
4. Account Number 在 FedEx 官网账户设置中查看
</InfoBox>

### 第五步：测试运费

1. 前台添加商品到购物车
2. 进入结算页
3. 填写收货地址
4. 查看运费选项是否显示 FedEx 报价

---

## 承运商配置详解

### FedEx 设置项

| 设置项 | 说明 | 推荐值 |
|--------|------|--------|
| **API Key** | FedEx 开发者 API Key | — |
| **Secret Key** | FedEx 开发者密钥 | — |
| **Account Number** | FedEx 账号 | — |
| **Environment** | 环境 | 生产环境选 production |
| **Enabled Services** | 启用的服务类型 | 国际件建议选 INTERNATIONAL_PRIORITY + INTERNATIONAL_ECONOMY |
| **Rate Modifier Type** | 运费加成方式 | 固定金额或百分比 |
| **Rate Modifier Value** | 加成数值 | 0 表示原价，可设置利润加成 |
| **Package Type** | 默认包装类型 | Your Packaging（自备包装）|
| **Shipping Payment Type** | 运费支付方 | SENDER（商家预付）|
| **Duties Payment Type** | 关税支付方 | SENDER 或 RECIPIENT（到付）|
| **Debug Mode** | 调试模式 | 正常运营关闭，排查问题时开启 |

### 顺丰国际设置项

| 设置项 | 说明 | 获取位置 |
|--------|------|----------|
| **Customer Code** | 顾客编码 | 顺丰开放平台 |
| **Check Word** | 校验码 | 顺丰开放平台 |
| **Environment** | 环境 | 生产环境选 production |
| **Enabled Services** | 启用的服务 | 国际件建议选 36/37/38/44 |

<InfoBox variant="warning" title="顺丰凭证获取">
顺丰国际 API 需要联系顺丰客户经理开通，在 [顺丰开放平台](https://open.sf-express.com/) 获取顾客编码和校验码。
</InfoBox>

#### 顺丰国际服务类型

| 代码 | 名称 | 适用场景 |
|------|------|----------|
| 36 | 跨境速配 | 快速跨境配送 |
| 37 | 国际特惠 | 经济型国际件 |
| 38 | 国际标快 | 标准国际件 |
| 44 | 国际电商专递 | 跨境电商专用 |

---

## 运费支付方式说明

### 运费支付方（Shipping Payment）

| 选项 | 含义 | 结账显示 |
|------|------|----------|
| **SENDER（商家预付）** | 运费从商家 FedEx 账户扣除 | 客户支付商品 + 运费 |
| **RECIPIENT（收件人到付）** | 运费由收件人支付 | 运费显示 $0，收件人签收时付费 |

<InfoBox variant="info" title="如何选择？">
- **跨境 B2C 电商**：选 SENDER，客户结账时一次性付清
- **样品寄送/大客户**：可选 RECIPIENT，让对方承担运费
</InfoBox>

### 关税支付方（Duties & Taxes Payment）

仅国际件有效，决定谁来支付海关关税和税费。

| 选项 | 含义 |
|------|------|
| **SENDER** | 商家预付关税，客户无需额外付费 |
| **RECIPIENT** | 收件人支付关税，包裹到达时收取 |

<InfoBox variant="warning" title="关税到付风险">
选择 RECIPIENT 时，客户可能在收货时被要求支付关税，可能导致拒收。建议商家预付或提前告知客户。
</InfoBox>

---

## 运费加成设置

cclee-shipping 支持在承运商原价基础上加成，用于覆盖包装成本或增加利润。

### 固定金额加成

每个包裹加收固定金额（如 $5）。

**示例**：FedEx 报价 $20 → 显示 $25

### 百分比加成

按承运商报价的百分比加成（如 10%）。

**示例**：FedEx 报价 $20 → 显示 $22

---

## 常见问题 FAQ

### 运费不显示怎么办？

<InfoBox variant="warning" title="排查步骤">

1. **检查凭证**：确认 API Key、Secret Key、Account Number 填写正确
2. **检查环境**：生产环境请选择 production
3. **开启调试**：在设置中启用 Debug Mode，查看 WooCommerce → 状态 → 日志
4. **检查地址**：确保配送区域覆盖客户收货地址
5. **检查商品重量**：商品必须设置重量，否则无法计算运费

</InfoBox>

### 如何设置包邮门槛？

cclee-shipping 只负责运费计算，包邮设置请使用 WooCommerce 免费配送方式：

1. 在同一配送区域添加**免费配送**方式
2. 设置最低订单金额（如 $100）
3. 客户满足条件时自动显示免运费选项

### 支持国内配送吗？

- **FedEx**：支持美国境内 FedEx Ground
- **顺丰**：目前仅支持国际件（服务类型 36-38, 44）

国内顺丰配送请联系顺丰商务开通国内件 API。

### 运费与实际收费不一致？

运费报价基于以下因素：

- 商品重量和尺寸（请在商品设置中填写）
- 包装类型（默认 Your Packaging）
- 起运地和目的地地址

如果报价与实际差异较大，请检查商品重量设置是否准确。

### 如何切换到生产环境？

1. 在 FedEx Developer Portal 申请 Production Key
2. 将 API Key、Secret Key、Account Number 更换为生产环境凭证
3. 在插件设置中将 Environment 改为 **production**
4. 保存设置

---

## 技术支持

- **GitHub**：[cclee-hub/cclee-shipping](https://github.com/cclee-hub/cclee-shipping)
- **问题反馈**：GitHub Issues

<a className="button button--primary button--lg" href="https://github.com/cclee-hub/cclee-shipping" target="_blank" rel="noopener noreferrer">
  访问 GitHub 仓库
</a>
