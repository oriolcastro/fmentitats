import { useRef, useState } from 'hono/jsx'
import { clsx } from 'clsx'

export const Hero = () => {
  const [isVideoOpen, setVideoOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function openVideo() {
    setVideoOpen(true)
    videoRef.current?.play()
  }

  function closeVideo(e: MouseEvent) {
    console.log(e)
    if (e.target?.id === 'video-backdrop' || e.target?.id === 'close-modal-button') {
      setVideoOpen(false)
      videoRef.current?.pause()
    }
  }

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

          <button
            id="cta-button"
            onClick={openVideo}
            class="relative flex cursor-pointer flex-row items-center rounded-md bg-white px-6 py-4 text-base text-fme-black no-underline shadow-xl md:text-lg lg:text-xl"
          >
            Resum FME 2023
          </button>
        </div>
      </section>
      <div
        id="video-backdrop"
        class={clsx(
          'absolute left-0 top-0 z-100  h-[100vh] w-[100vw] items-center justify-center bg-fme-black',
          isVideoOpen ? 'flex' : 'hidden',
        )}
        onClick={closeVideo}
      >
        <div class="relative z-500  w-4/5">
          <button
            id="close-modal-button"
            onClick={closeVideo}
            class="absolute -right-3 -top-3 z-[1000] flex h-8 w-8 items-center justify-center rounded-full bg-white p-2 text-fme-black"
          >
            X
          </button>
          <video ref={videoRef} id="video" controls controlslist="nodownload" class="z-500 aspect-video">
            <source
              src="https://media.fme.cat/video_fme_2023.mp4"
              srcset="https://media.fme.cat/video_fme_2023.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  )
}
