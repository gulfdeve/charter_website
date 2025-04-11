// app/context/DataContext.js
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchData } from '@/app/lib/fetchData';

// Create the context
const DataContext = createContext();

// Custom hook to use the context
export const useData = () => {
  return useContext(DataContext);
};

// Provider component that accepts server-fetched data
export const DataProvider = ({ children, initialData = null }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState(null);

  // Only fetch if no initialData is provided
  useEffect(() => {
    if (initialData) {
      setLoading(false);
      console.log("using initital data instead of making api call")
      return;
    }

    const loadData = async () => {
      try {
        const result = await fetchData();
        if (result) {
          setData(result);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [initialData]);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};