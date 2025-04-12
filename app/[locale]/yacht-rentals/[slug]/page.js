import React from "react";
import { fetchData } from "@/app/lib/fetchData";
import { getTranslations } from "next-intl/server";
import YachtCarousal from "@/app/components/YachtCarousel";
import Route from "@/app/components/Route";
import YachtGallery from "./YachtGallery";
import YachtDetails from "./YachtDetails";

export default async function YachtPage({ params: paramsPromise }) {
  //   const { slug, locale } = params;
  const params = await paramsPromise;
  const { slug, locale } = params;
  const t = await getTranslations();

  const data = await fetchData();

  if (!data) {
    return <div>Loading...</div>;
  }

  const product = data.products.find((item) => item.slug === slug);
  const settingsItem = data?.settings?.[0];
  const { header_whatsapp_url } = settingsItem || {};

  if (!product) {
    return <div className="text-center mt-20">No product found.</div>;
  }

  const yachtDetails = [
    { label: "Size", value: product.translations?.[locale]?.size },
    { label: "Decks", value: product.translations?.[locale]?.decks },
    { label: "Capacity", value: product.translations?.[locale]?.maximum_guest },
    { label: "Duration", value: "Minimum 1 Hour" },
    { label: "Cabin", value: product.translations?.[locale]?.cabin },
    {
      label: "Kitchen Equipment",
      value: product.translations?.[locale]?.kitchen_equipment,
    },
    {
      label: "Music System",
      value: product.translations?.[locale]?.music_system,
    },
    {
      label: "No of Staff",
      value: product.translations?.[locale]?.no_of_staff,
    },
    { label: "Location", value: product.translations?.[locale]?.location },
    {
      label: "Extras",
      value: "Drinks Included (Bubbly drinks, Soft drinks, Coffee & Water)",
    },
  ];

  return (
    <>
      <div className="container mx-auto p-5 nav-space">
        <h1 className="text-xl sm:text:2xl md:text-3xl lg:text-4xl text-center mb-5 mt-5 lg:mt-14 font-bold">
          {product.translations?.[locale]?.name_of_yacht}
        </h1>
        <h2 className="text-base sm:text:2xl lg:text-3xl text-center mb-4">
          Boat Rental Dubai
        </h2>

        <YachtGallery gallery={product.gallery} />

        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2 items-center gap-0 rounded-lg w-full overflow-hidden shadow-md mb-7 mt-6 mx-auto">
          <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Model:</span>
            <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
              {product.translations?.[locale]?.model}
            </span>
          </div>
          <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Length:</span>
            <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
              {product.translations?.[locale]?.size}
            </span>
          </div>
          <div className="bg-primary-blue text-white p-2 flex flex-col items-center">
            <span className="font-bold text-sm">Guests:</span>
            <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
              {product.translations?.[locale]?.guests}
            </span>
          </div>
          <div className="bg-primary-blue p-2 flex flex-col items-center">
            <span className="text-sm text-white">Price Per Hour:</span>
            <span className="font-semibold text-sm text-primary-yellow xl:text-xl">
              {product.per_hour_price} AED
            </span>
          </div>
          <div className="bg-primary-blue text-primary-blue p-2 lg:p-1.5 xl:p-2 flex flex-col col-span-2 lg:col-span-1 items-center">
            <a
              href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
              className="flex flex-row items-center justify-center py-1 px-6 md:py-2 md:px-8 border-4 border-primary-yellow rounded-md bg-primary-blue hover:bg-primary-blue text-primary-yellow font-bold text-base md:text-sm xl:text-base transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>

        <YachtDetails
          yachtDetails={yachtDetails}
          product={product}
          locale={locale}
          whatsappUrl={header_whatsapp_url}
        />

        <div
          className="text-sm text-center"
          dangerouslySetInnerHTML={{
            __html: product.translations?.[locale]?.description || "",
          }}
        />

        <p className="text-sm text-center font-bold my-8">
          Rent a yacht in Dubai Marina
        </p>
      </div>

      <Route header_whatsapp_url={header_whatsapp_url} />
      <YachtCarousal />
    </>
  );
}
