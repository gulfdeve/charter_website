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

    // Find the event by slug (no need to await a synchronous .find())
    const event = data?.events?.find(
      (item: { slug: string }) => item.slug === slug
    );

    if (!event) {
      console.warn(`No event found for slug: ${slug}`);
      return {
        title: 'Default Title',
        description: 'Default Description',
      };
    }

    return {
      title: event.translations?.[resolvedLocale]?.meta_title || 'Default Title',
      description:
        event.translations?.[resolvedLocale]?.meta_description ||
        'Default Description',
        keywords: event.translations?.[resolvedLocale]?.meta_keyword || 'Meta Keywords'

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
