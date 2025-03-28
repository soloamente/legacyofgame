import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import basicSsl from "@vitejs/plugin-basic-ssl"

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8888,
  },
  plugins: [react(), TanStackRouterVite(), basicSsl()],
  base: process.env.PUBLIC_URL || "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
