// app/[locale]/offers/[slug]/layout.tsx
import React from "react";
import { fetchData } from '@/app/lib/fetchData';

interface Metadata {
  title: string;
  description: string;
  keywords?: string;
}

interface APIMetaData {
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
}

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main>{children}</main>
  );
};

export async function generateMetadata({
	params,
  }: {
	params: Promise<{ slug: string; locale: string }>;
  }): Promise<Metadata> {
	const { slug, locale } = await params;
	const resolvedLocale = locale || "en"; // Default to English if locale is missing

  try {
    // Use fetchData utility instead of reading from filesystem
    const data = await fetchData();
    
    if (!data) {
      throw new Error('Failed to fetch data');
    }

    // Match metadata using dynamic slug or fallback to "home"
    const metaData: APIMetaData | undefined =
      data?.meta_tags?.[`offers/${slug}`]?.[resolvedLocale]?.[0] ||
      data?.meta_tags?.["home"]?.[resolvedLocale]?.[0]; // Fallback to "home"

    if (!metaData) {
      console.warn(`No metadata found for offers/${slug} in locale: ${resolvedLocale}, using default.`);
      return {
        title: "Default Title",
        description: "Default Description",
        keywords: "default, keywords",
      };
    }

    return {
      title: metaData.meta_title || "Default Title",
      description: metaData.meta_description || "Default Description",
      keywords: metaData.meta_keywords || "default, keywords",
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