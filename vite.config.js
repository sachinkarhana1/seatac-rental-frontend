import { defineConfig } from "vite";
import customOutpoutPlugin from "./customOutputPlugin";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        cardetails: "src/cardetails/index.html",
      },
    },
  },
  plugins: [customOutpoutPlugin()],
});
