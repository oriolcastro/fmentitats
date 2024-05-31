import { clsx } from 'clsx'
import { useRef, useState } from 'hono/jsx'
import type { FC } from 'hono/jsx'

const VideoModal: FC = () => {
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
      <button
        id="cta-button"
        onClick={openVideo}
        class="relative flex cursor-pointer flex-row items-center rounded-md bg-white px-6 py-4 text-base text-fme-black no-underline shadow-xl md:text-lg lg:text-xl"
      >
        Resum FME 2023
      </button>
      <div
        id="video-backdrop"
        class={clsx(
          'fixed left-0 top-0 z-500  h-[100vh] w-[100vw] items-center justify-center bg-fme-black',
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

export default VideoModal
