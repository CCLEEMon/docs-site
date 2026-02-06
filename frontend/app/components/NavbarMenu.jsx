'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ThemeSwitch from './ThemeSwitch'
import LocaleSwitch from './LocaleSwitch'
import { useTranslations } from './TranslationProvider'

export default function NavbarMenu() {
  const { t } = useTranslations()
  const pathname = usePathname()
  const [locale, setLocale] = useState('zh')

  useEffect(() => {
    // Get locale from cookie (client-side only)
    const match = document.cookie.match(/locale=([^;]+)/)
    setLocale((match?.[1] === 'en' || pathname.startsWith('/en')) ? 'en' : 'zh')
  }, [pathname])

  return (
    <>
      <a href="/" style={{
        padding: '0 12px',
        color: 'inherit',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 500
      }}>
        {t('nav.home')}
      </a>
      <a href="/browser-plugin" style={{
        padding: '0 12px',
        color: 'inherit',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 500
      }}>
        {t('nav.browserPlugin')}
      </a>
      <a href="/ai-analytics" style={{
        padding: '0 12px',
        color: 'inherit',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 500
      }}>
        {t('nav.aiAnalytics')}
      </a>
      <a href="/customer-service" style={{
        padding: '0 12px',
        color: 'inherit',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: 500
      }}>
        {t('nav.customerService')}
      </a>
      <div style={{ padding: '0 12px' }}>
        <LocaleSwitch currentLocale={locale} />
      </div>
      <div style={{ padding: '0 12px' }}>
        <ThemeSwitch />
      </div>
    </>
  )
}
