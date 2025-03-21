import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import PageTitleHeading from "@/app/components/PageTitleHeading";
import OfferClientActions from "@/app/components/OfferClientActions";

// Fetch data server-side
async function getData() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/data.json', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return { offers: [] };
  }
}

export default async function OfferDetailPage({ params }) {
  const { slug, locale } = params;
  const data = await getData();
  const language = locale || "en";
  
  // Find the offer by slug
  const offer = data?.offers?.find((offer) => offer.slug === slug);
  
  // Use getTranslations instead of useTranslations
  const t = await getTranslations();
  
  if (!offer) return <div>No offer found for this slug.</div>;

  return (
    <>
      <div className="container mx-auto px-10 flex flex-col items-center justify-center mt-14 md:mt-0">
        
        <PageTitleHeading title={offer.translations?.[language]?.title} />
        
        <div className="flex items-center justify-center pb-10">
		<Image
        src={`https://www.centauruscharter.com/product/images/${offer.image}`}
        alt={offer.translations?.[language]?.title || "Offer image"}
        className="w-full h-auto" // Full width, height adjusts automatically
        width={1024} // Intrinsic width
        height={512} // Intrinsic height
        layout="responsive" // Makes the image scale proportionally
        priority={true} // Prioritize loading for above-the-fold images
      />
        </div>
        <ul>
          {offer.translations?.[language]?.description
            .split("\n")
            .map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
        </ul>

        <div className="py-10 w-full">
          <div className="flex flex-col md:flex-row rounded-lg items-center gap-5 justify-center md:justify-between bg-primary-blue p-5">
            <p className="text-white text-center md:text-left font-bold bg-primary-blue text-xl rounded">
              Validity Until: {offer.validity}
            </p>
            <OfferClientActions offer={offer} />
          </div>
        </div>
      </div>
    </>
  );
}