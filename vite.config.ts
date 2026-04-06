import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: GitHub Pages uses /ranch/; Railway (or any root host) needs /. Set at build time:
//   VITE_BASE=/        → Railway, Vercel root, etc.
//   VITE_BASE=/ranch/  → https://<user>.github.io/ranch/
// Default keeps GitHub Pages working if you forget to set the variable.
// https://vite.dev/config/shared-options.html#base
export default defineConfig(({ mode }) => ({
  base:
    mode === 'production'
      ? (process.env.VITE_BASE ?? '/ranch/')
      : '/',
  plugins: [react()],
}))
