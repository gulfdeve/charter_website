import React from 'react';
import { useLocale } from "next-intl";

interface Metadata {
  title: string;
  description: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

// Updated generateMetadata to expect params as a Promise.
// (This aligns with the LayoutProps type expected by Next.js.)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  // Await the params promise to get the actual values.
  const { slug, locale } = await params;
  const resolvedLocale = locale || 'en'; // Fallback if locale is not set

  try {
    const response = await fetch(
      'https://www.centauruscharter.com/api/api_new/basic'
    );
    const data = await response.json();

    // Find the offer by slug (no need to await a synchronous .find())
    const offer = data?.offers?.find(
      (item: { slug: string }) => item.slug === slug
    );

    if (!offer) {
      console.warn(`No offer found for slug: ${slug}`);
      return {
        title: 'Default Title',
        description: 'Default Description',
      };
    }

    return {
      title: offer.translations?.[resolvedLocale]?.meta.title || 'Default Title',
      description:
        offer.translations?.[resolvedLocale]?.meta.description ||
        'Default Description',
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Default Title',
      description: 'Default Description',
    };
  }
}

export default Layout;
