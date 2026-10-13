'use client';

import { useState, useRef, useEffect } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';

import { FaChevronDown } from 'react-icons/fa';
import SearchResultsClient from './SearchResultsClient';
import Modal3 from './Modal3';

export default function MultiDatePicker({ name, init = [] }) {
  const datePickerRef = useRef(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('selectedDates');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Convert stored strings back to DateObject
        const restoredDates = parsed.map(d => new DateObject(d));
        setSelectedDates(restoredDates);
      } catch {
        setSelectedDates([]);
      }
    } else {
      setSelectedDates(init);
    }
  }, [init]);

  // Save to localStorage whenever it changes
  useEffect(() => {
    if (selectedDates?.length) {
      const serialized = selectedDates.map(d => d?.toString?.()); // Save in format DateObject understands
      localStorage.setItem('selectedDates', JSON.stringify(serialized));
    }
  }, [selectedDates]);

  const toggleCalendar = () => {
    if (!isOpen) {
      datePickerRef.current?.openCalendar();
    } else {
      datePickerRef.current?.closeCalendar();
    }
    setIsOpen(!isOpen);
  };

  const renderDisplayText = () => {
    if (selectedDates?.length === 2) {
      return `${selectedDates[0]?.format?.('YYYY-MM-DD') || ''} to ${selectedDates[1]?.format?.('YYYY-MM-DD') || ''}`;
    } else if (selectedDates?.length === 1) {
      return selectedDates[0]?.format?.('YYYY-MM-DD') || '';
    }
    return 'Rental Period';
  };

  return (
    <div className="relative">
      <button type="button" onClick={toggleCalendar} className="block w-full  border border-gray-300 rounded-md px-3 pr-10 leading-tight bg-white text-gray-700 text-left relative z-10 h-10 overflow-hidden whitespace-nowrap truncate">
        {renderDisplayText()}
      </button>

      <div onClick={toggleCalendar} className="absolute inset-y-0 right-0 rounded-r-md flex items-center justify-center bg-primary-blue-2 px-2 cursor-pointer z-10">
        <FaChevronDown className="text-white" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <DatePicker ref={datePickerRef} range value={selectedDates} onChange={dates => setSelectedDates(dates)} format="YYYY-MM-DD" style={{ backgroundColor: 'white' }} calendarClassName="bg-white" onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)} />
      </div>
      <div className="hidden">
        <Modal3 rentalPeriod={selectedDates} />
      </div>
    </div>
  );
}
