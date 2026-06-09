import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: Railway / most hosts need `/`. GitHub Project Pages needs `/ranch/` — set at build:
//   VITE_BASE=/ranch/ npm run build
// https://vite.dev/config/shared-options.html#base
export default defineConfig(({ mode }) => ({
  base:
    mode === 'production'
      ? (process.env.VITE_BASE ?? '/')
      : '/',
  plugins: [react()],
  server: {
    proxy: {
      // Gemini concierge API (run `npm run dev:api` in another terminal)
      '/api': 'http://127.0.0.1:3000',
    },
  },
  build: {
    // Raise the warning limit slightly — images are in public/, not bundled
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — cached separately, rarely changes
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
}))
