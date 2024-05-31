import type { PropsWithChildren } from 'hono/jsx'

export const Hero = ({ children }: PropsWithChildren) => {
  return (
    <>
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
          <source src="/static/images/2023/video.mp4" srcset="/static/images/2023/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div class="relative z-10 flex h-full flex-col items-center justify-center p-4">
          <h1 class="text-center font-heading text-4xl text-white md:text-6xl lg:text-7xl">Festa Major d'Entitats</h1>
          <p class="mb-4 text-center font-heading text-6xl text-white md:text-8xl lg:text-9xl">2023</p>
          <p class="mb-10 text-center text-lg font-light uppercase text-white md:text-xl lg:text-2xl">
            27 de juliol al 5 d'agost | Vilanova i la Geltrú
          </p>
          {children}
        </div>
      </section>
    </>
  )
}
