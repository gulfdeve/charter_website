import React from 'react';
import { useLocale } from "next-intl";

interface Metadata {
  title: string;
  description: string;
  keywords?: string;
}

interface EventTranslation {
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keyword?: string | null;
  meta_keywords?: string | null;
}

interface Event {
  slug: string;
  translations?: {
    [locale: string]: EventTranslation;
  };
}

interface APIResponse {
  events?: Event[];
  meta_tags?: {
    [key: string]: {
      [locale: string]: EventTranslation | EventTranslation[];
    };
  };
}

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const resolvedLocale = locale 
 

  try {
    const response = await fetch("https://www.centauruscharter.com/api/api_new/basic");
    const data: APIResponse = await response.json();
    

    // Find the event by slug
    const event: Event | undefined = data?.events?.find((item) => item.slug === slug);
    
    // Retrieve event translations (or default to an empty object)
    const eventTranslations: EventTranslation = event?.translations?.[resolvedLocale] || {};
    

    // Retrieve home translations as fallback (if available)
    const homeTranslationsRaw = data?.meta_tags?.["home"]?.[resolvedLocale];
    const homeTranslations: EventTranslation = Array.isArray(homeTranslationsRaw)
      ? homeTranslationsRaw[0]
      : homeTranslationsRaw || {};
    

    // Field-by-field fallback only using original meta fields
    const title =
      eventTranslations.meta_title ||
      homeTranslations.meta_title ||
      "Default Title";
    const description =
      eventTranslations.meta_description ||
      homeTranslations.meta_description ||
      "Default Description";
    const keywords =
      eventTranslations.meta_keyword ||
      eventTranslations.meta_keywords ||
      homeTranslations.meta_keyword ||
      homeTranslations.meta_keywords ||
      "Meta Keywords";

    const finalMetadata = { title, description, keywords };
  
    return finalMetadata;
  } catch (error) {
    console.log("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "Meta Keywords",
    };
  }
}

export default Layout;
