import React from "react";
import path from "path";
import fs from "fs/promises";

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

    // Path to your JSON file in the public directory
    const dataPath = path.join(process.cwd(), 'public', 'data.json');

    // Read the file
    const jsonData = await fs.readFile(dataPath, 'utf8');
    const data = JSON.parse(jsonData);

    console.log("Reading from local data.json");

    // Attempt to get metadata for watersports/{slug}
    const metaData = data?.meta_tags?.[`watersports/${slug}`]?.[resolvedLocale]?.[0];

    // Fallback: If no metadata found, try general "watersports" metadata
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
