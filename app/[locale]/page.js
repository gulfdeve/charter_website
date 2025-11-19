// app/[locale]/page.js
import HomeContent from '@/app/components/HomeContent';
import { fetchData } from '@/app/lib/fetchData';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
    { locale: 'ru' },
    { locale: 'zh' },
  ];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const resolvedLocale = locale || 'en';

  let metaTitle = 'Default Title';
  let metaDescription = 'Default Description';
  let metaKeywords = 'default, keywords';

  try {
    // Use fetchData utility instead of reading from filesystem
    const data = await fetchData();

    if (!data) {
      throw new Error('Failed to fetch data');
    }

    // Fetch metadata for "home" using the locale
    const metaData = data?.meta_tags?.['home']?.[resolvedLocale]?.[0];

    if (metaData) {
      metaTitle = metaData.meta_title || metaTitle;
      metaDescription = metaData.meta_description || metaDescription;
      metaKeywords = metaData.meta_keywords || metaKeywords;
    } else {
      console.warn(`No metadata found for home in locale: ${resolvedLocale}`);
    }
  } catch (error) {
    console.error('Error fetching metadata:', error);
  }

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    alternates: {
      canonical: 'https://www.centauruscharter.com',
    },
  };
}

export default async function Home() {
  // You can also fetch data here if HomeContent needs it as a prop
  // const data = await fetchData();
  // return <HomeContent data={data} />;

  // Or if HomeContent uses the DataContext, you can leave it simple:
  return <HomeContent />;
}
