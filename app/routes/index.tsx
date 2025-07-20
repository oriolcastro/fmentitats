import { createRoute } from 'honox/factory'

import { TheProject } from '../components/TheProject'
import { Agenda } from '../components/2025/Agenda'
import { Sponsors } from '../components/2025/Sponsors'
import { HeroImagesFader } from '../components/HeroImageFader'

export default createRoute(c => {
  return c.render(
    <>
      <section class="bg-fme-black relative h-[50vh] md:h-[66vh] lg:h-screen">
        <div id="video-container"></div>
        <HeroImagesFader />

        <div class="relative z-10 flex h-full flex-col items-center justify-center bg-transparent p-4">
          <h1 class="font-heading text-center text-4xl text-white md:text-6xl lg:text-7xl">Festa Major d'Entitats</h1>
          <p class="font-heading mb-4 text-center text-6xl text-white md:text-8xl lg:text-9xl">2025</p>
          <p class="mb-10 text-center text-lg font-light text-white uppercase md:text-xl lg:text-2xl">
            29 de juliol al 5 d'agost | Vilanova i la Geltrú
          </p>
          <a
            href="#programa"
            class="text-fme-black relative flex cursor-pointer flex-row items-center rounded-md bg-white px-6 py-4 text-base no-underline shadow-xl md:text-lg lg:text-xl"
          >
            PROGRAMA D'ACTES
          </a>
        </div>
      </section>
      <TheProject />
      <div class="bg-divider-2-2023 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply backdrop-opacity-30 lg:bg-scroll"></div>
      <Agenda />
      <div class="bg-divider-3 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
      <Sponsors />
      <div class="bg-divider-1 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
    </>,
    {
      title: "Festa Major d'Entitats 2025",
      description: "Descobreix tota la programació de l'edició 2025",
      socialImage: '',
    },
  )
})
