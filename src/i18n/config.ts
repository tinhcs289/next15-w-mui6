import { ALL_LOCALE } from "@/constants/locale";
import type { LocalePrefix } from "next-intl/routing";

export const LOCALE_PREFIX_PATH = ALL_LOCALE.map((l) => `/${l}`);

export const INTL_LOCALE_PREFIX: LocalePrefix<typeof ALL_LOCALE> = "always";

export const LOCALE_KEYS = ['metadata' ,'common', 'notfound']; // add more key here