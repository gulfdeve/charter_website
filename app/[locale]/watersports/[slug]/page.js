import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { fetchData } from '@/app/lib/fetchData';
import PageTitleHeading from '../../../components/PageTitleHeading';
import WaterSportCarousal2 from '../../../components/WaterSportCarousal2';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all watersports slug + locale combinations at build time
export async function generateStaticParams() {
  try {
    const data = await fetchData();
    const locales = ['en', 'ar', 'ru', 'zh'];
    
    if (!data?.packages) {
      return [];
    }

    // Generate a param combination for each package slug × each locale
    const params = [];
    data.packages.forEach(packageItem => {
      locales.forEach(locale => {
        params.push({
          slug: packageItem.slug,
          locale: locale,
        });
      });
    });

    return params;
  } catch (error) {
    console.error('Error generating static params for watersports:', error);
    return [];
  }
}

const waterSportRate = [
  {
    id: 1,
    title: 'JET SKI',
    infoBoxes: [
      { label: 'Recreational Jet Ski', duration: '30', price: '350' },
      { label: 'Recreational Jet Ski', duration: '60', price: '600' },

      { label: 'Performance Jet Ski', duration: '30', price: '480' },
      { label: 'Performance Jet Ski', duration: '60', price: '750' },
    ],
  },
  {
    id: 2,
    title: 'DONUT BOAT RIDE',
    infoBoxes: [
      { label: 'DONUT BOAT RIDE', duration: '30', price: '450' },
      { label: 'DONUT BOAT RIDE', duration: '60', price: '700' },
    ],
  },
  {
    id: 3,
    title: 'BANANA BOAT',
    infoBoxes: [
      { label: 'BANANA BOAT', duration: '30', price: '450' },
      { label: 'BANANA BOAT', duration: '60', price: '700' },
    ],
  },
  {
    id: 4,
    title: 'FLYBOARD',
    infoBoxes: [
      { label: 'FLYBOARD', duration: '25', price: '850' },
      { label: 'FLYBOARD', duration: '60', price: '1680' },
    ],
  },
  {
    id: 5,
    title: 'EFOIL',
    infoBoxes: [
      { label: 'EFOIL', duration: '30', price: '650' },
      { label: 'EFOIL', duration: '60', price: '1280' },
    ],
  },
  {
    id: 5,
    title: 'JET CAR',
    infoBoxes: [
      { label: 'JET CAR', duration: '30', price: '900' },
      { label: 'JET CAR', duration: '60', price: '1750' },
    ],
  },
];

// Server Component - data fetching happens on the server
export default async function Page({ params }) {
  // Await params to get slug and locale
  const { slug, locale } = await params;

  // Fetch data on the server
  const data = await fetchData();

  if (!data) {
    return <p>Error loading data</p>;
  }

  const settingsItem = data?.settings?.[0];
  const { header_email, header_phone_number_url, header_whatsapp_url } =
    settingsItem || {};

  // Find the package matching the slug
  const packageItem = data?.packages?.find(pkg => pkg.slug === slug);

  if (!packageItem) {
    notFound();
  }

  const waterSport = waterSportRate.find(
    item =>
      item.title.toLowerCase() ===
      packageItem.translations[locale].title.toLowerCase()
  );

  return (
    <>
      <div className="container mx-auto nav-space">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 pt-6 md:mt-20 ">
          {/* First column (30%) */}
          <div className="flex items-start lg:w-7/12">
            <img
              src={`https://www.centauruscharter.net/product/images/${packageItem.image}`}
              alt={packageItem.translations[locale].title}
              className="w-full rounded-lg"
            />
          </div>

          {/* Second column (70%) */}
          <div className="lg:w-5/12">
            <PageTitleHeading
              title={packageItem.translations[locale].title}
              className="py-0 lg:pt-0 pb-0"
            />
            <h2 className="text-base text-primary-grey text-center font-bold mb-5">
              {packageItem.translations[locale].preview_text}
              <br />
            </h2>
            <div className="text-center grid grid-cols-1  items-center gap-2  w-full overflow-hidden mb-7">
              {/* ORIGINAL CODE FOR SINGLE RATE FROM ADMIN PANEL
              <div className="grid grid-cols-3 bg-primary-blue-light rounded-lg text-primary-blue">
                
                <div className=" p-2 flex flex-col items-center ">
                  <span className="font-bold text-sm">Ride:</span>
                  <span className="font-semibold text-sm  xl:text-sm">
                    {packageItem.translations[locale].title}
                  </span>
                </div>
               
                <div className="  p-2 flex flex-col items-center">
                  <span className="font-bold text-sm">Duration:</span>
                  <span className="font-semibold text-sm  xl:text-sm">
                    30 mins
                  </span>
                </div>
                
                <div className="text-white bg-primary-blue rounded-r-lg p-2 flex flex-col items-center">
                  <span className="font-bold text-sm">Price:</span>
                  <span className="font-semibold text-sm xl:text-sm">
                    {packageItem.amount} AED
                  </span>
                </div>
              </div> */}
              {waterSport && (
                <div className="text-center grid grid-cols-1  items-center gap-2  w-full overflow-hidden mb-7">
                  {waterSport.infoBoxes.map((rate, idx) => (
                    <div
                      key={rate.label + rate.duration + idx}
                      className="grid grid-cols-3 bg-primary-blue-light rounded-lg text-primary-blue"
                    >
                      {/* Ride Title */}
                      <div className=" p-2 flex flex-col items-center ">
                        <span className="font-bold text-sm">Ride:</span>
                        <span className="font-semibold text-sm  xl:text-sm">
                          {rate.label}
                        </span>
                      </div>
                      {/* Duration */}
                      <div className="  p-2 flex flex-col items-center">
                        <span className="font-bold text-sm">Duration:</span>
                        <span className="font-semibold text-sm  xl:text-sm">
                          {rate.duration} mins
                        </span>
                      </div>
                      {/* Price */}
                      <div className="text-white bg-primary-blue rounded-r-lg p-2 flex flex-col items-center">
                        <span className="font-bold text-sm">Price:</span>
                        <span className="font-semibold text-sm xl:text-sm">
                          {rate.price} AED
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col xl:flex-row items-stretch xl:items-center text-center w-full justify-center">
              {/* WhatsApp Button */}
              <div className=" p-1 flex flex-col items-center">
                <a
                  href={header_whatsapp_url || '#'}
                  className="w-full blue-solid-button flex justify-center items-center gap-1 text-center"
                >
                  <FaWhatsapp size={20} />
                  WHATSAPP US
                </a>
              </div>
              {/* Book Now Button */}
              <div className=" p-1 flex flex-col items-center xl:rounded-r-lg">
                <a
                  href="https://fareharbor.com/embeds/book/centauruscharter/?full-items=yes"
                  className="w-full blue-solid-button"
                >
                  BOOK NOW WITH {packageItem.translations[locale].title}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12">
          <div
            className="text-base text-primary-grey"
            dangerouslySetInnerHTML={{
              __html: packageItem.translations[locale].description || '',
            }}
          />
        </div>
      </div>
      <WaterSportCarousal2 packages={data?.packages} language={locale} />
    </>
  );
}
