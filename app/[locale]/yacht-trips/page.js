import React from "react";
import { fetchData } from '@/app/lib/fetchData';
import { getTranslations } from 'next-intl/server';
import ExperienceMobilecarousal from "@/app/components/ExperienceMobilecarousal";
import TailorYachtExperience from "@/app/components/TailorYachtExperience";
import ExclusiveOffers from "../../components/ExclusiveOffers";
import PageTitleHeading from "@/app/components/PageTitleHeading";
import ExperiencesGrid from "./ExperiencesGrid"; // We'll create this client component

export default async function YachtTripsPage({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "en";
  const t = await getTranslations();
  
  const data = await fetchData();
  
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto nav-space">
        <PageTitleHeading title="YACHT TRIPS & EXPERIENCES IN DUBAI" />

        <div className="md:block hidden">
          <ExperiencesGrid experiences={data?.experiences} locale={locale} />
        </div>
        
        <div className="md:hidden block">
          <ExperienceMobilecarousal />
        </div>
      </div>

      <div className="container mx-auto py-5 pb-8">
	  <p className="text-base text-primary-grey">
          Dubai is a popular destination for yachting. The Arabian coastline
          is lined with beautiful azure beaches and top attractions, which are
          perfect for leisure trips and intimate celebrations. Centaurus
          Charter has a versatile range of yachts and boats in Dubai that are
          suitable for any event. Our captain & crew has years of experience,
          can customize your trip as per your choices and is always eager to
          help.
          <br />
          <br /> Experience yachting life with end-to-end personalized
          services, stunning views of the surroundings with plenty of
          watersports for your next excursion.
        </p>
      </div>

      <ExclusiveOffers />
      <TailorYachtExperience />
    </>
  );
}
