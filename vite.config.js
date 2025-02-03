import { defineConfig } from "vite";
import customOutpoutPlugin from "./customOutputPlugin";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cardetails: "src/car-detail/index.html",
        checkout: "src/car-checkout/index.html",
        about: "src/about/index.html",
        working: "src/how-seatac-rental-works/index.html",
        carlist: "src/car-lists/index.html",
        booking: "src/booked-a-car/index.html"
      },
    },
  },
  plugins: [customOutpoutPlugin()],
});
