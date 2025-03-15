import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/LibraryVueProject/',  // This is critical for GitHub Pages
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})