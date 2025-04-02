import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/app/i18n/routing";
import YachtCarousal from "@/app/components/YachtCarousel";
import OfferMobilecarousal from "@/app/components/OfferMobilecarousal";
import PageTitleHeading from "@/app/components/PageTitleHeading";
import ClientButtons from "@/app/components/ClientButtons";

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

// Import getTranslations instead of useTranslations
import { getTranslations } from 'next-intl/server';

export default async function OffersPage({ params }) {
  const data = await getData();
  const language = params.locale || "en";

  // Use getTranslations instead of useTranslations
  const t = await getTranslations();

  return (
    <>
      <div className="container mx-auto mt-14 md:mt-0">
        <PageTitleHeading title="YACHT OFFERS AND DEALS IN DUBAI" />
        {/* <p>{t("navbar.contact-us")}</p> */}

        <div className="md:block hidden">
          <div className="grid grid-col-1 md:grid-cols-2 gap-7 pb-8">
            {data?.offers?.map((offer) => (
              <div
                key={offer.id}
                className="flex flex-col justify-start lg:justify-between rounded-md bg-white custom-shadow"
              >
                <Link href={`/offers/${offer.slug}`}>
                  <Image
                    src={`https://www.centauruscharter.com/product/images/${offer.image}`}
                    alt={offer.translations[language].title}
                    className="rounded-t-md w-full object-cover"
                    width={450}
                    height={0}
                    style={{ height: "auto" }}
                    priority={true}
                  />
                </Link>
                <div className="flex flex-col justify-start px-5 lg:px-5">
                  <h2 className="text-[#232629] text-2xl font-bold pt-4">
                    <Link href={`/offers/${offer.slug}`}>
                      {offer.translations[language].title}
                    </Link>
                  </h2>
                  <p className="text-[#232629] font-bold text-xs pt-2 pb-12">
                    {offer.note}
                  </p>
                  <p className="text-sm py-2 font-bold">
                    *SUBJECT TO AVAILABILITY{" "}
                  </p>
                  <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col items-start justify-start py-10">
                      <p className="text-[#232629] font-bold text-sm xl:text-lg">
                        Validity Until:
                        <br />
                        {offer.validity}
                      </p>
                    </div>
                    <ClientButtons offer={offer} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <OfferMobilecarousal />
      </div>
      <div className="container mx-auto px-3 py-5 pb-8">
        <p className=" text-gray-500 text-md ">
          Centaurus Charter offers range of membership discounts &{" "}
          <strong>yacht deals</strong> to adorn the beautiful yachting
          destinations. The best way to enjoy your dream vacation is a day out
          on the waters. Have fun in the sun, spend the day cruising or enjoy
          weekend boat parties. Upgrade your cruising experience with our
          extreme water sports activities, lip smacking BBQ or seafood platters,
          tempting cakes, bubbly drinks, fresh flowers & balloon decoration
          packages at extra cost. We offer a wide range of yachts for every
          occasion. You deserve nothing but the best.
          <br />
          <br /> <strong>Charter a yacht</strong> with our best deal.
        </p>
      </div>
      <YachtCarousal />
    </>
  );
}