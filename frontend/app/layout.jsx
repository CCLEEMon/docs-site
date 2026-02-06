import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { headers } from 'next/headers'
import { getMessages } from './lib/i18n'
import { TranslationProvider } from './components/TranslationProvider'
import 'nextra-theme-docs/style.css'
import './globals.css'
import NavbarMenu from './components/NavbarMenu'
import CustomFooter from './components/CustomFooter'
import FloatingChat from './components/FloatingChat'
import HideCopyButton from './components/HideCopyButton'

export const metadata = {
  title: 'CCLHUB 电商运营工具平台',
  description: '电商运营工具平台 - Documentation site built with Nextra',
}

export default async function RootLayout({ children }) {
  const headersList = await headers()
  const cookie = headersList.get('cookie') || ''

  // Detect locale from cookie, default to zh
  const localeMatch = cookie.match(/locale=([^;]+)/)
  const locale = localeMatch?.[1] === 'en' ? 'en' : 'zh'

  const messages = await getMessages(locale)
  const pageMap = await getPageMap()

  return (
    <html
      lang={locale === 'zh' ? 'zh-CN' : 'en'}
      dir="ltr"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4F46E5" />
      </head>
      <body>
        <TranslationProvider messages={messages}>
          <Layout
            pageMap={pageMap}
            navbar={
              <Navbar
                logo={
                  <>
                    <img src="/logo.png" alt="CCLHUB" style={{ height: '32px' }} />
                    <span style={{ marginLeft: '12px', fontWeight: 600 }}>电商运营工具平台</span>
                  </>
                }
              >
                <NavbarMenu />
              </Navbar>
            }
            darkMode={false}
          >
            <HideCopyButton />
            <FloatingChat />
            {children}
            <Footer>
              <CustomFooter />
            </Footer>
          </Layout>
        </TranslationProvider>
      </body>
    </html>
  )
}
