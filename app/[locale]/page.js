import HomeContent from "@/app/components/HomeContent"
import path from 'path';
import fs from 'fs/promises';

export async function generateMetadata({params}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en"; 

  let metaTitle = "Default Title";
  let metaDescription = "Default Description";
  let metaKeywords = "default, keywords";

  try {
    // Path to your JSON file in the public directory
    const dataPath = path.join(process.cwd(), 'public', 'data.json');
    
    // Read the file
    const jsonData = await fs.readFile(dataPath, 'utf8');
    const data = JSON.parse(jsonData);
    
    console.log("Reading from local data.json");
    
    // Fetch metadata for "home" using the locale
    const metaData = data?.meta_tags?.["home"]?.[resolvedLocale]?.[0];

    if (metaData) {
      metaTitle = metaData.meta_title || metaTitle;
      metaDescription = metaData.meta_description || metaDescription;
      metaKeywords = metaData.meta_keywords || metaKeywords;
    } else {
      console.warn(`No metadata found for home in locale: ${locale}`);
    }
  } catch (error) {
    console.error("Error reading metadata from data.json:", error);
  }

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    alternates: {
      canonical: "https://www.centauruscharter.com",
    },
  };
}

export default function Home() {
  return <HomeContent />;
}