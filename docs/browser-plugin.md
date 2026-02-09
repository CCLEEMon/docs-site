---
title: 浏览器插件
description: CCLHUB 浏览器插件 - 实时获取商品数据、价格监控、竞品分析
project: CCLHub
---

import { PluginIcon, ChartIcon, SearchIcon, DownloadIcon, CheckIcon, LightbulbIcon, ZapIcon, AIIcon, ImageIcon, VideoIcon } from '@site/src/components/Icons'

# <PluginIcon size={28} /> 浏览器插件

一键安装，实时获取电商数据，让运营更高效

## 核心功能

### <ChartIcon size={20} /> 实时数据获取

- **商品信息抓取**：一键获取商品标题、价格、销量、评分等核心信息
- **历史价格追踪**：自动记录商品价格变化趋势
- **库存监控**：实时跟踪商品库存状态

### <SearchIcon size={20} /> 竞品分析

- **竞品对比**：快速对比多个竞品的各项指标
- **热销榜单**：自动生成类目热销商品排行
- **关键词分析**：分析竞品标题关键词分布

### <DownloadIcon size={20} /> 数据导出

- **Excel导出**：支持一键导出数据到Excel表格
- **图片批量下载**：批量下载商品主图、详情图
- **数据可视化**：图表展示销售趋势

## AI功能

### <AIIcon size={20} /> AI对话

- **智能问答**：集成大语言模型，随时解答产品使用问题
- **文案生成**：自动生成商品描述、营销文案、客服回复
- **模型切换**：支持多种文本模型自由切换

### <ImageIcon size={20} /> 图像生成

- **多平台支持**：Flux、Stable Diffusion、通义万相、Ideogram
- **背景处理**：Remove.bg 智能移除背景
- **商品素材**：一键生成商品展示图、营销海报

### <VideoIcon size={20} /> 视频生成

- **AI视频制作**：可灵AI、Pika、Vidu、Runway
- **快速产出**：几分钟生成产品宣传视频
- **多种风格**：支持不同视频风格和时长

## 安装使用

### 安装步骤

1. **下载插件**
   - 官网下载: https://cclhub-releases.oss-cn-shenzhen.aliyuncs.com/cclhub-latest.zip
   - 或访问 Chrome 网上应用店搜索 "CCLHUB"

2. **安装插件**
   - Chrome：拖拽 .crx 文件到扩展程序页面
   - Edge：访问扩展管理页面，加载解压的扩展

3. **注册账号**
   - 首次使用需注册 CCLHUB 账号
   - 支持手机号/邮箱快捷注册

### 使用指南

<div style={{
  padding: '24px',
  borderRadius: '12px',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  marginTop: '24px',
  marginBottom: '24px'
}}>
  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>快速上手</h3>
  <ol style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
    <li>打开目标电商网站（淘宝、天猫、京东、拼多多等）</li>
    <li>浏览商品页面，插件会自动显示数据面板</li>
    <li>点击插件图标，查看详细数据和分析结果</li>
    <li>使用导出功能保存数据到本地</li>
  </ol>
</div>

## 常见问题

### 插件无法显示数据？

**解决方案：**
1. 检查网络连接是否正常
2. 刷新页面重试
3. 检查插件是否有最新版本更新
4. 清除浏览器缓存后重试

### 数据导出失败？

**可能原因：**
- 浏览器权限未开启
- 导出数据量过大

**解决方案：**
1. 检查插件下载权限
2. 分批导出数据
3. 使用 CSV 格式替代 Excel

### 支持哪些网站？

目前支持：
- <CheckIcon size={16} style={{ color: '#10B981', verticalAlign: 'middle' }} /> 淘宝、天猫
- <CheckIcon size={16} style={{ color: '#10B981', verticalAlign: 'middle' }} /> 京东
- <CheckIcon size={16} style={{ color: '#10B981', verticalAlign: 'middle' }} /> 拼多多
- <CheckIcon size={16} style={{ color: '#10B981', verticalAlign: 'middle' }} /> 抖音电商
- <ZapIcon size={16} style={{ color: '#F59E0B', verticalAlign: 'middle' }} /> 更多平台陆续接入中...

## 功能对比

<div style={{
  overflow: 'auto',
  marginTop: '32px',
  marginBottom: '32px'
}}>
  <table style={{
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px'
  }}>
    <thead>
      <tr style={{ backgroundColor: '#f9fafb' }}>
        <th style={{
          padding: '12px',
          textAlign: 'left',
          border: '1px solid #e5e7eb',
          fontWeight: 600
        }}>功能</th>
        <th style={{
          padding: '12px',
          textAlign: 'center',
          border: '1px solid #e5e7eb',
          fontWeight: 600
        }}>免费版</th>
        <th style={{
          padding: '12px',
          textAlign: 'center',
          border: '1px solid #e5e7eb',
          fontWeight: 600
        }}>专业版</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>基础数据获取</td>
        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}><CheckIcon size={16} style={{ color: '#10B981', verticalAlign: 'middle' }} /></td>
        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}><CheckIcon size={16} style={{ color: '#10B981', verticalAlign: 'middle' }} /></td>
      </tr>
      <tr>
        <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>价格历史追踪</td>
        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}>7天</td>
        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}>90天</td>
      </tr>
      <tr>
        <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>数据导出</td>
        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}>10条/天</td>
        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}>无限</td>
      </tr>
      <tr>
        <td style={{ padding: '12px', border: '1px solid #e5e7eb' }}>AI智能分析</td>
        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}><span style={{ color: '#EF4444', fontSize: '18px', fontWeight: 'bold' }}>×</span></td>
        <td style={{ padding: '12px', textAlign: 'center', border: '1px solid #e5e7eb' }}><CheckIcon size={16} style={{ color: '#10B981', verticalAlign: 'middle' }} /></td>
      </tr>
    </tbody>
  </table>
</div>

## 更新日志

### v2.5.0 (2024-01-15)
- <ZapIcon size={16} style={{ color: '#3B82F6', verticalAlign: 'middle' }} /> 新增抖音电商支持
- <ZapIcon size={16} style={{ color: '#3B82F6', verticalAlign: 'middle' }} /> 修复京东数据抓取问题
- <ZapIcon size={16} style={{ color: '#3B82F6', verticalAlign: 'middle' }} /> 优化数据加载速度

### v2.4.0 (2024-01-01)
- <ZapIcon size={16} style={{ color: '#3B82F6', verticalAlign: 'middle' }} /> 新增价格预警功能
- <ZapIcon size={16} style={{ color: '#3B82F6', verticalAlign: 'middle' }} /> 修复导出格式问题

<div style={{
  padding: '24px',
  borderRadius: '12px',
  backgroundColor: '#FFFBEB',
  border: '1px solid #FCD34D',
  marginTop: '32px'
}}>
  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#92400E', display: 'flex', alignItems: 'center', gap: '8px' }}>
    <LightbulbIcon size={20} style={{ color: '#F59E0B' }} /> 提示
  </h3>
  <div style={{ color: '#78716C', lineHeight: '1.6' }}>
    插件会持续更新，添加更多平台支持和功能优化。建议开启自动更新以获得最佳体验。
  </div>
</div>

---

需要帮助？点击右下角智能咨询图标，或查看 [AI数据分析](/docs/ai-analytics) 功能
