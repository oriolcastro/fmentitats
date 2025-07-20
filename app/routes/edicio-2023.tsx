import { createRoute } from 'honox/factory'

import { TheProject } from '../components/2023/TheProject'
import { Agenda } from '../components/2023/Agenda'
import { Sponsors } from '../components/2023/Sponsors'
import { Hero } from '../components/2023/Hero'
import VideoModal from '../islands/VideoModal'

export default createRoute(c => {
  return c.render(
    <>
      <Hero>
        <VideoModal year="2023" />
      </Hero>
      <TheProject />
      <div class="bg-divider-2-2023 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply backdrop-opacity-30 lg:bg-scroll"></div>
      <Agenda />
      <div class="bg-divider-3 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
      <Sponsors />
      <div class="bg-divider-1 relative h-[500px] bg-gray-400 bg-cover bg-center bg-no-repeat bg-blend-multiply lg:bg-scroll"></div>
    </>,
    {
      title: "Festa Major d'Entitats 2023",
      description: "Descobreix tota la programació de l'edició 2023",
      socialImage: '/static/images/2023/social.webp',
    },
  )
})
