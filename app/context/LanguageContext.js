'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
// Create the context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }) => {
  const router = useRouter();
  const [language, setLanguage] = useState('en'); // Default to English

  const changeLanguage = lang => setLanguage(lang);

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};
