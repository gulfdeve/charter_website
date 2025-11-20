import React from 'react';
import Image from 'next/image';
import ExperienceCarousal from '@/app/components/ExperienceCarousal';
import { notFound } from 'next/navigation';
import { fetchData } from '@/app/lib/fetchData';
import { getLocale } from 'next-intl/server';
import EventClient from './EventClient';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all events slug + locale combinations at build time
export async function generateStaticParams() {
  try {
    const data = await fetchData();
    const locales = ['en', 'ar', 'ru', 'zh'];
    
    if (!data?.events) {
      return [];
    }

    // Generate a param combination for each event slug × each locale
    const params = [];
    data.events.forEach(event => {
      locales.forEach(locale => {
        params.push({
          slug: event.slug,
          locale: locale,
        });
      });
    });

    return params;
  } catch (error) {
    console.error('Error generating static params for events:', error);
    return [];
  }
}

const page = async ({ params }) => {
  const { slug, locale } = await params;
  
  const data = await fetchData();
  
  if (!data) {
    return <div>Loading...</div>;
  }

  // Find the event by slug
  const event = data?.events?.find(event => event.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto nav-space" data-id={event.id}>
        {/* Container for title/heading with padding */}
        <div className="py-10 text-center text-primary-blue">
          <h1 className="">{event.translations?.[locale]?.title}</h1>
          <h2 className="font-secondary text-primary-blue-2 text-center">
            {event.translations?.[locale]?.heading_2}
          </h2>
        </div>

        {/* Full width image container without horizontal padding */}
        <div className="w-full flex items-center justify-center">
          <Image
            src={`https://www.centauruscharter.net/product/images/${event.image}`}
            alt={event.translations?.[locale]?.title}
            className="w-full h-auto object-contain" // Full width with proper object fitting
            width={100} // Larger intrinsic width for better quality
            height={0} // Proportional height
            priority={true} // Prioritize loading for above-the-fold images
            sizes="100vw" // Tell Next.js this image takes the full viewport width
          />
        </div>

        {/* Container for the rest of the content with padding */}
        <div className="py-10">
          <div
            className="text-base font-secondary"
            dangerouslySetInnerHTML={{
              __html: event.translations?.[locale]?.description || '',
            }}
          />

          <EventClient event={event} locale={locale} />
        </div>
      </div>

      <ExperienceCarousal />
    </>
  );
};

export default page;
