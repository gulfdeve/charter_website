"use client";
import React from "react";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import YachtCarousal from "@/app/components/YachtCarousel";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
// import Loading from "./loading";
import Image from "next/image";
import OfferMobilecarousal from "@/app/components/OfferMobilecarousal";
import PageTitleHeading from "@/app/components/PageTitleHeading";

const page = ({ params }) => {
  const { data, loading, error } = useData();
  const { language, changeLanguage } = useLanguage();

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 md:mt-0">
        <PageTitleHeading title="YACHT OFFERS AND DEALS IN DUBAI" />

        <div className="md:block hidden">
          <div className="grid grid-col-1 md:grid-cols-2 md:px-4 gap-7 pb-8 container mx-auto ">
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
                <div className="flex flex-col  justify-start px-5 lg:px-5">
                  <h2 className="text-[#232629]  text-2xl font-bold pt-4">
                    <Link href={`/offers/${offer.slug}`}>
                      {offer.translations[language].title}
                    </Link>
                  </h2>
                  <p className="text-[#232629]  font-bold text-xs pt-2 pb-16">
                    {offer.note}
                  </p>
                  <p className="text-sm py-2 font-bold">
                    *SUBJECT TO AVAILABILITY{" "}
                  </p>
                  <div className="bg-[#232629] w-full h-[0.05rem]"></div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col items-start justify-start py-10">
                      <p className="text-[#232629]  font-bold text-sm xl:text-lg">
                        Validity Until:
                        <br />
                        {offer.validity}
                      </p>
                    </div>
                    {/* Buttons Section */}
                    <div className="flex xl:flex-row flex-col items-center justify-end gap-3 ">
                      <a
                        href={`${offer.whatsapp_url}`}
                        target="_blank"
                        className="blue-solid-button flex items-center"
                      >
                        <FaWhatsapp className="xs:text-xl text-lg  mr-1" />
                        WHATSAPP
                      </a>
                      <Link
                        href={`/offers/${offer.slug}`}
                        className="blue-solid-button"
                      >
                        KNOW MORE
                      </Link>
                    </div>
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
      <div className="max-w-7xl mx-auto px-3 py-5 pb-8">
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
};

export default page;
