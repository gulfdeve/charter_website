'use client';
import React, { useEffect, useState } from 'react';

export default function Videosharedtours() {
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
    <div className="w-full mx-auto relative pt-14">
      {/* Wistia Video as Background */}
      <style>
        {`
          wistia-player[media-id='x5zlv6005o']:not(:defined) {
            background: center / cover no-repeat url('https://fast.wistia.com/embed/medias/x5zlv6005o/swatch');
            display: block;
            filter: blur(5px);
          }
        `}
      </style>
      <div className="" style={{ pointerEvents: 'none' }}>
        {scriptsLoaded && playerReady ? <wistia-player media-id="x5zlv6005o" seo="false"></wistia-player> : <p className="text-white text-center">Loading video...</p>}
      </div>

      <div className="block text-center mt-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0">
        <h1 className="text-4xl font-bold mb-4 text-primary-blue-2 lg:text-white  xl:text-xl 2xl:text-4xl text-shadow">All-Inclusive Sharing Yacht Trips In Dubai</h1>
        <h1 className="text-sm xl:text-2xl mb-1  text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">Buy 1 Get 1 Free</h1>
        <h1 className="text-sm xl:text-2xl mb-4 text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">Starting AED 149</h1>
        <button className="blue-solid-button">GET THE OFFER NOW!</button>
      </div>
    </div>
  );
}
