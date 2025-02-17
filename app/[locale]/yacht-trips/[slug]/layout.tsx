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

// Updated generateMetadata to expect params as a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  // Await the params to resolve the slug and locale values.
  const { slug, locale } = await params;
  const resolvedLocale = locale || 'en'; // Ensure locale is set with a fallback

  try {
    const response = await fetch('https://www.centauruscharter.com/api/api_new/basic');
    const data = await response.json();

    // Find the experience by slug with a check to prevent errors
    const experience = data?.experiences?.find((item: { slug: string }) => item.slug === slug);

    if (!experience) {
      console.warn(`No experience found for slug: ${slug}`);
      return {
        title: 'Default Title',
        description: 'Default Description',
      };
    }

    return {
      title: experience.translations?.[resolvedLocale]?.meta.title || 'Default Title',
      description: experience.translations?.[resolvedLocale]?.meta.description || 'Default Description',
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
