import { FONT_CLASS_NAMES } from "@/app/fonts";
import { STATIC_MEDIA } from '@/constants/media';
// import { GoogleAnalytics } from "@next/third-parties/google";
import DateTimeAndNumeralProvider from "@/components/providers/DateTimeAndNumeralProvider";
import MUIV6ThemeProvider from "@/components/providers/MUIV6ThemeProvider";
import NotiStackProvider from "@/components/providers/NotiStackProvider";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import type { ReactNode } from "react";

export type DocumentBodyProps = {
  children: ReactNode;
  locale: string;
};

export default function DocumentBody({ children, locale }: DocumentBodyProps) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href={STATIC_MEDIA.favicon} sizes="any" />
      </head>

      <ReactQueryProvider>
        <MUIV6ThemeProvider locale={locale}>
          <DateTimeAndNumeralProvider locale={locale}>
            <NotiStackProvider>
                <body className={`${FONT_CLASS_NAMES}`}>{children}</body>
            </NotiStackProvider>
          </DateTimeAndNumeralProvider>
        </MUIV6ThemeProvider>
      </ReactQueryProvider>
      {/* <GoogleAnalytics gaId="YOUR GAID GOES HERE" /> */}
    </html>
  );
}
