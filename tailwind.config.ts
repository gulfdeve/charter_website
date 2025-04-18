import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        inner: 'inset 2px 2px 4px rgba(0, 0, 0, 0.6)', // Example inner shadow
      },
	  fontSize: {
        'xxs': '0.65rem', // Adding custom text-xxs size
      },
      screens: {
        'xxs': '320px',
        'xs': '375px',
        's': '425px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1200px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1310px',
        // => @media (min-width: 1536px) { ... }
        // '3xl': '1700px',
      },
      colors: {
        "primary-blue": "#0D2343",
        "primary-blue-2": "#1B498F",
        "primary-blue-3": "#0E2243",
        "primary-blue-4": "#08396e",
        "primary-black": "#1D1D1D",
        "primary-yellow": "#E1BA4D",
        "primary-yellow-light": "#f5e9c6",
        "primary-yellow-dark": "rgb(234 174 6)",
        "text-primary-white": "#ababab",
        "text-primary-black": "#212529",
        "primary-red": "#8A1538",
        "primary-red-light": "#FFE3E2",
		"primary-grey": "#575757",
    
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        Montserrat: ["var(--font-montserrat)"],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
