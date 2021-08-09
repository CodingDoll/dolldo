import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

export default defineConfig({
  plugins: [reactRefresh()],
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@store": resolve(__dirname, "src/store"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components")
    }
  },
  server: {
    port: 3001
  }
});
