import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "rem_dent",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        notFound: '404.html'
      }
    }
  }
})
