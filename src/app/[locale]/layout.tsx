import { FONT_CLASS_NAMES } from "@/app/fonts";
import "@/app/globals.css";
import ConsoleLogServerside from "@/components/ConsoleLogServerside";
import GoogleAnalysticElement from "@/components/GoogleAnalysticElement";
import { STATIC_MEDIA } from "@/constants/media";
import DateTimeAndNumeralProvider from "@/providers/DateTimeAndNumeralProvider/DateTimeAndNumeralProvider";
import MUIV6ThemeProvider from "@/providers/MUIV6ThemeProvider/MUIV6ThemeProvider";
import NotiStackProvider from "@/providers/NotiStackProvider/NotiStackProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import type { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import React from "react";

type Params = Promise<{ locale: string }>

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Params;
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
 
  return {
    title: t("title"),
    description: t("description"),
  };
}


export default async function LocaleLayout({ children, params }: LocaleLayoutProps) { 
  const { locale } = await params;
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
      <ConsoleLogServerside />
      <GoogleAnalysticElement />
    </html>
  );
}