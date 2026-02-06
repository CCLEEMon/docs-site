---
title: 首页
description: CCLHUB 电商运营工具平台 - AI驱动的AI运营与电商工具箱
---

import { PluginIcon, AIIcon, ZapIcon, TrendIcon, ShieldIcon, LightbulbIcon, ArrowRightIcon, MessageCircleIcon } from '@site/src/components/Icons'
import { HeroBackground, HeroCounter } from '@site/src/components/HeroSection'

<div className="relative min-h-[85vh] flex flex-col items-center justify-center px-5 pt-[100px] pb-[80px] text-center overflow-hidden">
  <div className="relative z-10 animate-fadeInUp">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
      AI 驱动的电商运营工具
    </h1>

    <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-[700px]">
      AI运营 + 电商工具箱，让电商运营更高效
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch w-full max-w-[500px] mx-auto mb-16">
      <a
        href="/docs/ai-analytics"
        className="animate-fadeIn group relative px-8 py-4 rounded-xl text-white text-base font-semibold inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10 flex items-center gap-2">
          免费试用
          <ArrowRightIcon size={18} />
        </span>
      </a>
      <a
        href="/docs/browser-plugin"
        className="animate-fadeIn group relative px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center gap-2 bg-white/10 border border-indigo-400/30 text-indigo-100 hover:text-white hover:border-indigo-400 hover:bg-white/20 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative z-10 flex items-center gap-2">
          <PluginIcon size={18} />
          获取工具
        </span>
      </a>
    </div>

    {/* Hero Dashboard Image - Dual Layout */}
    <div className="relative mt-8 mb-12 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Dashboard */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 border border-gray-200/50 bg-white p-3 group transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)]">
          <img
            src="/images/saas-dashboard-main.png"
            alt="CCLHUB 数据分析仪表盘"
            className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
          {/* Floating Accuracy Card */}
          <div className="absolute -top-3 -right-3 bg-white p-3 rounded-xl shadow-xl border border-gray-100 animate-bounce-subtle">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <AIIcon size={18} color="#fff" />
              </div>
              <div className="text-left">
                <div className="text-xl font-black text-green-600">95%</div>
                <div className="text-xs text-gray-600 font-medium">准确率</div>
              </div>
            </div>
          </div>
        </div>

        {/* Plugin + Stats Grid */}
        <div className="space-y-6">
          {/* Plugin Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 border border-gray-200/50 bg-white p-3 group transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)]">
            <img
              src="/images/plugin-sidebar-ecommerce.png"
              alt="电商工具箱界面"
              className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-5 rounded-2xl text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-black mb-1"><HeroCounter value="50K+" /></div>
              <div className="text-xs opacity-90">活跃用户</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-5 rounded-2xl text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-black mb-1"><HeroCounter value="95%" /></div>
              <div className="text-xs opacity-90">准确率</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-5 rounded-2xl text-white text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-black mb-1">7×24</div>
              <div className="text-xs opacity-90">智能客服</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Trend Card - Bottom Center */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 animate-bounce-subtle z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
            <TrendIcon size={20} color="#fff" />
          </div>
          <div className="text-left">
            <div className="text-2xl font-black text-indigo-600">+<HeroCounter value="47%" /></div>
            <div className="text-xs text-gray-600 font-medium">效率提升</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Stats */}
  <div className="animate-scaleIn grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 mt-20 max-w-4xl mx-auto px-4">
    <div>
      <div className="text-5xl lg:text-6xl font-black mb-2 text-indigo-600">
        <HeroCounter value="50K+" />
      </div>
      <div className="text-base text-gray-600 font-medium">活跃用户</div>
    </div>
    <div>
      <div className="text-5xl lg:text-6xl font-black mb-2 text-indigo-600">
        <HeroCounter value="95%" />
      </div>
      <div className="text-base text-gray-600 font-medium">分析准确率</div>
    </div>
    <div>
      <div className="text-5xl lg:text-6xl font-black mb-2 text-indigo-600">
        7×24
      </div>
      <div className="text-base text-gray-600 font-medium">智能客服</div>
    </div>
  </div>
</div>

{/* Transition Section */}
<div className="bg-gradient-to-b from-indigo-50/30 to-transparent py-16 px-5 text-center">
  <div className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-[700px] mx-auto leading-relaxed">
    一站式电商运营解决方案，从数据采集到智能分析，全方位提升运营效率
  </div>
