import React from 'react'
import YachtCarousal from '../../components/YachtCarousel'

const AboutPage = () => {
  return (
    <><div className="bg-white w-full h-full">
      <div>
        <img src="./AboutUsHeader.png" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center py-10 ">
        <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pb-4">

          ABOUT US
        </h1>
        <h1 className="font-Montserrat text-[#0D2343] text-center  text-4xl pb-4">

          Experience Dubai from the Sea
        </h1>
        <p className="font-Montserrat text-[#848484] text-center  text-base  px-3 lg:px-12 xl:px-56">
          <strong> CENTAURUS CHARTER</strong> was established in 2013 and offers Leisure boats and Yacht Rentals in Dubai . The fully-crewed luxury yacht charters, as well as full-service event planning, is conveniently located in Dubai Marina, each vessel is registered by the Dubai Marina Yacht Club and is operated by a certified crew and catered by professional Staff.
        </p>
      </div>
      <div className="flex flex-col  md:flex-row items-center justify-center">
        <div>
          <div className="">
            <img
              src="/About us 1.png"
              className="xl:w-[270rem] sm:w-[170rem] md:h-[443px] xl:h-[452px] lg:h-[404px]" />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-[#0D2343] px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:h-[452px] lg:h-[404px]">
          <h1 className="font-Montserrat text-[#e1ae48] text-left font-bold text-2xl xl:text-3xl py-7">
            OFFERING A WIDE SELECTION OF LUXURY YACHTS
          </h1>
          <p className="font-Montserrat text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            Cruise the beautiful coast of Dubai in a spectacular and luxurious style. Our luxury boats, Vassia, Etosha, Riverside - are available for individual trips, functions, weddings and corporate events. Our goal has always been to provide quality service and outstanding customer support. When you choose Centaurus Charter we provide you with the very best. You can count on us for a fast turnaround on proposals and quotations. Our knowledgeable staff is standing by to discuss your preferred, custom itinerary and to answer any questions you may have.
          </p>

        </div>
      </div>
      <div className="flex flex-col  md:flex-row-reverse items-center justify-center md:py-10 xl:pr-44">
        <div>
          <div className="">
            <img
              src="/About us group.png"
              className="xl:w-[230rem] sm:w-[170rem] md:h-[643px] xl:h-[752px] lg:h-[604px] 2xl:h-[1052px] xl:px-12 " />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-transparent px-5 xl:px-32 xl:py-12 py-5 md:h-[643px] xl:h-[752px] lg:h-[604px] 2xl:h-[1052px]">
          <h1 className="font-Montserrat text-black text-left font-bold text-2xl xl:text-3xl py-7">
            ENJOY OUR
            <span className='text-yellow-400'>
              <br />LUXURY YACHT EXPERIENCE
            </span>
          </h1>
          <p className="font-Montserrat text-gray-500 text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            There is nothing more relaxing than to survey the Burj Al Arab, Atlantis & Jumeirah Beach Residence from the deck of our yacht. This remarkable Luxuries experience, previously the exclusive domain of the rich and famous, is now more affordable, and rates are competitive with that of a high-end cruise ship. In fact, many sophisticated vacationers prefer private charters due to the increasing demand and anonymity experience of luxury.<br />Enjoy the personalized and attentive service that renting a private charter brings.
          </p>
          <h1 className="font-Montserrat text-black text-left font-bold text-2xl xl:text-3xl py-7">
            OUR <span className='text-yellow-400'>GOAL</span>
          </h1>
          <p className="font-Montserrat text-gray-500 text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            Our goal has always been to provide quality service and outstanding customer support. When you choose Centaurus Charter we provide you with the very best. You can count on us for a fast turnaround on proposals and quotations. Our knowledgeable staff is standing by to discuss your preferred, custom itinerary and to answer any questions you may have.
          </p>


        </div>
      </div></div><YachtCarousal /></>
  )
}

export default AboutPage