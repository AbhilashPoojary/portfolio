import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginWindicss from "vite-plugin-windicss";

export default defineConfig({
  plugins: [
    react(),
    VitePluginWindicss({
      config: "tailwind.config.js",
    }),
  ],
});
