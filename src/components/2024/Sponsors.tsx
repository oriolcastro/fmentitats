import { html } from 'hono/html'

export const Sponsors = () => {
  return html`
    <section id="collaboradors" class="prose m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="my-2 text-center font-heading text-3xl uppercase">Col·laboradors</h2>
      <p class="mb-4 text-justify">
        La Festa Major d'Entitats no seria possible sense el suport dels establiments i empreses locals que col·laboren
        amb el projecte.
      </p>
      <div class="grid grid-cols-2 items-center justify-items-center gap-2 md:grid-cols-4">
        <picture>
          <source srcset="/static/images/esponsors/aperitius_tafaner.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/aperitius_tafaner.png"
            loading="lazy"
            alt="Aperitius Tafaner"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/estrella_galicia.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/estrella_galicia.png"
            loading="lazy"
            alt="Estrella Galicia"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/dvp.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/dvp.png"
            loading="lazy"
            alt="Distribucio i vending Penedes"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/gin_mg.webp" type="image/webp" />
          <img src="/static/images/esponsors/gin_mg.png" loading="lazy" alt="Gin MG" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/aican.webp" type="image/webp" />
          <img src="/static/images/esponsors/aican.jpg" loading="lazy" alt="Aican" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/paradistes_mercatt.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/paradistes_mercatt.jpg"
            loading="lazy"
            alt="Associacio Paradistes del Mercat"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/arcon_de_alba.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/arcon_de_alba.jpg"
            loading="lazy"
            alt="Arcon de Alba"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/bacallaneria_toni.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/bacallaneria_toni.png"
            loading="lazy"
            alt="Bacallaneria Toni"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/bar_del_mercat.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/bar_del_mercat.jpg"
            loading="lazy"
            alt="Bar del Mercat"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/cal_trajo.webp" type="image/webp" />
          <img src="/static/images/esponsors/cal_trajo.png" loading="lazy" alt="Cal Trajo" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/can_batadet.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/can_batadet.png"
            loading="lazy"
            alt="Can Batadet"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/carpeta_moderna.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/carpeta_moderna.jpg"
            loading="lazy"
            alt="Carpeta Moderna"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/congelats_cadi.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/congelats_cadi.jpeg"
            loading="lazy"
            alt="Congelats Cadi"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/ferreteria_daumar.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/ferreteria_daumar.png"
            loading="lazy"
            alt="Ferreteria Daumar"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/fisio_lab.webp" type="image/webp" />
          <img src="/static/images/esponsors/fisio_lab.png" loading="lazy" alt="Fisio Lab" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/freilka.webp" type="image/webp" />
          <img src="/static/images/esponsors/freilka.png" loading="lazy" alt="Freilka" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/gelats_llorens.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/gelats_llorens.jpeg"
            loading="lazy"
            alt="Gelats Llorens"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/la_cava.webp" type="image/webp" />
          <img src="/static/images/esponsors/la_cava.png" loading="lazy" alt="La Cava" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/lotus.webp" type="image/webp" />
          <img src="/static/images/esponsors/lotus.png" loading="lazy" alt="Lotus" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/marta_carnisseria.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/marta_carnisseria.jpg"
            loading="lazy"
            alt="Marta Carnisseria"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/mon_petito.webp" type="image/webp" />
          <img src="/static/images/esponsors/mon_petito.jpg" loading="lazy" alt="Mon Petito" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/padisgraf.webp" type="image/webp" />
          <img src="/static/images/esponsors/padisgraf.png" loading="lazy" alt="Padisgraf" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/peixosdolors.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/peixosdolors.jpg"
            loading="lazy"
            alt="Peixos Dolors"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/solfico.webp" type="image/webp" />
          <img src="/static/images/esponsors/solfico.png" loading="lazy" alt="Solfico" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/temps_de_recovery.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/temps_de_recovery.png"
            loading="lazy"
            alt="Temps de Recovery"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/el_rostit.webp" type="image/webp" />
          <img src="/static/images/esponsors/el_rostit.png" loading="lazy" alt="El Rostit" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/ganiveteria_rodriguez.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/ganiveteria_rodriguez.png"
            loading="lazy"
            alt="Ganiveteria Rodriguez"
            width="200"
            height="200"
          />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/bar_italia.webp" type="image/webp" />
          <img src="/static/images/esponsors/bar_italia.png" loading="lazy" alt="Bar Italia" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/camanes.webp" type="image/webp" />
          <img src="/static/images/esponsors/camanes.jpg" loading="lazy" alt="Camañes" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/el_celler.webp" type="image/webp" />
          <img src="/static/images/esponsors/el_celler.png" loading="lazy" alt="El Celler " width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/la_gralla.webp" type="image/webp" />
          <img src="/static/images/esponsors/la_gralla.png" loading="lazy" alt="La Gralla" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/la_lluna.webp" type="image/webp" />
          <img src="/static/images/esponsors/la_lluna.png" loading="lazy" alt="La Lluna" width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/la_tasca.webp" type="image/webp" />
          <img src="/static/images/esponsors/la_tasca.png" loading="lazy" alt="La Tasca " width="200" height="200" />
        </picture>
        <picture>
          <source srcset="/static/images/esponsors/supermercats_jr.webp" type="image/webp" />
          <img
            src="/static/images/esponsors/supermercats_jr.png"
            loading="lazy"
            alt="Supermercats JR "
            width="200"
            height="200"
          />
        </picture>
      </div>
    </section>
  `
}
