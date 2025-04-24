import { createApp } from 'honox/server'
import { showRoutes } from 'hono/dev'

const app = createApp()

app.get('/esponsors', c => {
  return c.redirect('https://media.fme.cat/llibret_esponsors.pdf')
})

showRoutes(app)

export default app
