import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '@/locales/en.json'
import translationJA from '@/locales/ja.json'

const resources = {
  en: {
    translation: translationEN
  },
  ja: {
    translation: translationJA
  }
} as const

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: (typeof window !== 'undefined' && localStorage.getItem('lang')) || 'ja',
    resources,
    fallbackLng: 'ja',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
