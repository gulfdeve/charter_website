'use client';
import React, { useState } from 'react';

export default function TourCardsClient({ toursData }) {
  const [showDetails, setShowDetails] = useState(toursData.map(() => false));

  // Toggle details for a single card
  const toggleDetails = index => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4 container mx-auto">
      {toursData.map((tour, index) => (
        <div key={index} className="bg-white rounded-lg shadow-custom duration-300 p-3 lg:p-5 space-y-3 flex flex-col h-full">
          {/* Image Wrapper */}
          <div className="relative">
            <img src={tour.image} alt={tour.title} className="rounded-lg w-full" />
            {tour.id === 4 ? <p className="text-[12px] text-center text-primary-blue-2 py-1 font-bold">Limited time offer! 15% OFF is valid on booking made between 18-30 November only</p> : <p className="text-[8px] text-center text-primary-blue-2 py-1 font-bold">&nbsp;</p>}
            {/* Overlay Container */}
            <div className="absolute top-2">
              {tour.yellowHeadline && (
                <div className="bg-primary-blue-2 px-3 py-1">
                  <div className="text-base font-bold uppercase  text-white">{tour.yellowHeadline}</div>
                  <div className="text-[11px] font-bold uppercase  text-white">{tour.smallHeadline}</div>
                </div>
              )}
              {tour.blueHeadline && (
                <div className="bg-primary-yellow-light px-3 py-1">
                  <p className="text-xs lg:text-xs uppercase text-primary-blue-2 font-bold">{tour.blueHeadline}</p>
                </div>
              )}
            </div>
          </div>

          {/* Title and Toggle Button */}
          <div className="text-center">
            <h3 className="text-base md:text-xl text-primary-blue-2 text-center py-2">{tour.title}</h3>
            <button onClick={() => toggleDetails(index)} className="bg-gray-100 text-gray-400 w-full py-2 rounded font-semibold text-sm hover:bg-gray-200 transition-colors duration-300 mb-2">
              {showDetails[index] ? 'Hide Details' : 'Show Details'}
            </button>
          </div>

          {/* Basic info with gradual opacity effect */}
          <div className="relative flex-grow">
            {/* Gradient overlay that appears when details are hidden */}
            {!showDetails[index] && <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent from-0% via-white/0 via-30% to-white/90 to-100% pointer-events-none z-10"></div>}

            <div className="space-y-3">
              <div className="flex flex-row gap-3 items-center">
                <p className="text-primary-grey text-sm">
                  <span className="font-bold">Cruising Time:</span> {tour.cruisingTime}
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <p className="text-primary-grey text-sm">
                  <span className="font-bold">Adult (12+):</span>{' '}
                  {tour.newAdultPrice ? (
                    <>
                      <span className="line-through">{tour.adultPrice}</span> <span className="text-primary-blue-2 font-bold">{tour.newAdultPrice}</span>
                    </>
                  ) : (
                    tour.adultPrice
                  )}
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <p className="text-primary-grey text-sm">
                  <span className="font-bold">Child (4-11):</span>{' '}
                  {tour.newChildPrice ? (
                    <>
                      <span className="line-through">{tour.childPrice}</span> <span className="text-primary-blue-2 font-bold">{tour.newChildPrice}</span>
                    </>
                  ) : (
                    tour.childPrice
                  )}
                </p>
              </div>

              <div className="flex flex-row gap-2.5 items-center">
                <p className="text-primary-grey text-sm">
                  <span className="font-bold">Cruising Route:</span> {tour.cruisingRoute}
                </p>
              </div>

              {/* Collapsible Details Section */}
              <div
                className={`
          transition-all duration-300 overflow-hidden
          ${showDetails[index] ? 'max-h-[999px] opacity-100' : 'max-h-0 opacity-0'}
        `}
              >
                <div className="space-y-4">
                  <div className="flex flex-row gap-2 items-center">
                    <p className="text-primary-grey text-sm">
                      <span className="font-bold">Inclusions:</span> <span dangerouslySetInnerHTML={{ __html: tour.liveBBQ }} />
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 items-center">
                    <p className="text-primary-grey text-sm">
                      <span className="font-bold text-primary-grey">Meeting Point:</span> {tour.departurePoint}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button - Always fully visible */}
          <a href={tour.fareharborLink} className="blue-solid-button w-full block text-center mt-auto flex-shrink-0">
            Book Now
          </a>
        </div>
      ))}
    </div>
  );
}
