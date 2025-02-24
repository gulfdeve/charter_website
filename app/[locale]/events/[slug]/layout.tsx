import React from 'react';
import { useLocale } from "next-intl";

interface Metadata {
  title: string;
  description: string;
  keywords?: string;
}

interface EventTranslation {
  meta_title?: string;
  meta_description?: string;
  meta_keyword?: string;
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
      [locale: string]: EventTranslation;
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
  const resolvedLocale = locale || "en"; // Default to English if locale is missing

  try {
    const response = await fetch("https://www.centauruscharter.com/api/api_new/basic");
    const data: APIResponse = await response.json();

    // Find the event by slug
    const event: Event | undefined = data?.events?.find(
      (item) => item.slug === slug
    );

    // If event metadata is missing, fallback to "home"
    const translations = event?.translations?.[resolvedLocale] ||
                         data?.meta_tags?.["home"]?.[resolvedLocale];

    if (!translations) {
      console.warn(`No metadata found for event '${slug}' or 'home' in locale: ${resolvedLocale}`);
      return {
        title: "Default Title",
        description: "Default Description",
        keywords: "Meta Keywords",
      };
    }

    return {
      title: translations.meta_title || "Default Title",
      description: translations.meta_description || "Default Description",
      keywords: translations.meta_keyword || "Meta Keywords",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "Meta Keywords",
    };
  }
}

export default Layout;
