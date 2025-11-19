'use client';
import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

const Modalsharedtours = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Helper to read a cookie
  const getCookie = name => {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    return match ? match[2] : null;
  };

  // Helper to set a cookie
  const setCookie = (name, value, days = 1) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  // Helper to remove a cookie
  const deleteCookie = name => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  useEffect(() => {
    // Skip modal if cookie already exists
    if (getCookie('sharedToursModalClosed')) return;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.offsetHeight;
      const scrollPercent = (scrollTop + windowHeight) / docHeight;

      if (scrollPercent >= 0.5 && !isVisible) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // Event to remove the cookie after a page refresh (or unload)
  useEffect(() => {
    const handleBeforeUnload = () => {
      // This deletes the cookie when the page is refreshed or closed
      deleteCookie('sharedToursModalClosed');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setCookie('sharedToursModalClosed', 'true', 1); // expires in 1 day
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full max-w-[95%] md:max-w-[80%] lg:max-w-2xl">
        {/* <a href="https://fareharbor.com/embeds/book/centauruscharter/items/?flow=1038617&full-items=yes"> */}
        <img
          src="/images/pop-up-banner-shared-tours-main-banner-fifty-percent-off.webp"
          alt="Special Offer"
          className="w-full h-auto"
        />
        {/* </a> */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 md:top-3 md:right-3 text-black bg-gray-300 rounded-full p-2 md:p-1.5 text-2xl md:text-3xl"
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default Modalsharedtours;
