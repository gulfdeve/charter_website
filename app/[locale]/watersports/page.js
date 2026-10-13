import React from 'react';
import { fetchData } from '@/app/lib/fetchData';
import { getTranslations } from 'next-intl/server';
import YachtCarousal from '@/app/components/YachtCarousel';
import LocationCarousel from '@/app/components/LocationCarousel';
import WatersportCarousal from '@/app/components/WatersportCarousal';
import TailorYachtExperience from '@/app/components/TailorYachtExperience';
import ExclusiveOffers from '@/app/components/ExclusiveOffers';
import PageTitleHeading from '@/app/components/PageTitleHeading';
import WatersportsGrid from './WatersportsGrid';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ru' }, { locale: 'zh' }];
}

export default async function WatersportsPage({ params }) {
  const resolvedParams = await params;
  const language = resolvedParams.locale || 'en';
  const t = await getTranslations();

  const data = await fetchData();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto nav-space">
        <PageTitleHeading title="WATERSPORTS ADD-ON DUBAI" />

        <div className="md:block hidden">
          <WatersportsGrid packages={data?.packages} language={language} />
        </div>

        <div className="md:hidden block">
          <WatersportCarousal packages={data?.packages} language={language} />
        </div>
      </div>

      <div className="container mx-auto px-3 py-5 pb-8">
        <p className="text-base text-primary-grey">
          Explore the beautiful coastline of the Arabian Gulf, the sun warming your skin, water lapping at your feet, and a warm breeze whispering in your ears. We have the best watersports activities with yacht chartering to suit any time of year. No matter what you&apos;re looking for, you can book online with complete ease. We offer a range of day trips that take you off the beaten track to explore
          some of Dubai&apos;s most exquisite sights. Whether you want an adrenaline-filled adventure or an easygoing day on the water, we&apos;ve got something for everyone.
          <br />
          <br />
          For a perfect excursion with friends and family, book your yachts with water sports activity in Dubai today.
        </p>
      </div>

      <ExclusiveOffers />
      <TailorYachtExperience />
      <LocationCarousel />
    </>
  );
}
