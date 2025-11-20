// app/[locale]/offers/[slug]/page.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import PageTitleHeading from '@/app/components/PageTitleHeading';
import OfferClientActions from '@/app/components/OfferClientActions';
import { fetchData } from '@/app/lib/fetchData';
import ExperienceCarousal from '@/app/components/ExperienceCarousal';
import { notFound } from 'next/navigation';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all offer slug + locale combinations at build time
export async function generateStaticParams() {
  try {
    const data = await fetchData();
    const locales = ['en', 'ar', 'ru', 'zh'];
    
    if (!data?.offers) {
      return [];
    }

    // Generate a param combination for each offer slug × each locale
    // Only generate params where the translation exists
    const params = [];
    data.offers.forEach(offer => {
      locales.forEach(locale => {
        // Only add param if translation exists for this locale
        if (offer.translations && offer.translations[locale]) {
          params.push({
            slug: offer.slug,
            locale: locale,
          });
        }
      });
    });

    return params;
  } catch (error) {
    console.error('Error generating static params for offers:', error);
    return [];
  }
}

export default async function OfferDetailPage({ params }) {
  const { slug, locale } = await params;
  const language = locale || 'en';

  // Use the same fetchData utility that's used in the layout
  const data = await fetchData();

  // Find the offer by slug
  const offer = data?.offers?.find(offer => offer.slug === slug);

  // Use getTranslations instead of useTranslations
  const t = await getTranslations();

  if (!offer) {
    notFound();
  }

  // Check if translation exists for this locale
  if (!offer.translations || !offer.translations[language]) {
    notFound();
  }

  return (
    <>
      {/* Use full width container without padding for the image */}
      <div className="container mx-auto nav-space">
        <div className="py-10 text-center text-primary-blue">
          <h1 className="font-bold text-center">
            {offer.translations?.[language]?.title}
          </h1>
          <h2 className="font-secondary text-primary-blue-2">
            {offer.translations?.[language]?.heading_2}
          </h2>
        </div>

        {/* Move the image outside the padded container */}
        <div className="w-full flex items-center justify-center pb-10">
          <Image
            src={`https://www.centauruscharter.net/product/images/${offer.image}`}
            alt={offer.translations?.[language]?.title || 'Offer image'}
            className="w-full h-auto object-contain" // Full width with proper object fitting
            width={100} // Larger intrinsic width for better quality
            height={0} // Proportional height
            priority={true} // Prioritize loading for above-the-fold images
            sizes="100vw" // Tell Next.js this image takes the full viewport width
          />
        </div>

        {/* Return to container for the rest of the content */}
        <div className="">
          <div
            className="text-base"
            dangerouslySetInnerHTML={{
              __html: offer.translations?.[language]?.description || '',
            }}
          />

          <div className="py-10 w-full">
            <div className="flex flex-col md:flex-row rounded-lg items-center gap-5 justify-center md:justify-between bg-primary-blue p-5">
              <p className="text-white text-center md:text-left font-bold bg-primary-blue text-xl rounded">
                Validity Until: {offer.validity}
              </p>
              <OfferClientActions offer={offer} />
            </div>
          </div>
        </div>
      </div>
      <ExperienceCarousal />
    </>
  );
}
