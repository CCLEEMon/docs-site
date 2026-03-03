import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { ZapIcon, GlobeIcon, BuildingIcon, ArrowRightIcon, MessageCircleIcon } from '@site/src/components/Icons';

export default function Services(): React.ReactElement {
  const title = translate({ id: 'services.page.title', message: '服务' });
  const description = translate({ id: 'services.page.description', message: 'AI工具开发、中国出海、外企入华专业服务' });

  return (
    <Layout title={title} description={description}>
      <main>
        {/* Hero Section */}
        <div className="relative min-h-[40vh] flex flex-col items-center justify-center px-5 pt-[80px] pb-[40px] text-center">
          <div className="relative z-10 animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 text-gray-900 dark:text-white">
              <Translate id="services.hero.title">专业服务</Translate>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto">
              <Translate id="services.hero.subtitle">为有明确业务需求的企业提供定制化解决方案</Translate>
            </p>
          </div>
        </div>

        {/* Services Content */}
        <div className="max-w-[900px] mx-auto px-5 pb-20">
          {/* AI工具开发 */}
          <section id="ai-tools" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-md">
                <ZapIcon size={28} className="text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                <Translate id="services.aiTools.title">AI工具开发</Translate>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <Translate id="services.aiTools.desc">有重复性高、依赖人工判断的业务流程？我帮你用AI自动化。</Translate>
              </p>

              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  <Translate id="services.aiTools.scopeTitle">服务范围</Translate>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <Translate id="services.aiTools.scope">从需求分析到落地交付，覆盖客服自动化、数据采集、文案生成、选品分析、广告优化等场景。24年商业实战背景，懂业务逻辑不只是技术实现。</Translate>
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
                  <Translate id="services.aiTools.targetTitle">适合谁</Translate>
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
                  <Translate id="services.aiTools.target">有明确业务痛点、需要定制AI工具或自动化工作流的企业</Translate>
                </p>
              </div>
            </div>
          </section>

          {/* 分割线 */}
          <div className="border-t border-gray-200 dark:border-gray-700 mb-16"></div>

          {/* 中国出海 */}
          <section id="china-export" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-md">
                <GlobeIcon size={28} className="text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                <Translate id="services.chinaExport.title">中国出海</Translate>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <Translate id="services.chinaExport.desc">想借助中国供应链降低成本，或进入中国平台开拓市场？</Translate>
              </p>

              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  <Translate id="services.chinaExport.scopeTitle">服务范围</Translate>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <Translate id="services.chinaExport.scope">提供选品策略、平台运营、全渠道推广、独立站建设，打通1688、速卖通、独立站等渠道。有真实操盘经验，月均销售额增长200%、独立站海外询盘增长30%。</Translate>
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
                  <Translate id="services.chinaExport.targetTitle">适合谁</Translate>
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
                  <Translate id="services.chinaExport.target">希望利用中国供应链或平台优势拓展业务的外国企业</Translate>
                </p>
              </div>
            </div>
          </section>

          {/* 分割线 */}
          <div className="border-t border-gray-200 dark:border-gray-700 mb-16"></div>

          {/* 外企入华 */}
          <section id="china-entry" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-md">
                <BuildingIcon size={28} className="text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                <Translate id="services.chinaEntry.title">外企入华</Translate>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <Translate id="services.chinaEntry.desc">进入中国市场不只是翻译，是本地化重构。</Translate>
              </p>

              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  <Translate id="services.chinaEntry.scopeTitle">服务范围</Translate>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <Translate id="services.chinaEntry.scope">提供中国市场策略、平台选择、本地化推广、内容运营，帮你真正落地而不是停留在计划书。</Translate>
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
                  <Translate id="services.chinaEntry.targetTitle">适合谁</Translate>
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed">
                  <Translate id="services.chinaEntry.target">有入华意向、需要本地化执行支持的外国企业</Translate>
                </p>
              </div>
            </div>
          </section>

          {/* 分割线 */}
          <div className="border-t border-gray-200 dark:border-gray-700 mb-16"></div>

          {/* 顾问说明 */}
          <section className="mb-16">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                  <MessageCircleIcon size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    <Translate id="services.consulting.title">顾问服务说明</Translate>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <Translate id="services.consulting.desc">顾问服务采用深度介入模式，同期服务企业数量有限，确保每个客户得到充分投入。</Translate>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Translate id="services.cta">联系合作</Translate>
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
