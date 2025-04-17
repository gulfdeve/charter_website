import React from "react";
import { useTranslations } from "next-intl";
// Import the JSON data
import routesData from '@/app/components/routesData.json'

const Route = ({ product, slug, header_whatsapp_url }) => {
  const t = useTranslations();

  // Look up the routes data from the imported JSON for the given slug.
  const routes = routesData[slug];

  // Fallback if no routes are found for the slug.
  if (!routes) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <div className="bg-primary-blue w-full h-auto py-10 xl:px-44 md:px-6 px-2">
        <div className="flex flex-col items-center justify-center pt-10 gap-5 py-6 mx-auto container">
          <h2 className="text-primary-yellow text-center font-bold text-2xl xl:text-3xl py-7">
            CRUISING ROUTE
          </h2>
          <p className="text-center text-white text-lg px-4">
            Discover Dubai from the sea like never before. Enjoy our cruising options just for you:
          </p>
        </div>
        <div className="container mx-auto">
          {/* Use the product prop to display the map image */}
          <img
            className="w-full"
            alt="route map of centaurus charter yachts"
            src={`https://www.centauruscharter.net/product/images/${product.map_image}`}
          />
          <div className="grid grid-cols-1 md:grid-cols-4">
            {routes.map((route, idx) => (
              <div key={idx} className={`flex flex-col items-start ${route.bgColorClass}`}>
                <div className={`${route.headerBgColorClass} p-5 text-white uppercase text-center w-full`}>
                  <h3 className="text-white text-lg font-bold">{route.title}</h3>
                  <p className="text-white text-lg">
                    {route.duration} <br />({route.minutes})
                  </p>
                </div>
                <ul className="text-left text-base lg:text-lg py-5 px-10 list-disc font-bold">
                  {route.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-12 mt-5">
              <a
                href={t("header.whatsapp_url")}
                target="_blank"
                rel="noopener noreferrer"
                className="blue-lined-button"
              >
                Get a Quote
              </a>
              <a
                href="/CentaurusCharterRoutemap.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="blue-lined-button"
              >
                Download Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
