"use client";
import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';

const Counters = () => {
  const [yearsCount, setYearsCount] = useState(0); // Start at 0 for the count effect
  const [guestsCount, setGuestsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0); // Start at 0 for the count effect
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const [totalYears, setTotalYears] = useState(0); // State to store total years
  const t = useTranslations();
  
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

    const startYear = 2013; // Starting year of the business
    const currentYear = new Date().getFullYear(); // Get the current year dynamically
    const calculatedYears = currentYear - startYear; // Calculate total years in business
    setTotalYears(calculatedYears); // Update totalYears state

    // Years in Business Count Effect
    const yearsInterval = setInterval(() => {
      setYearsCount((prev) => (prev < calculatedYears ? prev + 1 : calculatedYears));
    }, 100);

    // Happy Guests Count Effect
    const guestsInterval = setInterval(() => {
      setGuestsCount((prev) => (prev < 150000 ? prev + 1000 : 150000));
    }, 10);

    // Service Rating Count Effect
    const targetRating = 4.8; // Target service rating
    const ratingInterval = setInterval(() => {
      setRatingCount((prev) => (prev < targetRating ? prev + 0.1 : targetRating));
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
      className="flex items-center justify-center w-full h-[40vh] bg-cover bg-fixed lg:bg-top bg-center"
      style={{ backgroundImage: "url('/images/footer-sunset.webp')" }}
    >
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-12">
          {/* Years in Business */}
          <div className="counter-item flex flex-col items-center gap-5">
            <img alt="calendar icon" src="/calendar.png" className="h-6 sm:h-8 lg:h-12 mb-4" />
            <div className="text-2xl lg:text-6xl font-bold text-white">{yearsCount}</div>
            <div className="text-sm md:text-lg lg:text-2xl font-medium text-white text-center uppercase">{t('home.years-in-business')}</div>
          </div>

          {/* Happy Guests */}
          <div className="counter-item flex flex-col items-center gap-5">
            <img alt="smiley icon" src="/smiley.png" className="h-6 sm:h-8 lg:h-12 mb-4" />
            <div className="text-2xl lg:text-6xl font-bold text-white">{guestsCount.toLocaleString()}</div>
            <div className="text-sm md:text-lg lg:text-2xl font-medium text-white text-center uppercase">{t('home.happy-guests')}</div>
          </div>

          {/* Service Rating */}
          <div className="counter-item flex flex-col items-center gap-5">
            <img alt="stars icon" src="/stars.png" className="h-6 sm:h-8 lg:h-12 mb-4" />
            <div className="text-2xl lg:text-6xl font-bold text-white">{ratingCount.toFixed(1)}</div>
            <div className="text-sm md:text-lg lg:text-2xl font-medium text-white text-center uppercase">{t('home.service-rating')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;