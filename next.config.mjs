import createNextIntlPlugin from "next-intl/plugin";

const withNextInlt = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default withNextInlt(nextConfig);