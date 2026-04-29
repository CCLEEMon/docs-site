---
title: FedEx 注册教程
description: 完整 FedEx 企业账号注册和 API 开发者注册流程，配置 cclee-shipping 插件的前置条件
project: cclee-shipping
schema: HowTo
steps:
  - name: 注册企业账号
    text: 在 FedEx 官网注册企业账号并完成资质审核
  - name: 注册开发者账号
    text: 在 FedEx Developer Portal 注册开发者账号
  - name: 申请 API 权限
    text: 创建应用并申请 Ship、Rate 等 API 权限
  - name: 获取凭证
    text: 获取 Client ID、Client Secret、Account Number
rag: true
rag_tags: ["FedEx", "WooCommerce", "物流", "API注册"]
---

# FedEx 注册教程

使用 cclee-shipping 插件前，需先注册 FedEx 企业账号并获取 API 凭证。整个流程分为企业账号注册和 API 开发者注册两部分。

## 第一部分：企业账号注册

### 第一步：注册企业账号

1. 访问 [FedEx 官网](https://www.fedex.com/)
2. 点击「Register」注册
3. 选择「Business Account」企业账号
4. 填写公司信息：
   - 公司名称
   - 税号（EIN）
   - 公司地址
   - 联系方式
5. 提交后等待联邦审核（通常 1-3 个工作日）
6. 审核通过后获取 **9 位纯数字用户 ID**，用于登录

<InfoBox variant="info" title="中国大陆地区额外要求">
收到审核通过邮件后，还需用手机微信扫描二维码，完成实名认证。
</InfoBox>

### 第二步：填写服务安全协议

1. 填写「联邦快递服务安全协议书」，确保已清楚填写：
   - 甲方之联邦快递服务账号
   - 付款银行账号信息
2. 签署并加盖有效公章

### 第三步：提交资质文件

邮件将要求准备以下材料：

1. **《联邦快递服务及安全协议书》**（加盖公章）一式两份
2. **最新营业执照副本复印件**（加盖公章）一份

准备完毕后，通过邮件中的联系人电话联系联邦快递公司上门收件。

<InfoBox variant="warning" title="特殊企业请先联系销售">
以下类型企业请在提交文件之前与联邦快递销售联系以申请特殊批准：
- 物流公司
- 个人独资企业
- 个体工商户
- 非本地营业执照的公司
</InfoBox>

:::tip
如无营业执照，可提供效力等同的登记证、许可证等证件复印件（加盖公章）。
:::

### 第四步：账号开通确认

收到开通邮件后，账号即可使用。邮件示例：

> 贵司所持之联邦快递客户帐号：**\*\*\*\***5281 现已生效为信用帐号。

---

## 第二部分：API 开发者注册

### 第五步：注册 FedEx 开发者账号

1. 访问 [FedEx Developer Portal](https://developer.fedex.com/)
2. 点击「Sign Up」注册
3. 填写企业邮箱、公司信息
4. 验证邮箱后完成登录

登录后左侧菜单包含以下模块：

| 菜单 | 说明 |
|------|------|
| **Manage Organization** | 组织管理，管理公司账户信息 |
| **My Projects** | 我的项目，管理开发项目 |
| **Getting Started** | 入门指南，新手引导 |
| **API Catalog** | API 目录，浏览可用的 API 服务 |
| **API Recipes** | API 食谱，示例代码和最佳实践 |
| **Guides** | 开发指南，技术文档 |
| **Announcements** | 公告，平台更新通知 |
| **API Validation** | API 验证，校验接口调用 |
| **API Status** | API 状态，查看各服务状态 |
| **Settings** | 设置，账户配置 |
| **Support/FAQs** | 帮助支持，常见问题 |

![API Menu](/images/docs/cclee-shipping/fedex-api-menu.webp)

进入 **Manage Organization**，填写以下信息：

- **公司名称**（Company Name）
- **地区**（Region）
- **国家**（Country）
- **地址**（Address）
- **邮件内接收的用户 ID**（User ID，9 位数字）

![Manage Organization](/images/docs/cclee-shipping/fedex-manage-organization.webp)

### 第六步：创建应用并申请 API 权限

1. 点击 **My Projects** → **Create App**
2. 在 **Step 1 - Select API(s) for your project** 页面选择 **Ship, Rate & other APIs**

<InfoBox variant="warning" title="API 选择注意">
- Basic Integrated Visibility 仅包含轨迹追踪（Track），**无法使用运费查询和下单**
- WooCommerce 集成必须选择 **Ship, Rate & other APIs**
</InfoBox>

![Select APIs](/images/docs/cclee-shipping/fedex-select-apis.webp)

勾选 **Ship, Rate & other APIs** 后，可对接以下 14 个 API。以下是 WooCommerce 集成建议：

| 分类 | API | 说明 |
|------|-----|------|
| **必选** | **Ship API** | 下单、生成面单 |
| **必选** | **Rates and Transit Times API** | 结账页显示运费和时效 |
| **建议加选** | **Address Validation API** | 验证收件地址，减少错误配送 |
| **建议加选** | **Service Availability API** | 查询目的地可用服务类型 |
| **不需要** | Consolidation API | 集运专用 |
| **不需要** | Freight LTL API | 大货/货运专用 |
| **不需要** | Global Trade API | 合规文件，一般用不到 |

3. 提交申请，等待 FedEx 审批（通常 1-2 个工作日）

### 第七步：获取 API 凭证

![My Projects](/images/docs/cclee-shipping/fedex-my-projects.webp)

审批通过后，在 **My Projects** 项目详情页获取：

| 凭证 | 说明 | 获取位置 |
|------|------|----------|
| **Client ID** | API 密钥 | 项目详情页 |
| **Client Secret** | 秘密密钥 | 项目详情页 |
| **Account Number** | FedEx 账号 | 9 位数字，邮件中收到 |

<InfoBox variant="success" title="凭证获取完成">
拿到 Client ID、Client Secret、Account Number 这 3 个信息后，即可去 WooCommerce 后台配置 FedEx 物流。
</InfoBox>

:::info
测试环境用 `apis-sandbox.fedex.com`，生产环境用 `apis.fedex.com`
:::

---

## 后续步骤

获取凭证后，返回 [cclee-shipping 使用指南](../docs/cclee-shipping.md) 完成插件配置。
