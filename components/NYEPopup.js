"use client";
import React, { useEffect, useState } from 'react';

const NYEPopup = ({ link = '/'} ) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={() => setIsOpen(false)} aria-hidden="true" />

      <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <button aria-label="Close" className="absolute top-3 right-3 z-20 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-gray-100" onClick={() => setIsOpen(false)}>
          <span className="text-lg leading-none">✕</span>
        </button>

        <a href='https://bit.ly/3XZU7Gv' target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block">
          <img src="/NYE-promotion.png" alt="New Year Promotion" className="w-full h-auto block" />
        </a>
      </div>
    </div>
  );
};

export default NYEPopup;
