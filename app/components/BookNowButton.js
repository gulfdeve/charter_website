'use client';
import React, { useState, useEffect } from 'react';

export default function BookNowButton({ fareharborId }) {
  const [bookingUrl, setBookingUrl] = useState('');

  useEffect(() => {
    setBookingUrl(`https://fareharbor.com/embeds/book/centauruscharter/items/${fareharborId}/?full-items=yes&flow=645487&back=${encodeURIComponent(window.location.href)}`);
  }, [fareharborId]);

  // Return a basic URL without the 'back' parameter for initial render
  const fallbackUrl = `https://fareharbor.com/embeds/book/centauruscharter/items/${fareharborId}/?full-items=yes&flow=645487`;

  return (
    <a href={bookingUrl || fallbackUrl} className="blue-solid-button">
      Book Now
    </a>
  );
}
