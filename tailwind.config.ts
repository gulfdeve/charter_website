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
         
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "primary-blue": "#0D2343",
        "primary-blue-2": "#1B498F",
        "primary-blue-3": "#0E2243",
        "primary-black": "#1D1D1D",
        "primary-yellow": "#E1BA4D",
        "primary-yellow-dark": "rgb(234 174 6)",
        "text-primary-white": "#969696",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        Montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
