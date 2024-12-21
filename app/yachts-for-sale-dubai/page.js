"use client";
import React, { useEffect } from 'react';

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
    </>
  );
};

export default Page;