import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Загрузка переводов
import translationEN from '../translate/en.json';
import translationLV from '../translate/lv.json';

// Настройка i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN,
            },
            lv: {
                translation: translationLV,
            },
        },
        lng: 'lv', // Установите начальный язык по умолчанию
        fallbackLng: 'en', // Язык, который используется по умолчанию, если не найдено перевода для текущего языка
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
