import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@store": resolve(__dirname, "src/store")
    }
  },
  server: {
    port: 3001
  }
});
