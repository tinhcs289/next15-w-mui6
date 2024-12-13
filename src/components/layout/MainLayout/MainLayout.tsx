import type { AppLocale } from "@/types/locale";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import AppBar from "./AppBar";
import {
  CurrentUrlInitializer,
  LocaleInitializer,
  MainLayoutStatesProvider
} from "./context";

export type MainLayoutProps = {
  children?: ReactNode;
  locale?: string;
  zoneName?: string;
  currentUrl?: string;
};

export default function MainLayout({ children, locale, currentUrl, zoneName }: MainLayoutProps) {
  return (
    <MainLayoutStatesProvider>
      <LocaleInitializer locale={locale as AppLocale} />
      <CurrentUrlInitializer currentUrl={currentUrl} />
      <AppBar />
      <Box component="main">{children}</Box>
    </MainLayoutStatesProvider>
  );
}