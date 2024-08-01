import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '@locales/en.json';
import translationESCR from '@locales/es-CR.json';

const environment = import.meta.env.ENV;

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationESCR
  },
  "es-CR": {
    translation: translationESCR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es', 
    debug: !!environment && environment !== 'production', 

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;