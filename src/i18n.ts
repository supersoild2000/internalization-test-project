import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import frTranslations from "./locales/fr/translation.json";
import uaTranslations from "./locales/ua/translation.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  ua: {
    translation: uaTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  missingKeyHandler: (
    _lngs: readonly string[],
    _ns: string,
    key: string,
    fallbackValue: string
  ) => {
    return fallbackValue || key;
  },
  saveMissing: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
