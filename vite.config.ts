import { defineConfig } from 'vite'
import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import ssg from '@hono/vite-ssg'

export default defineConfig({
  plugins: [
    ssg({}),
    build({ emptyOutDir: true }),
    devServer({
      adapter,
      entry: 'src/index.tsx',
    }),
  ],
})
