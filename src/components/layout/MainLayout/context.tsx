"use client";

import createStatesContext from "@/helpers/createStatesContext";
import type { AppLocale } from "@/types/locale";
import type { JSX } from "react";

export type MainLayoutStates = {
  locale?: AppLocale;
  openAppbarDrawer?: boolean;
  currentUrl?: string;
}

const {
  StatesProvider: MainLayoutStatesProvider,
  useGetState: useGetMainLayoutState,
  useDefineMethod: useDefineAppbarMethod,
  useInitState: useInitMainLayoutState,
  useSetState: useSetMainLayoutState,
} = createStatesContext<MainLayoutStates>({ openAppbarDrawer: false });

export {
  MainLayoutStatesProvider, useDefineAppbarMethod, useGetMainLayoutState, useInitMainLayoutState, useSetMainLayoutState
};

export function LocaleInitializer({ locale }: Pick<MainLayoutStates, 'locale'>) {
  useInitMainLayoutState("locale", locale, { when: "whenever-value-changes" });
  return null as unknown as JSX.Element;
}

export function CurrentUrlInitializer({ currentUrl }: Pick<MainLayoutStates, 'currentUrl'>) {
  useInitMainLayoutState("currentUrl", currentUrl, { when: "whenever-value-changes" });
  return null as unknown as JSX.Element;
}