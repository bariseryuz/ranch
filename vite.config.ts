import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Project Pages serves the app at /ranch/ — assets must load from that base or the bundle 404s (blank page).
// https://vite.dev/config/shared-options.html#base
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/ranch/' : '/',
  plugins: [react()],
}))
