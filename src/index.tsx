import { Hono } from 'hono'

import { Homepage } from './pages/Homepage'
import { FME2023 } from './pages/FME2023'

const app = new Hono()

app.get('/', c => {
  return c.html(<Homepage />)
})
app.get('/edicio-2023', c => {
  return c.html(<FME2023 />)
})

export default app
