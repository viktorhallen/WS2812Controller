import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'


// https://vitejs.dev/config/
export default defineConfig({
  root: "frontend/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@frontend': fileURLToPath(new URL('./frontend', import.meta.url)),
      '@lib': fileURLToPath(new URL('./lib', import.meta.url)),
    }
  },
  build: {
    outDir: 'public/dist',
    emptyOutDir: true,
    commonjsOptions: { },
  }
})
