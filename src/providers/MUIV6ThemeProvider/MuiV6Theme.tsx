"use client";

import { THEME_ID, ThemeProvider, createTheme } from '@mui/material/styles';
import type { ReactNode } from "react";

const theme = createTheme(/* your theme */);

export default function MuiV6Theme({
  children,
}: {
  children?: ReactNode;
  locale?: string;
}) {
  return (
    <ThemeProvider theme={{ [THEME_ID]: theme }}>{children}</ThemeProvider>
  );
}