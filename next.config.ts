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
    minimumCacheTTL: 2592000, // Cache images for 30 days instead of just 60 seconds
  },
  compress: true, // Enable compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  // Enable static optimizations
  reactStrictMode: true,
  swcMinify: true,
  // Add custom headers for caching
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        // Special caching for your API endpoint that fetches the large JSON
        source: '/api/get-data',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Cache static assets longer
        source: '/(.*)\\.(js|css|svg|jpg|jpeg|png|webp|avif|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);