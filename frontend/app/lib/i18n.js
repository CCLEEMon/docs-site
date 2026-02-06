import { readFile } from 'fs/promises'
import { join } from 'path'

const messages = {}
let messagesLoaded = false

async function loadMessages() {
  if (messagesLoaded) return messages

  const locales = ['zh', 'en']

  for (const locale of locales) {
    try {
      const filePath = join(process.cwd(), 'messages', `${locale}.json`)
      const fileContents = await readFile(filePath, 'utf8')
      messages[locale] = JSON.parse(fileContents)
    } catch (error) {
      console.error(`Failed to load messages for locale ${locale}:`, error)
      messages[locale] = {}
    }
  }

  messagesLoaded = true
  return messages
}

export async function getMessages(locale) {
  const allMessages = await loadMessages()
  return allMessages[locale] || {}
}

export async function getTranslation(locale, key) {
  const messages = await getMessages(locale)
  const keys = key.split('.')
  let result = messages

  for (const k of keys) {
    if (result && typeof result === 'object') {
      result = result[k]
    } else {
      return key // Return key if translation not found
    }
  }

  return result || key
}
