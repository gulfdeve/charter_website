import React from "react";

interface Metadata {
  title: string;
  description: string;
  keywords?: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
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
    const response = await fetch(
      "https://www.centauruscharter.com/api/api_new/basic"
    );
    const data = await response.json();

    // Match metadata using dynamic slug
    const metaData = data?.meta_tags?.[`yachts-for-sale-dubai/${slug}`]?.[resolvedLocale]?.[0];

    if (!metaData) {
      console.warn(`No metadata found for yachts-for-sale-dubai/${slug} in locale: ${resolvedLocale}`);
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
