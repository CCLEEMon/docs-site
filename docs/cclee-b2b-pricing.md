---
title: 定价
description: CCLEE B2B 插件定价设置完整指南 — 全局折扣率、阶梯定价、产品级定价
project: cclee-b2b
schema: HowTo
steps:
  - name: 配置全局折扣率
    text: 在 Pricing 设置中为 Verified 和 Pending 企业用户设置默认折扣百分比
  - name: 设置产品级固定价格
    text: 在产品编辑页 B2B Pricing Tab 中为不同用户组设置固定批发价
  - name: 配置阶梯定价
    text: 在产品编辑页添加数量阶梯，不同数量区间应用不同单价
  - name: 前台展示阶梯价表格
    text: 开启 Show Tier Pricing Table 后，产品页显示数量阶梯和对应价格
rag: true
rag_tags: ["CCLEE B2B", "B2B 定价", "阶梯价", "批发价格", "数量折扣"]
---

# CCLEE B2B — 定价设置

后台路径：**CCLEE B2B → Pricing**

![Pricing 设置页概览](/images/docs/cclee-b2b/pricing/settings-overview.webp)

---

## 全局折扣率

为所有产品设置默认的批发折扣百分比。

### 配置步骤

1. 进入 **CCLEE B2B → Pricing**
2. 设置 **Verified Enterprise Discount (%)** — Verified 企业用户享受的折扣
3. 设置 **Pending Enterprise Discount (%)** — Pending 企业用户享受的折扣
4. 保存设置

<InfoBox variant="info" title="折扣优先级">
产品级固定价格 > 产品级阶梯价 > 全局折扣率
如果产品设置了固定价格或阶梯价，将覆盖全局折扣。
</InfoBox>

---

## 产品级固定价格

为单个产品设置专属的 B2B 价格。

### 配置步骤

1. 进入 **WP Admin → Products → Edit**
2. 切换到 **B2B Pricing** 标签
3. 填写 **Verified Enterprise Price** — Verified 用户看到的价格
4. 填写 **Pending Enterprise Price** — Pending 用户看到的价格
5. 更新产品

![产品 B2B Pricing Tab](/images/docs/cclee-b2b/pricing/product-b2b-pricing-tab.webp)

---

## 阶梯定价（数量折扣）

根据购买数量提供阶梯价格鼓励大批量采购。

### 配置步骤

1. 在产品编辑页 **B2B Pricing** 标签
2. 添加数量阶梯，例如：

| 数量范围 | 单价 |
|----------|------|
| 1-9 | $89.99 |
| 10-49 | $79.99 |
| 50-99 | $69.99 |
| 100+ | $59.99 |

3. 保存

### 前台展示

开启 **Show Tier Pricing Table** 后，产品页显示阶梯价格表格。

![前台阶梯价表格](/images/docs/cclee-b2b/pricing/tier-pricing-table-frontend.webp)

**效果说明：**
- Verified 用户在产品页看到阶梯价格表
- 添加到购物车的数量达到阈值时，自动应用对应阶梯单价
- 购物车和结算页面显示实际应用的阶梯价格

---

## 内控产品 ID（Inventory Tab）

在产品编辑页 Inventory 标签中，还可以设置内控产品 ID，供 B2B 采购参考。

![产品 Inventory Tab 内控 ID](/images/docs/cclee-b2b/pricing/product-inventory-source-id.webp)

---

## 常见问题

### 全局折扣不生效？

1. 检查该产品是否设置了产品级固定价格（会覆盖全局折扣）
2. 确认用户属于正确的用户组（Verified 或 Pending）
3. 检查 Pricing 模块是否在 General 设置中启用

### 阶梯价没有自动应用？

1. 确认产品设置了阶梯价数据
2. 确认当前用户为 Verified 企业用户
3. 添加到购物车的数量必须达到最低阶梯的起始数量

### Pending 用户看不到价格变化？

Pending 用户的折扣通过全局折扣率或产品级 Pending Enterprise Price 设置，阶梯价对 Pending 用户同样生效。
