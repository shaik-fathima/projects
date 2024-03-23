/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        metal :["metal mania"],
color:{
  bgcol:[ "90deg, #020024 0%, #090979 35%, #00d4ff 100%" ]
}
      }
    },
  },
  plugins: [],
}
