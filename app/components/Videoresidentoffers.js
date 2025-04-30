"use client";
import React, { useEffect, useState } from "react";

export default function Videosharedtours() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    const loadScript = (src, type = "text/javascript", isModule = false) =>
      new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.type = isModule ? "module" : type;
        script.onload = () => resolve(true);
        script.onerror = (error) => reject(error);
        document.body.appendChild(script);
      });

    const loadWistiaScripts = async () => {
      try {
        await loadScript("https://fast.wistia.com/player.js");
        await loadScript(
          "https://fast.wistia.com/embed/rbm8fusw7r.js",
          "module",
          true
        );
        setScriptsLoaded(true);

        // Wait for the custom element to be defined
        if (window.customElements) {
          await customElements.whenDefined("wistia-player");
          setPlayerReady(true);
        }
      } catch (error) {
        console.log("Error loading Wistia scripts:", error);
      }
    };

    loadWistiaScripts();

    return () => {
      // Clean up dynamically added scripts
      const scripts = document.querySelectorAll("script[src*='wistia']");
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return (
    <>
    <div className="lg:relative mx-auto w-full  lg:h-[400px] xl:h-[580px] 3xl:h-[660px] overflow-hidden mt-14 md:mt-0">
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
      <div className="lg:absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
        {scriptsLoaded && playerReady ? (
          <wistia-player media-id="x5zlv6005o" seo="false"></wistia-player>
        ) : (
          <p className="text-white text-center">Loading video...</p>
        )}
      </div>

      <div className="block text-center mt-10 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:mt-0 z-40">
        
        <h1 className="uppercase text-xl font-bold mb-4 text-primary-blue-2 lg:text-white lg:text-[32px] p-0 md:px-0 md:text-3xl 2xl:text-4xl">
         
UAE RESIDENTS SUMMER YACHTS OFFERS
        </h1>
        <h2 className="text-xl font-bold mb-4 text-primary-blue-2 lg:text-white lg:text-[24px] p-0 md:px-0 md:text-3xl 2xl:text-3xl">
        Unmatched Discount for a Luxury Experience
                 </h2>
        
       

        
      </div>
    </div>
    </>
  );
}
