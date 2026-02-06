'use client'

import ThemeSwitch from './ThemeSwitch'

export default function NavbarActions() {
  return (
    <div className="navbar-actions" style={{
      position: 'fixed',
      top: '12px',
      right: '16px',
      zIndex: 50,
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
      <ThemeSwitch />
    </div>
  )
}
