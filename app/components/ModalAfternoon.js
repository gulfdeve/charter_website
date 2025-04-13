"use client";
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const ImageModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full max-w-[90%] md:max-w-[60%] lg:max-w-lg">
        {/* Background Image with all content */}
        <img 
          src="/Popupbanner.webp"
          alt="Special Offer"
          className="w-full h-auto "
        />
        
        {/* Close Button */}
        <button 
		aria-label="Close Modal"
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 md:top-3 md:right-3 text-black bg-gray-200 rounded-full p-2 md:p-1.5 text-2xl md:text-3xl "
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;