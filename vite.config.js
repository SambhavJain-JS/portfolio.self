import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Self/',
  plugins: [react()],
  build: {
    base: './', 
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
