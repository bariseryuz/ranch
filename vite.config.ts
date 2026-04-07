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
}))
