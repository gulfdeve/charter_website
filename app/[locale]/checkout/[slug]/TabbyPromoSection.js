'use client';

import { useEffect } from 'react';

export default function TabbyPromoSection({ total }) {
  useEffect(() => {
    const loadTabby = () => {
      // Remove any existing TabbyPromo elements
      const existingPromo = document.querySelector('#TabbyPromo');
      if (existingPromo) {
        existingPromo.innerHTML = '';
      }

      // Create and append the script
      const script = document.createElement('script');
      script.src = 'https://checkout.tabby.ai/tabby-promo.js';
      script.async = true;
      
      script.onload = () => {
        // Wait for TabbyPromo to be available
        const checkTabby = setInterval(() => {
          if (window.TabbyPromo) {
            clearInterval(checkTabby);
            try {
              new window.TabbyPromo({
                selector: '#TabbyPromo',
                currency: 'AED',
                price: total.toFixed(2),
                lang: 'en',
                source: 'product',
                publicKey: process.env.NEXT_PUBLIC_TABBY_PUBLIC_KEY,
                merchantCode: process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE
              });
            } catch (error) {
              console.error('Error initializing Tabby:', error);
            }
          }
        }, 100);

        // Clear interval after 5 seconds if TabbyPromo is not available
        setTimeout(() => clearInterval(checkTabby), 5000);
      };

      document.head.appendChild(script);
    };

    loadTabby();

    // Cleanup function
    return () => {
      const script = document.querySelector('script[src="https://checkout.tabby.ai/tabby-promo.js"]');
      if (script) {
        script.remove();
      }
    };
  }, [total]);

  return (
    <div className="tabby-promo-container">
      <div id="TabbyPromo"></div>
    </div>
  );
} 