import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white h-auto  bg-fixed container mx-auto py-12 lg:p-16">
      <h2 className=" text-primary-blue text-center pb-7">
        WHY CHOOSE <br className="sm:hidden"></br> CENTARUS CHARTER
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center md:gap-10">
        <div className="flex flex-col items-center justify-start ">
          <div className="p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="luxury experience badge" src="/Luxury Experience Badge.png" className="w-10" />
          </div>
          <h3 className=" text-primary-grey py-3">
            Luxury Experience
          </h3>
          <p className=" text-primary-grey text-center pb-3 md:pb-0">
            Hire our yachts for an unforgettable luxurious experience on sea
          </p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <div className="p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="fleet of yachts" src="/Fleet of Yachts.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
          Fleet of Yachts
          </h3>
          <p className=" text-primary-grey text-center pb-3 md:pb-0">
          Charter from the selection of private yachts and boats in Dubai
          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="certified crew" src="/Certified Crew.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
          Certified Crew
          </h3>
          <p className=" text-primary-grey  xl:px-6 text-center pb-3 md:pb-0">
          Our professional captain and crew welcomes you & ensures the smooth ride onboard


          </p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="Quality Service" src="/Quality Service.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
          Quality Service
          </h3>
          <p className=" text-primary-grey xl:px-6 text-center pb-3 md:pb-0">
          Our trained and friendly staff offers great services during your yacht tour
          </p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <div className=" p-2 sm:p-4 md:p-6 aspect-square flex items-center">
            <img alt="Outstanding Customer Support" src="/Outstanding Customer Support.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
          Outstanding Customer Support
          </h3>
          <p className=" text-primary-grey xl:px-6  text-center pb-3 md:pb-0">
          We guarantee to provide best support from yacht viewings to bookings
          </p>
        </div>
        <div className="flex flex-col items-center justify-start ">
          <div className="border-none p-2 sm:p-4 md:p-6 aspect-square flex items-center justify-center">
            <img alt="Multilingual Staff" src="/Multilingual Staff.png" className="w-12" />
          </div>
          <h3 className=" text-primary-grey py-3">
            Multilingual Staff
          </h3>
          <p className=" text-primary-grey  xl:px-6 text-center pb-3 md:pb-0">
          We speak all - English, Arabic, Russian, Spanish, German, French, Portuguese and Chinese


          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
