import React from "react";
import { useFareHarbor } from "@/app/context/FareHarborContext";

const BookNowButton = ({ id, label = 'Book Now' }) => {
    const { openFareHarborModal } = useFareHarbor();
  
    const handleClick = (e) => {
      e.preventDefault(); // Prevent default behavior
      openFareHarborModal(id); // Pass the id to the modal function
    };
  
    return (
      <button
        onClick={handleClick}
        className="flex flex-row items-center justify-center mt-4 py-2 w-full md:py-2 md:px-4 rounded-md bg-primary-yellow text-primary-blue hover:bg-primary-blue hover:text-primary-yellow  font-bold text-base md:text-sm xl:text-lg transition-all duration-300"
      >
        {label}
      </button>
    );
  };
  
  export default BookNowButton;