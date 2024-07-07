import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.env.BASE_URL, "./src"),
      "#": path.resolve(import.meta.env.BASE_URL, "./"),
    },
  },
});
