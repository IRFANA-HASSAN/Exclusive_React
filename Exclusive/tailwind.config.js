/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif','intel'],
      },
      screens: {
        mid: '985px', 
        xl5: '1300px',
        custom763: '763px',
      },
    },
  },
  plugins: [],
}

