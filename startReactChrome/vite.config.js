import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "./public/manifest.json", dest: "./dist" },
        { src: "./public/scripts/", dest: "./dist/scripts" },
        { src: "./public/css/", dest: "./dist/css" },
        { src: "./public/images/", dest: "./dist/images" },
      ],
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
