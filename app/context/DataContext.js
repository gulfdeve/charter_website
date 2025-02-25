'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const DataContext = createContext();

// Custom hook to use the context
export const useData = () => {
  return useContext(DataContext);
};

// Provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the data from the local file in the public folder
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Load from local JSON file instead of API
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch local data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
