import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/LibraryVueProject/',  // <-- Change this to match your repo name
  build: {
    outDir: 'dist' // Ensure output is in 'dist/'
  }
})