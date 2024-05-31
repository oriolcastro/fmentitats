import type { FC } from 'hono/jsx'

export const Sponsors: FC = () => {
  return (
    <section id="collaboradors" class="prose m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="my-2 text-center font-heading text-3xl uppercase">Col·laboradors</h2>
      <p class="mb-4 text-justify">
        La Festa Major d'Entitats no seria possible sense el suport dels establiments i empreses locals que col·laboren
        amb el projecte.
      </p>
      <div class="grid grid-cols-2 items-center justify-items-center gap-2 md:grid-cols-4">
        {/* <!-- <picture>
          <source srcset="/static/images/esponsors/aperitius_tafaner.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/aperitius_tafaner.png"
            loading="lazy"
            alt="Aperitius Tafaner"
            width="200"
            height="200"
          />
        </picture> --> */}
      </div>
    </section>
  )
}
