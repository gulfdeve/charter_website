import React from 'react';
import { fetchData } from '@/app/lib/fetchData';
import { getTranslations } from 'next-intl/server';
import YachtCarousal from '@/app/components/YachtCarousel';
import Route from '@/app/components/Route';
import YachtGallery from './YachtGallery';
import YachtDetails from './YachtDetails';
import { notFound } from 'next/navigation';
// import {TabbyPromoSection} from "@/app/%5Blocale%5D/checkout/%5Bslug%5D/TabbyPromoSection";
import { TabbyPromoSection } from '@/app/[locale]/checkout/[slug]/TabbyPromoSection';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all yacht slug + locale combinations at build time
export async function generateStaticParams() {
  try {
    const data = await fetchData();
    const locales = ['en', 'ar', 'ru', 'zh'];
    
    if (!data?.products) {
      return [];
    }

    // Generate a param combination for each yacht slug × each locale
    // Only generate params where the translation exists
    const params = [];
    data.products.forEach(product => {
      locales.forEach(locale => {
        // Only add param if translation exists for this locale
        if (product.translations && product.translations[locale]) {
          params.push({
            slug: product.slug,
            locale: locale,
          });
        }
      });
    });

    return params;
  } catch (error) {
    console.error('Error generating static params for yacht-rentals:', error);
    return [];
  }
}

