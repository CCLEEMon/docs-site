'use client'

import { locales, localeNames } from '../i18n'

export default function LocaleSwitch({ currentLocale }) {
  const switchLocale = (newLocale) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`
    window.location.reload()
  }

  const otherLocale = locales.find(l => l !== currentLocale)

  return (
    <button
      onClick={() => switchLocale(otherLocale)}
      className="px-2 py-1 text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer border-none bg-transparent"
    >
      {localeNames[otherLocale]}
    </button>
  )
}
