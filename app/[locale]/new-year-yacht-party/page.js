import Image from 'next/image';
// import Videonewyear from "@/app/components/Videonewyear";
import Nycard from '@/app/components/Nycard';
import React from 'react';
import Link from 'next/link';
import VideoLocal from '@/app/components/VideoLocal';
import CarouselSection from './CarouselSection';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
    { locale: 'ru' },
    { locale: 'zh' },
  ];
}

const whatsappLink = 'https://wa.link/v9pn97';

const slidesone = [
  { src: '/LIVE DJ & DANCE FLOOR.webp', text: 'LIVE DJ & DANCE FLOOR' },
  { src: '/SPECTACULARVIEWS.webp', text: 'SPECTACULAR VIEWS' },
  { src: '/PREMIUM DRINKS.webp', text: 'PREMIUM DRINKS' },
  { src: '/GOURMET FOOD.webp', text: 'GOURMET FOOD' },
];

const slidestwo = [
  { src: '/drinks.webp', text: 'PREMIUM DRINKS' },
  { src: '/Catering.webp', text: 'CATERING SERVICE' },
  { src: '/decorations.webp', text: 'PARTY DECORATION' },
  { src: '/cake.webp', text: 'NEW YEAR CAKE' },
  { src: '/DJ.webp', text: 'PROFESSIONAL DJ SERVICES' },
  {
    src: '/photographer.webp',
    text: 'PHOTOGRAPHER & VIDEOGRAPHER SERVICE',
  },
];

