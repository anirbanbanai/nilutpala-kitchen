/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('./public/nilupic/nilu/IMG-20230418-WA0032.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}