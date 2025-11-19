import { cache } from 'react';

export const fetchData = cache(async () => {
  try {
    // Check if we're on the server or client
    const baseUrl =
      typeof window === 'undefined'
        ? process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
        : '';

    // Determine fetch options based on environment
    const fetchOptions =
      process.env.NODE_ENV === 'development'
        ? { cache: 'no-store', next: { revalidate: 0 } }
        : { next: { revalidate: 3600, tags: ['data-cache'] } };

    const response = await fetch(`${baseUrl}/api/get-data`, fetchOptions);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
    // Log the data for debugging
  } catch (error) {
    console.log('Error fetching data:', error);
    return null;
  }
});
