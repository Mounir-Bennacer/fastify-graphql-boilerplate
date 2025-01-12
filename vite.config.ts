import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  root: "./src",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
