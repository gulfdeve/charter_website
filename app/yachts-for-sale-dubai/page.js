"use client";
import React, { useEffect } from 'react';
import YachtListings from '@/app/components/cardBuyYacht';

const Page = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/sar3sqhjcf.js';
    script2.async = true;
    script2.type = 'module';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <style>
        {`
          wistia-player[media-id='sar3sqhjcf']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/sar3sqhjcf/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 36.67%;
          }
        `}
      </style>
      <div>
        <wistia-player media-id="sar3sqhjcf" seo="false"></wistia-player>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        FIND YOUR DREAM YACHT
      </h1>
      
      <p className="text-gray-700 text-lg text-center leading-relaxed">
        AT CENTAURUS CHARTER, WE OFFER AN EXCLUSIVE COLLECTION OF LUXURY YACHTS FOR SALE, CATERING TO THE DISCERNING TASTES OF OUR CLIENTS. WHETHER YOU'RE LOOKING FOR A SLEEK, MODERN YACHT OR A CLASSIC, ELEGANT VESSEL, WE HAVE THE PERFECT YACHT TO MEET YOUR NEEDS AND EXCEED YOUR EXPECTATIONS.
      </p>
    </div>
    <YachtListings />
    </>
  );
};

export default Page;