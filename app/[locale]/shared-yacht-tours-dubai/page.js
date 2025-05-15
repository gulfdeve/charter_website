"use client";
import React, { useState } from "react";
import Videosharedtours from "@/app/components/Video-sharedtours";
import WistiaVideo from "@/app/components/WistiaVideo";
import VideoLocal from "@/app/components/VideoLocal";
// React Icons
import { FaClock, FaCameraRetro, FaWhatsapp, FaChild } from "react-icons/fa";
import { IoLocationSharp, IoMan } from "react-icons/io5";
import { MdOutlineLocalDining } from "react-icons/md";
import YachtCarousal from "@/app/components/YachtCarousel";
import FareHarborCalendar from "@/app/components/FareHarborCalendar";
import Modalsharedtours from "../../components/Modelsharedtours";
import Modal2 from "@/app/components/Modal2";
import { Link } from "@/app/i18n/routing";
import ToursCarousel from "@/app/components/Sharedtoursmob";
// Example data
const toursData = [
  {
    image: "/midday.webp",
    title: "MORNING TOURS",
    cruisingTime: "9:00 AM - 11:00 AM",
    adultPrice: "AED 199",
    childPrice: "AED 149",
    liveBBQ: "Sandwiches,  Assorted Croissants, Fruits, muffins, Strawberry & Honey Jam, Coffee and Tea<br/>*Vegetarian food available on request",
    cruisingRoute: "Dubai Marina, JBR and Burj Al Arab",
    departurePoint: "Dubai Marina/Dubai Marina Harbour",
    blueHeadline: "AVAILABLE ALL DAYS OF THE WEEK",
	  validity: "",
    yellowHeadline: "",
    fareharborLink:
      "https://fareharbor.com/embeds/book/centauruscharter/items/488624/?full-items=yes&flow=no",
  },
  {
    image: "/sunset.webp",
    title: "SUNSET TOURS",
    cruisingTime: "05:00 PM - 07:00 PM",
    adultPrice: "AED 259",
    childPrice: "AED 149",
    liveBBQ: "Chicken & Beef Skewers, Sliders, Hotdogs, Veggie Patty, Vegetable Skewers, Muffins, Fresh Fruits, Water, Tea, Coffee & Soft Drinks<br>*Vegetarian food available on request - Veggie patty, Vegetable skewers",
    cruisingRoute: "Dubai Marina, JBR and Burj Al Arab",
    departurePoint: "Dubai Marina/Dubai Marina Harbour",
    blueHeadline: "EVERY SUNDAY-WEDNESDAY",
	  validity: "*Valid from 4-28 May 2025",
    yellowHeadline: "50% OFF",
    fareharborLink:
      "https://fareharbor.com/embeds/book/centauruscharter/items/488868/?full-items=yes&flow=no",
  },
  {
    image: "/night.webp",
    title: "NIGHT TOURS",
    cruisingTime: "08:00 PM - 10:00 PM",
    adultPrice: "AED 199",
    childPrice: "AED 149",
    liveBBQ: "Chicken & Beef Skewers, Sliders, Hotdogs, Veggie Patty, Vegetable Skewers, Muffins, Fresh Fruits, Water, Tea, Coffee & Soft Drinks<br>*Vegetarian food available on request - Veggie patty, Vegetable skewers",
    cruisingRoute: "Dubai Marina, JBR and Burj Al Arab",
    departurePoint: "Dubai Marina/Dubai Marina Harbour",
    blueHeadline: "EVERY SUNDAY-WEDNESDAY",
	  validity: "*Valid from 4-28 May 2025",
    yellowHeadline: "50% OFF",
    fareharborLink:
      "https://fareharbor.com/embeds/book/centauruscharter/items/488872/?full-items=yes&flow=no",
  },
];

