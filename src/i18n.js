import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
//   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          welcome: "Welcome {{name}}",
          count_zero: "{{count}} book",
          count_one: "{{count}} book",
          count_other: "{{count}} books",
          selectLanguage: "Select Language"
        }
      },
      hi: {
        translations: {
            welcome: "स्वागत है, {{name}}",
            count_zero: "कोई किताब नहीं",
            count_one: "एक किताब",
            count_other: "{{count}} किताबें",
            selectLanguage: "भाषा चुने"
          }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    // keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
