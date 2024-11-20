import { FONT_CLASS_NAMES } from "@/app/fonts";
import "@/app/globals.css";
import ConsoleLogServerside from '@/components/ConsoleLogServerside';
import GoogleAnalysticElement from "@/components/GoogleAnalysticElement";
import { STATIC_MEDIA } from '@/constants/media';
import { DEFAULT_LOCALE } from '@/i18n/config';
import DateTimeAndNumeralProvider from "@/providers/DateTimeAndNumeralProvider/DateTimeAndNumeralProvider";
import MUIV6ThemeProvider from '@/providers/MUIV6ThemeProvider';
import NotiStackProvider from "@/providers/NotiStackProvider/NotiStackProvider";
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: DEFAULT_LOCALE, namespace: "metadata" });
 
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <head>
        <link rel="icon" href={STATIC_MEDIA.favicon} sizes="any" />
      </head>
      <ReactQueryProvider>
        <MUIV6ThemeProvider locale={DEFAULT_LOCALE}>
          <DateTimeAndNumeralProvider locale={DEFAULT_LOCALE}>
            <NotiStackProvider>
              <body className={`${FONT_CLASS_NAMES}`}>{children}</body>
            </NotiStackProvider>
          </DateTimeAndNumeralProvider>
        </MUIV6ThemeProvider>
      </ReactQueryProvider>
      <ConsoleLogServerside />
      <GoogleAnalysticElement />
    </html>
  );
}
