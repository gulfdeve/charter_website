'use client';

import React, { createContext, useContext, useEffect } from 'react';

const FareHarborContext = createContext();

export const FareHarborProvider = ({ children }) => {
  const openFareHarborModal = id => {
    const url = `https://fareharbor.com/embeds/book/centauruscharter/items/${id}/?full-items=yes&flow=645487&back=${encodeURIComponent(window.location.href)}`;

    if (typeof window.FH === 'undefined') {
      console.log('FareHarbor script not loaded. Loading now...');
      loadFareHarborScript(() => {
        if (window.FH) {
          window.FH.open(url); // Open the modal after the script is loaded
        } else {
          console.log('Failed to load FareHarbor script.');
        }
      });
    } else {
      window.FH.open(url); // Open the modal directly if the script is loaded
    }
  };

  const loadFareHarborScript = callback => {
    const existingScript = document.querySelector('script[src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://fareharbor.com/embeds/api/v1/?autolightframe=yes';
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log('FareHarbor script loaded.');
        if (callback) callback();
      };

      script.onerror = () => {
        console.log('Failed to load the FareHarbor script.');
      };
    } else if (callback) {
      callback(); // Script is already present, directly invoke the callback
    }
  };

  return <FareHarborContext.Provider value={{ openFareHarborModal }}>{children}</FareHarborContext.Provider>;
};

export const useFareHarbor = () => useContext(FareHarborContext);
