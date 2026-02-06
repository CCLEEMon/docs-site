'use client'

import { useState } from 'react'

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '您好！我是CCLHUB智能助手，有什么可以帮助您的吗？' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:3005/api/customer-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.data?.receivedMessage || '感谢您的反馈！'
      }])
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '抱歉，服务暂时不可用，请稍后再试。'
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      {/* 消息区域 */}
      <div style={{
        height: '400px',
        overflowY: 'auto',
        padding: '20px',
        backgroundColor: '#f9fafb'
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '12px'
            }}
          >
            <div style={{
              maxWidth: '70%',
              padding: '10px 16px',
              borderRadius: '12px',
              backgroundColor: msg.role === 'user' ? '#2563eb' : '#e5e7eb',
              color: msg.role === 'user' ? '#fff' : '#1f2937'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
            正在思考...
          </div>
        )}
      </div>

      {/* 输入区域 */}
      <div style={{
        display: 'flex',
        gap: '8px',
        padding: '16px',
        borderTop: '1px solid #e5e7eb',
        backgroundColor: '#fff'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="输入您的问题..."
          disabled={loading}
          style={{
            flex: 1,
            padding: '10px 16px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none'
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          style={{
            padding: '10px 24px',
            backgroundColor: loading || !input.trim() ? '#9ca3af' : '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          发送
        </button>
      </div>
    </div>
  )
}
