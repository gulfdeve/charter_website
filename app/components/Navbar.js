"use client"

import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const { language, changeLanguage } = useLanguage();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">My App</h1>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white"
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="ru">Russian</option>
        {/* Add more language options as needed */}
      </select>
    </nav>
  );
}
