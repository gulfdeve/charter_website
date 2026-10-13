// 'use client';
import React from 'react';
import { IoIosPricetag } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from '@/app/i18n/routing';
import ExperienceCarousal from '@/app/components/ExperienceCarousal';
import Image from 'next/image';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ru' }, { locale: 'zh' }];
}

const yachts = [
  {
    yacht_id: 1,
    yacht_image: 'yachtrentals1.webp',
    name: 'Luxury Yacht A',
    model: 'Model X',
    size: '50ft',
    guests: '10',
    cabin: '8',
    hours: '3',
    price: '2000',
    whatsapp_url: 'https://wa.me/123456789',
    fareharbor_id: '12345',
  },
];

const page = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-80"
        style={{
          backgroundImage: "url('fifa-main.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div> {/* Overlay */}
        <div className="container mx-auto relative flex flex-col justify-center h-full text-white">
          <h1 className="text-3xl font-bold text-shadow">
            Watch the Matches Live <br /> on our Luxury Yacht!
          </h1>
          <p>
            Book your yacht in Dubai and <br /> check out your favourite boat below.
          </p>
        </div>
      </div>
      <div className="container mx-auto block text-center mt-10 xxs:mb-10 ">
        <h1 className="text-4xl font-bold mb-4 text-primary-blue-2 p-0 xxs:px-10 md:px-0 xxs:text-2xl xs:text-xl s:text-2xl sm:text-2xl md:text-3xl 2xl:text-4xl">
          RENT A YACHT TO WATCH FIFA WORLD CUP 2022 <br />
        </h1>
        <h2 className="font-bold mb-4 text-primary-blue-2 p-0 xxs:px-10 md:px-0 text-xl md:text-2xl 2xl:text-3xl">An extraordinary FIFA experience awaits in Dubai</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-8">
          <div className="grid grid-cols-12 place-items-center justify-center  bg-red-900 p-4 rounded-md">
            <div className="col-span-3 w-full md:w-1/2">
              <Image src="/icon-calendar.png" alt="" width={800} height={600} />
            </div>
            <div className="col-span-9">
              <span className="font-bold text-primary-yellow-dark">Event Dates</span>
              <p className="text-sm xl:text-xl mb-4 text-white  2xl:text-2xl">22 Nov - 20 Dec 2022 </p>
            </div>
          </div>
          <div className="grid grid-cols-12 place-items-center justify-center bg-red-900 p-4 rounded-md">
            <div className="col-span-3 w-full md:w-1/2">
              <Image src="/icon-yacht.png" alt="" width={800} height={600} />
            </div>
            <div className="col-span-9">
              <span className="font-bold text-primary-yellow-dark">Yacht Sizes Available</span>
              <p className="text-sm xl:text-xl mb-4 text-white  2xl:text-2xl">56 - 118 Feet </p>
            </div>
          </div>
          <div className="grid grid-cols-12 place-items-center justify-center bg-red-900 p-4 rounded-md">
            <div className="col-span-3 w-full md:w-1/2">
              <Image src="/icon-view.png" alt="" width={800} height={600} />
            </div>
            <div className="col-span-9">
              <span className="font-bold text-primary-yellow-dark">Viewing</span>
              <p className="text-sm xl:text-xl mb-4 text-white  2xl:text-2xl">Live Streaming </p>
            </div>
          </div>
        </div>
        <p className="">
          Unveiling the luxury yacht offers in Dubai for <strong>FIFA World Cup 2022.</strong> Centaurus Charter is welcoming all football lovers to have a truly royal FIFA 2022 experience this November & December. Explore our yacht hospitality packages <strong>starting from USD 3,000 a day.</strong> Gear up yourself for the <strong>live stream football matches</strong> while cruising the
          glittering waters. Light up your nights with beautiful skyscrapers and dance to your fav tunes to have an everlasting night party. Cheer loud, toast the drinks, sail, stay and party on Arabian waters.
        </p>
      </div>
      <div className=" bg-red-900 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-red-900 py-20">
            <div className="">
              <h1 className="font-bold py-4 text-primary-yellow-dark text-xl s:text-2xl sm:text-2xl md:text-3xl 2xl:text-4xl">CATCH THE QATAR WORLD CUP 2022 WHILE CRUISING DUBAI</h1>
              <p className="mb-4 text-white">Hop on a luxury yacht in Dubai for a perfect FIFA 2022 experience along with accommodation.</p>
              <p className="mb-4 text-white">Guest will Enjoy:</p>
              <ul className="list-disc text-white pl-8">
                <li>Bubbly drinks</li>
                <li>1-7 Days yacht rentals</li>
                <li>Onboard WiFi</li>
                <li>Football Tournament Live Streaming</li>
                <li>Yacht Accommodation</li>
                <li>Jaw-dropping Sea Views</li>
              </ul>
              <p className="mb-4 text-white">Extra Services on Demand:</p>
              <ul className="list-disc text-white pl-8">
                <li>Preferred Drinks (Select from: www.centaurusint.net)</li>
                <li>Water Sports</li>
                <li>Catering</li>
                <li>DJ</li>
                <li>Photography</li>
              </ul>
              <p className="mb-4 text-white">For more information please contact us:</p>
              <div className="flex flex-col md:flex-row gap-3 py-5 text-center">
                <a href="tel:0097143521833" className="yellow-solid-button">
                  <i className="fa-icon-custom fa-solid fa-phone"></i>CALL US
                </a>
                <a href="https://bit.ly/3DOOSz4" className="yellow-solid-button">
                  WHATSAPP US
                </a>
                <a href="mailto:info@centauruscharter.com" className="yellow-solid-button">
                  EMAIL US
                </a>
              </div>
            </div>
            <div className="w-full">
              <Image src="/fifa-yacht.png" alt="" width={800} height={600} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center "
        style={{
          backgroundImage: "url('fifa-bg.jpg')",
        }}
      >
        <div className=" ">
          <div className="h-full w-full py-14">
            <div className="grid grid-col-1 md:grid-cols-1 md:px-4 gap-7 container mx-auto pb-10">
              {yachts.map(yacht => (
                <div key={yacht.yacht_id} className="flex flex-col md:flex-row justify-start rounded-md bg-white shadow-md">
                  <Image src={`${yacht.yacht_image}`} alt={yacht.name} className="rounded-md w-[35rem] md:w-[25rem] xl:w-[35rem] xl:h-[400px] h-[300px] md:h-full p-2 object-cover" width={800} height={600} />
                  <div className="w-full flex flex-col justify-stretch px-3 xl:px-6 md:py-4">
                    <Link href="/">
                      <h1 className="text-primary-blue text-xl xl:text-2xl font-bold pt-6 md:pb-2 cursor-pointer">{yacht.name}</h1>
                    </Link>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-lg w-full overflow-hidden shadow-md mb-7">
                      <div className="bg-primary-red text-white p-2 text-center">
                        <span className="font-bold text-sm">Build:</span>
                        <span className="font-semibold text-sm text-primary-yellow"> {yacht.model}</span>
                      </div>
                      <div className="bg-primary-red text-white p-2 text-center">
                        <span className="font-bold text-sm">Length:</span>
                        <span className="font-semibold text-sm text-primary-yellow"> {yacht.size}</span>
                      </div>
                      <div className="bg-primary-red text-white p-2 text-center">
                        <span className="font-bold text-sm">Guests:</span>
                        <span className="font-semibold text-sm text-primary-yellow"> {yacht.guests}</span>
                      </div>
                      <div className="bg-primary-red text-white p-2 text-center">
                        <span className="font-bold text-sm">Cabin:</span>
                        <span className="font-semibold text-sm text-primary-yellow"> {yacht.cabin}</span>
                      </div>
                    </div>
                    <div className="bg-primary-black w-full h-[0.05rem]" />
                    <div className="flex flex-row items-center justify-between w-full py-5">
                      <div className="flex flex-row items-center gap-1">
                        <IoIosPricetag className="text-3xl" />
                        <div>
                          <h1 className="text-black font-bold text-sm xl:text-lg">
                            {yacht.hours} Hours Rate
                            <br />
                            <span className="xl:text-xl text-primary-black text-xs">${yacht.price}</span>
                            <span className="text-primary-yellow text-xs"> +VAT</span>
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row items-center gap-3">
                        <a href={yacht.whatsapp_url} target="_blank" className="py-2 px-4 text-xs font-bold tracking-wider uppercase text-primary-yellow bg-primary-red hover:opacity-90 hover:scale-105 rounded-md shadow transition duration-150 ease-in-out transform flex items-center">
                          <FaWhatsapp className="mr-1" /> WHATSAPP
                        </a>
                        <a href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`} className="py-2 px-4 text-xs font-bold uppercase text-primary-yellow bg-primary-red hover:opacity-90 hover:scale-105 rounded-md shadow transition">
                          BOOK NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ExperienceCarousal />
      </div>
    </div>
  );
};

export default page;
