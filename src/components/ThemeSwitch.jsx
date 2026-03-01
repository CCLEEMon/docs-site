'use client'

import { useColorMode } from '@docusaurus/theme-common'
import { useEffect, useState, useRef } from 'react'
import { Sun, Moon } from 'lucide-react'
import Translate from '@docusaurus/Translate'

export default function ThemeSwitch() {
  const { colorMode, setColorMode } = useColorMode()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const handleThemeChange = (newTheme) => {
    if (newTheme !== colorMode) {
      setIsTransitioning(true)
      setTimeout(() => {
        setColorMode(newTheme)
        setIsTransitioning(false)
      }, 300)
    }
    setIsOpen(false)
  }

  if (!mounted) return <div className="w-10 h-10" />

  const isDark = colorMode === 'dark'

  return (
    <div ref={dropdownRef} className="relative">
      {/* 触发按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative w-10 h-10 rounded-full
          flex items-center justify-center
          overflow-hidden
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${isDark
            ? 'bg-gradient-to-br from-indigo-800 to-purple-900 focus:ring-purple-400/50'
            : 'bg-gradient-to-br from-amber-100 to-orange-100 focus:ring-amber-400/50'
          }
          ${isOpen ? 'ring-2 ring-offset-2' : ''}
        `}
        aria-label={isDark ? 'Switch to light mode' : '切换到亮色模式'}
        aria-expanded={isOpen}
      >
        {/* 图标 */}
        <div
          className={`
            transition-all duration-300
            ${isTransitioning ? 'scale-0 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100'}
          `}
        >
          {isDark ? (
            <Moon size={22} className="text-purple-200" />
          ) : (
            <Sun size={22} className="text-amber-600" />
          )}
        </div>
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
        <div className={`
          absolute inset-0
          ${isDark ? 'bg-gray-900' : 'bg-white'}
          border ${isDark ? 'border-gray-700' : 'border-gray-200'}
        `} />

        <div className="relative p-1">
          {/* 标题 */}
          <div className={`px-3 py-2 text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            <Translate id="theme.title">选择外观</Translate>
          </div>

          {/* 选项 */}
          {[
            { value: 'light', label: <Translate id="theme.light">亮色</Translate>, icon: Sun },
            { value: 'dark', label: <Translate id="theme.dark">暗色</Translate>, icon: Moon },
          ].map((theme) => {
            const Icon = theme.icon
            const isActive = colorMode === theme.value

            return (
              <button
                key={theme.value}
                onClick={() => handleThemeChange(theme.value)}
                className={`
                  w-full px-3 py-2.5
                  flex items-center gap-3
                  rounded-lg
                  transition-colors duration-150
                  ${isActive
                    ? isDark
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'bg-purple-50 text-purple-700'
                    : isDark
                      ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon size={20} className={isActive ? 'text-purple-400' : ''} />
                <span className="text-sm font-medium flex-1 text-left">{theme.label}</span>
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
