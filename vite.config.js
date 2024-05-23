import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true,
    port: 8000
  },
  define: {
    __API__: JSON.stringify("https://pictureserver-1r7rp0ni.b4a.run")
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    }
  }

})
