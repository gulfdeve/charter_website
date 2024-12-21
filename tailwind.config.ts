import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        // Montserrat : ['Montserrat','sans'],
        Montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
