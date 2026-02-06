'use client'

import { useEffect } from 'react'

export default function HideCopyButton() {
  useEffect(() => {
    // 隐藏 Copy page 按钮
    const hideButtons = () => {
      const buttons = document.querySelectorAll('button')
      buttons.forEach(btn => {
        const text = btn.textContent?.trim().toLowerCase()
        if (text === 'copy page' || text.includes('copy')) {
          btn.style.display = 'none'
        }
      })
    }

    // 初始运行
    hideButtons()

    // 监听 DOM 变化（应对动态加载）
    const observer = new MutationObserver(hideButtons)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}
