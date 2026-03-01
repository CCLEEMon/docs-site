'use client'

import { useState, useRef, useEffect } from 'react'
import { Globe, Languages } from 'lucide-react'
import Translate from '@docusaurus/Translate'
import { locales, localeNames } from '../i18n'

export default function LocaleSwitch({ currentLocale }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const switchLocale = (newLocale) => {
    const currentPath = window.location.pathname
    // 移除现有的语言前缀
    const pathWithoutLocale = currentPath.replace(/^\/en/, '')
    // 构建新的路径（中文无前缀，英文有 /en 前缀）
    const newPath = newLocale === 'zh' ? pathWithoutLocale : `/en${pathWithoutLocale}`
    window.location.href = newPath
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative">
      {/* 触发按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2
          px-3 py-2 rounded-lg
          text-sm font-medium
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-500/50
          text-gray-600 dark:text-gray-300
          hover:bg-gray-100 dark:hover:bg-gray-800
        `}
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe size={20} />
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
      </button>

      {/* 下拉菜单 */}
      <div
        className={`
          absolute top-full right-0 mt-2
          min-w-[160px]
          rounded-xl
          overflow-hidden
          z-50
          transition-all duration-200 origin-top-right
          ${isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }
        `}
      >
        {/* 背景 */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700" />

        <div className="relative p-1">
          {/* 标题 */}
          <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-400 dark:text-gray-500">
            <Languages size={14} />
            <Translate id="locale.title">选择语言</Translate>
          </div>

          {/* 语言选项 */}
          {locales.map((locale) => {
            const isActive = currentLocale === locale
            const flag = locale === 'zh' ? '🇨🇳' : '🇺🇸'

            return (
              <button
                key={locale}
                onClick={() => {
                  switchLocale(locale)
                  setIsOpen(false)
                }}
                className={`
                  w-full px-3 py-2.5
                  flex items-center gap-3
                  rounded-lg
                  transition-colors duration-150
                  ${isActive
                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }
                `}
              >
                <span className="text-base">{flag}</span>
                <span className="flex-1 text-left text-sm font-medium">
                  {localeNames[locale]}
                </span>
                {isActive && (
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
