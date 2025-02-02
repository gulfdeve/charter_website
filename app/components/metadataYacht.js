
import { Metadata } from 'next';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const locale = useLocale();

  // Fetch the product data (you can reuse the fetch logic from your component)
  const response = await fetch("https://www.centauruscharter.com/api/api_new/basic");
  const data = await response.json();
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: product.translations?.[locale]?.meta_title || 'Centaurus Charter',
    description: product.translations?.[locale]?.meta_description || 'Luxury Yacht Charter in Dubai',
    openGraph: {
      title: product.translations?.[locale]?.meta_title || 'Centaurus Charter',
      description: product.translations?.[locale]?.meta_description || 'Luxury Yacht Charter in Dubai',
      type: 'website',
      url: `https://www.centauruscharter.com/yacht/${slug}`,
      images: [
        {
          url: `https://www.centauruscharter.com/product/galleryimages/${product.gallery[0].image}`,
          width: 800,
          height: 600,
          alt: product.translations?.[locale]?.name_of_yacht || 'Luxury Yacht',
        },
      ],
    },
  };
}