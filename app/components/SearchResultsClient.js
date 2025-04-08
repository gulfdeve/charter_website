"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Modal3 from "@/app/components/Modal3";

export default function SearchResultsClient({ paginatedHits, currentPage, totalPages, previousPageLink, nextPageLink }) {
  const modalRef = useRef(null);
  const [selectedVessel, setSelectedVessel] = useState(null);

  const handleQuote = (e, vessel) => {
    e.preventDefault();
    setSelectedVessel(vessel);
    modalRef.current?.open();
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Search Results</h2>
      {paginatedHits && paginatedHits.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-8">
            {paginatedHits.map((vessel, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden  max-w-md w-full flex flex-col"
              >
                <Link href={`/yachts-for-sale-dubai/${vessel.slug || "some-default"}`}>
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={
                        vessel.hero
                          ? `https://radar.ankor.io${vessel.hero.replace("{imageVariant}", "2560w")}`
                          : "/fallback-image.jpg"
                      }
                      alt={vessel.name || "Yacht Image"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                <div className="p-6 flex flex-col justify-between grow">
                  <Link href={`/yachts-for-sale-dubai/${vessel.slug || "some-default"}`}>
                    <h2 className="text-2xl font-bold text-navy-900 mb-4">
                      {vessel.name || "Unnamed Yacht"}
                    </h2>
                  </Link>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="border-b-2 border-gray-200">
                      <p className="text-[#125589] font-medium mb-1">Build:</p>
                      <p className="text-gray-900 font-bold">{vessel.make || "N/A"}</p>
                    </div>
                    <div className="border-b-2 border-gray-200">
                      <p className="text-[#125589] font-medium mb-1">Cabins:</p>
                      <p className="text-gray-900 font-bold">{vessel.cabins || "N/A"}</p>
                    </div>
                    <div className="border-b-2 border-gray-200">
                      <p className="text-[#125589] font-medium mb-1">Length:</p>
                      <p className="text-gray-900 font-bold">{vessel.length || "N/A"}</p>
                    </div>
                    <div className="border-b-2 border-gray-200">
                      <p className="text-[#125589] font-medium mb-1">Guests:</p>
                      <p className="text-gray-900 font-bold">{vessel.sleeps || "N/A"}</p>
                    </div>
                    <div className="border-b-2 border-gray-200">
                      <p className="text-[#125589] font-medium mb-1">Year:</p>
                      <p className="text-gray-900 font-bold">{vessel.builtYear || "N/A"}</p>
                    </div>
                    <div className="border-b-2 border-gray-200">
                      <p className="text-[#125589] font-medium mb-1">Price:</p>
                      <p className="text-gray-900 font-bold">
                        {vessel.price ? `$${vessel.price.toLocaleString()}` : "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href={`/yachts-for-sale-dubai/${vessel.slug || "some-default"}`}
                      onClick={(e) => handleQuote(e, vessel)}
                      className="blue-solid-button text-center"
                    >
                      KNOW MORE
                    </Link>
                    <button className="blue-solid-button">INQUIRE NOW</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-8 pb-16 flex items-center space-x-4">
            {previousPageLink && (
              <Link href={previousPageLink} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                Previous
              </Link>
            )}
            <span>
              Page {currentPage} of {totalPages}
            </span>
            {nextPageLink && (
              <Link href={nextPageLink} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
                Next
              </Link>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">No results found.</p>
      )}

      <Modal3
        ref={modalRef}
        idName="vessel_id"
        idValue={selectedVessel?.slug}
        selectedVessel={selectedVessel}
      />
    </div>
  );
}