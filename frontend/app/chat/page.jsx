import ChatWidget from './components/ChatWidget'

export const metadata = {
  title: '智能咨询 - CCLHUB',
  description: 'CCLHUB智能客服对话系统',
}

export default function ChatPage() {
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>
        智能咨询助手
      </h1>
      <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '32px' }}>
        关于CCLHUB电商运营工具平台的任何问题，欢迎随时咨询
      </p>
      <ChatWidget />
    </div>
  )
}
