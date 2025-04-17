import React from "react";
import Image from "next/image";

import ContactGem from "@/app/components/ContactGem";
import PageTitleHeading from "@/app/components/PageTitleHeading";

const page = () => {
  const yachts = [
    {
      name: "THUNDER/STORM - 36FT",
      capacity: "10",
      regular: "AED 2,380",
      discounted: "AED 1,430",
    },
    {
      name: "RIVERSIDE - 40FT",
      capacity: "12",
      regular: "AED 3,000",
      discounted: "AED 1,800",
    },
    {
      name: "VASSIA - 56FT",
      capacity: "21",
      regular: "AED 4,160",
      discounted: "AED 2,495",
    },
    {
      name: "LAGOONA - 56FT",
      capacity: "24",
      regular: "AED 4,600",
      discounted: "AED 2,760",
    },
    {
      name: "ETOSHA - 58FT",
      capacity: "28",
      regular: "AED 4,320",
      discounted: "AED 2,590",
    },
    {
      name: "SILVER CREEK - 61FT",
      capacity: "30",
      regular: "AED 5,000",
      discounted: "AED 3,000",
    },
    {
      name: "KRONOS - 86FT",
      capacity: "50",
      regular: "AED 14,000",
      discounted: "AED 8,400",
    },
    {
      name: "POSEIDON - 118FT",
      capacity: "up to 40",
      regular: "AED 20,000",
      discounted: " AED 12,000",
    },
  ];
  const yachts2 = [
    {
      name: "THUNDER/STORM - 36FT",
      capacity: "10",
      regular: "AED 595",
      discounted: "AED 450/hr",
    },
    {
      name: "RIVERSIDE - 40FT",
      capacity: "12",
      regular: "AED 750",
      discounted: "AED 565/hr",
    },
    {
      name: "VASSIA - 56FT",
      capacity: "21",
      regular: "AED 1,080",
      discounted: "AED 810/hr",
    },
    {
      name: "LAGOONA - 56FT",
      capacity: "24",
      regular: "AED 1,150",
      discounted: "AED 865/hr",
    },
    {
      name: "ETOSHA - 58FT",
      capacity: "28",
      regular: "AED 1,040",
      discounted: "AED 780/hr",
    },
    {
      name: "SILVER CREEK - 61FT",
      capacity: "30",
      regular: "AED 1,250",
      discounted: "AED 940/hr",
    },
    {
      name: "KRONOS - 86FT",
      capacity: "50",
      regular: "AED 3,500",
      discounted: "AED 2,625/hr",
    },
    {
      name: "POSEIDON - 118FT",
      capacity: "up to 40",
      regular: "AED 5,000",
      discounted: " AED 3,750/hr",
    },
  ];
  return (
    <div className="container mx-auto nav-space">
      <PageTitleHeading title="Exclusive Yacht Charter Discounts for GEMS Rewards Members" />
      <div>
        <div className="flex items-center justify-center pb-10">
		  <Image
            src="/GEMS-Offer-Banner.png"
            alt="Exclusive Yacht Charter Discounts for GEMS Rewards Members"
            className="w-full h-auto object-contain" // Full width with proper object fitting
            width={100} // Larger intrinsic width for better quality
            height={0} // Proportional height
            priority={true} // Prioritize loading for above-the-fold images
            sizes="100vw" // Tell Next.js this image takes the full viewport width
          />
        </div>
      </div>
      <div className="pb-8">
        <div className="max-w-5xl mx-auto text-center mb-8  ">
          <h2 className="font-bold bg-primary-blue-2 text-primary-yellow py-1">
            Hero Offer - 50% OFF Morning Yacht Rentals
          </h2>
        </div>
        <div className="mx-auto leading-relaxed text-center text-sm space-y-7">
          <p>
            We’re thrilled to announce a special collaboration between GEMS
            Education and Centaurus Charter, bringing you an exclusive offer for
            a <strong> 50% discount </strong>on a{" "}
            <strong>one-time 3-hour morning yacht rental.</strong> This
            incredible offer is available during the{" "}
            <strong>morning timings (6 AM – 2 PM),</strong> giving you the
            chance to enjoy the calm waters and stunning views of Dubai’s
            coastline at half the price. Your journey will include{" "}
            <strong> welcome drinks</strong> upon arrival, ensuring a refreshing
            start to your luxurious experience on board. Don’t miss out on this
            limited-time deal to experience the best of Dubai from the water.
          </p>

          <h2 className="text-primary-blue">
            25% OFF Afternoon Yacht Rentals & 40% OFF Extended Bookings
          </h2>
          <p>
            Take your yacht experience to the next level with our exclusive 25%
            discount on afternoon yacht rentals from 3 PM – 7 PM. Explore the
            beauty of Dubai’s iconic coastline, including breathtaking views of
            JBR, Atlantis, Burj Al Arab, and Blue Waters. Whether you re looking
            to relax or celebrate with friends and family, an afternoon on the
            water will leave you with unforgettable memories
          </p>
          <p>
            For those seeking more flexibility, we’re also offering a 40%
            discount on bookings of 4 hours during early morning (6 AM 2 PM) or
            evening (8 PM 2 AM). This extended timeframe allows you to explore
            even more of Dubai’s stunning landmarks and luxurious waterfront
            views.
          </p>
          <p>
            All yachts are based at Dubai Marina, Dubai Harbour & Marasi Bay
            Marina locations, making it easy for you to embark on your
            unforgettable yacht journey. And to top it off, welcome drinks are
            included in your booking, ensuring you start your yacht trip in
            style.
          </p>
        </div>
        <div className="py-10 text-center ">
          <p className="text-primary-blue">
            Check the table below for detailed pricing and more information
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-center">
            <thead>
              <tr>
                <th
                  colSpan={4}
                  className="bg-primary-blue text-white text-center py-4 px-2"
                >
                  40% OFF IN OUR 4 HOURS YACHT RENTAL BOOKINGS
                  <div className="text-sm font-normal mt-1">
                    (Morning & Night - 6 AM to 2 PM / Between 8 PM to 2 AM)
                  </div>
                </th>
              </tr>
              <tr className="">
                <th className="bg-primary-blue text-white font-semibold uppercase text-sm py-3 px-2 border border-white text-center">
                  Yacht
                </th>
                <th className="bg-primary-blue text-white font-semibold uppercase text-sm py-3 px-2 border border-white text-center">
                  Capacity
                </th>
                <th className="bg-primary-blue text-white font-semibold uppercase text-sm py-3 px-2 border border-white text-center">
                  Regular Rate
                </th>
                <th className="bg-primary-blue text-white font-semibold uppercase text-sm py-3 px-2 border border-white text-center">
                  Discounted Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {yachts.map((yacht, idx) => {
                const isLast = idx === yachts.length - 1;
                return (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-[#F5F9FF]" : ""}>
                    {/* Yacht Name */}
                    <td className="py-4 px-2 font-semibold text-sm border border-white">
                      {yacht.name}
                    </td>

                    {/* Capacity: normal font + italic for last row */}
                    <td
                      className={`py-4 px-2 text-sm border border-white text-center ${
                        isLast ? " font-bold" : "font-bold"
                      }`}
                    >
                      {yacht.capacity}
                    </td>

                    {/* Regular Rate with strikethrough */}
                    <td className="py-4 px-2 text-sm border border-white text-center">
                      <span className="line-through text-black">
                        {yacht.regular}
                      </span>
                    </td>

                    {/* Discounted Rate: split "from" on last row */}
                    <td className="py-4 px-2 text-sm border border-white text-center">
                      {isLast ? (
                        <>
                          <span className="text-xs lowercase">from</span>
                          <span className="font-semibold">
                            {yacht.discounted}
                          </span>
                        </>
                      ) : (
                        <span className="font-semibold">
                          {yacht.discounted}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto py-7">
          <table className="min-w-full border-collapse text-center">
            <thead>
              <tr>
                <th
                  colSpan={4}
                  className="bg-primary-blue text-white text-center py-4 px-2"
                >
                  25% OFF IN OUR YACHT RENTAL BOOKINGS
                  <div className="text-sm font-normal mt-1">
                    (Primetime - From 3 PM to 7 PM)
                  </div>
                </th>
              </tr>
              <tr className="">
                <th className="bg-primary-blue text-white font-semibold uppercase text-sm py-3 px-2 border border-white text-center">
                  Yacht
                </th>
                <th className="bg-primary-blue text-white font-semibold uppercase text-sm py-3 px-2 border border-white text-center">
                  Capacity
                </th>
                <th className="bg-primary-blue text-white font-semibold uppercase text-sm py-3 px-2 border border-white text-center">
                  Regular Rate
                </th>
                <th className="bg-primary-blue text-white font-semibold uppercase text-sm py-3 px-2 border border-white text-center">
                  Discounted Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {yachts2.map((yacht, idx) => {
                const isLast = idx === yachts.length - 1;
                return (
                  <tr key={idx} className={idx % 2 === 1 ? "bg-[#F5F9FF]" : ""}>
                    {/* Yacht Name */}
                    <td className="py-4 px-2 font-semibold text-sm border border-white">
                      {yacht.name}
                    </td>

                    {/* Capacity: normal font + italic for last row */}
                    <td
                      className={`py-4 px-2 text-sm border border-white text-center ${
                        isLast ? " font-bold" : "font-bold"
                      }`}
                    >
                      {yacht.capacity}
                    </td>

                    {/* Regular Rate with strikethrough */}
                    <td className="py-4 px-2 text-sm border border-white text-center">
                      <span className="line-through text-black">
                        {yacht.regular}
                      </span>
                    </td>

                    {/* Discounted Rate: split "from" on last row */}
                    <td className="py-4 px-2 text-sm border border-white text-center">
                      {isLast ? (
                        <>
                          <span className="text-xs lowercase">from</span>
                          <span className="font-semibold">
                            {yacht.discounted}
                          </span>
                        </>
                      ) : (
                        <span className="font-semibold">
                          {yacht.discounted}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-bold text-primary-blue mb-2">
            Terms & Conditions:
          </h4>
          <ul className="list-disc text-sm text-black ml-6 space-y-1">
            <li>
              This discount cannot be used in conjunction with any other
              discount or promotional offer.
            </li>
            <li>Minimum Booking time: 3 hours</li>
            <li> 50% of the full amount to be paid to secure your booking.</li>
            <li>Offer is valid until 30th March 2026.</li>
            <li> Offer not valid on public holidays and festive seasons.</li>
            <li>
              Add-ons: AED 100 per hour for unlimited wines & beers. (Exclusive
              for 36-61 ft yachts only.)
            </li>
            <li>
              Poseidon 118ft Trips: An Add on of AED 800 per hour will be added
              for every additional 10 pax where the occupancy surpasses the 40
              passengers
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-bold text-primary-blue mb-2">
            Cancellation policy:
          </h4>
          <ul className="list-disc text-sm text-black ml-6 space-y-1">
            <li>Cancellations 72 hours prior the booking free of charge</li>
            <li>Cancellations 48 hours prior will get 50% refund</li>
            <li> Cancellations 24 hours prior will be No refundable</li>
          </ul>
        </div>
        <ContactGem />
      </div>
    </div>
  );
};

export default page;
