import type { FC } from 'hono/jsx'

export const Sponsors: FC = () => {
  return (
    <section id="collaboradors" class="prose m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="font-heading my-2 text-center text-3xl uppercase">Col·laboradors</h2>
      <p class="mb-4 text-justify">
        La Festa Major d'Entitats no seria possible sense el suport dels establiments i empreses locals que col·laboren
        amb el projecte.
      </p>
      <div class="grid grid-cols-1 items-center justify-items-center gap-2 md:grid-cols-3">
        {/* TODO: use differnet grid size for each level to show logos in different sizes */}
        {/* TODO: put missing logos */}
        {/* Nivell 4 */}
        <picture>
          <source srcset="/static/images/2025/esponsors/aperitius_tafaner.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/aperitius_tafaner.png"
            loading="lazy"
            alt="Aperitius Tafaner"
            width="300"
            height="300"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/estrella_galicia.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/estrella_galicia.png"
            loading="lazy"
            alt="Estrella Galicia"
            width="300"
            height="300"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/dvp.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/dvp.png"
            loading="lazy"
            alt="Distribucio i vending Penedes"
            width="300"
            height="300"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/gin_mg.webp" type="image/webp" />
          <img src="/static/images/2025/esponsors/gin_mg.png" loading="lazy" alt="Gin MG" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/tecjardi.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/tecjardi.png"
            loading="lazy"
            alt="Tecjardi"
            width="300"
            height="300"
          />
        </picture>
      </div>
      {/* Nivell 3 */}
      <div class="grid grid-cols-1 items-center justify-items-center gap-6 md:grid-cols-5">
        <picture>
          <source srcset="/static/images/2025/esponsors/practic_audiovisuals.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/practic_audiovisuals.png"
            loading="lazy"
            alt="Pràctic Audiovisuals"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/proservis.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/proservis.jpg"
            loading="lazy"
            alt="Proservis"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/bacallaneria_toni.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/bacallaneria_toni.png"
            loading="lazy"
            alt="Bacallaneria Toni"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/joan_callejon_personal_trainer.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/joan_callejon_personal_trainer.png"
            loading="lazy"
            alt="Joan Callejon Personal Trainer"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/ombu_bistro.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/ombu_bistro.png"
            loading="lazy"
            alt="L'ombu Bistro"
            width="200"
            height="200"
          />
        </picture>
      </div>

      {/* Nivell 2 */}
      <div class="grid grid-cols-5 items-center justify-items-center gap-2 md:grid-cols-7">
        <picture>
          <source srcset="/static/images/2025/esponsors/el_celler.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/el_celler.png"
            loading="lazy"
            alt="El Celler "
            width="150"
            height="150"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/la_sidreria.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/la_sidreria.png"
            loading="lazy"
            alt="La Sidreria "
            width="150"
            height="150"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/la_tasca.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/la_tasca.png"
            loading="lazy"
            alt="La Tasca "
            width="150"
            height="150"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/la_lluna.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/la_lluna.png"
            loading="lazy"
            alt="La Lluna"
            width="150"
            height="150"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/carpeta_moderna.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/carpeta_moderna.jpg"
            loading="lazy"
            alt="Carpeta Moderna"
            width="150"
            height="150"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/supermercats_jr.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/supermercats_jr.png"
            loading="lazy"
            alt="Supermercats JR "
            width="150"
            height="150"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/bar_italia.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/bar_italia.png"
            loading="lazy"
            alt="Bar Italia"
            width="150"
            height="150"
          />
        </picture>
      </div>

      {/* Nivell 1 */}
      <div class="grid grid-cols-4 items-center justify-items-center gap-2 md:grid-cols-9">
        <picture>
          <source srcset="/static/images/2025/esponsors/fisio_lab.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/fisio_lab.png"
            loading="lazy"
            alt="Fisio Lab"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/ganiveteria_rodriguez.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/ganiveteria_rodriguez.png"
            loading="lazy"
            alt="Ganiveteria Rodriguez"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/campus_academia.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/campus_academia.png"
            loading="lazy"
            alt="Campus Academia"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/2025/esponsors/bar_del_mercat.webp" type="image/webp" />
          <img
            src="/static/images/2025/esponsors/bar_del_mercat.jpg"
            loading="lazy"
            alt="Bar del Mercat"
            width="200"
            height="200"
          />
        </picture>
      </div>
    </section>
  )
}
