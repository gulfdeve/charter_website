// app/[locale]/offers/dubai-yachts-winter-offers/layout.tsx
import React from 'react';
import { fetchData } from '@/app/lib/fetchData';

interface Metadata {
  title: string;
  description: string;
  keywords?: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>{children}</main>
  );
};

export async function generateMetadata({
	params,
  }: {
	params: Promise<{ slug: string; locale: string }>;
  }): Promise<Metadata> {
	const { locale } = await params;
	const resolvedLocale = locale || "en"; // Default to English if locale is missing

  try {
    // Use fetchData utility instead of reading from filesystem
    const data = await fetchData();
    
    if (!data) {
      throw new Error('Failed to fetch data');
    }

    const metaData = data?.meta_tags?.["dubai-yachts-winter-offers"]?.[resolvedLocale]?.[0];
    const metaHome = data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

    return {
      title: metaData?.meta_title || metaHome?.meta_title || "Default Title",
      description: metaData?.meta_description || metaHome?.meta_description || "Default Description",
      keywords: metaData?.meta_keywords || metaHome?.meta_keywords || "default, keywords",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
    };
  }
}

export default Layout;