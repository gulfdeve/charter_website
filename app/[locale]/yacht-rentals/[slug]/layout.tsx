import React from "react";
import { useLocale } from "next-intl";
import fs from "fs/promises";
import path from "path";

interface Metadata {
  title: string;
  description: string;
  keywords?: string;
}

interface APIMetaData {
  slug?: string;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
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
      <main>{children}</main>
  );
}

/**
 * Returns the metadata object if it has a non-empty meta_title.
 * Otherwise, returns undefined.
 */
function getValidMeta(meta?: APIMetaData): APIMetaData | undefined {
  if (meta && meta.meta_title && meta.meta_title.trim() !== "") {
    return meta;
  }
  return undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const resolvedLocale = locale || "en";

  try {

    // Path to your JSON file in the public directory
    const dataPath = path.join(process.cwd(), 'public', 'data.json');

    // Read the file
    const jsonData = await fs.readFile(dataPath, 'utf8');
    const data = JSON.parse(jsonData);

    console.log("Reading from local data.json");

    // Log the complete data fetched from the backend


    // Attempt to get metadata for the specific yacht rental
    const metaYachtRentals: APIMetaData | undefined =
      data?.meta_tags?.[`yacht-rentals/${slug}`]?.[resolvedLocale]?.[0];


    // Fallback to "home" metadata if specific data is missing/invalid
    const metaHome: APIMetaData | undefined =
      data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];


    // Fallback to general "yacht-rentals" metadata if above are missing/invalid
    const metaYachtRentalsGeneral: APIMetaData | undefined =
      data?.meta_tags?.["yacht-rentals"]?.[resolvedLocale]?.[0];


    // New fallback chain: specific -> home -> general -> default
    const finalMeta: APIMetaData =
      getValidMeta(metaYachtRentals) ||
      getValidMeta(metaHome) ||
      getValidMeta(metaYachtRentalsGeneral) || {
        meta_title: "Default Title",
        meta_description: "Default Description",
        meta_keywords: "default, keywords",
      };



    return {
      title: finalMeta.meta_title ?? "Default Title",
      description: finalMeta.meta_description ?? "Default Description",
      keywords: finalMeta.meta_keywords ?? "default, keywords",
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
