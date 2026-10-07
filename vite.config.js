import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Jika di Vercel gunakan root '/', jika build lokal untuk GitHub Pages gunakan '/praktik_react_deploy/'
  base: process.env.VERCEL ? '/' : '/praktik_react_deploy/',
})
