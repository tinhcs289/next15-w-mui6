import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ClientSideProvider from './ClientSideProvider';
import type { ProviderProps } from "./types";

export default function Provider({
  children,
  locale,
  cacheProviderProps,
}: ProviderProps) {
  return (
    <AppRouterCacheProvider
      {...cacheProviderProps}
      options={{ ...cacheProviderProps?.options, enableCssLayer: true }}
    >
      <ClientSideProvider locale={locale}>{children}</ClientSideProvider>
    </AppRouterCacheProvider>
  );
}