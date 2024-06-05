import { defineConfig } from 'vite'

import adapter from '@hono/vite-dev-server/cloudflare'
import ssg from '@hono/vite-ssg'
import honox from 'honox/vite'
import pages from '@hono/vite-cloudflare-pages'
import client from 'honox/vite/client'

const entry = './app/server.ts'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['/app/style.css'],
          output: {
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
      },
      plugins: [client()],
    }
  } else {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [
        honox({
          devServer: {
            adapter,
          },
        }),
        pages(),
        ssg({ entry }),
      ],
    }
  }
})
