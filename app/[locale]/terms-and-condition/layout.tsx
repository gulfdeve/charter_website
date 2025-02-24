import React from 'react';
import { useLocale } from "next-intl";

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
}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en"; // Default to English if locale is missing

  try {
    const response = await fetch("https://www.centauruscharter.com/api/api_new/basic");
    const data = await response.json();

    const metaData = data?.meta_tags?.["default"]?.[resolvedLocale]?.[0];
    const metaHome = data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

    // Use "default" metadata if available, otherwise fallback to "home"
    const finalMeta = metaData || metaHome || {
      meta_title: "Default Title",
      meta_description: "Default Description",

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
