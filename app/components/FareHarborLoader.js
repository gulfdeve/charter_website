"use client";
import { useEffect } from 'react';

const FareHarborLoader = () => {
  useEffect(() => {
    // Function to dynamically load the FareHarbor script
    const loadFareHarborScript = (callback) => {
      const script = document.createElement('script');
      script.src = 'https://fareharbor.com/embeds/api/v1/?autolightframe=yes';
      script.defer = true; // Use defer to prevent blocking
      document.body.appendChild(script);

      // Execute the callback when the script is fully loaded
      script.onload = () => {
        console.log('FareHarbor script loaded.');
        if (callback) callback();
      };
    };

    // Add event listener for all clicks on links starting with "https://fareharbor.com"
    const handleClick = (event) => {
      const target = event.target;
      console.log("coming here clicked");

      // Check if the clicked element is a link and its href starts with the desired URL
      if (
        (target.tagName === 'A' && target.href.startsWith('https://fareharbor.com')) || 
        (target.tagName === 'IMG' && target.closest('a') && target.closest('a').href.startsWith('https://fareharbor.com'))
      ) {
        event.preventDefault(); // Prevent the link from redirecting immediately
        console.log("coming here clicked2");
        console.log('FareHarbor link clicked, loading script...');

        // Load the FareHarbor script and wait for it to load
        loadFareHarborScript(() => {
          console.log('Script loaded. Triggering click again...');

          // Trigger the original click event again after the script loads
          target.click();
        });
      }
    };

    document.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null; // This component does not render anything
};

export default FareHarborLoader;
