/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        sideShadow: '3px 2px 5px -2px rgba(170,170,170,0.75)',
        topShadow: '8px 9px 4px 10px rgba(170,170,170,0.75)',
      },
    },
  },
  plugins: [],
};
