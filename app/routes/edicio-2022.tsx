import { createRoute } from 'honox/factory'

import { TheProject } from '../components/TheProject'
import { Agenda } from '../components/2022/Agenda'
import { Sponsors } from '../components/2022/Sponsors'

export default createRoute(c => {
  return c.render(
    <>
      <section class="relative h-[50vh] bg-fme-black md:h-[66vh] lg:h-screen">
        <div class="relative z-10 flex h-full flex-col items-center justify-center p-4">
          <h1 class="text-center font-heading text-4xl text-white md:text-6xl lg:text-7xl">Festa Major d'Entitats</h1>
          <p class="mb-4 text-center font-heading text-6xl text-white md:text-8xl lg:text-9xl">2022</p>
          <p class="mb-10 text-center text-lg font-light uppercase text-white md:text-xl lg:text-2xl">
            28 de juliol al 5 d'agost | Vilanova i la Geltrú
          </p>
          <a
            href="#programa"
            class="relative flex cursor-pointer flex-row items-center rounded-md bg-white px-6 py-4 text-base text-fme-black no-underline shadow-xl md:text-lg lg:text-xl"
          >
            PROGRAMA D'ACTES
          </a>
        </div>
      </section>
      <TheProject />
      <div class="relative h-[500px] bg-gray-400 bg-divider-2-2023 bg-cover bg-center bg-no-repeat bg-blend-multiply backdrop-opacity-30 lg:bg-scroll"></div>
      <Agenda />
      <div class="relative h-[500px] bg-gray-400 bg-divider-3 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
      <Sponsors />
      <div class="relative h-[500px] bg-gray-400 bg-divider-1 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
    </>,
    { title: "Festa Major d'Entitats 2022", description: "Descobreix tota la programació de l'edició 2022" },
  )
})
