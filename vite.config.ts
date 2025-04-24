import { defineConfig } from 'vite'

import adapter from '@hono/vite-dev-server/cloudflare'
import ssg from '@hono/vite-ssg'
import honox from 'honox/vite'
import pages from '@hono/vite-cloudflare-pages'
import tailwindcss from '@tailwindcss/vite'

const entry = './app/server.ts'

export default defineConfig({
  build: { emptyOutDir: false },
  plugins: [
    honox({
      devServer: {
        adapter,
      },
      client: {
        input: ['/app/style.css'],
      },
    }),
    pages(),
    ssg({ entry }),
    tailwindcss(),
  ],
})
