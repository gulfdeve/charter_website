import React, { useEffect, useState } from "react";

export default function Video() {
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
    <div className="video-layout h-[550px] sm:h-[700px] s:h-[600px] lg:h-[600px] md:h-[430px] 3xl:h-[1000px] mt-14 lg:mt-0 ">
      {/* Wistia Video as Background */}
      <style>
        {`
          wistia-player[media-id='rbm8fusw7r']:not(:defined) {
            background: center / cover no-repeat url('https://fast.wistia.com/embed/medias/rbm8fusw7r/swatch');
            display: block;
            filter: blur(5px);
          }
        `}
      </style>
      <div className="video-container">
        {scriptsLoaded && playerReady ? (
          <wistia-player media-id="rbm8fusw7r" seo="false"></wistia-player>
        ) : (
          <p className="text-white text-center">Loading video...</p>
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center  justify-center top-[32%]  md:-top-[22%] lg:-top-[0%] xl:-top-[5%] text-white text-center p-2 md:px-14 lg:px-24 ">
        <h1 className="text-2xl font-bold mb-4 text-black md:text-white  xl:text-3xl 2xl:text-4xl text-shadow">
          
Formula 1: Grand Prix Abu Dhabi 2025 <br/>Experience F1 in Style
        </h1>
       
        <p className="text-sm mb-6 xl:mb-8 text-center  md:text-white text-black  xl:text-lg 2xl:text-xl text-shadow">
        4 days Yacht Rentals, Gourmet Delights, Exclusive Marina Access
        </p>
       
        <button className="blue-solid-button">
     BOOK NOW
        </button>
      </div>
    </div>
  );
}
