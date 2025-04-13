import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'centauruscharter.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.centauruscharter.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'centauruscharter.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.centauruscharter.net',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
  },
};

export default withNextIntl(nextConfig);