import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white h-auto  bg-fixed container mx-auto py-10">
      <h1 className=" text-[#848484] text-center font-bold text-3xl pt-12 pb-7">
        WHY CHOOSE CENTARUS CHARTER
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-5 xl:px-44">
        <div className="flex flex-col items-center justify-center py-5 ">
          <div className="border border-[#848484] rounded-full p-14 aspect-square flex items-center justify-center">
            <img alt="luxury experience badge" src="/Luxury Experience Badge.png" className="w-16" />
          </div>
          <h1 className=" text-[#848484] text-xl py-3">
            Luxury Experience
          </h1>
          <p className=" text-[#848484]   text-center xl:px-6">
            Hire our yachts for an unforgettable luxurious experience on sea
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py- ">
          <div className="border border-[#848484] rounded-full p-14 aspect-square flex items-center justify-center">
            <img alt="fleet of yachts" src="/Fleet of Yachts.png" className="w-16" />
          </div>
          <h1 className=" text-[#848484] text-xl py-3">
          Fleet of Yachts
          </h1>
          <p className=" text-[#848484] xl:px-6  text-center">
          Charter from the selection of private yachts and boats in Dubai
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <div className="border border-[#848484] rounded-full p-14 aspect-square flex items-center justify-center">
            <img alt="certified crew" src="/Certified Crew.png" className="w-16" />
          </div>
          <h1 className=" text-[#848484] text-xl py-3">
          Certified Crew
          </h1>
          <p className=" text-[#848484]  xl:px-6 text-center">
          Our professional captain and crew welcomes you & ensures the smooth ride onboard


          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <div className="border border-[#848484] rounded-full p-14 aspect-square flex items-center justify-center">
            <img alt="Quality Service" src="/Quality Service.png" className="w-16" />
          </div>
          <h1 className=" text-[#848484] text-xl py-3">
          Quality Service
          </h1>
          <p className=" text-[#848484] xl:px-6  text-center">
          Our trained and friendly staff offers great services during your yacht tour
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <div className="border border-[#848484] rounded-full p-14 aspect-square flex items-center justify-center">
            <img alt="Outstanding Customer Support" src="/Outstanding Customer Support.png" className="w-16" />
          </div>
          <h1 className=" text-[#848484] text-xl py-3">
          Outstanding Customer Support
          </h1>
          <p className=" text-[#848484] xl:px-6  text-center">
          We guarantee to provide best support from yacht viewings to bookings
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <div className="border border-[#848484] rounded-full p-14 aspect-square flex items-center justify-center">
            <img alt="Multilingual Staff" src="/Multilingual Staff.png" className="w-16" />
          </div>
          <h1 className=" text-[#848484] text-xl py-3">
            Multilingual Staff
          </h1>
          <p className=" text-[#848484]  xl:px-6 text-center">
          We speak all - English, Arabic, Russian, Spanish, German, French, Portuguese and Chinese


          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