const summeroffer = [
  {
    name: '36 Ft Yacht - Thunder',
    discounted: 'AED 415',
  },
  {
    name: '36 Ft Yacht - Storm',
    discounted: 'AED 415',
  },
  {
    name: '40 Ft Yacht - Riverside',
    discounted: 'AED 525',
  },
  {
    name: '56 Ft Yacht - Vassia',
    discounted: 'AED 725',
  },
  {
    name: '58 Ft Yacht - Etosha',
    discounted: 'AED 755',
  },
  {
    name: '56 Ft Yacht - Lagoona',
    discounted: 'AED 805',
  },
  {
    name: '61 Ft Yacht - Silver Creek',
    discounted: 'AED 875',
  },
  {
    name: '85 Ft Yacht - Kronos',
    discounted: 'AED 2,450',
  },
  {
    name: '118 Ft Yacht - Poseidon',
    discounted: 'AED 3,500',
  },
];
function getDiscountedPrice(yachtName) {
  if (!yachtName) return null;
  const normalize = str => str.replace(/[\s\-]/g, '').toLowerCase();
  const yachtNorm = normalize(yachtName);
  const offer = summeroffer.find(item => normalize(item.name) === yachtNorm);
  return offer ? offer.discounted : null;
}
export default async function YachtPage({ params: paramsPromise }) {
  //   const { slug, locale } = params;
  const params = await paramsPromise;
  const { slug, locale } = params;
  const t = await getTranslations();

  const data = await fetchData();

  if (!data) {
    return <div>Loading...</div>;
  }

  const product = data.products.find(item => item.slug === slug);
  const settingsItem = data?.settings?.[0];
  const { header_whatsapp_url } = settingsItem || {};

  if (!product) {
    notFound();
  }

  // Check if translation exists for this locale
  if (!product.translations || !product.translations[locale]) {
    notFound();
  }

  const yachtDetails = [
    { label: 'Size', value: product.translations?.[locale]?.size },
    { label: 'Decks', value: product.translations?.[locale]?.decks },
    { label: 'Capacity', value: product.translations?.[locale]?.maximum_guest },
    { label: 'Duration', value: product.translations?.[locale]?.duration },
    { label: 'Cabin', value: product.translations?.[locale]?.cabin },
    {
      label: 'Kitchen Equipment',
      value: product.translations?.[locale]?.kitchen_equipment,
    },
    {
      label: 'Music System',
      value: product.translations?.[locale]?.music_system,
    },
    {
      label: 'No of Staff',
      value: product.translations?.[locale]?.no_of_staff,
    },
    { label: 'Location', value: product.translations?.[locale]?.location },
    {
      label: 'Inclusions',
      value:
        'Drinks (Bubbly drinks, Soft drinks, Coffee & Water) <br> <p className="text-gray-500 text-xs pt-2">Minimum booking duration applies. Terms and conditions may vary based on yacht and package selected.</p>',
    },
  ];

  return (
    <>
      <div data-id={product.id} className="container mx-auto nav-space">
        <div className="font-bold pt-10 pb-5 text-center text-primary-blue">
          <h1 className="">{product.translations?.[locale]?.heading_2}</h1>
          <h2 className="text-[20px] md:text-[24px] text-primary-blue-2">
            {product.translations?.[locale]?.name_of_yacht}
          </h2>
        </div>
        <div className="relative">
          <YachtGallery gallery={product.gallery} />

          <div className="lg:absolute bottom-0 lg:pr-4 lg:pl-48 lg:pb-4 w-full overflow-hidden">
            <div className=" bg-[#f1f1f1] lg:bg-opacity-80 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 items-center gap-0 rounded-lg w-full overflow-hidden lg:shadow-none shadow-md mt-6 mx-auto">
              <h3 className="text-primary-grey p-2 flex flex-col items-center">
                <span className="font-bold text-sm">Build:</span>
                <span className="font-semibold text-sm text-primary-blue xl:text-xl">
                  {product.translations?.[locale]?.model}
                </span>
              </h3>
              <h3 className=" text-primary-grey p-2 flex flex-col items-center">
                <span className="font-bold text-sm">Length:</span>
                <span className="font-semibold text-sm text-primary-blue xl:text-xl">
                  {product.translations?.[locale]?.size}
                </span>
              </h3>
              <h3 className=" text-primary-grey p-2 flex flex-col items-center">
                <span className="font-bold text-sm">Guests:</span>
                <span className="font-semibold text-sm text-primary-blue xl:text-xl">
                  {product.translations?.[locale]?.guests}
                </span>
              </h3>
              <h3 className=" p-2 flex flex-col items-center">
                <span className="text-sm text-primary-grey">
                  Price per hour:
                </span>
                <span className="font-bold text-md md:text-lg lg:text-xl text-primary-red text-center">
                  AED {product.per_hour_price.toLocaleString()}
                </span>
                {/* {product.id !== 20 && (
          <span className="font-semibold text-xs text-primary-blue xl:text-xs line-through">
            AED {product.per_hour_price.toLocaleString()} 
          </span>)} */}
                {/* <span className="font-bold text-md md:text-lg lg:text-xl text-primary-red text-center">
              {getDiscountedPrice(product.title) || `AED ${parseInt(product.per_hour_price).toLocaleString()}`}
            {product.id === 24 && (<span className="text-xs text-primary-grey"><br className="s:hidden"/> (40 Pax)</span>)}
            </span> */}
              </h3>
              <div className=" text-primary-blue rounded-lg p-2 lg:p-1.5 xl:p-2 flex flex-col col-span-2 md:col-span-4 lg:col-span-1 items-end">
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
        {product.id !== 20 && (
          <p className="text-sm text-center my-2 italic text-primary-grey">
            Winter Offer: Minimum Booking of 4 hours. T&Cs Apply.
          </p>
        )}
        {product.id === 24 && (
          <p className="text-sm text-center my-2 italic text-primary-grey">
            Poseidon 118ft Trips: An Add on of AED 1000 per hour will be added
            for every additional 10 pax where the occupancy surpasses the 40
            passengers.
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
            __html: product.translations?.[locale]?.description || '',
          }}
        />

        <p className="text-sm text-center font-bold my-8">
          Rent a yacht in Dubai Marina
        </p>
      </div>

      <Route
        product={product}
        header_whatsapp_url={header_whatsapp_url}
        slug={slug}
      />
      <YachtCarousal />
    </>
  );
}
