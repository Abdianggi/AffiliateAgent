/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hybrid: {
         DEFAULT: '#004174',
         100: '#E8F3FC',
         500: '#004174',
        },
        hyprimary: {
         DEFAULT: '##0B8BEE',
         100: '#eaf3f9',
         500: '#0B8BEE',
        },
        hysuccess: {
          DEFAULT: '#449D44',
          100: '#3EA31A1A',
          500: '#3EA31A',
        },
        hywarning: {
          DEFAULT: '#FF9900',
          100: '#FF99001A',
          500: '#FF9900',
        },
      }
    },
  },
  plugins: [],
}