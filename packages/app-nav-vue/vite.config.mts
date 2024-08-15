import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  plugins: [
    vue(),
    vitePluginSingleSpa({
      serverPort: 9020,
      spaEntryPoints: 'src/psk-app-nav-vue.ts'
    })
  ],
  build: {
    rollupOptions: {

    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
