// import 'server-only'
import type { Locale } from './i18n-config'

const dictionaries = {
  en: () => import('./locales/en/translation.json').then((module) => module.default),
  es: () => import('./locales/es/translation.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
