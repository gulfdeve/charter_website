'use client'
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
        await loadScript("https://fast.wistia.com/embed/rbm8fusw7r.js", "module", true);
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
    <div className="relative mx-auto w-full h-[413px] lg:h-[780px] md:h-[330px] overflow-hidden">
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

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center pt-40 md:pt-0 justify-center top-1/5 text-white text-center p-2">
        <h1 className="text-3xl font-bold mb-2 text-black md:text-white font-Montserrat xl:text-4xl 2xl:text-5xl text-shadow">
        Luxury Shared Experience
        </h1>
        <h1 className="text-sm xl:text-3xl  mb-4 xl:mb-3 text-black md:text-white font-Montserrat 2xl:text-4xl ">
        Including drinks and food
        </h1>
       
        <h2 className="text-sm mb-6 xl:mb-8 font-Montserrat text-black md:text-white xl:text-3xl 2xl:text-3xl text-shadow">
        From AED 149
        </h2>
        <button className="px-6 py-2 xl:text-xl 2xl:text-3xl  2xl:px-8 2xl:py-4 font-Montserrat bg-[#0d2343] text-[#e1ae48] font-semibold rounded hover:bg-blue-500">
          NYE TICKETS
        </button>
      </div>

    </div>
  );
}
