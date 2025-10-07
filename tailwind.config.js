/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         porsche: ["porsche", "sans-serif"],
      heather: ["heather", "sans-serif"],
      moonscape: ["moonscape", "sans-serif"],
      
      },
    },
  },
  plugins: [],
};
