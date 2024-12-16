import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '375px',
        's': '425px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1736px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily : {
        // Montserrat : ['Montserrat','sans'],
        Montserrat: ['var(--font-montserrat)'],

      }
    },
  },
  plugins: [],
} satisfies Config;
