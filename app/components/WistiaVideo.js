'use client';
import React, { useEffect, useState } from 'react';

export default function WistiaVideo({ video_id }) {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    const loadScript = (src, type = 'text/javascript', isModule = false) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.type = isModule ? 'module' : type;
      document.body.appendChild(script);
      return script;
    };

    const loadWistiaScripts = () => {
      // Load scripts in parallel instead of sequentially
      const playerScript = loadScript('https://fast.wistia.com/player.js');
      // const embedScript = loadScript(
      //   "https://fast.wistia.com/embed/rbm8fusw7r.js",
      //   "module",
      //   true
      // );

      // Set scripts as loaded when player.js is ready (main dependency)
      playerScript.onload = () => {
        setScriptsLoaded(true);

        // Check if custom element is defined
        if (window.customElements) {
          if (customElements.get('wistia-player')) {
            setPlayerReady(true);
          } else {
            customElements
              .whenDefined('wistia-player')
              .then(() => setPlayerReady(true))
              .catch(err => console.error('Error with custom element:', err));
          }
        }
      };

      playerScript.onerror = error => console.log('Error loading Wistia player script:', error);
      // embedScript.onerror = (error) => console.log("Error loading Wistia embed script:", error);
    };

    loadWistiaScripts();

    return () => {
      // Clean up dynamically added scripts
      const scripts = document.querySelectorAll("script[src*='wistia']");
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  return (
    <div className="w-full mx-auto relative">
      {/* Wistia Video as Background */}
      <style>
        {`
          wistia-player[media-id='${video_id}']:not(:defined) {
            background: center / cover no-repeat url('https://fast.wistia.com/embed/medias/${video_id}/swatch');
            display: block;
            filter: blur(5px);
          }
        `}
      </style>
      <div className="" style={{ pointerEvents: 'none' }}>
        {scriptsLoaded && playerReady ? <wistia-player media-id={video_id} seo="false"></wistia-player> : <p className="text-white text-center">Loading video...</p>}
      </div>

      <div className="block text-center mt-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0">
        <h1 className="text-4xl font-bold mb-4 text-primary-blue-2 lg:text-white  xl:text-xl 2xl:text-4xl text-shadow">All-Inclusive Sharing Yacht Trips In Dubai</h1>
        <p className="text-sm xl:text-2xl mb-1  text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">Buy 1 Get 1 Free</p>
        <p className="text-sm xl:text-2xl mb-4 text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">Starting AED 149</p>
        <a
          href="https://fareharbor.com/embeds/book/centauruscharter/items/?flow=1038617&full-items=yes&back=https%3A%2F%2Fwww.centauruscharter.com%2F&g4=yes&u=9f3aff5e-960d-40db-8df8-e819cbeaee55&from-ssl=yes&ga=UA-131086702-1%2C48011385.1727165629%3B&ga4t=G-5GL7VDTRSD%2C48011385.1727165629__1742205820%3BG-RK197B1TRV%2C48011385.1727165629__1742205820%3BAW-761360769%2Cundefined__undefined%3BG-319350371%2C48011385.1727165629__1742205821%3B&cp=no&csp=no"
          className="blue-solid-button"
        >
          GET THE OFFER NOW!
        </a>
      </div>
    </div>
  );
}
