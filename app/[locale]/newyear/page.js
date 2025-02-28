import React from "react";
import Videonewyear from "@/app/components/Videonewyear";
import Nycard from "@/app/components/Nycard";
const Page = () => {
  return (
    <div className="bg-white bg-opacity-90 w-full min-h-screen mt-14 md:mt-0">
      <Videonewyear />
      <div className="bg-[url('/nye24.webp')] bg-cover bg-center bg-no-repeat min-h-screen ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pb-10 ">
          <h1 className=" text-primary-yellow text-center font-bold text-4xl lg:px-5 xl:text-5xl pb-4 pt-12">
            NEW YEAR'S EVE CELEBRATION ON A LUXURY YACHT
          </h1>

          <p className=" text-white text-center text-base xl:text-xl px-3 lg:px-12 xl:px-56">
            New year's Offer on Yacht you don't want to miss
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center md:px-10 xl:px-40 2xl:px-40 rounded-3xl overflow-hidden">
          <div>
            <img
              src="/mainNYE.webp"
              className="xl:w-[140rem] sm:w-[170rem] lg:w-[160rem] md:h-[543px] xl:h-[552px] lg:h-[504px] rounded-3xl lg:rounded-none"
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-primary-yellow px-5 py-5 xl:w-[140rem] sm:w-[43rem] lg:w-[160rem] md:h-[541px] xl:h-[552px] lg:h-[504px] lg:rounded-none rounded-3xl md:px-10">
            <h1 className=" text-primary-blue-2 text-center font-bold text-2xl xl:text-3xl pt-7 pb-3">
              NYE YACHT PARTY TICKETS
            </h1>
            <p className=" text-primary-blue text-center text-md sm:text-sm xl:text-md pb-10">
              31 December 2024 | Dubai Harbour | 9 PM - 3 AM
            </p>
            <p className=" text-primary-blue text-center text-md sm:text-sm xl:text-md pb-10 xl:px-5">
              Celebrate New Year’s Eve in ultimate style aboard a luxury yacht
              in Dubai! Enjoy a night of glamour, non-stop entertainment,
              premium food and drinks, and breathtaking views of the city’s
              iconic skyline. Sail into 2025 under the stars with unforgettable
              memories and a dazzling atmosphere.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-5">
              <div className="flex flex-col items-center justify-center">
                <h1 className=" text-primary-blue text-center text-md sm:text-sm xl:text-md xl:px-5">
                  Ticket price starts at
                </h1>
                <h1 className=" text-primary-blue-2 font-bold text-center text-3xl py-3 ">
                  AED 1,799
                </h1>
                <h1 className=" text-primary-blue text-center text-md sm:text-sm xl:text-md pb-5 xl:px-5">
                  per person
                </h1>
              </div>
              <button className="flex flex-row items-center text-center justify-center py-2 px-6 md:py-4 md:px-4 rounded-2xl bg-primary-blue-2 text-primary-yellow  font-bold text-[20px] md:text-sm xl:text-lg">
                GET YOUR TICKETS NOW
              </button>
            </div>
            <h1 className=" text-primary-blue text-center text-md sm:text-sm xl:text-md pt-5 xl:px-5">
              Limited tickets are available.
              <br /> T&Cs apply.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-10 mb-5">
          <span className="px-4 text-2xl 2xl:text-4xl font-semibold  text-primary-yellow">
            TICKETS INCLUSION
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 py-10 xl:px-52">
  {[
    { src: "/LIVE DJ & DANCE FLOOR.webp", text: "LIVE DJ & DANCE FLOOR" },
    { src: "/SPECTACULARVIEWS.webp", text: "SPECTACULAR VIEWS" },
    { src: "/PREMIUM DRINKS.webp", text: "PREMIUM DRINKS" },
    { src: "/GOURMET FOOD.webp", text: "GOURMET FOOD" },
  ].map((item, index) => (
    <div key={index} className="flex flex-col">
      <img src={item.src} className="rounded-t-xl w-full" />
      <h1 className="bg-primary-yellow text-primary-blue-2 text-center  text-xl font-bold p-5 rounded-b-xl md:px-10 lg:px-0 h-20 flex items-center justify-center">
        {item.text}
      </h1>
    </div>
  ))}
</div>

        <div className="lg:px-48 px-5">
          <div className="flex flex-col items-center justify-center w-full mt-10 mb-5 px-10">
            <h1 className="px-4 text-xl 2xl:text-4xl font-semibold  text-primary-yellow">
              Dress Code
            </h1>
            <p className="text-lg  text-white text-center">
              Glow Up, Show Up, And Sparkle All Night Long—It's A Night For
              Glitter, Shimmer, And Head-Turning Sparkle.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-10 mb-5 px-10">
            <h1 className="px-4 text-xl 2xl:text-4xl font-semibold  text-primary-yellow">
              RSVP
            </h1>
            <p className="text-lg  text-white text-center">
              Secure your spot today, Bookings are non-refundable after 15
              December 2024.
            </p>
          </div>
          <div className="flex items-center justify-center w-full my-6">
            <hr className="flex-grow border-primary-yellow-dark" />
            <span className="px-4 text-2xl 2xl:text-4xl font-semibold  text-primary-yellow text-center">
              NEW YEAR'S EVE <br />
              PRIVATE YACHT RENTAL PACKAGES
            </span>
            <hr className="flex-grow border-primary-yellow-dark" />
          </div>
          <p className=" text-primary-yellow text-center text-md sm:text-sm xl:text-md pb-10">
            31 December 2024 | Dubai Harbour | 9 PM - 3 AM
          </p>
          <p className=" text-white text-center text-md sm:text-sm xl:text-md pb-10">
            Celebrate the most glamorous night of the year in style with our New
            Year's Eve Yacht Rental in Dubai. As the city lights up with
            dazzling fireworks and festivities, there's no better way to start
            the New Year than on a private luxury yacht.
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="px-4 text-xl 2xl:text-4xl  text-left font-semibold  text-primary-yellow">
              AMENETIES
            </h1>
            <ul className="list-disc  text-white pl-5">
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
                Cruise around Iconic Locations in Dubai and take in the stunning
                views of the city.
              </li>
            </ul>
            <button className="flex flex-row items-center text-center justify-center py-2 px-6 md:py-4 md:px-6 rounded-lg bg-transparent text-primary-yellow  font-bold text-[20px] md:text-lg xl:text-2xl outline outline-primary-yellow ">
              PREMIUM YACHTS
            </button>
          </div>
        </div>
        </div>
        <Nycard />
      </div>
      <div className="bg-black w-full h-full  ">
        <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center px-7">
          <h1 className=" text-primary-yellow text-lg font-bold text-center ">
            EXTRA SERVICES ON DEMAND
          </h1>
          <h1 className=" text-white text-xs ">
            (48 HOURS NOTICE PERIOD)
          </h1>
          <h1 className=" text-white text-xs  text-center py-2">
            For those looking to have a touch of luxury to their celebration, we
            offer additional services.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 px-4 xl:px-10">
          <div>
            <img src="/drinks.webp" />
            <h1 className=" text-white font-bold text-sm py-7 text-center">
              Premium Drinks
            </h1>
          </div>
          <div>
            <img src="/Catering.webp" />
            <h1 className=" text-white font-bold text-sm py-7 text-center">
              Catering Service
            </h1>
          </div>
          <div>
            <img src="/decorations.webp" />
            <h1 className=" text-white font-bold text-sm py-7 text-center">
              Party Decoration
            </h1>
          </div>
          <div>
            <img src="/cake.webp" />
            <h1 className=" text-white font-bold text-sm py-7 text-center">
              New Year Cake
            </h1>
          </div>
          <div>
            <img src="/DJ.webp" />
            <h1 className=" text-white font-bold text-sm py-7 text-center">
              Professional DJ Services
            </h1>
          </div>
          <div>
            <img src="/photographer.webp" />
            <h1 className=" text-white font-bold text-sm py-7 text-center px-3">
              Photographer & Videographer Service
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-7">
          <button className="flex items-center justify-center gap-2  px-4 py-2 md:text-sm  bg-primary-yellow text-primary-blue border border-primary-yellow-dark font-bold rounded-md hover:bg-primary-yellow-dark transition">
            CONTACT US
          </button>
          <h1 className=" text-white text-xs  text-center py-4 px-3">
          To secure the best deal for your New Year's Eve celebration on the water, reach out to us today.
          </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[url('/atlantis-royal.jpg')] bg-cover bg-center bg-no-repeat min-h-screen">
        <div className="flex flex-col items-start justify-start px-16 lg:px-0 lg:pl-10 xl:w-1/2 md:w-10/12 lg:w-1/2">

          <h1 className=" text-white text-xl ">Why Choose Our New Year's Eve Yacht Rental?</h1>
          <ul className="list-disc  pl-4 xl:pl-10  text-white py-5">
            <li>Unforgettable Views: Sail through the heart of Dubai and witness the breathtaking fireworks display against the iconic skyline. Our yachts offer unrivaled panoramic views, ensuring you have the best seat in the house.</li>
            <li>Luxurious Accommodations: Our fleet of yachts is designed for your comfort and pleasure. Relax in spacious cabins, open decks, and elegant lounges while enjoying the celebrations.</li>
            <li>Customized Packages: We understand that every celebration is unique. Choose from our variety of packages that cater to different group sizes and preferences, including catering and entertainment options.</li>
            <li>Professional Crew: Our experienced crew members are dedicated to providing exceptional service, ensuring your NYE celebration is nothing short of perfection.</li>
          </ul>
          <h1 className=" text-white text-xl ">How to Book Your New Year Yacht Offer</h1>
          <ul className="list-disc  pl-4 xl:pl-10 text-white py-5">
            <li>Select Your Yacht: Browse our impressive fleet and choose the yacht that suits your group size and preferences.</li>
            <li>Choose Your Package: Tailor your New Year's Eve experience by selecting the package that best matches your desires. Our team is here to assist you with all your needs.</li>
            <li>Confirm Your Reservation: Contact our booking team to confirm your reservation and make the necessary arrangements for your celebration.</li>
           
          </ul>
          <h1 className=" text-white text-xl ">New Year's Eve in Dubai</h1>
          <h1 className=" text-white text-md py-8 ">Dubai is renowned for its extravagant New Year Event, and our yachts provide the ultimate vantage point to enjoy the festivities. From the mesmerizing fireworks at the Burj Khalifa to the spectacular shows along the Palm Jumeirah, you won't miss a moment of the action.</h1>
          <h1 className=" text-white text-xl ">Book Now and Make Your Reservation</h1>
          <h1 className=" text-white text-md py-8 ">Don't miss out on this exclusive opportunity to welcome the New Year in absolute luxury. Our New Year's Eve Yacht Rentals are in high demand, so make your reservation today to secure your spot. Contact us now to discuss your preferences and book your private New Year's Eve Yacht Rental in Dubai. Let's create memories that will last a lifetime as you sail into the New Year with style and opulence.</h1>
        </div>
        
        </div>
      </div>
    
    </div>
  );
};

export default Page;
