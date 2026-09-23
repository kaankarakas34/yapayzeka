import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Vite dev server API middleware to handle /api/analyze locally
function apiMiddlewarePlugin() {
  return {
    name: 'api-analyze-middleware',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url === '/api/analyze' && req.method === 'POST') {
          let bodyStr = ''
          req.on('data', (chunk: any) => {
            bodyStr += chunk
          })
          req.on('end', async () => {
            try {
              req.body = bodyStr ? JSON.parse(bodyStr) : {}
              const { default: handler } = await import('./api/analyze.js')
              // Express-like mock response helpers if missing
              if (!res.status) {
                res.status = (code: number) => {
                  res.statusCode = code
                  return res
                }
              }
              if (!res.json) {
                res.json = (data: any) => {
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(data))
                  return res
                }
              }
              await handler(req, res)
            } catch (err: any) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: err.message || 'Server error' }))
            }
          })
          return
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), apiMiddlewarePlugin()],
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'yapay-zeka-gorunurluk-analizi/index.html',
        'chatgpt-reklamlari/index.html',
        'chatgpt-reklam-verme/index.html',
        'yapay-zeka-platformlarinda-reklam/index.html',
        'geo-yapay-zeka-gorunurlugu/index.html',
        'yapay-zeka-ile-reklam-uretimi/index.html',
        'hakkimizda/index.html',
        'iletisim/index.html',
        'hizmetler/yapay-zeka-google-ads/index.html',
        'hizmetler/meta-reklam/index.html',
        'hizmetler/sosyal-medya-reklami/index.html',
        'hizmetler/reklam-filmi-video/index.html',
        'hizmetler/urun-gorseli/index.html',
        'hizmetler/chatbot/index.html',
        'blog/index.html',
        'blog/yapay-zeka-ile-reklam-verme-nasil-yapilir/index.html',
        'gizlilik/index.html',
        'kvkk/index.html',
        'cerez-politikasi/index.html',
      ].map((file) => resolve(import.meta.dirname, file)),
    },
  },
})
