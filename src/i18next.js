// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      "navbar.services": "Our Services",
      "navbar.faq": "FAQ",
      "navbar.contacts": "Contacts",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      "navbar.services": "Наши услуги",
      "navbar.faq": "Часто задаваемые вопросы",
      "navbar.contacts": "Контакты",
    },
  },
  kg: {
    translation: {
      home: "Башкы бет",
      "navbar.services": "Биздин кызматтар",
      "navbar.faq": "Керексиз суроолор",
      "navbar.contacts": "Байланыш",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
