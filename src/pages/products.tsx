import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { PluginIcon, AIIcon, ZapIcon, TrendIcon, ShieldIcon, LightbulbIcon, MessageCircleIcon, RocketIcon, LayoutIcon, ToolIcon, BuildingIcon } from '@site/src/components/Icons';
import { HeroBackground } from '@site/src/components/HeroSection';

export default function Products(): React.ReactElement {
  const title = translate({ id: 'homepage.title', message: 'CCLHUB - AI驱动的电商运营工具平台' });
  const description = translate({ id: 'homepage.description', message: 'CCLHUB 电商运营工具平台 - AI驱动的AI运营与电商工具箱' });

  // Alt texts for images
  const toolkitAlt = translate({ id: 'homepage.products.toolkit.alt', message: '电商工具箱' });
  const aiOpsAlt = translate({ id: 'homepage.products.aiOps.alt', message: 'AI运营' });
  const aiSupportAlt = translate({ id: 'homepage.products.aiSupport.alt', message: 'AI客服' });

  return (
    <Layout title={title} description={description}>
      <main>
        <div className="relative min-h-[45vh] flex flex-col items-center justify-center px-5 pt-[80px] pb-[40px] text-center overflow-hidden">
          {/* Particle Background */}
          <div className="absolute inset-0 z-0">
            <HeroBackground />
          </div>
          <div className="relative z-10 animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent tracking-tight">
              <Translate id="homepage.hero.title">您的业务，还有几个环节在靠人工支撑</Translate>
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-[700px] mx-auto text-center">
              <Translate id="homepage.hero.subtitle">重复人工、成本攀升、竞争加剧——AI定制工具帮您降本增效，重建竞争优势</Translate>
            </div>

          </div>

        </div>

        {/* Transition Section */}
        <div className="py-16 px-5 text-center">
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-[700px] mx-auto leading-relaxed">
            <Translate id="homepage.transition">已落地170+个AI定制工具，覆盖出海、入华、内部流程自动化。非通用软件，专为您的业务场景定制开发</Translate>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-5 py-20">
          {/* WordPress 生态 - 放第一位 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              WordPress 生态
            </h2>
            <p className="text-gray-600 dark:text-gray-400">免费开源的 WordPress 主题与插件</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <Link
              to="/cclee-theme"
              id="cclee-theme"
              className="animate-enter group p-8 rounded-2xl bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 text-inherit block shadow-md hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 scroll-mt-20"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:shadow-purple group-hover:rotate-6 transition-all duration-300">
                <LayoutIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                <Translate id="homepage.products.ccleeTheme.title">CCLEE Theme</Translate>
              </h3>
              <div className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-5">
                <Translate id="homepage.products.ccleeTheme.description">免费 WordPress FSE 区块主题。76 行 JS、零依赖、24 区块、5 种风格，开发者与建站者皆宜。</Translate>
              </div>
              <div className="text-purple-700 dark:text-purple-400 font-semibold text-sm flex items-center gap-1.5">
                <ZapIcon size={16} />
                <Translate id="homepage.products.ccleeTheme.cta">GitHub 开源 · 永久免费</Translate>
              </div>
            </Link>

            <Link
              to="/docs/cclee-toolkit"
              id="cclee-toolkit"
              className="animate-enter group p-8 rounded-2xl bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 text-inherit block shadow-md hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 scroll-mt-20"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:shadow-purple group-hover:rotate-6 transition-all duration-300">
                <ToolIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                <Translate id="homepage.products.ccleeToolkit.title">CCLEE Toolkit</Translate>
              </h3>
              <div className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-5">
                <Translate id="homepage.products.ccleeToolkit.description">WordPress + WooCommerce 增强插件。全系列集成 AI 操作，自动生成 SEO 内容、Product Schema、图片 Alt，显著提升搜索引擎排名。</Translate>
              </div>
              <div className="text-purple-700 dark:text-purple-400 font-semibold text-sm flex items-center gap-1.5">
                <ZapIcon size={16} />
                <Translate id="homepage.products.ccleeToolkit.cta">GitHub 开源 · 永久免费</Translate>
              </div>
            </Link>

            <Link
              to="/docs/cclee-b2b-general"
              id="cclee-b2b"
              className="animate-enter group p-8 rounded-2xl bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 text-inherit block shadow-md hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 scroll-mt-20"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:shadow-purple group-hover:rotate-6 transition-all duration-300">
                <BuildingIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                <Translate id="homepage.products.ccleeB2b.title">CCLEE B2B</Translate>
              </h3>
              <div className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-5">
                <Translate id="homepage.products.ccleeB2b.description">WooCommerce B2B 增强插件。企业用户管理、差异化定价、报价系统、批量下单，让批发商和品牌商高效开展线上业务。</Translate>
              </div>
              <div className="text-purple-700 dark:text-purple-400 font-semibold text-sm flex items-center gap-1.5">
                <ZapIcon size={16} />
                <Translate id="homepage.products.ccleeB2b.cta">GitHub 开源 · 永久免费</Translate>
              </div>
            </Link>
          </div>

          {/* 核心产品 */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              核心产品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            <Link
              to="/docs/browser-plugin"
              id="browser-plugin"
              className="animate-enter group p-8 rounded-2xl bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 text-inherit block shadow-md hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 scroll-mt-20"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:shadow-purple group-hover:rotate-6 transition-all duration-300">
                <PluginIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                <Translate id="homepage.products.toolkit.title">电商工具箱</Translate>
              </h3>
              <div className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-5">
                <Translate id="homepage.products.toolkit.description">一站式电商运营解决方案，从数据采集到智能分析，全方位提升运营效率</Translate>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <img src={require('@site/static/images/plugin-sidebar-ecommerce.png').default} alt={toolkitAlt} className="w-full h-full object-cover" />
              </div>
            </Link>

            <Link
              to="/docs/ai-analytics"
              id="ai-analytics"
              className="animate-enter group p-8 rounded-2xl bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 text-inherit block shadow-md hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 scroll-mt-20"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:shadow-purple group-hover:rotate-6 transition-all duration-300">
                <AIIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                <Translate id="homepage.products.aiOps.title">AI运营</Translate>
              </h3>
              <div className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-5">
                <Translate id="homepage.products.aiOps.description">基于大语言模型的智能分析，自动洞察市场趋势、用户行为、销售数据，提供精准运营策略。</Translate>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <img src={require('@site/static/images/saas-dashboard-main.png').default} alt={aiOpsAlt} className="w-full h-full object-cover" />
              </div>
            </Link>

            <Link to="/docs/customer-service" id="ai-support" className="animate-enter group p-8 rounded-2xl bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 text-inherit block shadow-md hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 scroll-mt-20" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:shadow-purple-500/30 group-hover:rotate-6 transition-all duration-300">
                <MessageCircleIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                <Translate id="homepage.products.aiSupport.title">AI客服</Translate>
              </h3>
              <div className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-5">
                <Translate id="homepage.products.aiSupport.description">7×24小时AI客服，快速解答产品使用问题，提供功能指导和最佳实践。</Translate>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800 mb-4 border border-gray-200 dark:border-gray-700">
                <img src={require('@site/static/images/ai-chat-interface.jpg').default} alt={aiSupportAlt} className="w-full h-full object-cover" />
              </div>
              <div className="text-purple-700 dark:text-purple-400 font-semibold text-sm flex items-center gap-1.5">
                <ZapIcon size={16} />
                <Translate id="homepage.products.aiSupport.cta">了解更多</Translate>
              </div>
            </Link>

            <Link
              to="/agntc"
              id="agntc"
              className="animate-enter group p-8 rounded-2xl bg-gray-50 dark:bg-[#181824] border-2 border-gray-200 dark:border-gray-700 text-inherit block shadow-md hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1 hover:border-purple-400 transition-all duration-300 scroll-mt-20"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg group-hover:shadow-purple group-hover:rotate-6 transition-all duration-300">
                <RocketIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                <Translate id="homepage.products.agntc.title">AI Agent</Translate>
              </h3>
              <div className="text-base text-gray-700 dark:text-gray-400 leading-relaxed mb-5">
                <Translate id="homepage.products.agntc.description">说出来就能做到，不用找开发者。自带 API Key，执行透明，数据自主。</Translate>
              </div>
              <div className="text-purple-700 dark:text-purple-400 font-semibold text-sm flex items-center gap-1.5">
                <ZapIcon size={16} />
                <Translate id="homepage.products.agntc.cta">访问 app.aigent.ren</Translate>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </Layout>
  );
}
