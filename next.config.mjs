import createNextIntlPlugin from "next-intl/plugin";
import { createTheme } from '@mui/material';
import { withPigment } from '@pigment-css/nextjs-plugin';

const withNextInlt = createNextIntlPlugin();

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ["@mui/material"],
  theme: createTheme({
    cssVariables: true
  }),
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default withPigment(withNextInlt(nextConfig), pigmentConfig);