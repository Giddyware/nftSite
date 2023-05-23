import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // proxy: {
    //   "/img/nft": "http://31.220.31.111:3000",
    // },
    // strictMimeTypes: false,
  },
});
