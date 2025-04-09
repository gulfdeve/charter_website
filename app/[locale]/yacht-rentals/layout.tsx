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

interface APIResponse {
  meta_tags?: {
    [key: string]: {
      [locale: string]: APIMetaData[];
    };
  };
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

    // Attempt to get metadata dynamically for yacht-rentals/{slug}
    const metaYachtRentals: APIMetaData | undefined =
      data?.meta_tags?.[`yacht-rentals/${slug}`]?.[resolvedLocale]?.[0];

    // Fallback to "yacht-rentals" metadata if individual slug is missing
    const metaYachtRentalsGeneral: APIMetaData | undefined =
      data?.meta_tags?.["yacht-rentals"]?.[resolvedLocale]?.[0];

    // Fallback to "home" metadata if none are found
    const metaHome: APIMetaData | undefined =
      data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

    // Ensure `finalMeta` is always assigned a value
    const finalMeta: APIMetaData = metaYachtRentals || metaYachtRentalsGeneral || metaHome || {
      meta_title: "Default Title",
      meta_description: "Default Description",
      meta_keywords: "default, keywords",
    };

    return {
      title: finalMeta.meta_title || "Default Title",
      description: finalMeta.meta_description || "Default Description",
      keywords: finalMeta.meta_keywords || "default, keywords",
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
