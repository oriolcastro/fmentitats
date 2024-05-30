export default function HeroImagesFader() {
  return (
    <div class="absolute z-10 h-full w-full object-cover">
      <div
        class="absolute top-0 -z-10 h-full w-full animate-fade bg-hero-1 bg-cover bg-center bg-no-repeat opacity-0"
        style="animation-delay:0s"
      ></div>
      <div
        class="absolute top-0 -z-10 h-full w-full animate-fade bg-hero-2 bg-cover bg-center bg-no-repeat opacity-0"
        style="animation-delay:4s"
      ></div>
      <div
        class="absolute top-0 -z-10 h-full w-full animate-fade bg-hero-3 bg-cover bg-center bg-no-repeat opacity-0"
        style="animation-delay:8s"
      ></div>
      <div
        class="absolute top-0 -z-10 h-full w-full animate-fade bg-hero-4 bg-cover bg-center bg-no-repeat opacity-0"
        style="animation-delay:12s"
      ></div>
    </div>
  )
}
