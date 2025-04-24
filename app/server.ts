import { createApp } from 'honox/server'
import { showRoutes } from 'hono/dev'

const app = createApp()

app.get('/esponsors', c => {
  return c.json({
    'your name is': 'FMEntitats',
  })
})

showRoutes(app)

export default app
