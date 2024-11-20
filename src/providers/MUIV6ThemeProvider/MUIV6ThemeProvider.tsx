import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import '@mui/material-pigment-css/styles.css';
import MuiV6Theme from './MuiV6Theme';

export default function MUIV6ThemeProvider({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale?: string;
}>) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <MuiV6Theme locale={locale}>{children}</MuiV6Theme>
    </AppRouterCacheProvider>
  );
}
