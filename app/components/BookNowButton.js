"use client";
import React, { useState, useEffect } from 'react';

export default function BookNowButton({ fareharborId }) {
  const [bookingUrl, setBookingUrl] = useState('');

  useEffect(() => {
    setBookingUrl(`https://fareharbor.com/embeds/book/centauruscharter/items/${fareharborId}/?full-items=yes&flow=645487&back=${encodeURIComponent(window.location.href)}`);
  }, [fareharborId]);

  // Return a basic URL without the 'back' parameter for initial render
  const fallbackUrl = `https://fareharbor.com/embeds/book/centauruscharter/items/${fareharborId}/?full-items=yes&flow=645487`;

  return (
    <a
      href={bookingUrl || fallbackUrl}
      className="flex flex-row items-center justify-center py-2 w-full md:py-2 md:px-4 rounded-md bg-primary-yellow text-primary-blue hover:bg-primary-blue hover:text-primary-yellow font-bold text-base md:text-sm xl:text-lg transition-all duration-300"
    >
      Book Now
    </a>
  );
}