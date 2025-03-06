import React from 'react';
import { useLocale } from "next-intl";
import fs from 'fs/promises';
import path from 'path';

interface Metadata {
  title: string;
  description: string;
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
}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en"; // Default to English if locale is missing

  try {

    // Path to your JSON file in the public directory
    const dataPath = path.join(process.cwd(), 'public', 'data.json');

    // Read the file
    const jsonData = await fs.readFile(dataPath, 'utf8');
    const data = JSON.parse(jsonData);

    console.log("Reading from local data.json");

    const metaData = data?.meta_tags?.["shared-yacht-tours-dubai"]?.[resolvedLocale]?.[0];
    const metaHome = data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

    // Use "shared-yacht-tours-dubai" metadata if available, otherwise fallback to "home"
    const finalMeta = metaData || metaHome || {
      meta_title: "Default Title",
      meta_description: "Default Description",
    };

    return {
      title: finalMeta.meta_title || "Default Title",
      description: finalMeta.meta_description || "Default Description",
      keywords: finalMeta.meta_keywords
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
}

export default Layout;
