'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeSwitch from './ThemeSwitch'
import LocaleSwitch from './LocaleSwitch'
import { useTranslations } from './TranslationProvider'
import { useLocation } from '@docusaurus/router'

export default function NavbarMenu() {
  const { t } = useTranslations()
  const location = useLocation()
  const [locale, setLocale] = useState('zh')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const match = document.cookie.match(/locale=([^;]+)/)
    setLocale((match?.[1] === 'en' || location.pathname.startsWith('/en')) ? 'en' : 'zh')
  }, [location.pathname])

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/browser-plugin', label: t('nav.browserPlugin') },
    { href: '/ai-analytics', label: t('nav.aiAnalytics') },
    { href: '/customer-service', label: t('nav.customerService') },
  ]

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3 text-gray-700 hover:text-indigo-600 no-underline text-sm font-semibold"
          >
            {item.label}
          </a>
        ))}
        <div className="px-3">
          <LocaleSwitch currentLocale={locale} />
        </div>
        <div className="px-3">
          <ThemeSwitch />
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden shadow-lg">
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 no-underline text-sm font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
              <LocaleSwitch currentLocale={locale} />
              <ThemeSwitch />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
