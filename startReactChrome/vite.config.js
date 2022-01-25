import { defineConfig, optimizeDeps } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
import { resolve } from "path";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "./public/manifest.json", dest: "./dist" }],
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
