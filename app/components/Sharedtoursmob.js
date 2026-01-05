'use client';
import { useEffect, useRef, useState } from 'react';
import EmblaCarousel from 'embla-carousel';
import { Link } from '@/app/i18n/routing';
// Import icons used in the tour cards
import { FaClock, FaChild, FaCameraRetro } from 'react-icons/fa';
import { IoMan, IoLocationSharp } from 'react-icons/io5';
import { MdOutlineLocalDining } from 'react-icons/md';

export default function ToursCarousel({ toursData }) {
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState(null);
  const [showDetails, setShowDetails] = useState([]);

  // Initialize the details toggle state for each tour on mount and when toursData changes
  useEffect(() => {
    setShowDetails(Array(toursData.length).fill(false));
  }, [toursData]);

  // Initialize Embla carousel once
  useEffect(() => {
    if (!embla && emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, {
        loop: true,
        align: 'start',
        slidesToScroll: 1,
      });
      setEmbla(emblaInstance);
    }
  }, [embla]);

  // Toggle function for collapsing/expanding tour details
  const toggleDetails = index => {
    setShowDetails(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="pb-16 ">
      {/* Embla carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden container mx-auto">
        {/* Carousel container with a horizontal flex layout */}
        <div className="flex gap-4 container ">
          {toursData.map((tour, index) => (
            <div key={index} className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_40%] py-10">
              <div className="bg-white rounded-lg shadow-custom duration-300 p-2 space-y-1 overflow-hidden ">
                {/* Image Section */}
                <div className="relative">
                  <img src={tour.image} alt={tour.title} className="rounded-lg w-full object-cover" />
                  {tour.textUnderImage ? <p className="min-h-[44px] text-[12px] text-center text-primary-blue-2 py-1 font-bold">{tour.textUnderImage}</p> : <p className="min-h-[44px] text-[12px] text-center text-primary-blue-2 py-1 font-bold">&nbsp;</p>}
                  <div className="absolute top-2 ">
                    {tour.yellowHeadline && (
                      <div className="bg-primary-blue-2 px-3 py-1">
                        <div className="text-base font-bold uppercase text-white">{tour.yellowHeadline}</div>
                        <div className="text-[11px] font-bold uppercase  text-white">{tour.smallHeadline}</div>
                      </div>
                    )}
                    {tour.blueHeadline && (
                      <div className="bg-primary-yellow-light px-3 py-1">
                        <p className="text-sm uppercase text-primary-blue-2 font-bold">{tour.blueHeadline}</p>
                      </div>
                    )}

                    {/* {tour.validity && (
					<div className="px-3 py-1">
            {tour.id === 2 ? (
					  <p className="text-xs uppercase text-primary-blue">
						{tour.validity}
					  </p>) : (<p className="text-xs uppercase text-white">
						{tour.validity}
					  </p>)}
					</div>
				  )} */}
                  </div>
                </div>

                {/* Title and Details Toggle */}
                <div className="text-center">
                  <h3 className="text-primary-blue-2 text-center py-2">{tour.title}</h3>
                  <button onClick={() => toggleDetails(index)} className="bg-gray-100 text-gray-400 w-full py-2 rounded font-semibold text-sm hover:bg-gray-200 transition-colors duration-300 mb-2">
                    {showDetails[index] ? 'Hide Details' : 'Show Details'}
                  </button>
                </div>

                {/* Info Section */}
                <div className="relative">
                  {/* Gradient overlay applied when details are hidden */}
                  {!showDetails[index] && <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-white/0 to-white/90 pointer-events-none z-10"></div>}

                  <div className="space-y-3">
                    <div className="flex flex-row gap-2 items-center mb-4">
                      <p className="text-primary-grey text-sm">
                        <span className="font-bold">Cruising Time:</span> {tour.cruisingTime}
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center mb-4">
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
                    <div className="flex flex-row gap-2 items-center mb-3">
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
                        <div className="flex flex-row gap-3 items-center">
                          <p className="text-primary-grey text-sm">
                            {/* <span className="font-bold">Live BBQ:</span>{" "}
                            {tour.liveBBQ} */}
                            <span className="font-bold">Inclusions:</span> <span dangerouslySetInnerHTML={{ __html: tour.liveBBQ }} />
                          </p>
                        </div>

                        <div className="flex flex-row gap-2 items-center">
                          <p className="text-primary-grey text-sm">
                            <span className="font-bold">Meeting Point:</span> {tour.departurePoint}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Now Button */}
                <a href={tour.fareharborLink} className="blue-solid-button w-full block text-center">
                  Book Now
                </a>
                {/* <div
                className="cursor-not-allowed opacity-20 blue-solid-button w-full block text-center"
              >
                Sold out
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
