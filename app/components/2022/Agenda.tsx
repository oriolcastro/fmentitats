import type { FC } from 'hono/jsx'

export const Agenda: FC = () => {
  return (
    <section id="programa" class="m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="my-2 text-center font-heading text-3xl uppercase">Programa d'actes</h2>
      <p class="my-4 text-center text-xl italic">Això és tot el que us hem preparat per a aquesta FME.</p>
      <div class="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="flex flex-col items-center justify-center">
          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dijous 28 de juliol</div>
          <p class="text-center font-bold">19:00h - Taller de castells</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Bordegassos de Vilanova</p>

          <p class="mt-2 text-center font-bold">21:00h - Assaig de la Diada de les Neus</p>
          <p class="text-center">Local de Bordegassos de Vilanova</p>
          <p class="text-center">Organitza: Bordegassos de Vilanova</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Divendres 29 de juliol</div>
          <p class="text-center font-bold">17:00h - Ludoteca del Correfoc</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Ball de Diables de Vilanova i el Drac de Vilanova i la Geltrú</p>

          <p class="mt-2 text-center font-bold">20:30h - Sopar del Correfoc</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Ball de Diables de Vilanova i FME</p>

          <p class="mt-2 text-center font-bold">22:30h - Correfoc</p>
          <p class="text-center">Coordina: Ball de Diables de Vilanova</p>

          <p class="mt-2 text-center font-bold">22:30h - Sobretaula de Correfoc</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: FME</p>

          <p class="mt-2 text-center font-bold">00:30h - Concerts amb Mocambo i Blndkid dj set</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: FME</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dissabte 30 de juliol</div>
          <p class="text-center font-bold">18:00h - Diada de les Neus</p>
          <p class="text-center">Plaça de la Vila</p>
          <p class="text-center">Coordina: Bordegassos de Vilanova</p>

          <p class="mt-2 text-center font-bold">19:30h - Ruta Major d'Entitats</p>
          <p class="text-center">Organitza: Apol·lo</p>

          <p class="mt-2 text-center font-bold">22:00h - Sopar de la Diada i la RME</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: Bordegassos de Vilanova i FME</p>

          <p class="mt-2 text-center font-bold">22:30h - Concerts amb Maio, Jazzwoman i Nativa</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: FME</p>
          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dilluns 1 d'agost</div>
          <p class=" text-center font-bold">20:00h - Sopar i Ball de gralles</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: La Unió Vilanovina</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Dijous 4 d'agost</div>
          <p class="text-center font-bold">14:00h - Dinar de Festa Major</p>
          <p class="text-center">Plaça de les Casernes</p>
          <p class="text-center">Organitza: FME</p>

          <div class="mt-4 text-lg font-semibold text-fme-yellow">Divendres 5 d'agost</div>
          <p class="text-center font-bold">08:00h - Esmorzar de Festa Major</p>
          <p class="text-center">Plaça de la Vila</p>
          <p class="text-center">Organitza: Apol·lo</p>
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
            href="https://open.spotify.com/playlist/0qiBQoBIP6jONdueVIbpQa?si=8bfda7fcfe57409c"
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
              <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
            </svg>
            Llista FME 2022
          </a>
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6"></div>
        </div>
        <picture>
          <source srcset="/static/images/2022/cartell2022.avif" type="image/avif" />
          <source srcset="/static/images/2022/cartell2022.webp" type="image/webp" />
          <img
            src="/static/images/2022/cartell2022.jpg"
            loading="lazy"
            alt="Cartell dels concerts de l'edició 2022"
            width="420"
            height="525"
          />
        </picture>
      </div>
    </section>
  )
}
