import type { AppLocale } from "@/types/locale";

export type AppFormat = Record<
  AppLocale,
  {
    numeric: string;
    datetime: string;
    currency: string;
    currency_rtl: string;
  }
>;