const Page = () => {
  const [showDetails, setShowDetails] = useState(toursData.map(() => false));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlequote = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Toggle details for a single card
  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <>
      {/* Hero Video or Banner */}
      <Modalsharedtours />
      <VideoLocal filename="/shared yacht tours.mp4" section="shared-tours" />

      {/* Main Container */}
      <div className="bg-white h-full w-full">
        {/* Top Heading with FareHarbor Calendar */}
        <div className="container mx-auto pt-10 lg:pt-8 2xl:pt-16">
          <div className="flex flex-col lg:flex-row align-top">
            {/* Left Section - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col pb-10 lg:pb-0 lg:pr-8">
              <h2 className="text-primary-blue-2 text-center pb-4 uppercase">
                Shared yacht Dubai <br/> with live BBQ & Drinks
              </h2>
              <p className="text-primary-grey font-bold text-base text-center">
                Luxury Experience that's Affordable: Set Sail and Experience
                Dubai, From Morning till Night
              </p>
              <p className="text-primary-grey text-base mt-4 text-center">
                Experience the ultimate Dubai yacht tour with our exclusive
                daily cruises, available three times a day—midday, sunset, and
                night. Whether you want to soak up the sun, witness the
                breathtaking skyline at golden hour, or enjoy the city lights
                shimmering over the sea, our yacht tours offer the perfect
                escape. Each tour is designed to provide a luxurious and
                unforgettable experience on the water. Below, you'll find
                detailed cards for each tour, covering everything from itinerary
                to inclusions. If you're ready to book, check the calendar
                beside for available dates and secure your spot today!
              </p>
            </div>

            {/* Right Section - FareHarbor Calendar */}
			<div className="w-full lg:w-1/2 flex justify-center items-center">
  <iframe
    src="https://www.centauruscharter.net/calendar.html"
    title="Centaurus Charter Calendar"
    className="w-[450px] h-[400px] mx-auto"
    frameBorder="0"
    scrolling="auto"
    allowFullScreen
  />
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-10 gap-5 container mx-auto items-start">
          {toursData.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-custom duration-300 p-5 space-y-3"
            >
              {/* Image Wrapper */}
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="rounded-lg w-full"
                />
                {/* Overlay Container */}
                <div className="absolute top-2">
                  {tour.yellowHeadline && (
                    <div className="gradient-custom-2 px-3 py-1 rounded-sm">
                      <span className="text-xl font-bold uppercase text-white">
                        {tour.yellowHeadline}
                      </span>
                    </div>
                  )}
                  {tour.blueHeadline && (
                    <div className="bg-primary-yellow-light px-3 py-1 rounded-sm">
                      <p className="text-sm uppercase text-primary-blue-2 font-bold">
                        {tour.blueHeadline}
                      </p>
                    </div>
                  )}
				  {tour.validity && (
					<div className="px-3 py-1">
					  <p className="text-xs uppercase text-white">
						{tour.validity}
					  </p>
					</div>
				  )}
                </div>
              </div>

              {/* Title and Toggle Button */}
              <div className="text-center">
                <h3 className="text-primary-blue-2 text-center py-2">
                  {tour.title}
                </h3>
                <button
                  onClick={() => toggleDetails(index)}
                  className="bg-gray-100 text-gray-400 w-full py-2 rounded font-semibold text-sm hover:bg-gray-200 transition-colors duration-300 mb-2"
                >
                  {showDetails[index] ? "Hide Details" : "Show Details"}
                </button>
              </div>

              {/* Basic info with gradual opacity effect */}
              <div className="relative">
                {/* Gradient overlay that appears when details are hidden */}
                {!showDetails[index] && (
                  <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent from-0% via-white/0 via-30% to-white/90 to-100% pointer-events-none z-10"></div>
                )}

                <div className="space-y-3">
                  <div className="flex flex-row gap-3 items-center ml-1 mb-4">
                    <FaClock size={25} className="text-primary-yellow-light" />
                    <p className="text-primary-grey text-sm">
                      <span className="font-bold">Cruising Time:</span>{" "}
                      {tour.cruisingTime}
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 items-center mb-4">
                    <IoMan size={32} className="text-primary-yellow-light" />
                    <p className="text-primary-grey text-sm">
                      <span className="font-bold">Adult (12+):</span>{" "}
                      {tour.adultPrice}
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 items-center mb-3">
                    <FaChild size={30} className="text-primary-yellow-light" />
                    <p className="text-primary-grey text-sm">
                      <span className="font-bold">Child (4-11):</span>{" "}
                      {tour.childPrice}
                    </p>
                  </div>

                  {/* Collapsible Details Section */}
                  <div
                    className={`
          transition-all duration-300 overflow-hidden
          ${
            showDetails[index]
              ? "max-h-[999px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
                  >
                    <div className="space-y-4">
                      <div className="flex flex-row gap-2 items-center">
                        <MdOutlineLocalDining className="text-primary-yellow-light text-[6rem] sm:text-[2.2rem] lg:text-[4rem]" />
                        <p className="text-primary-grey text-sm">
                          <span className="font-bold">Inclusions:</span>{" "}
                          {/* {tour.liveBBQ} */}
						  <span dangerouslySetInnerHTML={{ __html: tour.liveBBQ }} />
                        </p>
                      </div>

                      <div className="flex flex-row gap-2.5 items-center">
                        <FaCameraRetro
                          size={30}
                          className="text-primary-yellow-light"
                        />
                        <p className="text-primary-grey text-sm">
                          <span className="font-bold">Cruising Route:</span>{" "}
                          {tour.cruisingRoute}
                        </p>
                      </div>

                      <div className="flex flex-row gap-2 items-center">
                        <IoLocationSharp
                          size={32}
                          className="text-primary-yellow-light"
                        />
                        <p className="text-primary-grey text-sm">
                          <span className="font-bold text-primary-grey">
                            Departure Point:
                          </span>{" "}
                          {tour.departurePoint}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Now Button - Always fully visible */}
              <a
                href={tour.fareharborLink}
                className="blue-solid-button w-full block text-center"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        </div>
        <div className="md:hidden block">
<ToursCarousel toursData={toursData}  />
        </div>
        <div className="container mx-auto">
        {/* Premium Drinks Notice */}
        <div className="flex items-center justify-center bg-primary-blue-2 max-w-3xl mx-auto text-center">
          <p className="text-white text-md md:text-xl font-bold">
            PREMIUM DRINKS ARE AVAILABLE FOR PURCHASE ON BOARD
          </p>
        </div>
        <p className="text-center text-primary-grey text-xs md:text-base italic mt-4">
            *Yacht type and capacity may vary;
            specific yacht not guaranteed until the day of the tour.
          </p>
        </div>
        {/* HIGHLIGHTS */}
        <div className="flex items-center justify-center w-full my-6">
          <hr className="flex-grow border-primary-yellow-dark" />
          <h2 className="px-4 font-semibold text-primary-blue-2">HIGHLIGHTS</h2>
          <hr className="flex-grow border-primary-yellow-dark" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 py-10 container mx-auto">
          <div>
            <img src="/BBQ.webp" className="rounded-t-lg" alt="Live BBQ" />
            <h3 className="bg-primary-blue-2 text-primary-yellow text-center text-base font-bold p-2 rounded-b-lg">
              LIVE BBQ
            </h3>
          </div>
          <div>
            <img
              src="/Picturemoments.webp"
              className="rounded-t-lg"
              alt="Picture Moments"
            />
            <h3 className="bg-primary-blue-2 text-primary-yellow text-center text-base font-bold p-2 rounded-b-lg">
              PICTURE MOMENTS
            </h3>
          </div>
          <div>
            <img
              src="/Amazing-View.webp"
              className="rounded-t-lg"
              alt="Amazing View"
            />
            <h3 className="bg-primary-blue-2 text-primary-yellow text-center text-base font-bold p-2 rounded-b-lg">
              AMAZING VIEW
            </h3>
          </div>
          <div>
            <img
              src="/Great-Food.webp"
              className="rounded-t-lg"
              alt="Great Food"
            />
            <h3 className="bg-primary-blue-2 text-primary-yellow text-center text-base font-bold p-2 rounded-b-lg">
              GREAT FOOD
            </h3>
          </div>
        </div>

        {/* TERMS & CONDITION */}
		<div className="flex flex-col items-center justify-center py-10 px-5">
  <h2 className="text-base text-primary-blue-2 font-bold text-center">
    TERMS & CONDITIONS
  </h2>
  <ul className="max-w-2xl mx-auto list-disc text-sm pt-5 space-y-2">
    <li className="">
      Rates do not include alcohol. An alcohol menu is available for
      purchase on board.
    </li>
    <li className="">
      There are different ranges of yachts and boats with several
      capacities, no specific yacht is guaranteed until the time of
      visit.
    </li>
    <li className="">
      Cruise routes are subject to change due to weather and wind
      conditions.
    </li>
    <li className="">
      Cruising times are subject to adjustments based on sunset timings.
    </li>
    <li className="">Rates cannot be combined with other offers.</li>
    <li className="">Guests under 18 years old must be accompanied by an adult.</li>
    <li className="">The offer is valid from 4-28 May 2025</li>
  </ul>
</div>
  {/* CTA Section */}

  <div className="py-10 w-full container mx-auto">
          <div className="flex flex-col md:flex-row rounded-xl items-center  gap-5 justify-center  md:justify-between bg-primary-blue p-5">
            <p className="text-white  text-center md:text-left font-bold bg-primary-blue text-xl rounded ">
              Enjoy a luxurious shared yacht adventure!
            </p>
            <div className="flex flex-col md:flex-row md:gap-10 gap-5">
              <a
                target="_blank"
                className="blue-lined-button"
                href="https://wa.link/vpunoz"
              >
                <FaWhatsapp size={20} />
                WHATSAPP US
              </a>
              <button onClick={handlequote} className="blue-lined-button">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
    
        {/* Split Section with Image + Text */}
        <section
      className="
        flex flex-col md:flex-row-reverse 
        items-center justify-center 
        h-[750px] sm:h-[520px] md:h-[620px] lg:h-[560px] xl:h-[650px]
        overflow-hidden
      "
    >
      {/* Yacht image (only on large screens) */}
      <div className="hidden lg:block w-full h-full">
        <img
          src="/royal.webp"
          alt="Shared Yacht Tour"
          className="object-cover object-center w-full h-full"
        />
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
          Experience Dubai's coastline in an entirely new light with our
          exclusive shared yacht tours. Uniting the thrill of luxury yachting
          with the ease of shared experiences, we offer you the chance to enjoy
          the opulence of Dubai's waters without the extravagant cost of
          chartering an entire yacht. Revel in the stunning vistas, relish in
          the flavors of live BBQ, and savor complimentary refreshments—all
          while forging unforgettable memories with fellow adventurers.
        </p>

        <h2 className="text-white text-center">Affordable Luxury</h2>
        <p className="text-white text-center sm:text-left text-md sm:text-sm xl:text-md pb-10">
          Elevate your Dubai escapade without emptying your wallet. Our shared
          yacht tours are meticulously crafted to provide a taste of the high
          life at a fraction of the price. Share the journey, share the
          splendor, and share the savings as you immerse yourself in the lap of
          affordable luxury.
        </p>

        <h2 className="text-white text-center">Unmatched Amenities</h2>
        <p className="text-white text-center sm:text-left text-md sm:text-sm xl:text-md pb-10">
          Our commitment to your enjoyment knows no bounds. Indulge in the
          expertise of our onboard culinary artists as they create a live BBQ
          spectacle right before your eyes. Additionally, delight in our
          selection of complimentary delicacies and beverages, ensuring that
          your voyage is not just luxurious, but delicious too.
        </p>
      </div>
    </section>
        <Modal2
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          idName="offers_id"
          idValue="46"
        />
      </div>
      <YachtCarousal />
    </>
  );
};

export default Page;
