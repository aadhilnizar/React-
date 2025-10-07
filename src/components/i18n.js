import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "welcome": "Welcome",
                    "description": "This is an example of internationalization."
                }
            },
            fr: {
                translation: {
                    "welcome": "Bienvenue",
                    "description": "Ceci est un exemple d'internationalisation."
                }
            },
            es: {
                translation: {
                    "welcome": "Bienvenido",
                    "description": "Este es un ejemplo de internacionalización."
                }  
            }
        },
        lng: "en", // default language
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;