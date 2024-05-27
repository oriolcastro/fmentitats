import { html } from 'hono/html'

export const HeroImagesFader = () => {
  return (
    <div class="absolute z-10 h-full w-full object-cover">
      <div
        class="animate-fade bg-hero-1 absolute top-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat opacity-0"
        style="animation-delay:0s"
      ></div>
      <div
        class="animate-fade bg-hero-2 absolute top-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat opacity-0"
        style="animation-delay:4s"
      ></div>
      <div
        class="animate-fade bg-hero-3 absolute top-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat opacity-0"
        style="animation-delay:8s"
      ></div>
      <div
        class="animate-fade bg-hero-4 absolute top-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat opacity-0"
        style="animation-delay:12s"
      ></div>
      {html` <style></style> `}
    </div>
  )
}
