import React from 'react';
// import Videoresidentoffers from "@/app/components/Videoresidentoffers";
import { FaUser } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';
import VideoLocal from '@/app/components/VideoLocal';
import ReachOutSection from './ReachOutSection';

// Force static generation with ISR (24 hours revalidation)
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ru' }, { locale: 'zh' }];
}

const page = () => {
  const yachtsFortyOff = [
    {
      name: 'THUNDER - 36FT',
      capacity: 10,
      ratePerHour: 'AED 595',
      rate2Hours: 'AED 715',
      rate3Hours: 'AED 1,070',
      rate4Hours: 'AED 1,430',
      fareharbor_id: '353083',
    },
    {
      name: 'STORM - 36FT',
      capacity: 10,
      ratePerHour: 'AED 595',
      rate2Hours: 'AED 715',
      rate3Hours: 'AED 1,070',
      rate4Hours: 'AED 1,430',
      fareharbor_id: '429263',
    },
    {
      name: 'RIVERSIDE - 40FT',
      capacity: 12,
      ratePerHour: 'AED 750',
      rate2Hours: 'AED 900',
      rate3Hours: 'AED 1,350',
      rate4Hours: 'AED 1,800',
      fareharbor_id: '583211',
    },
    {
      name: 'VASSIA - 56FT',
      capacity: 21,
      ratePerHour: 'AED 1,040',
      rate2Hours: 'AED 1,250',
      rate3Hours: 'AED 1,870',
      rate4Hours: 'AED 2,500',
      fareharbor_id: '340265',
    },
    {
      name: 'ETOSHA - 58FT',
      capacity: 28,
      ratePerHour: 'AED 1,080',
      rate2Hours: 'AED 1,300',
      rate3Hours: 'AED 1,945',
      rate4Hours: 'AED 2,600',
      fareharbor_id: '340280',
    },
    {
      name: 'LAGOONA - 56FT',
      capacity: 24,
      ratePerHour: 'AED 1,150',
      rate2Hours: 'AED 1,380',
      rate3Hours: 'AED 2,070',
      rate4Hours: 'AED 2,760',
      fareharbor_id: '340459',
    },
    {
      name: 'SILVER CREEK - 61FT',
      capacity: 30,
      ratePerHour: 'AED 1,250',
      rate2Hours: 'AED 1,500',
      rate3Hours: 'AED 2,250',
      rate4Hours: 'AED 3,000',
      fareharbor_id: '340286',
    },
    {
      name: 'KRONOS - 85FT',
      capacity: 50,
      ratePerHour: 'AED 3,500',
      rate2Hours: 'AED 4,200',
      rate3Hours: 'AED 6,300',
      rate4Hours: 'AED 8,400',
      fareharbor_id: '577212',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '1 - 40',
      ratePerHour: 'AED 5,000',
      rate2Hours: 'AED 6,000',
      rate3Hours: 'AED 9,000',
      rate4Hours: 'AED 12,000',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '41 - 50',
      ratePerHour: 'AED 6,000',
      rate2Hours: 'AED 7,200',
      rate3Hours: 'AED 10,800',
      rate4Hours: 'AED 14,400',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '51 - 60',
      ratePerHour: 'AED 7,000',
      rate2Hours: 'AED 8,400',
      rate3Hours: 'AED 12,600',
      rate4Hours: 'AED 16,800',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '61 - 70',
      ratePerHour: 'AED 8,000',
      rate2Hours: 'AED 9,600',
      rate3Hours: 'AED 14,400',
      rate4Hours: 'AED 19,200',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '71 - 80',
      ratePerHour: 'AED 9,000',
      rate2Hours: 'AED 10,800',
      rate3Hours: 'AED 16,200',
      rate4Hours: 'AED 21,600',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '81 - 100',
      ratePerHour: 'AED 10,000',
      rate2Hours: 'AED 12,000',
      rate3Hours: 'AED 18,000',
      rate4Hours: 'AED 24,000',
      fareharbor_id: '417962',
    },
  ];
  const yachtsThirtyOff = [
    {
      name: 'THUNDER - 36FT',
      capacity: 10,
      ratePerHour: 'AED 595',
      rate2Hours: 'AED 835',
      rate3Hours: 'AED 1,250',
      rate4Hours: 'AED 1,670',
      fareharbor_id: '353083',
    },
    {
      name: 'STORM - 36FT',
      capacity: 10,
      ratePerHour: 'AED 595',
      rate2Hours: 'AED 835',
      rate3Hours: 'AED 1,250',
      rate4Hours: 'AED 1,670',
      fareharbor_id: '429263',
    },
    {
      name: 'RIVERSIDE - 40FT',
      capacity: 12,
      ratePerHour: 'AED 750',
      rate2Hours: 'AED 1,050',
      rate3Hours: 'AED 1,575',
      rate4Hours: 'AED 2,100',
      fareharbor_id: '583211',
    },
    {
      name: 'VASSIA - 56FT',
      capacity: 21,
      ratePerHour: 'AED 1,040',
      rate2Hours: 'AED 1,460',
      rate3Hours: 'AED 2,185',
      rate4Hours: 'AED 2,910',
      fareharbor_id: '340265',
    },
    {
      name: 'ETOSHA - 58FT',
      capacity: 28,
      ratePerHour: 'AED 1,080',
      rate2Hours: 'AED 1,510',
      rate3Hours: 'AED 2,270',
      rate4Hours: 'AED 3,025',
      fareharbor_id: '340280',
    },
    {
      name: 'LAGOONA - 56FT',
      capacity: 24,
      ratePerHour: 'AED 1,150',
      rate2Hours: 'AED 1,610',
      rate3Hours: 'AED 2,420',
      rate4Hours: 'AED 3,220',
      fareharbor_id: '340459',
    },
    {
      name: 'SILVER CREEK - 61FT',
      capacity: 30,
      ratePerHour: 'AED 1,250',
      rate2Hours: 'AED 1,750',
      rate3Hours: 'AED 2,630',
      rate4Hours: 'AED 3,500',
      fareharbor_id: '340286',
    },
    {
      name: 'KRONOS - 85FT',
      capacity: 50,
      ratePerHour: 'AED 3,500',
      rate2Hours: 'AED 4,900',
      rate3Hours: 'AED 7,350',
      rate4Hours: 'AED 9,800',
      fareharbor_id: '577212',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '1 - 40',
      ratePerHour: 'AED 5,000',
      rate2Hours: 'AED 7,000',
      rate3Hours: 'AED 10,500',
      rate4Hours: 'AED 14,000',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '41 - 50',
      ratePerHour: 'AED 6,000',
      rate2Hours: 'AED 8,400',
      rate3Hours: 'AED 12,600',
      rate4Hours: 'AED 16,800',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '51 - 60',
      ratePerHour: 'AED 7,000',
      rate2Hours: 'AED 9,800',
      rate3Hours: 'AED 14,700',
      rate4Hours: 'AED 19,600',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '61 - 70',
      ratePerHour: 'AED 8,000',
      rate2Hours: 'AED 11,200',
      rate3Hours: 'AED 16,800',
      rate4Hours: 'AED 22,400',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '71 - 80',
      ratePerHour: 'AED 9,000',
      rate2Hours: 'AED 12,600',
      rate3Hours: 'AED 18,900',
      rate4Hours: 'AED 25,200',
      fareharbor_id: '417962',
    },
    {
      name: 'POSEIDON - 118FT',
      capacity: '81 - 100',
      ratePerHour: 'AED 10,000',
      rate2Hours: 'AED 14,000',
      rate3Hours: 'AED 21,000',
      rate4Hours: 'AED 28,000',
      fareharbor_id: '417962',
    },
  ];
  return (
    <>
      {/* <div>
        <Videoresidentoffers />
      </div> */}
      <VideoLocal filename="/shared yacht tours.mp4" section="resident-offer" />
      <div className="container mx-auto flex flex-col items-center justify-center pt-6 lg:pt-10">
        <h3 className=" text-primary-blue text-center font-bold  pb-4">EXCLUSIVE 40% DISCOUNT FOR UAE RESIDENTS</h3>
        <p className=" text-primary-blue text-md text-center">Experience the ultimate in luxury yacht rentals at unbeatable prices, Exclusively for UAE Residents. Enjoy a perfect blend of Quality and Affordability, promising a unique and unforgettable adventure on the Water.</p>
      </div>

      <div className="container mx-auto p-3 lg:p-5 py-6">
        <div className="block lg:hidden overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 ">
            {yachtsFortyOff.map((yacht, index) => (
              <div key={index} className="w-full border-2 rounded-lg border-gray-300 p-4">
                <h2 className=" font-bold mb-4">{yacht.name}</h2>
                <div className="font-secondary">
                  <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-1 gap-x-4">
                    <div className="flex flex-col mb-4">
                      <div className="flex">
                        <IoIosPricetag size={20} className="mr-3 mt-1 text-primary-blue-light-2" />
                        <p className="flex flex-col text-sm text-primary-grey">
                          Regular Rate/Hour:
                          <span className=" font-semibold text-base text-black mt-2">{yacht.ratePerHour}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mb-4">
                      <div className="flex">
                        <FaUser size={20} className="mr-3 mt-1 text-primary-blue-light-2" />
                        <p className="flex flex-col text-sm text-primary-grey">
                          Capacity:
                          <span className=" font-semibold text-base text-black mt-2">{yacht.capacity}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mb-4">
                    <div className="flex">
                      <RiDiscountPercentFill size={20} className="mr-3 mt-1 text-primary-blue-light-2" />
                      <div className="flex flex-col text-sm text-primary-grey">
                        Discounted Rate:
                        <p className="font-semibold text-base mt-2">
                          2 Hours: <span className="text-black ml-4">{yacht.rate2Hours}</span>
                        </p>
                        <p className="font-semibold text-base">
                          3 Hours: <span className="text-black ml-4">{yacht.rate3Hours}</span>
                        </p>
                        <p className="font-semibold text-base">
                          4 Hours: <span className="text-black ml-4">{yacht.rate4Hours}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`} target="_self" rel="noopener noreferrer" className="flex items-center mt-5 pt-3 group justify-between px-5 text-primary-blue-2 border-t border-gray-400">
                  <div className="btn-info">Book Now</div>
                  <FiArrowRight size={20} className=" text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 md:text-sm lg:text-sm ">
            <thead>
              <tr className="bg-primary-blue-light-1 text-primary-blue-2">
                <th className=" px-3 py-5  ">YACHT</th>
                <th className=" px-3 py-5">CAPACITY</th>
                <th className=" px-3 py-5">REGULAR RATE/HOUR</th>
                <th className=" px-3 py-5">DISCOUNTED 2-HOUR RATE</th>
                <th className=" px-3 py-5">DISCOUNTED 3-HOUR RATE</th>
                <th className=" px-3 py-5">DISCOUNTED 4-HOUR RATE</th>
                <th className=" px-3 py-5"></th>
              </tr>
            </thead>
            <tbody>
              {yachtsFortyOff.map((yacht, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-primary-blue-light'} text-center text-sm`}>
                  <td className="font-secondary p-3 font-semibold">{yacht.name}</td>
                  <td className="font-secondary p-3 font-semibold">{yacht.capacity}</td>
                  <td className="font-secondary p-3 font-semibold line-through text-primary-grey">{yacht.ratePerHour}</td>
                  <td className="font-secondary p-3 font-semibold">{yacht.rate2Hours}</td>
                  <td className="font-secondary p-3 font-semibold">{yacht.rate3Hours}</td>
                  <td className="font-secondary p-3 font-semibold">{yacht.rate4Hours}</td>
                  <td className="p-3 font-bold">
                    <a
                      href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`}
                      target="_self"
                      rel="noopener noreferrer"
                      className="bg-primary-blue-2 hover:bg-primary-blue
     text-white rounded-lg transition-all flex text-center justify-center w-full px-3 py-2
  "
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
          <h3 className=" font-bold text-center text-white text-[1rem]">INCLUSIONS: WATER, SOFT DRINKS, COFFEE & TEA</h3>
        </div>
        <p className="text-left md:text-center text-primary-grey pt-2 pb-2">Minimum booking duration applies. Terms and conditions may vary based on yacht and package selected.</p>
        <p className="text-left md:text-center italic font-bold text-primary-blue pb-5">Premium drinks are available for purchase on board</p>
        <h3 className="text-black text-base text-center font-bold pb-5">DISCOUNTED RATES ARE VALID FOR BOOKINGS FROM 6AM-2PM (MORNING TRIPS) & 8 PM ONWARDS (NIGHT TRIPS)</h3>
        <p className=" text-left md:text-center italic text-primary-grey py-5">
          Escape the ordinary and embark on a private yacht adventure with our limited-time 40% discount for UAE residents. To avail this exclusive offer, simply book a minimum 2-hours yacht tour and let us take care of the rest. Enjoy unlimited drinks on your private yacht tour, available for bookings of 4 hours and above. Watersports are also available on request.
        </p>
      </div>
      <div className="container mx-auto">
        <hr className="my-5 border border-primary-blue"></hr>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center pt-5 ">
        <h3 className=" text-primary-blue text-center font-bold  pb-4">EXCLUSIVE 30% DISCOUNT FOR UAE RESIDENTS</h3>
        <p className=" text-primary-blue text-center">Take advantage of our special offer with a 30% discount on luxury yacht rentals during primetime hours. Experience the same quality and luxury at a reduced rate.</p>
      </div>
      <div className="container mx-auto p-3 lg:p-5 py-6">
        <div className="block lg:hidden overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 ">
            {yachtsThirtyOff.map((yacht, index) => (
              <div key={index} className="w-full border-2 rounded-lg border-gray-300 p-4">
                <h2 className=" font-bold mb-4">{yacht.name}</h2>
                <div className="font-secondary">
                  <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-1 gap-x-4">
                    <div className="flex flex-col mb-4">
                      <div className="flex">
                        <IoIosPricetag size={20} className="mr-3 mt-1 text-primary-blue-light-2" />
                        <p className="flex flex-col text-sm text-primary-grey">
                          Regular Rate/Hour:
                          <span className=" font-semibold text-base text-black mt-2">{yacht.ratePerHour}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mb-4">
                      <div className="flex">
                        <FaUser size={20} className="mr-3 mt-1 text-primary-blue-light-2" />
                        <p className="flex flex-col text-sm text-primary-grey">
                          Capacity:
                          <span className=" font-semibold text-base text-black mt-2">{yacht.capacity}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mb-4">
                    <div className="flex">
                      <RiDiscountPercentFill size={20} className="mr-3 mt-1 text-primary-blue-light-2" />
                      <div className="flex flex-col text-sm text-primary-grey">
                        Discounted Rate:
                        <p className="font-semibold text-base mt-2">
                          2 Hours: <span className="text-black ml-4">{yacht.rate2Hours}</span>
                        </p>
                        <p className="font-semibold text-base">
                          3 Hours: <span className="text-black ml-4">{yacht.rate3Hours}</span>
                        </p>
                        <p className="font-semibold text-base">
                          4 Hours: <span className="text-black ml-4">{yacht.rate4Hours}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`} target="_self" rel="noopener noreferrer" className="flex items-center mt-5 pt-3 group justify-between px-5 text-primary-blue-2 border-t border-gray-400">
                  <div className="btn-info">Book Now</div>
                  <FiArrowRight size={20} className=" text-lg transform md:group-hover:translate-x-4 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 md:text-sm lg:text-sm ">
            <thead>
              <tr className="bg-primary-blue-light-1 text-primary-blue-2">
                <th className="px-3 py-5">YACHT</th>
                <th className="px-3 py-5">CAPACITY</th>
                <th className="px-3 py-5">REGULAR RATE/HOUR</th>
                <th className="px-3 py-5">DISCOUNTED 2-HOUR RATE</th>
                <th className="px-3 py-5">DISCOUNTED 3-HOUR RATE</th>
                <th className="px-3 py-5">DISCOUNTED 4-HOUR RATE</th>
                <th className="px-3 py-5"></th>
              </tr>
            </thead>
            <tbody>
              {yachtsThirtyOff.map((yacht, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-primary-blue-light'} text-center text-sm`}>
                  <td className="font-secondary p-3 font-semibold">{yacht.name}</td>
                  <td className="font-secondary p-3 font-semibold">{yacht.capacity}</td>
                  <td className="font-secondary p-3 font-semibold line-through text-primary-grey">{yacht.ratePerHour}</td>
                  <td className="font-secondary p-3 font-semibold">{yacht.rate2Hours}</td>
                  <td className="font-secondary p-3 font-semibold">{yacht.rate3Hours}</td>
                  <td className="font-secondary p-3 font-semibold">{yacht.rate4Hours}</td>

                  <td className="p-3 font-bold">
                    <a href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487`} target="_self" rel="noopener noreferrer" className=" bg-primary-blue-2 hover:bg-primary-blue text-white rounded-lg transition-all flex text-center justify-center w-full px-3 py-2">
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
          <h3 className=" font-bold text-center text-white text-[1rem]">INCLUSIONS: WATER, SOFT DRINKS, COFFEE & TEA</h3>
        </div>
        <p className="text-left md:text-center text-primary-grey pt-2 pb-2">Minimum booking duration applies. Terms and conditions may vary based on yacht and package selected.</p>
        <p className="text-left md:text-center italic font-bold text-primary-blue pb-5">Premium drinks are available for purchase on board</p>
        <h3 className="text-black text-base text-center font-bold pb-2">DISCOUNTED RATES: VALID FOR BOOKINGS FROM 4 PM TO 8 PM (PRIMETIME).</h3>
        <p className="text-left md:text-center italic text-primary-grey py-5">
          Escape the ordinary and set sail on a private yacht adventure with our limited-time 30% discount for UAE residents. To avail this exclusive offer, simply book a minimum 2-hours yacht tour and let us take care of the rest. Enjoy unlimited drinks on your private yacht tour, available for bookings of 4 hours and above. Watersports are also available on request.
        </p>
      </div>
      <div className="container mx-auto">
        <div className=" flex flex-col item-center justify-center py-2 px-5">
          <h5 className=" text-black text-lg  text-left">TERMS & CONDITIONS</h5>
          <ul className="container mx-auto list-disc text-left text-primary-blue text-sm pl-4 pt-5">
            <li className="mb-1">The summer offer is valid from 15 May to 15 September 2026</li>
            <li className="mb-1">This offer cannot be combined with other promotions.</li>
            <li className="mb-1">⁠A minimum booking duration of 2 hours is required.</li>
            <li className="mb-1">⁠The offer is exclusive to UAE residents (proof of residency may be required).</li>
            <li className="mb-1">The offer is not valid on public holidays</li>
            <li className="mb-1">⁠Terms are subject to change without prior notice.</li>
          </ul>

          <h6 className="font-bold uppercase text-left py-7">BOOK NOW AND ENJOY AN UNFORGETTABLE YACHT EXPERIENCE WITH CENTAURUS CHARTER!</h6>
        </div>
      </div>

      <ReachOutSection />
    </>
  );
};

export default page;
