"use client";
import { useState, useRef } from "react";
import DatePicker from "react-multi-date-picker";
import { FaChevronDown } from "react-icons/fa";

export default function MultiDatePicker({ name }) {
  const [selectedDates, setSelectedDates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);

  // Toggle calendar visibility
  const toggleCalendar = () => {
    if (!isOpen) {
      datePickerRef.current?.openCalendar();
    } else {
      datePickerRef.current?.closeCalendar();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleCalendar}
        className="block w-full appearance-none border border-gray-300 rounded-none py-2 px-3 pr-10 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 text-left relative z-10"
      >
        RENTAL PERIOD
      </button>

      <div
        onClick={toggleCalendar}
        className="absolute inset-y-0 right-0 flex items-center justify-center bg-primary-blue px-2 cursor-pointer z-10"
      >
        <FaChevronDown className="text-white" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center bg-white">
        <DatePicker
          ref={datePickerRef}
          multiple
          value={selectedDates}
          onChange={(dates) => setSelectedDates(dates)}
          format="YYYY-MM-DD"
          // Adding inline style to force white background
          style={{ backgroundColor: "white" }}
          // You can keep the calendarClassName prop if you want to add additional classes,
          // but inline style helps ensure the background color is applied.
          calendarClassName="bg-white"
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}
