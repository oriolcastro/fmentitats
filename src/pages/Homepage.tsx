import { html } from 'hono/html'

import { Agenda } from '../components/2024/Agenda'
import { Sponsors } from '../components/2024/Sponsors'
import { Layout } from '../components/Layout'
import { TheProject } from '../components/TheProject'
import type { PageProps } from '../types'

export const Homepage = (props: PageProps) => {
  return (
    <Layout {...props.meta}>
      <section class="relative h-[50vh] bg-fme-black md:h-[66vh] lg:h-screen">
        <div id="video-container"></div>
        <video
          width="720"
          height="406"
          autoplay
          muted
          playsinline
          loop
          class="z-1 absolute h-full w-full object-cover"
          style="filter: blur(4px)"
        >
          <source
            src="https://media.fme.cat/video_fme_2023.mp4"
            srcset="https://media.fme.cat/video_fme_2023.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div class="relative z-10 flex h-full flex-col items-center justify-center p-4">
          <h1 class="text-center font-heading text-4xl text-white md:text-6xl lg:text-7xl">Festa Major d'Entitats</h1>
          <p class="mb-4 text-center font-heading text-6xl text-white md:text-8xl lg:text-9xl">2024</p>
          <p class="mb-10 text-center text-lg font-light uppercase text-white md:text-xl lg:text-2xl">
            30 de juliol al 5 d'agost | Vilanova i la Geltrú
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
      {html` <style>
        #video-container {
          height: 100%;
          width: 100%;
          background-image: url('https://media.fme.cat/video_fme_2023.mp4');
          background-color: transparent;
          position: absolute;
          background-size: cover;
          filter: blur(4px);
          z-index: 1;
        }
      </style>`}
    </Layout>
  )
}
