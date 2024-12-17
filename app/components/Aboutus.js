import React from "react";

const Aboutus = () => {
  return (
    <div className=" 2xl:hidden relative flex flex-col lg:flex-row items-center justify-center lg:justify-between 2xl:justify-center px-5 bg-[#0D2343] lg:bg-white py-10 lg:py-32">
    <div className=" lg:absolute lg:right-14 lg:top-1/2 lg:-translate-y-1/2 xl:right-52 xl:top-1/2 xl:-translate-y-1/2 lg:w-96 xl:w-[36rem]">
    <img src="HomeAboutUs.webp" className="rounded-lg xl:w-full" />
  </div>
  
  
  <div className="flex flex-col lg:bg-[#0D2343] lg:w-[40rem] lg:p-20 lg:pl-8 lg:ml-32 xl:ml-44 xl:w-[55rem]">
    <h1 className="font-Montserrat text-3xl py-5 xl:pb-14 xl:pt-2 text-[#e1ae48] font-bold text-center lg:text-left">
      About Us
    </h1>
    <p className="font-Montserrat text-white text-center pb-7 lg:text-left lg:text-sm lg:pr-32 xl:pr-52">
      Centaurus Charter was established in 2013 and offers Leisure boats and
      Yacht Rentals in Dubai. The fully-crewed luxury yacht charters as well
      as full-service event planning, are conveniently located in Dubai
      Marina and Dubai Marina Harbor, each vessel is registered by the Dubai
      Marina Yacht Club and is operated by a certified crew and catered by
      professional staff.
    </p>
    <div className="">
    <button className="w-full lg:w-auto text-center lg:text-left text-[#e1ae48] font-Montserrat border px-3 py-2 font-bold border-[#e1ae48]">
  Read More
</button>

</div>
  </div>
</div>
  );
};

export default Aboutus;
