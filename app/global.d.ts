import type {} from 'hono'

type Head = {
  title?: string
  description?: string
  socialImage?: string
}

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
