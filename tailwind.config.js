/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        seatac: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#22AF86",
        },
        secondary: {
          DEFAULT: "#141A1C",
        },
      },
    },
  },
  plugins: [],
};
