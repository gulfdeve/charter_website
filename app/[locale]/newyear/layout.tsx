import React from 'react';
import { useLocale } from "next-intl";
import fs from 'fs/promises';
import path from 'path';

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
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = locale || "en"; // Default to English if locale is missing

  try {

        // Path to your JSON file in the public directory
        const dataPath = path.join(process.cwd(), 'public', 'data.json');
    
        // Read the file
        const jsonData = await fs.readFile(dataPath, 'utf8');
        const data = JSON.parse(jsonData);
        
        console.log("Reading from local data.json");

    // Try to get metadata for "new-year-yacht-party", otherwise fallback to "home"
    const metaData: APIMetaData | undefined = 
      data?.meta_tags?.["new-year-yacht-party"]?.[resolvedLocale]?.[0] ||
      data?.meta_tags?.["home"]?.[resolvedLocale]?.[0]; // Fallback to "home"

    if (!metaData) {
      console.warn(`No metadata found for 'new-year-yacht-party' or 'home' in locale: ${resolvedLocale}`);
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
