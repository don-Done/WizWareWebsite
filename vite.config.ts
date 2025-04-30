import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsconfigPaths from \'vite-tsconfig-paths\';

// https://vitejs.dev/config/
export default defineConfig({
  // Base path - important for Cloudflare Pages
  base: \'/\',
  
  server: {
    host: \"::\",
    port: 8080,
  },\
  
  plugins: [
    react(),
    tsconfigPaths() // Keep tsconfigPaths from incoming changes
  ],\
  
  build: {
    rollupOptions: {\
      output: {
        manualChunks: {\
          vendor: [
            \'react\',\
            \'react-dom\',\
          ],\
        },\
      },\
      
    },\
    
  },\
  resolve: {
    alias: {
      \"@\": path.resolve(__dirname, \"./src\"),
    },\
  },\
  
  // Improve CSS processing
  css: {
    postcss: \'./postcss.config.js\', // Use the existing postcss.config.js
    devSourcemap: true,\
  }
});

