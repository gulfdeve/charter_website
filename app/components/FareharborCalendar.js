'use client'; // Add this if using the app router

import { useEffect, useRef } from 'react';

function FareHarborCalendar() {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (!calendarRef.current) return;
    
    const script = document.createElement('script');
    script.src = 'https://fareharbor.com/embeds/script/calendar/centauruscharter/?fallback=simple&full-items=yes&flow=1354497';
    script.async = true;
    
    // Append to the calendar div
    calendarRef.current.appendChild(script);
    
    return () => {
      // Cleanup
      if (calendarRef.current && calendarRef.current.contains(script)) {
        calendarRef.current.removeChild(script);
      }
    };
  }, []);

  return <div id="fareharbor-calendar" ref={calendarRef}></div>;
}

export default FareHarborCalendar;