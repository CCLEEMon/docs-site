'use client'

import { useColorMode } from '@docusaurus/theme-common'
import { useEffect, useState, useRef } from 'react'
import { useTranslations } from './TranslationProvider'

export default function ThemeSwitch() {
  const { colorMode, setColorMode } = useColorMode()
  const { t } = useTranslations()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
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

  if (!mounted) {
    return null
  }

  const isDark = colorMode === 'dark'

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '8px',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.2s',
          color: isDark ? '#E5E7EB' : '#374151',
          fontSize: '18px',
          fontWeight: 500
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
        title={isDark ? '切换到亮色模式' : '切换到暗色模式'}
      >
        <span>{isDark ? '🌙' : '☀️'}</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            backgroundColor: isDark ? '#1F2937' : '#fff',
            border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: isDark ? '0 4px 6px -1px rgba(0, 0, 0, 0.5)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            zIndex: 50,
            minWidth: '100px',
            overflow: 'hidden'
          }}
        >
          {[
            { value: 'light', label: '亮色', icon: '☀️' },
            { value: 'dark', label: '暗色', icon: '🌙' }
          ].map((theme) => (
            <button
              key={theme.value}
              onClick={() => {
                setColorMode(theme.value)
                setIsOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '10px 12px',
                backgroundColor: colorMode === theme.value ? (isDark ? '#374151' : '#f3f4f6') : 'transparent',
                border: 'none',
                color: isDark ? '#E5E7EB' : '#374151',
                fontSize: '18px',
                fontWeight: colorMode === theme.value ? 600 : 400,
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (colorMode !== theme.value) {
                  e.currentTarget.style.backgroundColor = isDark ? '#37415120' : '#f9fafb'
                }
              }}
              onMouseLeave={(e) => {
                if (colorMode !== theme.value) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
              title={theme.label}
            >
              <span>{theme.icon}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
