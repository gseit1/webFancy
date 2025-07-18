import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import el from './locales/el.json'

const messages = {
  en,
  el
}

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages,
  legacy: false,
  globalInjection: true
})

export default i18n
