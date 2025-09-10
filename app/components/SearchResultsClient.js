"use client";

import React, { useRef, useState } from "react";
import { Link } from "@/app/i18n/routing";
import Modal3 from "@/app/components/Modal3";

export default function SearchResultsClient({
  paginatedHits,
  currentPage,
  totalPages,
  previousPageLink,
  nextPageLink,
  rentalPeriod,
  onPageChange
}) {
  const modalRef = useRef(null);
  const [selectedVessel, setSelectedVessel] = useState(null);

  const handleQuote = (e, vessel) => {
    e.preventDefault();
    setSelectedVessel(vessel);
    modalRef.current?.open();
  };

  const handlePageClick = (e, pageNum) => {
    e.preventDefault();
    onPageChange(pageNum);
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center px-4 container mx-auto">
      <h2 className="text-primary-blue font-semibold text-center mb-6">Search Results</h2>
      {paginatedHits && paginatedHits.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {paginatedHits.map((vessel, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full flex flex-col"
              >
                <Link href={`/yachts-for-sale-dubai/${vessel.slug || "some-default"}`}>
                  <div className="w-full h-48 overflow-hidden">
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

                <div className="p-4 flex flex-col justify-between grow">
                  <Link href={`/yachts-for-sale-dubai/${vessel.slug || "some-default"}`}>
                    <h3 className=" font-bold text-primary-blue mb-3">
                      {vessel.name || "Unnamed Yacht"}
                    </h3>
                  </Link>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="border-b border-gray-200">
                      <h6 className="text-[#125589]  font-medium mb-1">Build:</h6>
                      <h6 className="text-gray-900  font-bold">{vessel.make || "N/A"}</h6>
                    </div>
                    <div className="border-b border-gray-200">
                      <h6 className="text-[#125589]  font-medium mb-1">Cabins:</h6>
                      <h6 className="text-gray-900  font-bold">{vessel.cabins || "N/A"}</h6>
                    </div>
                    <div className="border-b border-gray-200">
                      <h6 className="text-[#125589]  font-medium mb-1">Length:</h6>
                      <h6 className="text-gray-900  font-bold">{vessel.length || "N/A"}</h6>
                    </div>
                    <div className="border-b border-gray-200">
                      <h6 className="text-[#125589]  font-medium mb-1">Guests:</h6>
                      <h6 className="text-gray-900  font-bold">{vessel.sleeps || "N/A"}</h6>
                    </div>
                    <div className="border-b border-gray-200">
                      <h6 className="text-[#125589]  font-medium mb-1">Year:</h6>
                      <h6 className="text-gray-900  font-bold">{vessel.builtYear || "N/A"}</h6>
                    </div>
                    <div className="border-b border-gray-200">
                      <h6 className="text-[#125589]  font-medium mb-1">Price:</h6>
                      <h6 className="text-gray-900 font-bold">
                        {vessel.price ? `$${vessel.price.toLocaleString()}` : "N/A"}
                      </h6>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 s:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2">
                 <Link href="https://wa.link/i4yciu" target="_blank" >
                  <button className="w-full blue-solid-button">WhatsApp Us</button>
                  </Link>
                  <button onClick={(e) => handleQuote(e, vessel)} className="blue-solid-button">
                    INQUIRE NOW
                  </button>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 pb-12 flex items-center space-x-4">
            {previousPageLink && (
              <button
                onClick={(e) => handlePageClick(e, currentPage - 1)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                Previous
              </button>
            )}
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            {nextPageLink && (
              <button
                onClick={(e) => handlePageClick(e, currentPage + 1)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                Next
              </button>
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
        rentalPeriod={rentalPeriod}
      />
    </div>
  );
}
