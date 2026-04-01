'use client'

import Translate from '@docusaurus/Translate'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { useState } from 'react'
import { Zap, Shield, Rocket, Github, MessageCircle } from 'lucide-react'

export default function CustomFooter() {
  const currentYear = new Date().getFullYear()
  const { i18n } = useDocusaurusContext()
  const isEn = i18n.currentLocale === 'en'
  const [showWechat, setShowWechat] = useState(false)

  const features = isEn
    ? [
        { icon: Zap, label: 'Efficient' },
        { icon: Shield, label: 'Secure' },
        { icon: Rocket, label: 'Innovative' },
      ]
    : [
        { icon: Zap, label: '高效' },
        { icon: Shield, label: '安全' },
        { icon: Rocket, label: '创新' },
      ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        {/* 4列布局 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* 品牌列 */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">CCLEE</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              <Translate id="footer.tagline">AI驱动的电商运营工具平台</Translate>
            </p>

            {/* 特性标签 */}
            <div className="flex gap-2">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 dark:bg-gray-800/50 text-[10px] text-gray-400 dark:text-gray-500"
                >
                  <feature.icon size={10} className="text-indigo-400" />
                  {feature.label}
                </div>
              ))}
            </div>
          </div>

          {/* 产品 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              <Translate id="footer.products">产品</Translate>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/docs/ai-analytics', id: 'footer.aiAnalytics', label: 'AI运营' },
                { href: '/docs/browser-plugin', id: 'footer.browserPlugin', label: '电商工具箱' },
                { href: '/docs/customer-service', id: 'footer.aiService', label: 'AI客服' },
                { href: '/cclee-theme', id: 'footer.ccleeTheme', label: 'WordPress 主题' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <Translate id={link.id}>{link.label}</Translate>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 资源 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              <Translate id="footer.resources">资源</Translate>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/services', id: 'footer.services', label: '服务' },
                { href: '/products', id: 'footer.products', label: '产品' },
                { href: '/cases', id: 'footer.cases', label: '案例' },
                { href: '/blog', id: 'footer.blog', label: '博客' },
                { href: '/about', id: 'footer.aboutUs', label: '关于我们' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <Translate id={link.id}>{link.label}</Translate>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 支持 */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              <Translate id="footer.support">支持</Translate>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/docs/ai-analytics', id: 'footer.getStarted', label: '快速开始' },
                { href: '/docs/customer-service', id: 'footer.helpCenter', label: '帮助中心' },
                { href: '/privacy', id: 'footer.privacy', label: '隐私政策' },
                { href: '/terms', id: 'footer.terms', label: '服务条款' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <Translate id={link.id}>{link.label}</Translate>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-800 pt-8">
          {/* 站点外链 - SEO */}
          <div className="flex justify-center gap-6 mb-6 text-sm">
            <a
              href="https://www.aigent.ren/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
            >
              aigent.ren
            </a>
            <span className="text-gray-700 dark:text-gray-600">•</span>
            <a
              href="https://app.aigent.ren/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
            >
              app.aigent.ren
            </a>
            <span className="text-gray-700 dark:text-gray-600">•</span>
            <a
              href="https://aidevhub.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
            >
              aidevhub.ai
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            {/* 版权信息 */}
            <div>© {currentYear} CCLEE. <Translate id="footer.copyright">All rights reserved.</Translate></div>

            {/* 社媒图标 */}
            <div className="flex items-center gap-4">
              {/* GitHub - 中英文都有 */}
              <a
                href="https://github.com/cclee-hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>

              {/* 微信 - 仅中文站 */}
              {!isEn && (
                <div
                  className="relative"
                  onMouseEnter={() => setShowWechat(true)}
                  onMouseLeave={() => setShowWechat(false)}
                >
                  <button
                    className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 cursor-pointer"
                    aria-label="微信"
                    onClick={() => setShowWechat(v => !v)}
                  >
                    <MessageCircle size={16} />
                  </button>
                  {showWechat && (
                    <div className="absolute bottom-full right-0 mb-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                      <img
                        src="/images/wechat-qr.jpg"
                        alt="微信二维码"
                        className="w-28 h-28 rounded"
                      />
                      <p className="text-center text-[10px] text-gray-500 dark:text-gray-400 mt-1">扫码联系</p>
                    </div>
                  )}
                </div>
              )}

              {/* Upwork - 仅英文站 */}
              {isEn && (
                <a
                  href="https://www.upwork.com/freelancers/~010ab5ec29d8f4ff3f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
                  aria-label="Upwork"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.561 13.158c-1.698 0-3.074-1.376-3.074-3.074s1.376-3.074 3.074-3.074 3.074 1.376 3.074 3.074-1.376 3.074-3.074 3.074zm-6.478-6.479h-2.81v8.372c0 .838-.68 1.518-1.518 1.518s-1.518-.68-1.518-1.518V6.68H5.427v8.372c0 2.392 1.944 4.336 4.336 4.336s4.336-1.944 4.336-4.336V6.68h-.016zm12.892-2.81H22.17v10.645c0 .838-.68 1.518-1.518 1.518-.468 0-.887-.212-1.163-.546 1.023-.973 1.662-2.345 1.662-3.867 0-2.961-2.409-5.37-5.37-5.37s-5.37 2.409-5.37 5.37 2.409 5.37 5.37 5.37c.996 0 1.928-.274 2.732-.747.766 1.027 1.98 1.695 3.35 1.695 2.32 0 4.207-1.887 4.207-4.207V3.868h-.078z"/>
                  </svg>
                </a>
              )}
            </div>

            {/* 备案信息 - 仅中文版 */}
            {!isEn && (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  粤ICP备2026015835号
                </a>
                <span className="text-gray-700 dark:text-gray-500">•</span>
                <a
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44200102445864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                >
                  <img
                    src="/images/beian.png"
                    alt="公安备案"
                    className="w-4 h-4"
                  />
                  粤公网安备44200102445864号
                </a>
              </div>
            )}
          </div>

          {/* 合规声明 - 仅中文版 */}
          {!isEn && (
            <div className="mt-4 text-xs text-gray-600 dark:text-gray-400 space-y-1 text-center md:text-left">
              <p>
                <Translate id="footer.compliance1">
                  本网站遵循 MIT 开源协议，完全在本地运行，不收集任何用户数据。
                </Translate>
              </p>
              <p>
                <Translate id="footer.compliance2">
                  仅供技术学习与研究使用，用户需自行确保符合目标平台规则及当地法律法规。
                </Translate>
              </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
