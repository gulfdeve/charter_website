import React from 'react';
import { fetchData } from '@/app/lib/fetchData';


interface Metadata {
  title: string;
  description: string;
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
  }) {
	const { locale } = await params;
	const resolvedLocale = locale || "en"; // Default to English if locale is missing

  try {

    // Use fetchData utility instead of reading from filesystem
    const data = await fetchData();
    
    if (!data) {
      throw new Error('Failed to fetch data');
    }

    const metaData = data?.meta_tags?.["shared-yacht-tours-dubai"]?.[resolvedLocale]?.[0];
    const metaHome = data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

    // Use "shared-yacht-tours-dubai" metadata if available, otherwise fallback to "home"
    const finalMeta = metaData || metaHome || {
      meta_title: "Default Title",
      meta_description: "Default Description",
    };

    return {
      title: finalMeta.meta_title || "Default Title",
      description: finalMeta.meta_description || "Default Description",
      keywords: finalMeta.meta_keywords
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
}

export default Layout;
