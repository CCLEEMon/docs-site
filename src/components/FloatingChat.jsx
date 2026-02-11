import { useState, useEffect, useMemo } from 'react'
import { useLocation } from '@docusaurus/router'
import { useColorMode } from '@docusaurus/theme-common'
import { MessageSquareIcon } from './Icons'
import { RAG_API_URL } from '@site/src/rag-api-config'

// 配置：场景化欢迎语
const WELCOME_MESSAGES = {
  default: '您好！我是CCLHUB智能助手。我可以帮您：产品功能介绍、使用方法指导、常见问题解答',
  'browser-plugin': '您好！关于浏览器插件，我可以帮您：安装问题、功能使用、数据导出、平台支持',
  'ai-analytics': '您好！关于数据分析平台，我可以帮您：账户开通、功能操作、报告解读、API对接'
}

// 配置：快捷问题
const QUICK_QUESTIONS = {
  default: [
    '如何开始使用？',
    '支持哪些平台？'
  ],
  'browser-plugin': [
    '如何安装插件？',
    '插件无法显示数据？'
  ],
  'ai-analytics': [
    '如何接入数据？',
    '如何查看分析报告？'
  ]
}

// 检测当前页面类型
const getPageType = (pathname) => {
  if (pathname.includes('/browser-plugin')) return 'browser-plugin'
  if (pathname.includes('/ai-analytics')) return 'ai-analytics'
  return 'default'
}

export default function FloatingChat() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const location = useLocation()

  // 检测当前页面类型
  const pageType = useMemo(() => getPageType(location.pathname), [location.pathname])

  // 首次访问引导
  const [showBadge, setShowBadge] = useState(false)
  useEffect(() => {
    const hasVisited = localStorage.getItem('floating-chat-visited')
    if (!hasVisited) {
      setShowBadge(true)
      const timer = setTimeout(() => {
        setShowBadge(false)
        localStorage.setItem('floating-chat-visited', 'true')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  // 获取欢迎语和快捷问题
  const welcomeMessage = WELCOME_MESSAGES[pageType]
  const quickQuestions = QUICK_QUESTIONS[pageType]

  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: welcomeMessage }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // API 地址：从配置文件读取
  const API_URL = RAG_API_URL

  const handleSend = async (questionText) => {
    const textToSend = questionText || input
    if (!textToSend.trim()) return

    const userMessage = { role: 'user', content: textToSend }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          collection: 'product_help',
          question: textToSend
        })
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.answer }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: '抱歉，服务暂时不可用，请稍后再试。' }])
    } finally {
      setIsLoading(false)
    }
  }

  // 移动端检测
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: 0,
          width: isMobile ? 'calc(100vw - 32px)' : '380px',
          height: isMobile ? '60vh' : '520px',
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

            {/* 快捷问题按钮 - 仅在第一条消息后显示 */}
            {messages.length === 1 && !isLoading && quickQuestions && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginTop: '8px'
              }}>
                {quickQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(question)}
                    disabled={isLoading}
                    style={{
                      padding: '10px 14px',
                      border: isDark ? '1px solid #4B5563' : '1px solid #d1d5db',
                      borderRadius: '8px',
                      backgroundColor: isDark ? '#374151' : '#fff',
                      color: isDark ? '#E5E7EB' : '#1f2937',
                      fontSize: '14px',
                      cursor: isLoading ? 'not-allowed' : 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                      opacity: isLoading ? 0.5 : 1
                    }}
                    onMouseEnter={(e) => !isLoading && (e.currentTarget.style.borderColor = '#4F46E5')}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#4B5563' : '#d1d5db'}
                  >
                    {question}
                  </button>
                ))}
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
              onClick={() => handleSend()}
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

      {/* 浮窗按钮 */}
      <div style={{ position: 'relative' }}>
        {/* 首次访问红点提示 */}
        {showBadge && (
          <div style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '14px',
            height: '14px',
            backgroundColor: '#EF4444',
            borderRadius: '50%',
            animation: 'pulse 1.5s ease-in-out infinite'
          }} />
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

      {/* 脉冲动画样式 */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  )
}
