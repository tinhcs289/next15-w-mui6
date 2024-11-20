"use client";

import Slide from "@mui/material/Slide";
import type { SnackbarProviderProps } from "notistack";
import { SnackbarProvider } from "notistack";

export default function NotiStackProvider({
  children,
  ...otherProps
}: SnackbarProviderProps) {
  return (
    <SnackbarProvider
      dense
      preventDuplicate
      maxSnack={20}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={Slide}
      {...otherProps}
    >
      {children}
    </SnackbarProvider>
  );
}