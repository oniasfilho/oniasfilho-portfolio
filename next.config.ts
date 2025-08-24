import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
