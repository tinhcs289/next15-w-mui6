import { ALL_LOCALE } from "@/constants/locale";
import { AppLocale } from "@/types/locale";
import { getRequestConfig } from 'next-intl/server';
import { DEFAULT_LOCALE, LOCALE_KEYS } from "./config";
import { getUserLocale } from "./server-actions";

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !ALL_LOCALE.includes(locale as AppLocale)) {
        locale = await getUserLocale();
        if (!locale) 
            locale = DEFAULT_LOCALE;
    }

    const messages: { [x: string]: any } = {};

    await Promise.all(LOCALE_KEYS.map(key => (async () => {
        messages[key] = (await import(`@/i18n/locales/${locale}/${key}.json`)).default;
    })()))

    return {
      locale,
      messages,
    };
});