import React from "react";
import { fetchData } from '@/app/lib/fetchData';
import { getTranslations } from 'next-intl/server';
import YachtList from "./YachtList"; // We'll create this client component
import ExperienceCarousal from "@/app/components/ExperienceCarousal";
import PageTitleHeading from "@/app/components/PageTitleHeading";

export default async function YachtRentalsPage({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "en";
  const t = await getTranslations();
  
  const data = await fetchData();
  
  if (!data?.products) {
    return <div>Loading...</div>;
  }

  // Process yacht data server-side
  const yachts = data.products.map((item) => {
    let category = ["allYachts"];
    if (item.per_hour_price > 4000) category.push("premium");
    if (["56ft-lagoona", "61ft-silvercreek"].includes(item.slug)) {
      category.push("bestSellers");
    }
    return {
      id: item.id,
      images: item.gallery?.map((img) => img.image) || [],
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
    <div className="w-full bg-white nav-space">
      <PageTitleHeading title="LUXURY YACHT RENTALS DUBAI" />
      
      <YachtList yachts={yachts} />

      <div className="container text-left mx-auto px-3 py-5 pb-8">
	  <p className="text-base text-primary-black">
          A <strong>luxury yacht rental</strong> is the perfect way to enjoy an experience
          tailored to your specific needs. We offer the best luxury yacht
          experiences in UAE. Whether you're looking for a luxurious getaway
          or want a boat for a special event like a wedding, honeymoon,
          birthday party - we have just what you need. Centaurus offers
          extensive fleet of yachts that offers something for every taste and
          budget. Our experienced team with knowledge of the local waters can
          help you plan an extraordinary experience.
          <br />
          <br /> A wide range of itineraries and destinations available, from
          the Dubai Marina to Burj Al Arab. <strong>Renting a yacht</strong> in Dubai Marina or
          Dubai Harbor is made hassle free by booking online instantly
        </p>
      </div>

      <div className="mt-10">
        <ExperienceCarousal />
      </div>
    </div>
  );
}