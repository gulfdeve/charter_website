import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const page = () => {
  return (
    <div className="mt-14 md:mt-0">
      {" "}
      <div className="flex flex-col items-center justify-center py-10 ">
        <h1 className=" text-[#0D2343] text-center font-bold text-4xl">
          JET SKI
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-24 xl:px-44">
        <div className="flex items-start">
          <img
            src="https://www.centauruscharter.com/product/images/1653474985JET%20SKI%20THUMB.webp"
            alt="Jet Ski"
            className="w-[350rem] h-[23rem] rounded-lg"
          />
        </div>

        <div className="py-5">
          <h3 className=" text-gray-500">
            Enjoy an amazing Waverunner ride in Dubai with our unique Jet Ski
            tour. If you like speed, this activity is for you! It's fun,
            exciting! Feel the thrill and have some high adrenaline fun on our
            well maintained Yamaha Jet Skis with cruise. At our scenic beachside
            riding area, we are one of the popular Dubai Marina jet ski rentals.<br/>
          </h3>
          <p className=" text-gray-500">
          <br/> This ride doesn't require any training. Our captains are fully
            qualified and will provide an introduction to you before taking off.
            All you need is to be confident in your swimming skills. We have
            been in business for over 8 years and offer competitive pricing for
            all our services and also you can choose the duration of ride. Our
            professional team is always here to provide best customer service
            and answer any questions that might come up during your booking
            process. Ready to Go? Explore the Arabian sea without limits.<br/>
          </p>
          <p className=" text-gray-500">
          <br/>  These remarkable rides are only available with yacht bookings.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-1 items-center gap-0 rounded-lg w-full overflow-hidden  mb-7 mt-10 xl:px-44 lg:px-10">
          {/* Model */}
          <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center xl:rounded-l-lg">
            <span className="font-bold  text-sm ">Ride:</span>
            <span className="font-semibold  text-sm text-[#e1ae48] xl:text-xl">
            Jet Ski 1800cc
            </span>
          </div>
          {/* Length */}
          <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center">
            <span className="font-bold  text-sm">Duration:</span>
            <span className="font-semibold  text-sm text-[#e1ae48] xl:text-xl">
            1 Hour
            </span>
          </div>
          {/* Guests */}
          <div className="bg-[#0d2343] text-white p-2 flex flex-col items-center">
            <span className="font-bold  text-sm">Price:</span>
            <span className="font-semibold  text-sm text-[#e1ae48] xl:text-xl">
            900 AED

            </span>
          </div>
          {/* Good For */}
          <div className="bg-[#0d2343] text-[#0d2343]  p-2 flex flex-col items-center">
            <button className="flex flex-row items-center justify-center py-1 px-6 xl:py-2 md:px-8  border-4 border-[#e1ae48] rounded-md bg-[#0d2343]  hover:bg-[#0d2343] text-[#e1ae48]  font-bold text-base md:text-[10px] xl:text-base transition-all duration-300">
            <FaWhatsapp size={20} />
            WHATSAPP US
            </button>
          </div>
          <div className="bg-[#0d2343] text-[#0d2343]  p-2 flex flex-col items-center xl:rounded-r-lg">
            <button className="flex flex-row items-center justify-center py-1 px-6 md:py-0 md:px-8  border-4 border-[#e1ae48] rounded-md bg-[#0d2343]  hover:bg-[#0d2343] text-[#e1ae48]  font-bold text-base md:text-xs xl:text-sm transition-all duration-300">
              BOOK NOW WITH JETSKI
            </button>
          </div>
        </div>
    </div>
  );
};

export default page;
