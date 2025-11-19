'use client';
import React, { useState } from 'react';
import Videosharedtours from '../../../components/Video-sharedtours';
import { FaWhatsapp } from 'react-icons/fa';
import Modal2 from '@/app/components/Modal2';
import VideoLocal from '@/app/components/VideoLocal';
import { FaUser } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlequote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const yachts = [
    {
      name: 'THUNDER - 36FT',
      capacity: 10,
      ratePerHour: 'AED 650',
      rate4Hours: 'AED 1560',
      rate5Hours: 'AED 1950',
      fareharbor_id: '353083',
    },
    {
      name: 'STORM - 36FT',
      capacity: 10,
      ratePerHour: 'AED 650',
      rate4Hours: 'AED 1560',
      rate5Hours: 'AED 1950',
      fareharbor_id: '429263',
    },
    {
      name: 'RIVERSIDE - 40FT',
      capacity: 12,
      ratePerHour: 'AED 815',
      rate4Hours: 'AED 1956',
      rate5Hours: 'AED 2445',
      fareharbor_id: '583211',
    },
    {
      name: 'VASSIA - 56FT',
      capacity: 28,
      ratePerHour: 'AED 1150',
      rate4Hours: 'AED 2760',
      rate5Hours: 'AED 3450',
      fareharbor_id: '340280',
    },
    {
      name: 'ETOSHA - 58FT',
      capacity: 28,
      ratePerHour: 'AED 1150',
      rate4Hours: 'AED 2760',
      rate5Hours: 'AED 3450',
      fareharbor_id: '340265',
    },
    {
      name: 'LAGOONA - 56FT',
      capacity: 28,
      ratePerHour: 'AED 1250',
      rate4Hours: 'AED 3000',
      rate5Hours: 'AED 3750',
      fareharbor_id: '340459',
    },
    {
      name: 'SILVER CREEK - 61FT',
      capacity: 30,
      ratePerHour: 'AED 1,250',
      rate4Hours: 'AED 3,000',
      rate5Hours: 'AED 3,750',
      fareharbor_id: '340286',
    },
    {
      name: 'KRONOS - 86FT',
      capacity: 50,
      ratePerHour: 'AED 3,800',
      rate4Hours: 'AED 9,120',
      rate5Hours: 'AED 11400',
      fareharbor_id: '577212',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: 100,
      ratePerHour: 'AED 6000',
      rate4Hours: 'AED 14,400',
      rate5Hours: 'AED 18,000',
      fareharbor_id: '417962',
    },
  ];

  return (
    <div>
      {/* <Videosharedtours /> */}
      <VideoLocal
        filename="/dubai-yachts-winter-offers.mp4"
        section="dubai-yachts-winter-offers"
      />

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-10">
          <h2 className=" text-primary-blue text-center pb-4">
            UAE RESIDENTS YACHT OFFERS
          </h2>
          <p className="text-primary-blue text-md text-center">
            Explore exclusive winter yacht rental deals in Dubai with Centaurus
            Charter. Book your luxurious yacht charter now and enjoy special
            offers this season.
          </p>
        </div>
        <div className="py-6">
          <div className="block lg:hidden overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 ">
              {yachts.map((yacht, index) => (
                <div
                  key={index}
                  className="w-full border-2 rounded-lg border-gray-300 p-4"
                >
                  <h2 className=" font-bold mb-4">{yacht.name}</h2>
                  <div className="font-secondary">
                    <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-1 gap-x-4">
                      <div className="flex flex-col mb-4">
                        <div className="flex">
                          <IoIosPricetag
                            size={20}
                            className="mr-3 mt-1 text-primary-blue-light-2"
                          />
                          <p className="flex flex-col text-sm text-primary-grey">
                            Regular Rate/Hour:
                            <span className=" font-semibold text-base text-black mt-2">
                              {yacht.ratePerHour}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col mb-4">
                        <div className="flex">
                          <FaUser
                            size={20}
                            className="mr-3 mt-1 text-primary-blue-light-2"
                          />
                          <p className="flex flex-col text-sm text-primary-grey">
                            Capacity:
                            <span className=" font-semibold text-base text-black mt-2">
                              {yacht.capacity}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mb-4">
                      <div className="flex">
                        <RiDiscountPercentFill
                          size={20}
                          className="mr-3 mt-1 text-primary-blue-light-2"
                        />
                        <div className="flex flex-col text-sm text-primary-grey">
                          Discounted Rate:
                          <p className="font-semibold text-base">
                            4 Hours:{' '}
                            <span className="text-black ml-4">
                              {yacht.rate4Hours}
                            </span>
                          </p>
                          <p className="font-semibold text-base">
                            5 Hours:{' '}
                            <span className="text-black ml-4">
                              {yacht.rate5Hours}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`}
                    target="_self"
                    rel="noopener noreferrer"
                    className="flex items-center mt-5 pt-3 group justify-between px-5 text-primary-blue-2 border-t border-gray-400"
                  >
                    <div className="btn-info">Book Now</div>
                    <FiArrowRight
                      size={20}
                      className=" text-lg transform md:group-hover:translate-x-4 transition-transform duration-300"
                    />{' '}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 md:text-sm lg:text-sm">
              <thead>
                <tr className="bg-primary-blue-light-1 text-primary-blue-2">
                  <th className="px-3 py-5">YACHT</th>
                  <th className="px-3 py-5">CAPACITY</th>
                  <th className="px-3 py-5">RATE/HOUR</th>
                  <th className="px-3 py-5">DISCOUNTED 4-HOUR RATE</th>
                  <th className="px-3 py-5">DISCOUNTED 5-HOUR RATE</th>
                  <th className="px-3 py-5"></th>
                </tr>
              </thead>
              <tbody>
                {yachts.map((yacht, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-primary-blue-light'
                    } text-center text-sm`}
                  >
                    <td className="font-secondary p-3 font-semibold">
                      {yacht.name}
                    </td>
                    <td className="font-secondary p-3 font-semibold">
                      {yacht.capacity}
                    </td>
                    <td className="font-secondary p-3 font-semibold">
                      {yacht.ratePerHour}
                    </td>
                    <td className="font-secondary p-3 font-semibold">
                      {yacht.rate4Hours}
                    </td>
                    <td className="font-secondary p-3 font-semibold">
                      {yacht.rate5Hours}
                    </td>
                    <td className="p-3 font-bold">
                      <a
                        href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`}
                        target="_self"
                        rel="noopener noreferrer"
                        className="bg-primary-blue-2 hover:bg-primary-blue text-white rounded-lg transition-all flex text-center justify-center w-full px-3 py-2"
                      >
                        Book Now
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="container mx-auto flex flex-col  px-4">
          <div className="bg-primary-blue-4 p-0.5 ">
            <h3 className=" font-bold text-center text-white text-[1rem]">
              INCLUSIONS: WATER, SOFT DRINKS, WINES, AND BEERS.
            </h3>
          </div>
          <p className="text-left md:text-center text-primary-grey pt-2 pb-2">
            Minimum booking duration applies. Terms and conditions may vary
            based on yacht and package selected.
          </p>
          <p className="text-left md:text-center italic font-bold text-primary-blue pb-5">
            Premium drinks are available for purchase on board
          </p>
          <h3 className="uppercase text-black text-base text-center font-bold pb-5">
            Discounted rates are valid for bookings from 6 AM–2 PM (morning
            trips) & 8 PM–3 AM (NIGHT TRIPS)
          </h3>
          <p className=" text-left md:text-center italic text-primary-grey py-5">
            Escape the ordinary and embark on a private yacht adventure with our
            limited-time 40% discount for UAE residents. To avail this exclusive
            offer, simply book a minimum 4-hours yacht tour and let us take care
            of the rest. Enjoy unlimited drinks and snacks during your private
            yacht tour. Watersports are also available on request.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-left text-primary-blue-2 py-2">
            Discover Dubai by Day or Under the Stars{' '}
          </h2>
          <p className=" text-base text-left py-2">
            For a limited time, enjoy a generous 40% off for bookings of 4 hours
            or more. Whether you’re looking to relax under the morning sun or
            experience the vibrant skyline at night, we have the perfect yacht
            tour to suit your needs.
          </p>
          <h2 className="text-[20px] text-primary-blue text-left py-2">
            Morning Yacht Trips (6 AM – 2 PM) — Start Your Day on the Water
          </h2>
          <p className="text-base text-left py-2">
            Begin your day with the refreshing sea breeze and breathtaking views
            of Dubai’s skyline on one of our morning yacht tours. From 6 AM to 2
            PM, we offer a serene yet luxurious journey—perfect for early risers
            who love watching the sunrise over iconic landmarks.Take advantage
            of the 40% discount on bookings of 4 hours or more. Our fleet is
            fully equipped for your comfort and pleasure, ensuring a top-notch
            experience to start your day right.
          </p>
          <h2 className="text-[20px] text-primary-blue text-left py-2">
            Night Yacht Cruises (8 PM – 3 AM) — Sail Under the Stars
          </h2>
          <p className="text-base text-left py-2">
            Experience the magic of city skyline illuminated under the night sky
            with our exclusive night cruises. Our evening trips, starting at 8
            PM, are ideal for romantic getaways, fun gatherings, or business
            events. Cruise near top attractions as the crisp winter breeze sets
            the stage for a magical ambiance. Book your night yacht cruise now
            with 20% off for 2-hour bookings and a remarkable 40% off for trips
            lasting 3 hours or more. Let Centaurus Charter be your guide to an
            unforgettable evening on the water.
          </p>
          <h2 className="text-[20px] text-primary-blue text-left py-2">
            Why Choose Centaurus Charter for Yacht Rentals in Dubai?
          </h2>
          <p className="text-base text-left py-2">
            Centaurus Charter takes pride in delivering premium experiences with
            every booking. Our yachts feature modern amenities, skilled crew,
            and flexible options tailored to your needs.
          </p>
          <ul className="list-disc pl-3">
            <li>
              Customized Experiences – Catering, entertainment, and décor
              options to match your style.
            </li>
            <li>
              Professional Crew – A skilled team ensuring a smooth and
              comfortable journey.
            </li>
            <li>
              Variety of Yachts – From intimate cruisers to large luxury yachts,
              we have something for every occasion.
            </li>
          </ul>

          <h2 className="text-[20px] text-primary-blue text-left py-2">
            Special Offers and Booking Details
          </h2>
          <p className="text-left py-2">
            We recommend booking in advance, as slots fill up quickly during the
            winter season. Our team is here to assist with all your booking
            needs and answer any questions. For a more personal touch, custom
            packages are also available.
          </p>
          <h2 className="text-[20px] text-primary-blue text-left py-2">
            Plan Your Next Yacht Adventure
          </h2>
          <p className="text-left py-2">
            Don’t miss out on these limited-time winter promotions. Save up to
            40% on extended yacht trips and create unforgettable memories on the
            Arabian Gulf. Book now and experience Dubai’s best luxury yacht
            rentals with Centaurus Charter!
          </p>
          <p className=" text-sm text-center py-2">
            T&Cs apply. Don’t miss out—reserve your yacht today to enjoy these
            incredible winter savings!
          </p>
          <div className="flex flex-col item-center justify-center py-10 px-5">
            <p className="text-black text-lg font-bold text-left">
              TERMS & CONDITIONS
            </p>
            <ul className="container mx-auto list-disc text-left text-primary-blue text-sm pl-4 pt-5">
              <li>The UAE Residents offer is valid until 31 October 2025.</li>
              <li>This offer cannot be combined with other promotions.</li>
              <li>⁠A minimum booking duration of 4 hours is required.</li>
              <li>
                ⁠The offer is exclusive to UAE residents (proof of residency may
                be required).
              </li>
              <li>Terms are subject to change without prior notice.</li>
            </ul>
          </div>
          <h6 className="font-bold uppercase text-left py-7">
            Reserve your spot today and indulge in a memorable yacht adventure
            with Centaurus Charter!
          </h6>

          <section className="w-full p-4 container mx-auto space-y-10">
            <div className="container bg-primary-yellow flex flex-col md:flex-row gap-3 items-center justify-between rounded-xl py-3">
              {/* Left Text */}
              <span className="text-center md:text-left text-primary-blue font-bold text-base md:text-lg uppercase">
                EXPLORE MORE YACHT OFFERS
              </span>

              {/* Right Button */}
              <Link href="/offers">
                <button
                  className="px-10 py-2
          text-base font-bold tracking-wider uppercase
           bg-primary-blue
           
        shadow
          transition duration-150 ease-in-out transform rounded-md text-white"
                >
                  VIEW MORE
                </button>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row rounded-xl px-5 items-center  gap-5 justify-center  md:justify-between bg-primary-blue py-3">
              <button className="text-white font-bold px-5 py-3 text-xl rounded">
                REACH OUT TO US
              </button>
              <div className=" flex flex-col md:flex-row md:gap-10 gap-5">
                <Link href={'https://wa.link/eyg3by'}>
                  <button className="flex items-center justify-center gap-3 px-4 py-2 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md  transition">
                    <FaWhatsapp size={20} />
                    WHATSAPP US
                  </button>
                </Link>
                <button
                  onClick={handlequote}
                  className="hidden flex items-center justify-center gap-3 px-10 py-2 bg-primary-blue text-primary-yellow border border-primary-yellow-dark  font-bold rounded-md  transition"
                >
                  SUMMER OFFERS
                </button>
              </div>
            </div>
          </section>
          {/* <div className="py-10 w-full">
            <div className="flex flex-col md:flex-row rounded-lg items-center  gap-5 justify-center  md:justify-between bg-primary-blue p-5">
              <p className="text-white  text-center md:text-left font-bold bg-primary-blue text-xl rounded ">
                REACH OUT TO US
              </p>
              <div className="flex flex-col md:flex-row md:gap-10 gap-5">
                <a
                  target="_blank"
                  className="blue-lined-button"
                  href="https://wa.link/2c29ae"
                >
                  <FaWhatsapp size={20} />
                  WHATSAPP US
                </a>
                <button onClick={handlequote} className="blue-lined-button">
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Modal2
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        idName="offers_id"
        idValue="41"
      />
    </div>
  );
};

export default Page;
