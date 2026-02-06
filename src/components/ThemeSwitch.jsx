'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'
import { useTranslations } from './TranslationProvider'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
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

  const themes = [
    { value: 'light', label: t('theme.light'), icon: '☀️' },
    { value: 'dark', label: t('theme.dark'), icon: '🌙' },
    { value: 'system', label: t('theme.system'), icon: '💻' }
  ]

  const currentTheme = themes.find(t => t.value === theme) || themes[2]

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
          color: '#374151',
          fontSize: '18px',
          fontWeight: 500
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
        title={currentTheme.label}
      >
        <span>{currentTheme.icon}</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            zIndex: 50,
            minWidth: '100px',
            overflow: 'hidden'
          }}
        >
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value)
                setIsOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '10px 12px',
                backgroundColor: theme === t.value ? '#f3f4f6' : 'transparent',
                border: 'none',
                color: '#374151',
                fontSize: '18px',
                fontWeight: theme === t.value ? 600 : 400,
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (theme !== t.value) {
                  e.currentTarget.style.backgroundColor = '#f9fafb'
                }
              }}
              onMouseLeave={(e) => {
                if (theme !== t.value) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
              title={t.label}
            >
              <span>{t.icon}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
