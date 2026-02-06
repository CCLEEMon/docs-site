'use client'

import { useTranslations } from './TranslationProvider'

export default function CustomFooter() {
  const { t } = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <div
      className="bg-gray-900 text-gray-400 py-8 px-5"
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 产品链接 */}
          <div className="flex gap-8">
            <a
              href="/browser-plugin"
              className="text-sm hover:text-white transition-colors duration-200"
            >
              {t('footer.browserPlugin')}
            </a>
            <a
              href="/ai-analytics"
              className="text-sm hover:text-white transition-colors duration-200"
            >
              {t('footer.aiAnalytics')}
            </a>
          </div>

          {/* 版权信息 */}
          <div className="text-xs text-gray-500">
            © {currentYear} CCLHUB. {t('footer.copyright')}
          </div>
        </div>
      </div>
    </div>
  )
}
