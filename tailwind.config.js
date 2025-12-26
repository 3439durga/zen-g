/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'zen-red': '#DC2626',
        'zen-white': '#FFFFFF',
        'zen-black': '#000000',
      },
    },
  },
  plugins: [],
}

