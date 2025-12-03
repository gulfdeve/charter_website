import React from 'react';
import VideoLocal from '@/app/components/VideoLocal';
import YachtCarousal from '@/app/components/YachtCarousel';
import ToursCarousel from '@/app/components/Sharedtoursmob';
import TourCardsClient from './TourCardsClient';
import CTAWithModalClient from './CTAWithModalClient';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ru' }, { locale: 'zh' }];
}

// Example data
const toursData = [
  {
    id: 1,
    image: '/midday.webp',
    title: 'MORNING TOURS',
    cruisingTime: '9:00 AM - 11:00 AM',
    adultPrice: 'AED 219',
    childPrice: 'AED 159',
    liveBBQ: 'Sandwiches, Assorted Croissants, Strawberry & Honey Jam, Muffins, & Fresh Fruits. Welcome Mimosa, Water, Tea, Coffee, Juices & Soft Drinks.<br/>*Vegetarian food available on request*',
    cruisingRoute: 'Dubai Marina, JBR and Burj Al Arab',
    departurePoint: 'Outside Dubai Harbour Office (Taxi drop-off area)',
    blueHeadline: 'AVAILABLE ALL DAYS OF THE WEEK',
    validity: '*Valid from July 1-September 15, 2025',
    yellowHeadline: '',
    fareharborLink: 'https://fareharbor.com/embeds/book/centauruscharter/items/633603/?full-items=yes&flow=1283212',
  },
  //   {
  //     id: 2,
  //     image: '/images/afternoon.webp',
  //     title: 'AFTERNOON TOURS',
  //     cruisingTime: '04:00 PM - 05:00 PM',
  //     adultPrice: 'AED 159',
  //     childPrice: 'AED 139',
  //     liveBBQ: 'Wines, Beers, Softdrinks & Water',
  //     cruisingRoute: 'Dubai Marina, Ain Dubai and JBR',
  //     departurePoint: 'Outside Dubai Harbour Office (Taxi drop-off area)',
  //     blueHeadline: 'AVAILABLE ALL DAYS OF THE WEEK',
  //     validity: '*Valid from July 1-September 15, 2025',
  //     yellowHeadline: '',
  //     fareharborLink:
  //       'https://fareharbor.com/embeds/book/centauruscharter/items/646208/calendar/2025/06/?full-items=yes',
  //   },
  {
    id: 3,
    image: '/sunset.webp',
    title: 'SUNSET TOURS',
    cruisingTime: '05:00 PM - 07:00 PM',
    adultPrice: 'AED 289',
    childPrice: 'AED 159',
    liveBBQ: 'Club Sandwich, Chicken & Beef Sliders, Vegetable Spring Rolls, Chicken Samosa & Fruit Platter. Water, Soft Drinks, Beer, Red Wine, White Wine & Sparkling Wine<br>*Vegetarian food available on request',
    cruisingRoute: 'Dubai Marina, JBR and Burj Al Arab',
    departurePoint: 'Outside Dubai Harbour Office (Taxi drop-off area)',
    blueHeadline: 'AVAILABLE ALL DAYS OF THE WEEK',
    validity: '*Valid from July 1-September 15, 2025',
    yellowHeadline: '',
    fareharborLink: 'https://fareharbor.com/embeds/book/centauruscharter/items/488868/?full-items=yes&flow=no',
  },
  {
    id: 4,
    image: '/night.webp',
    title: 'NIGHT TOURS',
    cruisingTime: '08:00 PM - 10:00 PM',
    adultPrice: 'AED 249',
    childPrice: 'AED 159',
    newAdultPrice: 'AED 210',
    newChildPrice: 'AED 119',
    liveBBQ: 'Club Sandwich, Chicken & Beef Sliders, Vegetable Spring Rolls, Chicken Samosa & Fruit Platter. Water, Soft Drinks, Beer, Red Wine, White Wine & Sparkling Wine<br>*Vegetarian food available on request',
    cruisingRoute: 'Dubai Marina, JBR and Burj Al Arab',
    departurePoint: 'Outside Dubai Harbour Office (Taxi drop-off area)',
    blueHeadline: 'AVAILABLE ALL DAYS OF THE WEEK',
    validity: '*Valid from July 1-September 15, 2025',
    // yellowHeadline: '🇦🇪 NATIONAL DAY OFFER - ENJOY 15% OFF',
    // smallHeadline: '(VALID FOR NIGHT TOURS ON 1-3 DEC)',
    fareharborLink: 'https://fareharbor.com/embeds/book/centauruscharter/items/488872/?full-items=yes&flow=no',
  },
];

