import HomeContent from "@/app/components/HomeContent"
export async function generateMetadata({params}) {
  const { locale } = await params;
  const resolvedLocale = locale || "en"; 

  let metaTitle = "Default Title";
  let metaDescription = "Default Description";
  let metaKeywords = "default, keywords";

  try {
    const res = await fetch("https://www.centauruscharter.com/api/api_new/basic");
    const data = await res.json();
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
    console.error("Error fetching metadata:", error);
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