const Page = () => {
  return (
    <div className="">
      {/* <Videonewyear /> */}
      <VideoLocal
        filename="/New_years_video.mp4"
        section="new_year"
        ctaLink={whatsappLink}
      />
      <div className="bg-[url('/nye24.webp')] bg-cover bg-center bg-no-repeat min-h-screen ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center pb-10 pt-10">
            <h2 className="text-primary-yellow text-center font-bold text-4xl lg:px-5 xl:text-5xl pb-4 pt-12">
              NEW YEAR'S EVE CELEBRATION ON A LUXURY YACHT
            </h2>
            <p className="text-white text-center text-xl px-3 lg:px-12 xl:px-56">
              New year's Offer on Yacht you don't want to miss
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-20 py-8">
            {/* Container with a shadow and rounded corners */}
            <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg overflow-hidden shadow-lg">
              {/* Left side - Image */}
              <div className="md:w-1/2 w-full">
                <Image
                  width={500}
                  height={500}
                  priority
                  src="/mainNYE.webp"
                  alt="NYE Party"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right side - Text & Button */}
              <div className="md:w-1/2 w-full bg-primary-blue p-6 flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-2xl text-center font-bold text-white mb-2">
                  NYE YACHT PARTY TICKETS
                </h2>
                <p className="text-md text-white mb-10 text-center">
                  31 December 2025 | Dubai Harbour | 9 PM - 3 AM
                </p>
                <p className="text-sm text-white mb-6 text-center leading-relaxed px-2">
                  Celebrate New Year’s Eve in ultimate style aboard a luxury
                  yacht in Dubai! Enjoy a night of glamour, non-stop
                  entertainment, premium food and drinks, and breathtaking views
                  of the city’s iconic skyline. Sail into 2026 under the stars
                  with unforgettable memories and a dazzling atmosphere.
                </p>
                <h2 className="text-2xl md:text-2xl text-center font-bold text-white mb-2">
                  AED 2100 PER PERSON
                </h2>
                <Link href={whatsappLink} target="_blank">
                  <button className="yellow-solid-button">
                    GET YOUR TICKETS NOW
                  </button>
                </Link>
                <p className="text-md text-primary-blue text-center pt-4">
                  Limited tickets are available. T&Cs apply.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto ">
            <h3 className="uppercase text-2xl md:text-3xl font-bold text-center text-primary-yellow mb-8">
              TICKETS INCLUSION
            </h3>
            <CarouselSection slides={slidesone} showNavOnLargeScreens={false} />
          </div>
          <div className="lg:px-20 px-5">
            <div className="flex flex-col items-center justify-center w-full mt-10 mb-5 px-10">
              <h3 className="text-[20px] px-4 font-semibold text-primary-yellow">
                Dress Code
              </h3>
              <p className="text-md text-white text-center">
                Glow Up, Show Up, And Sparkle All Night Long—It's A Night For
                Glitter, Shimmer, And Head-Turning Sparkle.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-5 mb-20 px-10">
              <h3 className="text-[20px] px-4 font-semibold text-primary-yellow">
                RSVP
              </h3>
              <p className="text-md text-white text-center">
                Secure your spot today, Bookings are non-refundable after 15
                December 2025.
              </p>
            </div>
            <div className="flex items-center justify-center w-full my-6">
              <hr className="flex-grow border-primary-yellow-dark" />
              <h2 className="px-4 text-2xl font-semibold text-primary-yellow text-center">
                NEW YEAR'S EVE <br />
                PRIVATE YACHT RENTAL PACKAGES
              </h2>
              <hr className="flex-grow border-primary-yellow-dark" />
            </div>
            <p className="text-primary-yellow text-center text-md sm:text-sm xl:text-md pb-5">
              31 December 2025 | Dubai Harbour | 9 PM - 3 AM
            </p>
            <p className="text-white text-center text-md sm:text-sm xl:text-md pb-5">
              Celebrate the most glamorous night of the year in style with our
              New Year's Eve Yacht Rental in Dubai. As the city lights up with
              dazzling fireworks and festivities, there's no better way to start
              the New Year than on a private luxury yacht.
            </p>
            <div className="flex flex-col items-center xl:px-48 lg:px-20">
              <div className="w-full pb-4">
                <h3 className="text-[20px] px-4 text-left font-bold text-primary-yellow">
                  AMENITIES
                </h3>
              </div>
              <ul className="list-disc text-white pl-5 pb-5 text-md">
                <li>
                  Raise a toast with a selection of premium Wines, Beers,
                  Bubblies, and Champagnes.
                </li>
                <li>
                  Savor mouthwatering Canapes while you enjoy the festivities.
                </li>
                <li>
                  Dance the night away at our Yacht Party with Non-Stop
                  Entertainment.
                </li>
                <li>
                  Cruise around Iconic Locations in Dubai and take in the
                  stunning views of the city.
                </li>
              </ul>
              <h3 className="flex flex-row items-center text-center justify-center py-2 px-6 md:py-4 md:px-6 rounded-lg bg-transparent text-primary-yellow font-bold text-[20px] md:text-lg xl:text-2xl">
                PREMIUM YACHTS
              </h3>
            </div>
          </div>
        </div>
        <Nycard whatsappLink={whatsappLink} />
      </div>
      <div className="bg-black w-full h-full py-10">
        <div className="container mx-auto ">
          <h3 className="uppercase text-2xl md:text-3xl font-bold text-center text-primary-yellow mb-4">
            EXTRA SERVICES ON DEMAND
          </h3>
          <p className="text-white text-center">(48 HOURS NOTICE PERIOD)</p>
          <p className="text-white  text-center py-2 mb-8">
            For those looking to have a touch of luxury to their celebration, we
            offer additional services.
          </p>
          <CarouselSection slides={slidestwo} showNavOnLargeScreens={true} />
        </div>
        <div className="flex flex-col items-center justify-center py-7">
          <Link href={whatsappLink} target="_blank">
            <button className="yellow-solid-button">CONTACT US</button>
          </Link>
          <p className="text-white font-light text-center py-4 px-3">
            To secure the best deal for your New Year's Eve celebration on the
            water, reach out to us today.
          </p>
          <p className="text-white font-bold text-center py-4 px-3">
            New Year’s Eve Package Disclaimer
          </p>
          <p className="text-white font-light text-center py-1 px-3 italic">
            Inclusions, timings, prices, and capacity for the New Year’s Eve
            packages are subject to change without prior notice.
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[url('/atlantis-royal.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
          <div className="flex flex-col items-start justify-start mx-auto container lg:mx-0 py-10 lg:px-0 lg:pl-10 xl:w-1/2 md:w-10/12 lg:w-1/2">
            <h3 className="text-white font-medium">
              Why Choose Our New Year's Eve Yacht Rental?
            </h3>
            <ul className="list-disc text-sm pl-4 xl:pl-10 text-white py-5">
              <li>
                <strong>Unforgettable Views:</strong> Sail through the heart of
                Dubai and witness the breathtaking fireworks display against the
                iconic skyline. Our yachts offer unrivaled panoramic views,
                ensuring you have the best seat in the house.
              </li>
              <li>
                <strong>Luxurious Accommodations:</strong> Our fleet of yachts
                is designed for your comfort and pleasure. Relax in spacious
                cabins, open decks, and elegant lounges while enjoying the
                celebrations.
              </li>
              <li>
                <strong>Customized Packages:</strong> We understand that every
                celebration is unique. Choose from our variety of packages that
                cater to different group sizes and preferences, including
                catering and entertainment options.
              </li>
              <li>
                <strong>Professional Crew:</strong> Our experienced crew members
                are dedicated to providing exceptional service, ensuring your
                NYE celebration is nothing short of perfection.
              </li>
            </ul>
            <h3 className="text-white font-medium">
              How to Book Your New Year Yacht Offer
            </h3>
            <ul className="list-disc text-sm pl-4 xl:pl-10 text-white py-5">
              <li>
                <strong>Select Your Yacht:</strong> Browse our impressive fleet
                and choose the yacht that suits your group size and preferences.
              </li>
              <li>
                <strong>Choose Your Package:</strong> Tailor your New Year's Eve
                experience by selecting the package that best matches your
                desires. Our team is here to assist you with all your needs.
              </li>
              <li>
                <strong>Confirm Your Reservation:</strong> Contact our booking
                team to confirm your reservation and make the necessary
                arrangements for your celebration.
              </li>
            </ul>
            <h3 className="text-white font-medium">New Year's Eve in Dubai</h3>
            <p className="text-white py-4 font-normal">
              Dubai is renowned for its extravagant New Year Event, and our
              yachts provide the ultimate vantage point to enjoy the
              festivities. From the mesmerizing fireworks at the Burj Khalifa to
              the spectacular shows along the Palm Jumeirah, you won't miss a
              moment of the action.
            </p>
            <h3 className="text-white font-medium">
              Book Now and Make Your Reservation
            </h3>
            <p className="text-white text-sm py-4 font-normal">
              Don't miss out on this exclusive opportunity to welcome the New
              Year in absolute luxury. Our New Year's Eve Yacht Rentals are in
              high demand, so make your reservation today to secure your spot.
              Contact us now to discuss your preferences and book your private
              New Year's Eve Yacht Rental in Dubai. Let's create memories that
              will last a lifetime as you sail into the New Year with style and
              opulence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
