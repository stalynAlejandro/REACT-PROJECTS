import i18n from 'i18next';
import { resources } from './src/translations/resources';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

let locale = 'en';

if (Platform.OS !== 'web') {
    locale =
        Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale
            : NativeModules.I18nManager.localeIdentifier;

    if (locale === undefined) {
        locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
        if (locale === undefined) {
            locale = 'en';
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: locale,
    fallbackLng: ['es', 'en'],
    interpolation: {
        escapeValue: false,
    },
    compatibilityJSON: 'v3',
});

export default i18n;
