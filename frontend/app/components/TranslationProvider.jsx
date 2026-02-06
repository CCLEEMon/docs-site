'use client'

import { createContext, useContext } from 'react'

const TranslationContext = createContext()

export function TranslationProvider({ messages, children }) {
  return (
    <TranslationContext.Provider value={messages}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslations() {
  const messages = useContext(TranslationContext)

  const t = (key) => {
    const keys = key.split('.')
    let result = messages

    for (const k of keys) {
      if (result && typeof result === 'object') {
        result = result[k]
      } else {
        return key
      }
    }

    return result || key
  }

  return { t }
}
