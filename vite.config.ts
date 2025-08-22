import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  
  // 👇 ini WAJIB sesuai nama repo GitHub-mu
  base: "/for-mypapita/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  root: path.resolve(__dirname, "client"),

  build: {
    // 👇 jangan "dist/public", cukup "dist"
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
