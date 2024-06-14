import type { FC } from 'hono/jsx'

export const Agenda: FC = () => {
  {
    /* <div
        class="flex h-0 w-full flex-wrap justify-center gap-6 py-6 opacity-0 transition-opacity duration-500 ease-in-out"
        id="oldPosters"
      >
        <picture>
          <source srcset="images/cartell2017.avif" type="image/avif" />
          <source srcset="images/cartell2017.webp" type="image/webp" />
          <img src="images/cartell2017.jpg" width="320" height="452" loading="lazy" alt="Cartell de l'edició 2017" />
        </picture>
        <picture>
          <source srcset="images/cartell2018.avif" type="image/avif" />
          <source srcset="images/cartell2018.webp" type="image/webp" />
          <img src="images/cartell2018.jpg" width="320" height="452" loading="lazy" alt="Cartell de l'edició 2018" />
        </picture>
        <picture>
          <source srcset="images/cartell2019.avif" type="image/avif" />
          <source srcset="images/cartell2019.webp" type="image/webp" />
          <img src="images/cartell2019.jpg" width="320" height="452" loading="lazy" alt="Cartell de l'edició 2019" />
        </picture>
        <picture>
          <source srcset="images/cartell2021.avif" type="image/avif" />
          <source srcset="images/cartell2021.webp" type="image/webp" />
          <img src="images/cartell2021.jpg" width="320" height="452" loading="lazy" alt="Cartell de l'edició 2021" />
        </picture>
        <picture>
          <source srcset="images/cartell2022.avif" type="image/avif" />
          <source srcset="images/cartell2022.webp" type="image/webp" />
          <img
            src="images/cartell2022.jpg"
            width="320"
            height="452"
            loading="lazy"
            alt="Cartell dels concerts de l'edició 2022"
          />
        </picture>
      </div> */
  }

  return (
    <section id="programa" class="m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="my-2 text-center font-heading text-3xl uppercase">Programa d'actes</h2>
      <p class="my-4 text-center text-xl italic">Això és tot el que us hem preparat per a aquesta FME.</p>
      <div class="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="flex flex-col items-start gap-12">
          <div class="flex flex-col gap-4">
            <div class="w-fit bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
              Dimarts 30 de juliol
            </div>
            <div>
              <p class="font-sm text-sm">18:00h</p>
              <p class="text-lg font-bold">Estibacaixes i berenar popular</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Bordegassos de Vilanova</p>
            </div>
            <div>
              <p class="font-sm text-sm">19:00h</p>
              <p class="text-lg font-bold">Vesprada de Glosa</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Ateneu Vilanoví</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="w-fit bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
              Dimecres 31 de juliol
            </div>
            <div>
              <p class="font-sm text-sm">18:30h</p>
              <p class="text-lg font-bold">
                La petita FME: Tarda de jocs de carrer en família amb la companyia La Gralla
              </p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
            <div>
              <p class="font-sm text-sm">20:30h</p>
              <p class="text-lg font-bold">Botifarrada popular</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: La Unió Vilanovina</p>
            </div>
            <div>
              <p class="font-sm text-sm">21:30h</p>
              <p class="text-lg font-bold">Ball de Gralles amb Les Antines i Grallers de l'Havana Xica</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: La Unió Vilanovina</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="w-fit bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
              Dijous 1 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">19:00h</p>
              <p class="text-lg font-bold">Pòdcast en viu: L’Arrabassada</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Festuc</p>
            </div>
            <div>
              <p class="font-sm text-sm">21:00h</p>
              <p class="text-lg font-bold">Assaig especial de la Diada de les Neus</p>
              <p>Local de Bordegassos de Vilanova</p>
              <p>Organitza: Bordegassos de Vilanova</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="w-fit bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
              Divendres 2 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">17:30h</p>
              <p class="text-lg font-bold">Ludoteca del Correfoc</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Ball de Diables de Vilanova i el Drac de Vilanova i la Geltrú</p>
            </div>
            <div>
              <p class="font-sm text-sm">22:30h</p>
              <p class="text-lg font-bold">Ballem sota el foc del Correfoc</p>
              <p>Pels carrers de la vila</p>
            </div>
            <div>
              <p class="font-sm text-sm">En acabar el sostre de foc</p>
              <p class="text-lg font-bold">Ball del Correfoc amb DJs locals</p>
              <p>Plaça de la Vila</p>
              <p>Organitza: Ball de Diables de Vilanova</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-12">
          <div class="flex flex-col gap-4">
            <div class="w-fit bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
              Dissabte 3 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">18:00h</p>
              <p class="text-lg font-bold">Fem Pinya a la Diada de les Neus</p>
              <p>Plaça de la Vila</p>
            </div>
            <div>
              <p class="font-sm text-sm">En acabar la Diada de les Neus</p>
              <p class="text-lg font-bold">Cercavila d'Entitats</p>
              <p>Plaça dels Cotxes</p>
              <p>Organitza: Apol·lo</p>
            </div>
            <div>
              <p class="font-sm text-sm">21:30h</p>
              <p class="text-lg font-bold">Concerts: Vic Mirallas, Queralt Lahoz, Las Bajas Pasiones i Cham</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="w-fit bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
              Diumenge 4 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">13:00h</p>
              <p class="text-lg font-bold">Vermut i dinar de la FME amb sobretaula musical</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
            <div>
              <p class="font-sm text-sm">23:30h</p>
              <p class="text-lg font-bold">
                Concerts: El Paio de Gràcia & Las Malas Lenguas, La Cosina i DJ Kötxambrosa
              </p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="w-fit bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
              Dilluns 5 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">00:00h</p>
              <p class="text-lg font-bold">Ball del Vot del Poble</p>
              <p>Plaça de la Pexeteria</p>
              <p>Organitza: Ateneu Vilanoví</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-6 flex flex-row flex-wrap justify-center gap-4 lg:flex-nowrap">
        <div class="flex-1">
          <h3 class="my-2 font-heading text-xl">La música de la FME</h3>
          <p class="prose mb-4 text-justify">
            Teniu una llista de reproducció amb els èxits de tots els artistes que actuaran a la Festa Major d'Entitats
            d'aquest any.
          </p>
          <a
            href="https://open.spotify.com/playlist/2VRhbvrgsyKc33vDc4PoCw?si=50e3a2485f2a4ebf"
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
            Llista FME 2024
          </a>
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
            <a
              href="https://open.spotify.com/artist/08VkVB0giqumfUMl4Ea922?si=tkjBVsbTR8-Tfd-QtZX6nA"
              target="_blank"
              rel="noopener"
              class="aspect-square transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Vic Mirallas"
            >
              <picture>
                <source srcset="static/images/2024/grups/vic_mirallas.avif" type="image/avif" />
                <source srcset="static/images/2024/grups/vic_mirallas.webp" type="image/webp" />
                <img
                  src="static/images/2024/grups/vic_mirallas.jpg"
                  loading="lazy"
                  alt="Vic Mirallas"
                  class="block h-0 min-h-full w-0 min-w-full object-cover"
                />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/5njCmi440o0ft013pOw9W5?si=eMt6YVXgStayZ2PWNsZCdQ"
              target="_blank"
              rel="noopener"
              class="aspect-square transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Queralt Lahoz"
            >
              <picture>
                <source srcset="static/images/2024/grups/queralt_lahoz.avif" type="image/avif" />
                <source srcset="static/images/2024/grups/queralt_lahoz.webp" type="image/webp" />
                <img
                  src="static/images/2024/grups/queralt_lahoz.jpg"
                  loading="lazy"
                  alt="Queralt Lahoz"
                  class="block h-0 min-h-full w-0 min-w-full object-cover"
                />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/4D7AeNXrmYzKf4DENKqyeP?si=zYlUWwCcRwy-jz9N0IJFBA"
              target="_blank"
              rel="noopener"
              class="aspect-square transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Las Bajas Pasiones"
            >
              <picture>
                <source srcset="static/images/2024/grups/las_bajas_pasiones.avif" type="image/avif" />
                <source srcset="static/images/2024/grups/las_bajas_pasiones.webp" type="image/webp" />
                <img
                  src="static/images/2024/grups/las_bajas_pasiones.jpg"
                  loading="lazy"
                  alt="Las Bajas Pasiones"
                  class="block h-0 min-h-full w-0 min-w-full object-cover"
                />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/2X2BpGXqfZ2lRz9b4ZNw8T?si=xC-KONAgRb-EjRh-UiPP2A"
              target="_blank"
              rel="noopener"
              class="aspect-square transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de La Cosina"
            >
              <picture>
                <source srcset="static/images/2024/grups/la_cosina.avif" type="image/avif" />
                <source srcset="static/images/2024/grups/la_cosina.webp" type="image/webp" />
                <img
                  src="static/images/2024/grups/la_cosina.jpg"
                  loading="lazy"
                  alt="La Cosina"
                  class="block h-0 min-h-full w-0 min-w-full object-cover"
                />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/67xTdg4iA5sZanqrdiE9mp?si=Oiqt3lvfTbaZcN4jh_2dIA"
              target="_blank"
              rel="noopener"
              class="aspect-square transform transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de El Paio de Gracia & Las Malas Lenguas"
            >
              <picture>
                <source srcset="static/images/2024/grups/las_malas_lenguas.avif" type="image/avif" />
                <source srcset="static/images/2024/grups/las_malas_lenguas.webp" type="image/webp" />
                <img
                  src="static/images/2024/grups/las_malas_lenguas.jpg"
                  loading="lazy"
                  alt="El Paio de Gracia & Las Malas Lenguas"
                  class="block h-0 min-h-full w-0 min-w-full object-cover"
                />
              </picture>
            </a>
          </div>
        </div>
        <picture>
          <source srcset="static/images/2024/cartell2024.avif" type="image/avif" />
          <source srcset="static/images/2024/cartell2024.webp" type="image/webp" />
          <img
            src="static/images/2024/cartell2024.jpg"
            loading="lazy"
            alt="Cartell dels concerts de l'edició 2024"
            width="420"
            height="525"
            class="mt-12"
          />
        </picture>
      </div>
    </section>
  )
}
