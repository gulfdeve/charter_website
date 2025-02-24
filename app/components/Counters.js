import { useEffect, useState, useRef } from 'react';

const Counters = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [guestsCount, setGuestsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 } // Adjust visibility threshold (50% visible)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const yearsInterval = setInterval(() => {
      setYearsCount((prev) => (prev < 9 ? prev + 1 : 9));
    }, 100);

    const guestsInterval = setInterval(() => {
      setGuestsCount((prev) => (prev < 150000 ? prev + 1000 : 150000));
    }, 10);

    const ratingInterval = setInterval(() => {
      setRatingCount((prev) => (prev < 5 ? prev + 0.1 : 5));
    }, 50);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(guestsInterval);
      clearInterval(ratingInterval);
    };
  }, [hasStarted]);

  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-center w-full h-[50vh] bg-cover bg-fixed lg:bg-top bg-center"
      style={{ backgroundImage: "url('/counterbg.webp')" }}
    >
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-12">
          <div className="counter-item flex flex-col items-center gap-5">
            <img src="/calendar.png" className="h-8 lg:h-12 mb-4" />
            <div className=" text-2xl lg:text-6xl  font-bold text-white">{yearsCount.toFixed(0)}</div>
            <div className="text-lg lg:text-2xl  font-medium text-white text-center">YEARS IN BUSINESS</div>
          </div>
          <div className="counter-item flex flex-col items-center gap-5">
            <img src="/smiley.png" className="h-8 lg:h-12 mb-4" />
            <div className=" text-2xl lg:text-6xl  font-bold text-white">{guestsCount.toLocaleString()}</div>
            <div className="text-lg lg:text-2xl  font-medium text-white text-center">HAPPY GUESTS</div>
          </div>
          <div className="counter-item flex flex-col items-center gap-5">
            <img src="/stars.png" className="h-8 lg:h-12 mb-4" />
            <div className=" text-2xl lg:text-6xl  font-bold text-white">{ratingCount.toFixed(1)}</div>
            <div className="text-lg lg:text-2xl  font-medium text-white text-center">SERVICE RATING</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
