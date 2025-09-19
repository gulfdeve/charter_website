"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link'

export default function Videonewyear() {
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
        await loadScript("https://fast.wistia.com/embed/xbazr2azne.js", "module", true);
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
    <div className="relative mx-auto w-full h-[116px] s:h-[156px] md:h-[280px] lg:h-[350px] xl:h-[526px] overflow-hidden mt-14 md:mt-0">
      {/* Wistia Video as Background */}
      <style>
        {`
          wistia-player[media-id='xbazr2azne']:not(:defined) {
            background: center / cover no-repeat url('https://fast.wistia.com/embed/medias/xbazr2azne/swatch');
            display: block;
            filter: blur(5px);
          }
        `}
      </style>
      <div className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
        {scriptsLoaded && playerReady ? (
          <wistia-player media-id="xbazr2azne" seo="false"></wistia-player>
        ) : (
          <p className="text-white text-center">Loading video...</p>
        )}
      </div>

      {/* Content Overlay */}
      <div className="hidden lg:block">
      <div className="absolute inset-0 z-10 flex flex-col items-center  justify-center top-[32%] sm:top-[42%] s:top-[49%] md:-top-[22%] lg:-top-[6%] xl:-top-[0%] text-white text-center p-2 md:px-14 lg:px-24 ">
        <h1 className="text-4xl font-bold mb-4 text-black md:text-white  xl:text-xl 2xl:text-4xl text-shadow">
        NEW YEAR'S EVE YACHT PARTY IN DUBAI
        </h1>
        <p className="text-sm xl:text-2xl font-bold mb-4 text-black md:text-white  2xl:text-3xl text-shadow">
        Celebrate the most glamorous night of the year
        </p>
        <Link href="https://wa.link/t445km" target="_blank" >
        <button className="blue-solid-button">BOOK NOW</button>
        </Link>
      </div>
      </div>
     
    </div>
  );
}
