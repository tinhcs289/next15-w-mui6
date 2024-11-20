import { CN, EN, VI } from "@/constants/locale";
import type { AppFormat } from "@/types/format";

// read more: http://numeraljs.com/#format

const CURRENCY_FORMAT = "0,0[.]00$";

const CURRENCY_FORMAT_RTL = "$0 ,0[.]00";

export const APP_FORMAT: AppFormat = {
  [EN]: {
    numeric: "en-US",
    datetime: "en-gb",
    currency: CURRENCY_FORMAT,
    currency_rtl: CURRENCY_FORMAT_RTL,
  },
  [VI]: {
    numeric: VI,
    datetime: VI,
    currency: CURRENCY_FORMAT,
    currency_rtl: CURRENCY_FORMAT_RTL,
  },
  [CN]: {
    numeric: "zh-cn",
    datetime: "zh-cn",
    currency: CURRENCY_FORMAT,
    currency_rtl: CURRENCY_FORMAT_RTL,
  },
};