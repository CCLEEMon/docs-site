'use client'

import { useState } from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import { MessageSquareIcon } from './Icons'

export default function FloatingChat() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '您好！我是CCLHUB智能助手，有什么可以帮助您的吗？' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:3005/api/customer-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: '抱歉，服务暂时不可用，请稍后再试。' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: 0,
          width: '380px',
          height: '520px',
          backgroundColor: isDark ? '#1F2937' : '#fff',
          borderRadius: '12px',
          boxShadow: isDark ? '0 8px 32px rgba(0, 0, 0, 0.5)' : '0 8px 32px rgba(0, 0, 0, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: isDark ? '1px solid #374151' : '1px solid #e5e7eb'
        }}>
          <div style={{
            padding: '16px',
            backgroundColor: '#4F46E5',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontWeight: 600, fontSize: '16px' }}>智能咨询</span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '4px 8px'
              }}
            >
              ×
            </button>
          </div>

          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backgroundColor: isDark ? '#111827' : '#fff'
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  maxWidth: '80%',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: msg.role === 'user' ? '#4F46E5' : (isDark ? '#374151' : '#f3f4f6'),
                  color: msg.role === 'user' ? '#fff' : (isDark ? '#E5E7EB' : '#1f2937'),
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div style={{
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: isDark ? '#374151' : '#f3f4f6',
                color: isDark ? '#9CA3AF' : '#6b7280',
                fontSize: '14px'
              }}>
                正在输入...
              </div>
            )}
          </div>

          <div style={{
            padding: '12px',
            borderTop: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
            display: 'flex',
            gap: '8px',
            backgroundColor: isDark ? '#1F2937' : '#fff'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="输入您的问题..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '10px 14px',
                border: isDark ? '1px solid #4B5563' : '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                outline: 'none',
                backgroundColor: isDark ? '#374151' : '#fff',
                color: isDark ? '#E5E7EB' : '#1f2937'
              }}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              style={{
                padding: '10px 16px',
                backgroundColor: '#4F46E5',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                opacity: isLoading || !input.trim() ? 0.5 : 1
              }}
            >
              发送
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#4F46E5',
          border: 'none',
          cursor: 'pointer',
          boxShadow: isDark ? '0 4px 12px rgba(79, 70, 229, 0.5)' : '0 4px 12px rgba(99, 102, 241, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageSquareIcon size={24} color="white" />
      </button>
    </div>
  )
}
