import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  build: {
    outDir: 'dist', // Keep the default output directory or specify a custom one if needed
    emptyOutDir: true, // Ensures the output directory is emptied before each build
  },
})
