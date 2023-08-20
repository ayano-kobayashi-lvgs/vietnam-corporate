import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en/en.json'
import jaTranslation from './ja/ja.json';
import viTranslation from './vi/vi.json';

const resources = {
    ja: {
      translation: jaTranslation
    },
    en: {
      translation: enTranslation
    },
    vi: {
      translation: viTranslation
    }
  };

  i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
