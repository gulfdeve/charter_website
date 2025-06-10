"use client";
import React, { useRef, useEffect } from "react";
import { Link } from "@/app/i18n/routing";

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
    <div className="w-full mx-auto nav-space relative">
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
        <>
        <div
        className="hidden lg:block absolute inset-0 bg-black opacity-50"
        style={{ pointerEvents: "none" }}
        ></div>
        <div className="container mx-auto block text-center mt-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0">
          <h1 className="mb-4 text-primary-blue-2 lg:text-white">
            All-Inclusive Sharing Yacht Trips In Dubai
          </h1>
          <p className="text-xl mb-2  text-primary-blue-2 lg:text-white  2xl:text-3xl">
            Limited-Time Offer
          </p>
          <p className="text-xl mb-8 text-primary-blue-2 lg:text-white  2xl:text-3xl font-bold">
            50% OFF
          </p>
          <a
            href="https://fareharbor.com/embeds/book/centauruscharter/items/?flow=1038617&full-items=yes&back=https%3A%2F%2Fwww.centauruscharter.com%2F&g4=yes&u=9f3aff5e-960d-40db-8df8-e819cbeaee55&from-ssl=yes&ga=UA-131086702-1%2C48011385.1727165629%3B&ga4t=G-5GL7VDTRSD%2C48011385.1727165629__1742205820%3BG-RK197B1TRV%2C48011385.1727165629__1742205820%3BAW-761360769%2Cundefined__undefined%3BG-319350371%2C48011385.1727165629__1742205821%3B&cp=no&csp=no"
            className="blue-solid-button"
            >
            GET THE OFFER NOW!
          </a>
          </div>
            </>
      ) : section === "home" ? (
        <>
        <div
        className="hidden lg:block absolute inset-0 bg-black opacity-50"
        style={{ pointerEvents: "none" }}
        ></div>
        {/* Blue Background SVG in Front */}
      <div
        className="hidden lg:block absolute inset-0 z-30"
        style={{
          backgroundImage: "url('/images/bg-svg-blue.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
        }}
      ></div>
        <div className="hidden lg:block divider-bottom absolute w-full bottom-0 xl:bottom-0 z-10"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full "><path d="M1200,104.64v15.36H322.45L0,121.91v-21.91s129.69-39.79,154.85-45.98c26.37-6.49,114.85-29.12,171.58-36.22,109.89-13.81,219.26-7.58,323.57,16.47,8.58,2.22,17.21,4.36,25.93,6.36,151.94,34.99,314.51,32.24,473.99-15.34,15.92-5.2,43.33-16.69,50.08-19.75.18,5.52,0,99.1,0,99.1Z" className="fill-primary-blue"></path></svg></div>
        <div className="hidden lg:block divider-bottom absolute w-full -bottom-2 xl:-bottom-2 z-10"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full "><path d="M1200,104.64v15.36H322.45L0,121.91v-21.91s129.69-39.79,154.85-45.98c26.37-6.49,114.85-29.12,171.58-36.22,109.89-13.81,219.26-7.58,323.57,16.47,8.58,2.22,17.21,4.36,25.93,6.36,151.94,34.99,314.51,32.24,473.99-15.34,15.92-5.2,43.33-16.69,50.08-19.75.18,5.52,0,99.1,0,99.1Z" className="fill-white"></path></svg></div>
        <div className="block text-center mt-6 pb-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0 z-40">
          <h1 className="uppercase font-bold mb-4 text-primary-blue-2 lg:text-white lg:text-[32px] p-0  md:px-0 text-xl s:text-2xl sm:text-2xl md:text-3xl 2xl:text-4xl">
          centaurus yacht rental dubai<br />
          </h1>
          <p className="text-sm xl:text-2xl mb-1  text-primary-blue-2 lg:text-white">
          Daily Yacht Sharing Tours In Dubai <br/>
          Including Food and Drinks
          </p>
          <p className="text-sm xl:text-2xl mb-4 text-primary-blue-2 lg:text-white  2xl:text-3xl font-bold">
          Starting AED 99
          </p>
          <Link href="/shared-yacht-tours-dubai"
            className="blue-solid-button"
            >
            GET YOUR TICKET NOW!
          </Link>
        </div>
        </>
      ) : section === "dubai-yachts-winter-offers" ? (
        <>
        <div
        className="hidden lg:block absolute inset-0 bg-black opacity-50"
        style={{ pointerEvents: "none" }}
        ></div>
        <div className="block text-center mt-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0">
          <h1 className="mb-4 text-primary-blue-2 lg:text-white">
            DUBAI YACHTS WINTER OFFERS
          </h1>
          <h2 className="mb-4 text-primary-blue-2 lg:text-white">
            ENJOY UP TO 40% OFF LUXURY YACHTS IN DUBAI
          </h2>
        </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
