import React from "react";
import fs from "fs/promises";
import path from "path";

interface Metadata {
  title: string;
  description: string;
  keywords?: string;
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
