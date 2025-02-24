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
    const response = await fetch("https://www.centauruscharter.com/api/api_new/basic");
    const data = await response.json();

    // Attempt to get metadata for "yacht-rentals/{slug}"
    const metaData = data?.meta_tags?.[`yacht-rentals/${slug}`]?.[resolvedLocale]?.[0];

    // Fallback to "home" metadata if "yacht-rentals/{slug}" is missing
    const metaFallback = data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

    // Final metadata selection with default values as the last resort
    const finalMeta = metaData || metaFallback || {
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
