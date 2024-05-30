import { createRoute } from 'honox/factory'

import TheProject from '../islands/TheProject'
import { Agenda } from '../islands/2023/Agenda'
import { Sponsors } from '../islands/2023/Sponsors'
import { Hero } from '../islands/2023/Hero'

export default createRoute(c => {
  return c.render(
    <>
      <Hero />
      <TheProject />
      <div class="relative h-[500px] bg-gray-400 bg-divider-2-2023 bg-cover bg-center bg-no-repeat bg-blend-multiply backdrop-opacity-30 lg:bg-scroll"></div>
      <Agenda />
      <div class="relative h-[500px] bg-gray-400 bg-divider-3 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
      <Sponsors />
      <div class="relative h-[500px] bg-gray-400 bg-divider-1 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
    </>,
    { title: "Festa Major d'Entitats 2023", description: "Descobreix tota la programació de l'edició 2023" },
  )
})
