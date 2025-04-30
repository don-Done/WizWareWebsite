import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  // Base path - important for Cloudflare Pages
  base: '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [
    react(),
  ],
  
=======
  base: './',
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: {},
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
          ],
        },
      },
      
    },
    
  },
>>>>>>> c7c51134e7a726ca90956f6dd77c6a6ce12dd7f0
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Improve CSS processing
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  }
});