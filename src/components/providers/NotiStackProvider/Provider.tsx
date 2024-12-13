"use client";

import Slide from "@mui/material/Slide";
import { SnackbarProvider } from "notistack";
import type { ProviderProps } from "./types";

export default function Provider({ children, ...otherProps }: ProviderProps) {
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