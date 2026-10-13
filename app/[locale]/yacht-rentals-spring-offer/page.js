// app/spring-offer/page.jsx
import React from 'react';
import Image from 'next/image';
import { fetchData } from '@/app/lib/fetchData';
import { getLocale } from 'next-intl/server';
import SpringOfferTabs from './SpringOfferClient';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ru' }, { locale: 'zh' }];
}

/*
  SpringOffer Page:
  - Server component that fetches data and passes to client components
*/
export default async function SpringOffer({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || (await getLocale());

  // Fetch data server-side
  const data = await fetchData();

  if (!data?.products) {
    return <div>Loading...</div>;
  }

  // Map each product to include its gallery images as an array.
  const yachts = data.products.map(item => {
    const category = ['allYachts'];
    if (item.per_hour_price > 4000) category.push('premium');
    if (['56ft-lagoona', '61ft-silvercreek'].includes(item.slug)) {
      category.push('bestSellers');
    }
    return {
      id: item.id,
      images: item.gallery?.map(img => img.image) || [],
      title: item.translations?.[locale]?.name_of_yacht,
      slug: item.slug,
      fareharbor_id: item.fareharbor_id,
      length: item.translations?.[locale]?.size,
      model: item.translations?.[locale]?.model,
      guests: item.translations?.[locale]?.guests,
      price: item.per_hour_price,
      category,
    };
  });
  return (
    <main className="bg-white min-h-screen flex flex-col items-center p-6">
      {/* Logo (Optional) */}
      <div className="mb-6">
        <Image src="/centaurus logo navy blue.png" alt="Centaurus Yachts Charter Logo" width={200} height={200} />
      </div>

      {/* Spring Offer Headings */}
      <h1 className="text-2xl md:text-4xl font-bold text-primary-blue mb-2 text-center">Centaurus Luxury Yacht Rentals</h1>
      <h2 className="text-lg md:text-2xl text-gray-500 mb-6 text-center">30% OFF Afternoon Yacht Charters!</h2>

      {/* Description */}
      <div className="max-w-6xl text-center text-gray-500 space-y-4">
        <p>
          Experience the perfect spring escape with an exclusive <strong>30% discount</strong> on our afternoon yacht charters in Dubai. Relax and unwind as you cruise along the stunning coastline, enjoying <strong>unlimited complimentary drinks</strong> and the refreshing sea breeze. With <strong>free transfers</strong> included (subject to availability), all you need to do is sit back, relax,
          and enjoy the ultimate luxury experience with your loved ones.
        </p>
        <p>A wide range of itineraries and destinations are available, from Dubai Marina to Burj Al Arab, JBR, and Atlantis. Renting a yacht in Dubai Marina or Dubai Harbour is seamless with instant booking options.</p>
        <p className="font-semibold">
          This offer is <strong>valid on weekdays only</strong>, excluding weekends and public holidays, and is available until <strong>April 18, 2025</strong>.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="w-full mt-10">
        <SpringOfferTabs yachts={yachts} />
      </div>
    </main>
  );
}