const Page = () => {
  return (
    <>
      {/* Hero Video or Banner */}
      {/* <Modalsharedtours /> */}
      <VideoLocal filename="/shared yacht tours.mp4" section="shared-tours" />

      {/* Main Container */}
      <div className="bg-white h-full w-full">
        {/* Top Heading with FareHarbor Calendar */}
        <div className="container mx-auto pt-10 lg:pt-8 2xl:pt-16">
          <div className="flex flex-col lg:flex-row align-top">
            {/* Left Section - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col pb-10 lg:pb-0 lg:pr-8">
              <h2 className="text-primary-blue-2 text-center pb-4 uppercase">
                Shared Yacht Dubai
                <br />
                with Gourmet Bites & Drinks
              </h2>
              <p className="text-primary-grey font-bold text-base text-center">Luxury Experience that's Affordable: Set Sail and Experience Dubai, From Morning till Night</p>
              <p className="text-primary-grey text-base mt-4 text-center">
                Experience the ultimate Dubai yacht tour with our exclusive daily cruises, available three times a day—morning, sunset, and night. Whether you want to soak up the sun, witness the breathtaking skyline at golden hour, or enjoy the city lights shimmering over the sea, our yacht tours offer the perfect escape. Each tour is designed to provide a luxurious and unforgettable experience
                on the water. Below, you'll find detailed cards for each tour, covering everything from itinerary to inclusions. If you're ready to book, check the calendar beside for available dates and secure your spot today!
              </p>
            </div>

            {/* Right Section - FareHarbor Calendar */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <iframe src="https://www.centauruscharter.net/calendar.html" title="Centaurus Charter Calendar" className="w-[450px] h-[400px] mx-auto" frameBorder="0" scrolling="auto" allowFullScreen />
            </div>
          </div>
        </div>

        {/* Seasonal Tours Header */}

        <div className="flex items-center text-center justify-center w-full my-6">
          <hr className="flex-grow border-primary-yellow-dark" />
          <h2 className="px-4 font-semibold text-primary-blue-2 uppercase">Shared yacht tour prices & online booking</h2>
          <hr className="flex-grow border-primary-yellow-dark" />
        </div>
        {/* Card Grid */}
        <div className="md:block hidden">
          <TourCardsClient toursData={toursData} />
        </div>
        <div className="md:hidden block">
          <ToursCarousel toursData={toursData} />
        </div>
        <div className="container mx-auto">
          {/* Premium Drinks Notice */}
          <div className="flex items-center justify-center bg-primary-blue-2 max-w-3xl mx-auto text-center">
            <p className="text-white text-md md:text-xl font-bold">PREMIUM DRINKS ARE AVAILABLE FOR PURCHASE ON BOARD</p>
          </div>
          <p className="text-center text-primary-grey text-xs md:text-base italic mt-4">*Yacht type and capacity may vary; specific yacht not guaranteed until the day of the tour.</p>
        </div>
        {/* HIGHLIGHTS */}
        <div className="flex items-center justify-center w-full my-6">
          <hr className="flex-grow border-primary-yellow-dark" />
          <h2 className="px-4 font-semibold text-primary-blue-2">HIGHLIGHTS</h2>
          <hr className="flex-grow border-primary-yellow-dark" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 px-4 py-5 md:py-10 container mx-auto">
          <div>
            <img src="/Picturemoments.webp" className="rounded-t-lg" alt="Picture Moments" />
            <h3 className="uppercase bg-primary-blue-2 text-white text-center text-xs lg:text-base font-bold p-2 rounded-b-lg">Picture Moments</h3>
          </div>
          <div>
            <img src="/images/savory-bites.webp" className="rounded-t-lg" alt="Savory Bites" />
            <h3 className="uppercase bg-primary-blue-2 text-white text-center text-xs lg:text-base font-bold p-2 rounded-b-lg">Savory Bites</h3>
          </div>
          <div>
            <img src="/Amazing-View.webp" className="rounded-t-lg" alt="Amazing View" />
            <h3 className="uppercase bg-primary-blue-2 text-white text-center text-xs lg:text-base font-bold p-2 rounded-b-lg">Amazing View</h3>
          </div>
          <div>
            <img src="/images/bubbly-drinks-on-yacht-dubai.webp" className="rounded-t-lg" alt="Bubbly Drinks" />
            <h3 className="uppercase bg-primary-blue-2 text-white text-center text-xs lg:text-base font-bold p-2 rounded-b-lg">Bubbly Drinks</h3>
          </div>
        </div>

        {/* TERMS & CONDITION */}
        <div className="container mx-auto flex flex-col items-center justify-center py-5 md:py-10">
          <h2 className="text-base text-primary-blue-2 font-bold text-center">TERMS & CONDITIONS</h2>
          <ul className="max-w-2xl mx-auto list-disc text-sm pt-5 space-y-2">
            <li className="">Rates do not include premium drinks. Premium drinks are available for purchase on board.</li>
            <li className="">There are different ranges of yachts and boats with several capacities, no specific yacht is guaranteed until the time of visit.</li>
            <li className="">Cruise routes are subject to change due to weather and wind conditions.</li>
            <li className="">Cruising times are subject to adjustments based on sunset timings.</li>
            <li className="">Rates cannot be combined with other offers.</li>
            <li className="">Guests under 18 years old must be accompanied by an adult.</li>
            {/* <li className="">The offer is valid until September 15, 2025</li> */}
          </ul>
        </div>
        {/* CTA Section */}

        <CTAWithModalClient />

        {/* Split Section with Image + Text */}
        <section
          className="
        flex flex-col md:flex-row-reverse 
        items-center lg:justify-center 
        h-full lg:h-[560px] xl:h-[650px]
        overflow-hidden
      "
        >
          {/* Yacht image (only on large screens) */}
          <div className="hidden lg:block w-full h-full">
            <img src="/royal.webp" alt="Shared Yacht Tour" className="object-cover object-center w-full h-full" />
          </div>

          {/* Text content */}
          <div
            className="
          flex flex-col 
          items-center sm:items-start 
          justify-center 
          w-full h-full 
          bg-primary-blue-2 
          px-5 py-5 
          xl:px-32 xl:py-12
        "
          >
            <p className="text-white text-center sm:text-left text-md sm:text-sm xl:text-md py-10">
              Experience Dubai's coastline in an entirely new light with our exclusive shared yacht tours. Uniting the thrill of luxury yachting with the ease of shared experiences, we offer you the chance to enjoy the opulence of Dubai's waters without the extravagant cost of chartering an entire yacht. Revel in the stunning vistas, relish in the flavors of delightful chicken and beef sliders,
              crispy rolls, and fresh fruits. Savor complimentary refreshments—all while forging unforgettable memories with fellow adventurers.
            </p>

            <h2 className="text-white text-center">Affordable Luxury</h2>
            <p className="text-white text-center sm:text-left text-md sm:text-sm xl:text-md pb-10">Elevate your Dubai escapade without emptying your wallet. Our shared yacht tours are meticulously crafted to provide a taste of the high life at a fraction of the price. Share the journey, share the splendor, and share the savings as you immerse yourself in the lap of affordable luxury.</p>

            <h2 className="text-white text-center">Unmatched Amenities</h2>
            <p className="text-white text-center sm:text-left text-md sm:text-sm xl:text-md pb-10">
              Our commitment to your enjoyment knows no bounds. Savor the flavors of our handcrafted sliders, sandwiches, and savory treats, perfectly prepared by our onboard chefs. Paired with a thoughtful selection of complimentary delicacies and beverages, your voyage promises to be not only luxurious, but deliciously memorable.{' '}
            </p>
          </div>
        </section>
      </div>
      <YachtCarousal />
    </>
  );
};

export default Page;
