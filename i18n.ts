import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pl from "./lang/pl.json";
import en from "./lang/en.json";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "pl"],
        load:"languageOnly",

        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
        resources: {
            en: { translation: en },
            pl: { translation: pl },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;


