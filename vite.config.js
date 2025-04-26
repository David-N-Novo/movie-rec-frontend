import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  publicDir: 'public',
  server: {
    host: '127.0.0.1',
    port: 8000, 
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
