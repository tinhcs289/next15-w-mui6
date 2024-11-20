import { ALL_LOCALE } from "@/constants/locale";
import { createNavigation } from "next-intl/navigation";
import { INTL_LOCALE_PREFIX } from "./config";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales: ALL_LOCALE,
  localePrefix: INTL_LOCALE_PREFIX,
});