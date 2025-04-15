// app/lib/fetchData.js
import { cache } from 'react';

export const fetchData = cache(async () => {
  try {
    // Check if we're on the server or client
    const baseUrl = typeof window === 'undefined' 
      ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
      : '';
      
    const response = await fetch(`${baseUrl}/api/get-data`, {
      next: { revalidate: 3600 } // Cache for 1 hour (3600 seconds)
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
});