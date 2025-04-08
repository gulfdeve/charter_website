// app/components/DateRangePicker.jsx
"use client";

import { useState } from "react";
import { DateRange } from "react-date-range";

// Import required styles for the date range picker.
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateRangePicker({ init, onChange }) {
  // Initialize with provided dates or default to the current date.
  const [range, setRange] = useState([
    {
      startDate: init?.startDate ? new Date(init.startDate) : new Date(),
      endDate: init?.endDate ? new Date(init.endDate) : new Date(),
      key: "selection",
    },
  ]);

  const handleChange = (ranges) => {
    setRange([ranges.selection]);
    // Call the parent's onChange callback passing the updated range.
    if (onChange) {
      onChange(ranges.selection);
    }
  };

  return (
    <DateRange
      editableDateInputs={true}
      onChange={handleChange}
      moveRangeOnFirstSelection={false}
      ranges={range}
    />
  );
}
