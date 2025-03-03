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
    <div className="relative mx-auto w-full h-[413px] sm:h-[560px] s:h-[425px] lg:h-[590px] md:h-[560px] xl:h-[590px] 3xl:h-[660px] overflow-hidden mt-14 md:mt-0">
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
      <div className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
        {scriptsLoaded && playerReady ? (
          <wistia-player media-id="x5zlv6005o" seo="false"></wistia-player>
        ) : (
          <p className="text-white text-center">Loading video...</p>
        )}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center  justify-center top-[32%] sm:top-[51%] s:top-[49%] md:top-[57%] lg:-top-[35%] xl:-top-[10%]  text-white text-center p-2 md:px-14 lg:px-24 ">
        <h1 className="text-4xl font-bold mb-4 text-primary-blue-2 lg:text-white  xl:text-xl 2xl:text-4xl text-shadow">
          All-Inclusive Sharing Yacht Trips In Dubai
        </h1>
        <h1 className="text-sm xl:text-2xl mb-1  text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">
          Buy 1 Get 1 Free
        </h1>
        <h1 className="text-sm xl:text-2xl mb-4 text-primary-blue-2 lg:text-white  2xl:text-3xl text-shadow">
          Starting AED 149
        </h1>

        <button className="blue-solid-button">GET THE OFFER NOW!</button>
      </div>
    </div>
  );
}
