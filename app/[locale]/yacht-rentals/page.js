"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useEffect, useState } from "react";
import { useData } from "@/app/context/DataContext";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("allYachts");
  const [yachts, setYachts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const { data, loading, error } = useData();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (data?.products) {
      const mappedYachts = data.products.map((item) => {
        let category = ["allYachts"]; // Default category

        // Add custom logic to assign categories
        if (item.per_hour_price > 4000) category.push("premium");
        if (
          item.slug === "56ft-lagoona" ||
          item.slug === "61ft-silvercreek"
        ) {
          category.push("bestSellers");
        }

        return {
          id: item.id,
          image: `https://www.centauruscharter.com/product/images/${item.image}`, // Adjust image path if needed
          title: item.translations[language].name_of_yacht,
          slug: item.slug,
          fareharbor_id: item.fareharbor_id,
          length: item.translations[language].size,
          guests: item.translations[language].guests, // Example of adding guests dynamically
          price: item.per_hour_price,
          category,
        };
      });

      setYachts(mappedYachts);
    }
  }, [data]);

  const renderContent = () => {
    const filteredYachts = yachts.filter((yacht) =>
      yacht.category.includes(activeTab)
    );

    if (loading) return <div className="text-center mt-20">Loading...</div>;
    if (error) return <div className="text-center mt-20">Error: {error}</div>;
    if (filteredYachts.length === 0) {
      return (
        <div className="text-center mt-20">
          No yachts found for this category.
        </div>
      );
    }
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-10 xl:px-32 container mx-auto">
        {filteredYachts.map((yacht) => (
          <div
            key={yacht.id}
            className="flex flex-col justify-center px-5 bg-white rounded-2xl shadow-2xl h-auto relative"
          >
            {/* Badge */}
            {yacht.category.includes("bestSellers") && (
              <div className="absolute top-11 left-[20px] bg-primary-blue text-primary-yellow text-md  font-Montserrat py-1 px-2 ">
                BEST SELLER
              </div>
            )}
            {yacht.category.includes("premium") && (
              <div className="absolute top-11 left-[20px] bg-primary-blue text-primary-yellow text-md  font-Montserrat py-1 px-2 ">
                PREMIUM
              </div>
            )}

            {/* Image */}
            <Link href={`yacht-rentals/${yacht.slug}`}>
              <img
                src={yacht.image}
                className="rounded-2xl mt-5 h-[250px] md:h-[300px] w-full object-cover"
                alt={yacht.title}
              />
            </Link>

            {/* Content */}
            <div className="flex flex-col items-start py-3">
              <Link href={`yacht-rentals/${yacht.slug}`}>
                <h1 className="text-[#0D2343] font-Montserrat text-xl font-bold xl:pt-6 md:pb-2 hover:text-blue-600 transition-all duration-300 cursor-pointer py-1 md:py-0">
                  {yacht.title}
                </h1>
              </Link>
              <p className="font-Montserrat text-xs text-[#0D2343] text-left">
                Length:
                <span className="font-Montserrat text-[#0D2343] font-bold">
                  {" "}
                  {yacht.length}
                </span>{" "}
                | Guests:
                <span className="font-Montserrat text-[#0D2343] font-bold">
                  {" "}
                  {yacht.guests}
                </span>
              </p>
              <h1 className="font-Montserrat text-[#0D2343] font-bold text-xl pt-5 pb-2">
                AED {yacht.price}{" "}
                <span className="font-Montserrat text-[#0D2343]">Per Hour</span>
              </h1>
              <a
                href={`https://fareharbor.com/embeds/book/centauruscharter/items/${yacht.fareharbor_id}/?full-items=yes&flow=645487&back=${encodeURIComponent(
                  currentUrl
                )}`}
                className="flex flex-row items-center justify-center py-2 w-full md:py-2 md:px-4 rounded-md bg-[#e1ae48] text-[#0d2343] hover:bg-[#0d2343] hover:text-[#e1ae48] font-Montserrat font-bold text-base md:text-sm xl:text-lg transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center justify-center pt-10 container mx-auto ">
        <h1 className="font-Montserrat text-[#0D2343] text-center font-bold text-4xl pb-4">
          LUXURY YACHT RENTALS DUBAI
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 text-lg font-semibold py-2  md:py-7 px-2">
        {/* Tabs */}
        <button
          className={`${
            activeTab === "allYachts" ? "text-blue-500" : "text-black"
          } hover:text-blue-500 font-Montserrat`}
          onClick={() => handleTabClick("allYachts")}
        >
          ALL YACHTS
        </button>
        <button
          className={`${
            activeTab === "bestSellers" ? "text-blue-500" : "text-black"
          } hover:text-blue-500 font-Montserrat`}
          onClick={() => handleTabClick("bestSellers")}
        >
          BEST SELLERS
        </button>
        <button
          className={`${
            activeTab === "premium" ? "text-blue-500" : "text-black"
          } hover:text-blue-500 font-Montserrat`}
          onClick={() => handleTabClick("premium")}
        >
          PREMIUM
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
