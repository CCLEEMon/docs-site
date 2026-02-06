'use client'

import { useTranslations } from './TranslationProvider'

export default function CustomFooter() {
  const { t } = useTranslations()
  const currentYear = new Date().getFullYear()

  const footerStyle = {
    background: '#1a1a1a',
    color: '#9ca3af',
    padding: '60px 20px 30px',
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
    boxSizing: 'border-box'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    marginBottom: '40px'
  }

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  const titleStyle = {
    color: '#fff',
    fontSize: '15px',
    fontWeight: 600,
    marginBottom: '16px'
  }

  const linkStyle = {
    color: '#9ca3af',
    fontSize: '14px',
    lineHeight: '2',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  }

  const socialStyle = {
    display: 'flex',
    gap: '16px',
    marginBottom: '40px',
    paddingTop: '40px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  }

  const socialIconStyle = {
    width: '24px',
    height: '24px',
    color: '#9ca3af',
    transition: 'color 0.2s ease',
    cursor: 'pointer'
  }

  const bottomStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '13px',
    flexWrap: 'wrap',
    gap: '16px'
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* 4列布局 */}
        <div className="footer-grid" style={gridStyle}>
          {/* 产品链接 */}
          <div style={columnStyle}>
            <div style={titleStyle}>{t('footer.product')}</div>
            <a href="/browser-plugin" style={linkStyle}>{t('footer.browserPlugin')}</a>
            <a href="/ai-analytics" style={linkStyle}>{t('footer.aiAnalytics')}</a>
          </div>

          {/* 公司信息 */}
          <div style={columnStyle}>
            <div style={titleStyle}>{t('footer.about')}</div>
            <a href="/" style={linkStyle}>{t('footer.aboutUs')}</a>
            <a href="/" style={linkStyle}>{t('footer.contactUs')}</a>
            <a href="/" style={linkStyle}>{t('footer.joinUs')}</a>
          </div>

          {/* 联系方式 */}
          <div style={columnStyle}>
            <div style={titleStyle}>{t('footer.contact')}</div>
            <div style={linkStyle}>{t('footer.supportEmail')}</div>
            <div style={linkStyle}>{t('footer.workTime')}</div>
          </div>

          {/* 法律条款 */}
          <div style={columnStyle}>
            <div style={titleStyle}>{t('footer.legal')}</div>
            <a href="/" style={linkStyle}>{t('footer.privacyPolicy')}</a>
            <a href="/" style={linkStyle}>{t('footer.termsOfService')}</a>
            <a href="/" style={linkStyle}>{t('footer.icp')}</a>
          </div>
        </div>

        {/* 社交媒体 */}
        <div style={socialStyle}>
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.firstChild.style.color = '#FF6B35'}
            onMouseLeave={(e) => e.currentTarget.firstChild.style.color = '#9ca3af'}
          >
            <svg style={socialIconStyle} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.38-.135-.345-.015-1.23-.015-2.235 0 0-1.32.225-4.095 1.29-1.23-.345-2.52-.495-3.84-.51-1.32.015-2.61.165-3.84.51-2.775-1.065-4.095-1.29-4.095-1.29-.6 1.515-.225 2.655-.075 3.84-.51 1.08-2.715 1.08-5.64 0-5.925-4.305-10.755-9.765-10.755-1.845 0-3.51.615-4.86 1.62-1.575-.09-3.21-.765-4.605-1.605-.135 3.3.615 5.85 2.22 7.32-.735.15-1.47.225-2.19.225-.84 0-1.695-.12-2.49-.33 1.71 5.37 6.69 9.27 12.57 9.27.84 0 1.65-.075 2.43-.225 1.995 4.02 6.18 6.87 11.04 6.87 8.82 0 13.605-7.305 13.605-13.605 0-.21-.015-.42-.045-.63.945-.675 1.755-1.515 2.385-2.475z"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:support@cclhub.com"
            style={{ textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.firstChild.style.color = '#FF6B35'}
            onMouseLeave={(e) => e.currentTarget.firstChild.style.color = '#9ca3af'}
          >
            <svg style={socialIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>

          {/* WeChat */}
          <div
            style={{ textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#FF6B35'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
          >
            <svg style={socialIconStyle} viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.812 1.922-6.485C8.085 7.257 4.921 6.076 2.6 4.093 4.632 2.812 6.593 2.188 8.691 2.188zm7.309 1.886c-4.299 0-7.869 3.095-7.869 6.926 0 3.831 3.57 6.927 7.869 6.927.684 0 1.345-.083 1.977-.234a.722.722 0 01.598.082l1.693.99a.267.267 0 00.148.047c.133 0 .24-.111.24-.247 0-.06-.024-.118-.038-.174l-.349-1.323a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 15.348 24 13.435 24 11c0-3.83-3.57-6.926-7.869-6.926h-.131zm2.454 2.189c.483 0 .875.398.875.889 0 .49-.392.888-.875.888-.484 0-.875-.398-.875-.888 0-.491.391-.889.875-.889zm-4.739 0c.484 0 .875.398.875.889 0 .49-.391.888-.875.888-.483 0-.875-.398-.875-.888 0-.491.392-.889.875-.889z"/>
            </svg>
          </div>
        </div>

        {/* 底部版权栏 */}
        <div className="footer-bottom" style={bottomStyle}>
          <span>© {currentYear} CCLHUB. {t('footer.copyright')}</span>
          <span>{t('footer.icpNumber')}</span>
        </div>
      </div>
    </footer>
  )
}
