import { useEffect, useState } from 'react';

const Counters = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [guestsCount, setGuestsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  useEffect(() => {
    const yearsInterval = setInterval(() => {
      if (yearsCount < 9) {
        setYearsCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(yearsInterval);
      }
    }, 100);

    const guestsInterval = setInterval(() => {
      if (guestsCount < 150000) {
        setGuestsCount((prevCount) => prevCount + 1000);
      } else {
        clearInterval(guestsInterval);
      }
    }, 10);

    const ratingInterval = setInterval(() => {
      if (ratingCount < 5) {
        setRatingCount((prevCount) => prevCount + 0.1);
      } else {
        clearInterval(ratingInterval);
      }
    }, 50);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(guestsInterval);
      clearInterval(ratingInterval);
    };
  }, [yearsCount, guestsCount, ratingCount]);

  return (
    <div className="flex items-center justify-center w-full h-[50vh] bg-cover bg-fixed lg:bg-top bg-center" style={{ backgroundImage: "url('/counterbg.webp')" }}>
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-12">
          <div className="counter-item flex flex-col items-center gap-5">
            <img src="/calendar.png" className="h-8 lg:h-12 mb-4" />
            <div className=" text-2xl lg:text-6xl font-Montserrat font-bold text-white">{yearsCount.toFixed(0)}</div>
            <div className="text-lg lg:text-2xl font-Montserrat font-medium text-white text-center">YEARS IN BUSINESS</div>
          </div>
          <div className="counter-item flex flex-col items-center gap-5">
            <img src="/smiley.png" className="h-8 lg:h-12 mb-4" />
            <div className=" text-2xl lg:text-6xl font-Montserrat font-bold text-white">{guestsCount.toLocaleString()}</div>
            <div className="text-lg lg:text-2xl font-Montserrat font-medium text-white text-center">HAPPY GUESTS</div>
          </div>
          <div className="counter-item flex flex-col items-center gap-5">
            <img src="/stars.png" className="h-8 lg:h-12 mb-4" />
            <div className=" text-2xl lg:text-6xl font-Montserrat font-bold text-white">{ratingCount.toFixed(1)}</div>
            <div className="text-lg lg:text-2xl font-Montserrat font-medium text-white text-center">SERVICE RATING</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;