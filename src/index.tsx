import { Hono } from 'hono'
import { cache } from 'hono/cache'

import { Homepage } from './pages/Homepage'
import { FME2023 } from './pages/FME2023'
import { PageProps } from './types'

const app = new Hono()

app.get('/static/*', cache({ cacheName: 'assets', cacheControl: 'public, max-age=604800, must-revalidate' }))
app.get('/', c => {
  const props = {
    meta: {
      title: "Festa Major d'Entitats 2024",
      description: "Descobreix tota la programació de l'edició 2024",
    },
  } satisfies PageProps

  return c.html(<Homepage {...props} />)
})
app.get('/edicio-2023', c => {
  const props = {
    meta: {
      title: "Festa Major d'Entitats 2023",
      description: "Descobreix tota la programació de l'edició 2023",
    },
  } satisfies PageProps

  return c.html(<FME2023 {...props} />)
})

export default app
