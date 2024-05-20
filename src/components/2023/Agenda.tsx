import { html } from 'hono/html'

export const Agenda = () => {
  return html`
    <section id="programa" class="m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="my-2 text-center font-heading text-3xl uppercase">Programa d'actes</h2>
      <p class="my-4 text-center text-xl italic">Això és tot el que us hem preparat per a aquesta FME.</p>
      <div class="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="flex flex-col items-center justify-center">
          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dijous 27 de juliol</div>
          <p class="text-center font-bold">21:30h - Assaig especial de la Diada de les Neus</p>
          <p class="text-center">Local de Bordegassos de Vilanova</p>
          <p class="text-center">Organitza: Bordegassos de Vilanova</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Divendres 28 de juliol</div>
          <p class="text-center font-bold">17:00h - Ludoteca del Correfoc</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Ball de Diables de Vilanova i el Drac de Vilanova i la Geltrú</p>

          <p class="mt-2 text-center font-bold">20:00h - Sopar del Correfoc</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Ball de Diables de Vilanova</p>

          <p class="mt-2 text-center font-bold">22:30h - Ballem sota el foc del Correfoc</p>
          <p class="text-center">Pels carrers de la vila</p>

          <p class="mt-2 text-center font-bold">00:30h - Concerts amb Figa Flawas i DJ Casqui</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: FME</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dissabte 29 de juliol</div>
          <p class="text-center font-bold">18:00h - Fem Pinya a la Diada de les Neus</p>
          <p class="text-center">Plaça de la Vila</p>

          <p class="mt-2 text-center font-bold">19:00h - Ruta Major d'Entitats</p>
          <p class="text-center">Plaça del Mercat</p>
          <p class="text-center">Organitza: Apol·lo</p>

          <p class="mt-2 text-center font-bold">23:00h - Concerts amb Ketekalles, Awakate i Boom Boom Fighters</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: FME</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Diumenge 30 de juliol</div>
          <p class="text-center font-bold">19:00h - Vespre de Monòlegs amb Marc Sarrats, Gemma Ortis i Albert Roig.</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Festuc</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dilluns 31 de juliol</div>
          <p class="text-center font-bold">18:30h - Escalabirres</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Bordegassos de Vilanova</p>

          <p class="mt-2 text-center font-bold">20:30h - Botifarrada popular</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Bordegassos de Vilanova i La Unió Vilanovina</p>

          <p class="mt-2 text-center font-bold">21:00h - Ball de Gralles amb l'Havana Xica i Canya d'Or</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: La Unió Vilanovina</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dimarts 1 d'agost</div>
          <p class="text-center font-bold">
            19:00h - Jornada antirrepresiva, xerrada i música en directe “Cultura i Carrer: A la reconquesta de l'espai
            públic”
          </p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Ateneu Vilanoví</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dimecres 2 d'agost</div>
          <p class="text-center font-bold">18:00h - La petita FME: Tarda de jocs</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: FME</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Divendres 4 d'agost</div>
          <p class="text-center font-bold">13:30h - Vermut i dinar de la FME i sobretaula musical</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: FME</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dissabte 5 d'agost</div>
          <p class="text-center font-bold">00:00h - Ball del Vot del Poble</p>
          <p class="text-center">Plaça de la Peixeteria</p>
          <p class="text-center">Organitza: Ateneu Vilanoví</p>
        </div>
      </div>

      <div class="mb-6 flex flex-row flex-wrap justify-center gap-4 lg:flex-nowrap">
        <div class="flex-1">
          <h3 class="my-2 font-heading text-xl">Descobreix la música de la FME</h3>
          <p class="prose mb-4 text-justify">
            Us hem preparat una llista de reproducció amb els millors èxits de tots els artistes que actuaran a la Festa
            Major d'Entitats d'aquest any.
          </p>
          <a
            href="https://open.spotify.com/playlist/76ogOCN8Er0CTryn939UZ2?si=88c43e16805a445e"
            target="_blank"
            rel="noopener"
            class="mx-auto mb-8 flex w-[fit-content] flex-row items-center rounded-md bg-fme-green px-4 py-3 text-white"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 fill-current text-white"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
              />
            </svg>
            Llista FME 2023
          </a>
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
            <a
              href="https://open.spotify.com/artist/2enhM5DK9oTxWiCVpFIDv3?si=OXNaQ68nTNOdBIO10tj_YQ"
              target="_blank"
              rel="noopener"
              class="transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Figa Flawas"
            >
              <picture>
                <source srcset="/static/images/2023/grups/figaflawas.avif" type="image/avif" />
                <source srcset="/static/images/2023/grups/figaflawas.webp" type="image/webp" />
                <img
                  src="/static/images/2023/grups/figaflawas.png"
                  loading="lazy"
                  alt="Figa Flawas"
                  width="450"
                  height="450"
                />
              </picture>
            </a>
            <a
              href="https://instagram.com/la.casqui"
              target="_blank"
              rel="noopener"
              class="transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Djs Casqui"
            >
              <picture>
                <source srcset="/static/images/2023/grups/casqui.avif" type="image/avif" />
                <source srcset="/static/images/2023/grups/casqui.webp" type="image/webp" />
                <img
                  src="/static/images/2023/grups/casqui.png"
                  loading="lazy"
                  alt="Dj Casqui"
                  width="450"
                  height="450"
                />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/32opeIbCeLG1LiAkmwiiof?si=ARIeUjZfQhi_f1AheV459Q"
              target="_blank"
              rel="noopener"
              class="transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Ketekalles"
            >
              <picture>
                <source srcset="/static/images/2023/grups/ketekalles.avif" type="image/avif" />
                <source srcset="/static/images/2023/grups/ketekalles.webp" type="image/webp" />
                <img
                  src="/static/images/2023/grups/ketekalles.png"
                  loading="lazy"
                  alt="Ketekalles"
                  width="450"
                  height="450"
                />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/48nizYtwPgaiGgp7rMmNCX?si=CFOxHujvTSqxfmvUEuEnAA"
              target="_blank"
              rel="noopener"
              class="transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Awakate"
            >
              <picture>
                <source srcset="/static/images/2023/grups/awakate.avif" type="image/avif" />
                <source srcset="/static/images/2023/grups/awakate.webp" type="image/webp" />
                <img
                  src="/static/images/2023/grups/awakate.jpeg"
                  loading="lazy"
                  alt="Awakate"
                  width="450"
                  height="450"
                />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/2bNKVXUVgZPjFR9VNYJNj6?si=onuJwHD8SIS2Exq5LqBCxQ"
              target="_blank"
              rel="noopener"
              class="transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Boom Boom Fighters"
            >
              <picture>
                <source srcset="/static/images/2023/grups/boomboom.avif" type="image/avif" />
                <source srcset="/static/images/2023/grups/boomboom.webp" type="image/webp" />
                <img
                  src="/static/images/2023/grups/boomboom.png"
                  loading="lazy"
                  alt="Boom Boom Fighters"
                  width="450"
                  height="450"
                />
              </picture>
            </a>
          </div>
        </div>
        <picture>
          <source srcset="/static/images/2023/cartell2023.avif" type="image/avif" />
          <source srcset="/static/images/2023/cartell2023.webp" type="image/webp" />
          <img
            src="/static/images/2023/cartell2023.jpg"
            loading="lazy"
            alt="Cartell dels concerts de l'edició 2023"
            width="420"
            height="525"
          />
        </picture>
      </div>
    </section>
  `
}
