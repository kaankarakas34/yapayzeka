import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: [
        'index.html', 'chatgpt-reklamlari/index.html', 'chatgpt-reklam-verme/index.html',
        'yapay-zeka-platformlarinda-reklam/index.html', 'geo-yapay-zeka-gorunurlugu/index.html',
        'yapay-zeka-ile-reklam-uretimi/index.html', 'hakkimizda/index.html', 'iletisim/index.html',
        'blog/index.html', 'gizlilik/index.html', 'kvkk/index.html', 'cerez-politikasi/index.html',
      ].map((file) => resolve(import.meta.dirname, file)),
    },
  },
})
