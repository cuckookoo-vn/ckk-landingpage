import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import vn from './language/ja';
import en from './language/en';
import ko from './language/ko';

const resources = {
  vn: vn,
  en: en,
  ko: ko
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng:'en',
    // interpolation: {
    //   escapeValue: false,
    // }
});


export default i18n;