/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '3xl': '1700px',
        'xs': '400px'
      }
    },
  },
  plugins: [],
}