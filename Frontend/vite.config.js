import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    open: true,
    proxy: {
      '/api': {
        target: "https://aromatrace-ghkh.onrender.com"
      }
    }
  },
  plugins: [react()],
})