'use client';
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceDropdownWithSlider = ({ min = 0, max = 250000, step = 1000, defaultValue }) => {
  const [range, setRange] = useState(defaultValue || [min, max]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const label = `${range[0].toLocaleString()} € - ${range[1].toLocaleString()} €`;

  return (
    <div className="w-full relative" ref={dropdownRef} style={{ zIndex: 10 }}>
      <button type="button" className="block w-full border border-gray-300 rounded-md py-2 px-3 bg-white cursor-pointer focus:outline-none flex items-center justify-between" onClick={() => setOpen(v => !v)}>
        <span className="text-md">{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 right-0 bg-white border border-gray-300 p-4 mt-2 z-20 rounded shadow-lg">
          <label className="block mb-2 font-semibold">PRICE</label>
          <div className="flex justify-between mb-2">
            <span>{range[0].toLocaleString()} $</span>
            <span>{range[1].toLocaleString()} $</span>
          </div>
          <Slider
            range
            min={min}
            max={max}
            step={step}
            value={range}
            onChange={setRange}
            trackStyle={[{ backgroundColor: '#0074b8' }]}
            handleStyle={[
              { borderColor: '#0074b8', backgroundColor: '#0074b8' },
              { borderColor: '#0074b8', backgroundColor: '#0074b8' },
            ]}
            railStyle={{ backgroundColor: '#e5e7eb' }}
          />
        </div>
      )}
      {/* Hidden inputs for form submission */}
      <input type="hidden" name="priceMin" value={range[0]} />
      <input type="hidden" name="priceMax" value={range[1]} />
    </div>
  );
};

export default PriceDropdownWithSlider;
