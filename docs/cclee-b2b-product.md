---
title: 产品页面
description: CCLEE B2B 插件产品页面设置完整指南 — 产品徽章、内控 ID、推荐配件
project: cclee-b2b
schema: HowTo
steps:
  - name: 设置产品徽章
    text: 在 Product Page 设置中配置徽章文字，非 Verified 用户将在产品页看到徽章
  - name: 配置内控产品 ID
    text: 在产品编辑页 Inventory Tab 填写内控 ID，前台显示供采购参考
  - name: 配置推荐配件
    text: 为产品添加 Cross-sell 产品，前台自动展示推荐配件横滑卡片
rag: true
rag_tags: ["CCLEE B2B", "产品徽章", "内控 ID", "推荐配件", "Cross-sell"]
---

# CCLEE B2B — 产品页面设置

后台路径：**CCLEE B2B → Product Page**

![Product Page 设置页概览](/images/docs/cclee-b2b/product/settings-overview.webp)

---

## 产品徽章

为产品添加自定义标签，展示卖点和重要信息给非企业用户。

**适用场景：**
- 工厂直供 / OEM & ODM
- 交货周期提示
- 最低起订量说明
- 特殊认证标识

### 配置步骤

1. 进入 **CCLEE B2B → Product Page**
2. 在 **Badges** 文本框中填写徽章，每行一条
3. 保存设置

**示例：**
```
工厂直供
OEM & ODM 可定制
7天交货
```

### 前台效果

非 Verified 访客在产品页标题下方看到徽章标签。

![产品徽章前台展示](/images/docs/cclee-b2b/product/product-badges-frontend.webp)

<InfoBox variant="info" title="徽章显示规则">
徽章仅对 Pending 和 Retail 用户显示，Verified 企业用户默认看到批发价格，不需要徽章引导。
</InfoBox>

---

## 内控产品 ID（Source ID）

在后台为每个产品设置内部编号，供 B2B 采购人员参考。

### 配置步骤

1. 进入 **WP Admin → Products → Edit**
2. 切换到 **Inventory** 标签
3. 填写 **Internal Product ID** 字段
4. 更新产品

![产品编辑页 Inventory Tab](/images/docs/cclee-b2b/product/source-id-frontend.webp)

### 前台效果

产品页 meta 区域显示内控 ID，方便采购人员通过电话或邮件询价时准确引用产品。

---

## 推荐配件

基于 Cross-sell 关联，在产品页底部自动展示相关配件推荐。

### 配置步骤

1. 进入 **WP Admin → Products → Edit**
2. 在 **Linked Products** 面板中，找到 **Cross-sells**
3. 搜索并添加关联产品
4. 更新产品

### 前台效果

产品页加入购物车按钮下方，显示 "Recommended Accessories" 横滑卡片区域。

![推荐配件前台展示](/images/docs/cclee-b2b/product/accessories-section.webp)

**卡片内容：**
- 配件产品图片
- 配件名称
- 配件价格（如有）
- 点击跳转到配件产品页

---

## 常见问题

### 徽章没有显示？

1. 确认 Product Page 设置中 Badges 文本框有内容
2. 确认当前用户不是 Verified 企业用户（Verified 用户看不到徽章）
3. 清除浏览器缓存或使用隐身模式测试

### 推荐配件没有出现？

1. 确认产品已添加 Cross-sell 关联
2. 确认当前用户为 Verified 企业用户
3. 检查产品是否有有效的 Cross-sell 产品

### 内控 ID 显示位置在哪里？

显示在产品页面的 meta 信息区域，位于加入购物车按钮附近。
