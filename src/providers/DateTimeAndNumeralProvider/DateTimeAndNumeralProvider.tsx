"use client";

import { APP_FORMAT } from "@/constants/format";
import { DEFAULT_LOCALE } from "@/i18n/config";
import type { AppLocale } from "@/types/locale";
import type { LocalizationProviderProps } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import type { Moment } from "moment";
import moment from "moment";
import numeral from "numeral";
import { useEffect } from "react";

import "./moment-locales/cn";
import "./moment-locales/en";
import "./moment-locales/vi";

import "./numeral-locales/cn";
import "./numeral-locales/en";
import "./numeral-locales/vi";


export type DateTimeProviderProps = Omit<
  LocalizationProviderProps<Moment, string>,
  "dateAdapter" | "adapterLocale"
> & {
  locale?: string;
};

export default function DateTimeAndNumeralProvider({
  children,
  locale = DEFAULT_LOCALE,
  ...otherProps
}: DateTimeProviderProps) {
  useEffect(() => {
    moment.locale(APP_FORMAT[locale as AppLocale].datetime);
    numeral.locale(APP_FORMAT[locale as AppLocale].numeric);
  }, [locale]);

  return (
    <LocalizationProvider
      {...otherProps}
      dateAdapter={AdapterMoment}
      adapterLocale={locale}
    >
      {children}
    </LocalizationProvider>
  );
}