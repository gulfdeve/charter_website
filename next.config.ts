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
	minimumCacheTTL: process.env.NODE_ENV === 'development' ? 0 : 2592000,
  },
  compress: true, // Enable compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  // Enable static optimizations
  reactStrictMode: true,
  // Add custom headers for caching
  async headers() {
	// In development, use no-cache headers
	if (process.env.NODE_ENV === 'development') {
	  return [
		{
		  source: '/(.*)',
		  headers: [
			{
			  key: 'Cache-Control',
			  value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
			},
			{
			  key: 'Pragma',
			  value: 'no-cache',
			},
			{
			  key: 'Expires',
			  value: '0',
			},
		  ],
		},
	  ];
	}
	
	// In production, keep the original caching strategy
	return [
	  {
		source: '/(.*)',
		headers: [
		  {
			key: 'Cache-Control',
			value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
		  },
		],
	  },
	  {
		source: '/api/get-data',
		headers: [
		  {
			key: 'Cache-Control',
			value: 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400',
		  },
		],
	  },
	  {
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