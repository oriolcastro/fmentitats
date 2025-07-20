import { createRoute } from 'honox/factory'

import { TheProject } from '../components/2022/TheProject'
import { Agenda } from '../components/2022/Agenda'
import { Sponsors } from '../components/2022/Sponsors'
import { Hero } from '../components/2022/Hero'

export default createRoute(c => {
  return c.render(
    <>
      <Hero />
      <TheProject />
      <div class="bg-divider-2-2023 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply backdrop-opacity-30 lg:bg-scroll"></div>
      <Agenda />
      <div class="bg-divider-3 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
      <Sponsors />
      <div class="bg-divider-1 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
    </>,
    { title: "Festa Major d'Entitats 2022", description: "Descobreix tota la programació de l'edició 2022" },
  )
})
