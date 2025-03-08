import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 3333,
    strictPort: true,
  },
  server: {
    port: 3333,
    strictPort: true,
    host: true,
    origin: "http://localhost:3333",
  },
});
