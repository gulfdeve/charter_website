"use client";
import React, { useRef, useEffect } from "react";

export default function VideoLocal({ filename, section }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video autoplay works when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to autoplay:", error);
      });
    }
  }, []);

  return (
    <div className="w-full mx-auto relative nav-space">
      {/* Local Video as Background */}
      <div className="" style={{ pointerEvents: "none" }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={filename} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {section === "shared-tours" ? (
        <div className="block text-center mt-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0">
          <h1 className="mb-4 text-primary-blue-2 lg:text-white text-shadow">
            All-Inclusive Sharing Yacht Trips In Dubai
          </h1>
          <p className="text-xl mb-2  text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">
            Limited-Time Offer
          </p>
          <p className="text-xl mb-12 text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">
            50% OFF
          </p>
          <a
            href="https://fareharbor.com/embeds/book/centauruscharter/items/?flow=1038617&full-items=yes&back=https%3A%2F%2Fwww.centauruscharter.com%2F&g4=yes&u=9f3aff5e-960d-40db-8df8-e819cbeaee55&from-ssl=yes&ga=UA-131086702-1%2C48011385.1727165629%3B&ga4t=G-5GL7VDTRSD%2C48011385.1727165629__1742205820%3BG-RK197B1TRV%2C48011385.1727165629__1742205820%3BAW-761360769%2Cundefined__undefined%3BG-319350371%2C48011385.1727165629__1742205821%3B&cp=no&csp=no"
            className="blue-solid-button"
          >
            GET THE OFFER NOW!
          </a>
        </div>
      ) : section === "home" ? (
        <div className="block text-center mt-10 xxs:mb-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-primary-blue-2 lg:text-white lg:text-[32px] p-0 xxs:px-10 md:px-0 xxs:text-2xl xs:text-xl s:text-2xl sm:text-2xl md:text-3xl 2xl:text-4xl    text-shadow">
            Ramadan Iftar Buffet on a Yacht <br />
            International Buffet & Drinks
          </h1>
          <p className="text-sm xl:text-2xl mb-1  text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">
            Every Friday of Ramadan
          </p>
          <p className="text-sm xl:text-2xl mb-4 text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">
            Starting AED 179/Person
          </p>
          <a
            href="https://www.centauruscharter.com/shared-yacht-tours-dubai"
            className="blue-solid-button"
          >
            GET OFFER
          </a>
        </div>
      ) : section === "dubai-yachts-winter-offers" ? (
        <div className="block text-center mt-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0">
          <h1 className="mb-4 text-primary-blue-2 lg:text-white text-shadow">
            DUBAI YACHTS WINTER OFFERS
          </h1>
          <h2 className="mb-4 text-primary-blue-2 lg:text-white text-shadow">
            ENJOY UP TO 40% OFF LUXURY YACHTS IN DUBAI
          </h2>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
