import React from 'react';
import { useLocale } from "next-intl";

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
      const response = await fetch(
        "https://www.centauruscharter.com/api/api_new/basic"
      );
      const data = await response.json();
  
    
      const metaData = data?.meta_tags?.["yacht-rentals"]?.[resolvedLocale]?.[0];
  
      if (!metaData) {
        console.warn(`No metadata found for yacht-trips in locale: ${resolvedLocale}`);
        return {
          title: "Default Title",
          description: "Default Description",
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
      };
    }
  }
  
export default Layout;
