'use client'; // Add this if using the app router

import { useEffect, useRef } from 'react';

function FareHarborCalendar() {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (!calendarEl) return;

    const script = document.createElement('script');
    script.src = 'https://fareharbor.com/embeds/script/calendar/centauruscharter/?fallback=simple&full-items=yes&flow=1354497';
    script.async = true;

    calendarEl.appendChild(script);

    return () => {
      if (calendarEl.contains(script)) {
        calendarEl.removeChild(script);
      }
    };
  }, []);

  return <div id="fareharbor-calendar" ref={calendarRef}></div>;
}

export default FareHarborCalendar;
