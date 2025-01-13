import React from "react";

const YachtTrips = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 font-Montserrat">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-primary-blue pb-8 pt-6">
        YACHT TRIPS & EXPERIENCES IN DUBAI
      </h1>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Experience Card: Jet Ski */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <a href="https://charter.selldobuy.com/public/en/watersports/jet-ski">
            <img
              src="https://www.centauruscharter.com/product/images/1653474985JET%20SKI%20THUMB.webp"
              alt="Jet Ski"
              className="w-full object-cover"
            />
          </a>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">JET SKI</h2>
            <p className="text-gray-600 mt-2">
              Get your heart racing with this recreational water sports
            </p>

            <div className="flex items-center justify-between pt-8 mt-8 border-t-2">
              <div className="gap-1 sm:gap-3 flex items-center">
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12 text-primary-blue"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Starting</span>
                  <span className="text-xl font-bold text-gray-900">AED 5000</span>
                </div>
              </div>
              <button className="blue-solid-button">KNOW MORE</button>
            </div>
          </div>
        </div>

        {/* Experience Card: Donut Boat Ride */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <a href="https://charter.selldobuy.com/public/en/watersports/donut-boat">
            <img
              src="https://www.centauruscharter.com/product/images/1653475012DONUT%20BOAT%20RIDE%20Thumb.webp"
              alt="Donut Boat Ride"
              className="w-full object-cover"
            />
          </a>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">DONUT BOAT RIDE</h2>
            <p className="text-gray-600 mt-2">
              Chase the speed while having fun on donut boats
            </p>

            <div className="flex items-center justify-between pt-8 mt-8 border-t-2">
              <div className="gap-1 sm:gap-3 flex items-center">
                <svg
                  className="w-8 h-8 sm:w-12 sm:h-12 text-primary-blue"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-500">Starting</span>
                  <span className="text-xl font-bold text-gray-900">AED 5000</span>
                </div>
              </div>
              <button className="blue-solid-button">KNOW MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YachtTrips;
