import React, { useEffect, useRef, useState } from 'react';

const CalendarSection = () => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(500); // Start taller
  
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    // Function to attempt to adjust height
    const checkContentHeight = () => {
      try {
        if (iframe.contentWindow && iframe.contentWindow.document.body) {
          const scrollHeight = iframe.contentWindow.document.body.scrollHeight;
          const newHeight = scrollHeight + 50; // Add buffer
          setIframeHeight(Math.max(newHeight, 500)); // Never smaller than minimum
        }
      } catch (e) {
        // CORS restriction
      }
    };
    
    // Run on load
    iframe.onload = checkContentHeight;
    
    // Message event listener (if the iframe content is configured to send them)
    const handleMessage = (event) => {
      if (event.origin === "https://www.centauruscharter.net") {
        if (event.data && event.data.height) {
          setIframeHeight(Math.max(event.data.height, 400));
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    // Polling as a fallback (check every 2 seconds)
    const intervalId = setInterval(checkContentHeight, 2000);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <iframe
        ref={iframeRef}
        src="https://www.centauruscharter.net/calendar.html"
        title="Centaurus Charter Calendar"
        className="w-[450px] mx-auto"
        style={{ height: `${iframeHeight}px` }}
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
      />
    </div>
  );
};

export default CalendarSection;