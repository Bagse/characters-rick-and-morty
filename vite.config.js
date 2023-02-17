import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Bagse.github.io/characters-rick-and-morty/',
  plugins: [react()]
})
