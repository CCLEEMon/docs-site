'use client'

import Translate from '@docusaurus/Translate'

export default function CustomFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-[#1e1e1e] text-gray-400">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        {/* 4列布局 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* 品牌列 */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">CCLHUB</h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              <Translate id="footer.tagline">AI驱动的电商运营工具平台</Translate>
            </p>
          </div>

          {/* 产品 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              <Translate id="footer.products">产品</Translate>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/docs/ai-analytics" className="hover:text-white transition-colors">
                  <Translate id="footer.aiAnalytics">AI运营</Translate>
                </a>
              </li>
              <li>
                <a href="/docs/browser-plugin" className="hover:text-white transition-colors">
                  <Translate id="footer.browserPlugin">电商工具箱</Translate>
                </a>
              </li>
              <li>
                <a href="/docs/customer-service" className="hover:text-white transition-colors">
                  <Translate id="footer.aiService">AI客服</Translate>
                </a>
              </li>
            </ul>
          </div>

          {/* 资源 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              <Translate id="footer.resources">资源</Translate>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/docs/intro" className="hover:text-white transition-colors">
                  <Translate id="footer.guide">产品文档</Translate>
                </a>
              </li>
              <li>
                <a href="/developers/intro" className="hover:text-white transition-colors">
                  <Translate id="footer.developer">开发者文档</Translate>
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  <Translate id="footer.aboutUs">关于我们</Translate>
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  <Translate id="footer.privacy">隐私政策</Translate>
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  <Translate id="footer.terms">服务条款</Translate>
                </a>
              </li>
            </ul>
          </div>

          {/* 联系 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              <Translate id="footer.contact">联系我们</Translate>
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="/docs/intro" className="hover:text-white transition-colors">
                  <Translate id="footer.guide">产品文档</Translate>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部分隔线 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 mb-4">
            <div>© {currentYear} CCLHUB. <Translate id="footer.copyright">All rights reserved.</Translate></div>
            <div>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Translate id="footer.icpNumber">粤ICP备2026015835号</Translate>
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <p><Translate id="footer.compliance1">本网站遵循 MIT 开源协议，完全在本地运行，不收集任何用户数据。</Translate></p>
            <p><Translate id="footer.compliance2">仅供技术学习与研究使用，用户需自行确保符合目标平台规则及当地法律法规。</Translate></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
