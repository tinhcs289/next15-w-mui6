"use client";

import {
  CssBaseline,
  THEME_ID,
  ThemeProvider
} from "@mui/material";
import type { ReactNode } from "react";
import theme from "./theme";

export default function ClientSideProvider({
  children,
}: {
  children?: ReactNode;
  locale?: string;
}) {
  return (
    <ThemeProvider theme={{ [THEME_ID]: theme }}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}