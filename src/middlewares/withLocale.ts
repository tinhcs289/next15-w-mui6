
import { ALL_LOCALE } from "@/constants/locale";
import { ALL_PATHS } from "@/constants/paths";
import { DEFAULT_LOCALE, INTL_LOCALE_PREFIX, LOCALE_PREFIX_PATH } from "@/i18n/config";
import type { NextMiddlewareFactory } from "@/types/middleware";
import createMiddleware from "next-intl/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const localeMiddleware = createMiddleware({
  defaultLocale: DEFAULT_LOCALE,
  locales: ALL_LOCALE,
  localeDetection: true,
  localePrefix: INTL_LOCALE_PREFIX,
});

const withLocale: NextMiddlewareFactory = (nextMiddleware) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    // NOTE: The first middleware in the chain has to create the response
    // object and pass it down the chain.
    const baseResponse = NextResponse.next();

    const pathname = request.nextUrl.pathname;

    const isNotDeclaredPath = !ALL_PATHS.some((p) => pathname.startsWith(p));

    if (isNotDeclaredPath) {
      return nextMiddleware(request, event, baseResponse);
    }

    const urlStartsWithLocale = LOCALE_PREFIX_PATH.some((p) =>
      pathname.startsWith(p)
    );
    const emptyPathname = pathname === "/";

    const shouldApply = urlStartsWithLocale || emptyPathname;

    if (!shouldApply) {
      return nextMiddleware(request, event, baseResponse);
    }

    const localeResponse = localeMiddleware(request);
    return nextMiddleware(request, event, localeResponse);
  };
};

export default withLocale;