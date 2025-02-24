import React from "react";

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
    <div>
      <main>{children}</main>
    </div>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = locale || "en"; // Default to English if locale is missing

  try {
    const response = await fetch("https://www.centauruscharter.com/api/api_new/basic");
    const data: APIResponse = await response.json();

    // Attempt to get metadata dynamically for "yacht-trips"
    const metaYachtTrips: APIMetaData | undefined =
      data?.meta_tags?.["yacht-trips"]?.[resolvedLocale]?.[0];

    // Fallback to "home" metadata if yacht-trips data is missing
    const metaHome: APIMetaData | undefined =
      data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

    // Ensure `finalMeta` is always assigned a value
    const finalMeta: APIMetaData = metaYachtTrips || metaHome || {
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
