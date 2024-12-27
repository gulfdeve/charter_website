"use client"
import React, { useEffect, useState } from "react";

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
        console.error("Error loading Wistia scripts:", error);
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
    <div className="relative mx-auto w-full h-[159px] lg:h-[350px] xl:h-[600px] overflow-hidden">
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
     
    </div>
  );
}
