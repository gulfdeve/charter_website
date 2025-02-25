import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["www.centauruscharter.com"], // Allow external images from this domain
  },
};

export default withNextIntl(nextConfig);