</div>

<div className="max-w-[1200px] mx-auto px-5 py-20">
  <div className="mb-20">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-gray-900">
      核心产品
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
    <a
      href="/docs/browser-plugin"
      className="animate-scaleIn group p-6 rounded-2xl bg-white/80 border border-white/20 text-inherit block shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] hover:shadow-indigo-500/20 hover:-translate-y-2 hover:border-indigo-400 transition-all duration-300"
      style={{ animationDelay: '0.1s' }}
    >
      <div className="rounded-xl overflow-hidden mb-6 border border-white/30 bg-gradient-to-br from-white/60 to-white/40 aspect-[4/3] shadow-inner">
        <img
          src="/images/plugin-sidebar-ecommerce.png"
          alt="电商工具箱界面"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
        <PluginIcon size={28} color="#fff" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">电商工具箱</h3>
      <div className="text-base text-gray-600 leading-relaxed">
        实时获取商品数据、价格监控、竞品分析。支持淘宝、京东、拼多多等主流电商平台。
      </div>
    </a>

    <a
      href="/docs/ai-analytics"
      className="animate-scaleIn group p-6 rounded-2xl bg-white/80 border border-white/20 text-inherit block shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] hover:shadow-indigo-500/20 hover:-translate-y-2 hover:border-indigo-400 transition-all duration-300"
      style={{ animationDelay: '0.2s' }}
    >
      <div className="rounded-xl overflow-hidden mb-6 border border-white/30 bg-gradient-to-br from-white/60 to-white/40 aspect-[4/3] shadow-inner">
        <img
          src="/images/saas-dashboard-both.png"
          alt="AI运营界面"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
        <AIIcon size={28} color="#fff" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">AI运营</h3>
      <div className="text-base text-gray-600 leading-relaxed">
        基于大语言模型的智能分析，自动洞察市场趋势、用户行为、销售数据，提供精准运营策略。
      </div>
    </a>

    <div className="animate-scaleIn group p-6 rounded-2xl bg-white/80 border border-white/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] hover:shadow-indigo-500/20 hover:-translate-y-2 hover:border-indigo-400 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
      <div className="rounded-xl overflow-hidden mb-6 border border-white/30 bg-gradient-to-br from-white/60 to-white/40 aspect-[4/3] shadow-inner">
        <img
          src="/images/ai-chat-interface.jpg"
          alt="AI智能客服对话界面"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
        <MessageCircleIcon size={28} color="#fff" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">AI客服</h3>
      <div className="text-base text-gray-600 leading-relaxed mb-4">
        7×24小时智能客服，快速解答产品使用问题，提供专业运营建议和最佳实践指导。
      </div>
      <div className="text-indigo-600 font-semibold text-sm flex items-center gap-1.5">
        <ZapIcon size={16} />
        点击右下角图标开始咨询
      </div>
    </div>
  </div>

  <div className="border-t border-gray-200 pt-20 mb-20">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gray-900">
      为什么选择 CCLHUB
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mb-5 shadow-md">
          <ZapIcon size={24} className="text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold mb-2.5 text-gray-900">即时可用</h3>
        <div className="text-base text-gray-600 leading-relaxed">
          无需复杂配置，安装即用。5分钟即可完成数据接入并开始分析。
        </div>
      </div>

      <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mb-5 shadow-md">
          <TrendIcon size={24} className="text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold mb-2.5 text-gray-900">精准分析</h3>
        <div className="text-base text-gray-600 leading-relaxed">
          AI驱动的数据分析，深度洞察市场趋势和用户行为，准确率高达95%以上。
        </div>
      </div>

      <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mb-5 shadow-md">
          <ShieldIcon size={24} className="text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold mb-2.5 text-gray-900">数据安全</h3>
        <div className="text-base text-gray-600 leading-relaxed">
          采用企业级加密技术，本地数据处理，严格保护商业隐私和数据安全。
        </div>
      </div>

      <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mb-5 shadow-md">
          <LightbulbIcon size={24} className="text-indigo-600" />
        </div>
        <h3 className="text-lg font-bold mb-2.5 text-gray-900">持续更新</h3>
        <div className="text-base text-gray-600 leading-relaxed">
          定期功能更新，AI模型持续优化，始终跟上电商发展趋势和技术前沿。
        </div>
      </div>
    </div>
  </div>
</div>
