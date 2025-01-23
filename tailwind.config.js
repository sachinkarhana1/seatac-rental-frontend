/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        seatac: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
