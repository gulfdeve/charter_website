import React from "react";
import { fetchData } from "@/app/lib/fetchData";
import { getTranslations } from "next-intl/server";
import YachtCarousal from "@/app/components/YachtCarousel";
import Route from "@/app/components/Route";
import YachtGallery from "./YachtGallery";
import YachtDetails from "./YachtDetails";
import { notFound } from "next/navigation";

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
    notFound();
  }

  const yachtDetails = [
    { label: "Size", value: product.translations?.[locale]?.size },
    { label: "Decks", value: product.translations?.[locale]?.decks },
    { label: "Capacity", value: product.translations?.[locale]?.maximum_guest },
    { label: "Duration", value: product.translations?.[locale]?.duration },
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
      <div data-id={product.id} className="container mx-auto nav-space">
        <div className="py-10 text-center text-primary-blue">
          <h1 className="font-bold text-center">{product.translations?.[locale]?.heading_2}</h1>
          <h2 className="">{product.translations?.[locale]?.name_of_yacht}</h2>
        </div>
        <div className="relative">
        <YachtGallery gallery={product.gallery} />
        
        <div className="lg:absolute bottom-0 lg:px-5 lg:pb-3 w-full overflow-hidden lg:mb-40">
    <div className=" lg:bg-[#f1f1f1] bg-primary-blue lg:bg-opacity-80 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2 items-center gap-0 rounded-lg w-full overflow-hidden lg:shadow-none shadow-md mt-6 mx-auto">
      <h3 className=" lg:text-primary-grey text-white p-2 flex flex-col items-center">
        <span className="font-bold text-sm">Model:</span>
        <span className="font-semibold text-sm lg:text-black text-primary-yellow xl:text-xl">
          {product.translations?.[locale]?.model}
        </span>
      </h3>
      <h3 className=" lg:text-primary-grey text-white p-2 flex flex-col items-center">
        <span className="font-bold text-sm">Length:</span>
        <span className="font-semibold text-sm lg:text-black text-primary-yellow xl:text-xl">
          {product.translations?.[locale]?.size}
        </span>
      </h3>
      <h3 className=" lg:text-primary-grey text-white p-2 flex flex-col items-center">
        <span className="font-bold text-sm">Guests:</span>
        <span className="font-semibold text-sm lg:text-black text-primary-yellow xl:text-xl">
          {product.translations?.[locale]?.guests}
        </span>
      </h3>
      <h3 className=" p-2 flex flex-col items-center">
        <span className="text-sm text-white lg:text-primary-grey">Price per hour:</span>
        <span className="font-semibold text-sm lg:text-black text-primary-yellow xl:text-xl">
          {product.per_hour_price.toLocaleString()} AED
        </span>
      </h3>
      <div className=" text-primary-blue p-2 lg:p-1.5 xl:p-2 flex flex-col col-span-2 lg:col-span-1 items-end">
        <a
          href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
          className="blue-solid-button w-full text-center"
        >
          Book Now
        </a>
      </div>
    </div>
    </div>
    </div>
    {/* if product.id is 24 add a paragraph */}
    {product.id === 24 && (
      <p className="text-sm text-center my-2 italic text-primary-grey">
        Poseidon 118ft Trips: An Add on of AED 1000 per hour will be added for every additional 10 pax where the occupancy surpasses the 40 passengers.
      </p>
    )}

    <YachtDetails
      yachtDetails={yachtDetails}
      product={product}
      locale={locale}
      whatsappUrl={header_whatsapp_url}
    />

    <p
      className="text-base text-primary-grey"
      dangerouslySetInnerHTML={{
        __html: product.translations?.[locale]?.description || "",
      }}
    />

    <p className="text-sm text-center font-bold my-8">
      Rent a yacht in Dubai Marina
    </p>
  </div>

  <Route product={product} header_whatsapp_url={header_whatsapp_url} slug={slug} />
  <YachtCarousal />
</>
  );
}
