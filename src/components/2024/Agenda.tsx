export const Agenda = () => {
  function toggleOldPosters() {
    const container = document.getElementById('oldPosters')

    const isHidden = container.classList.contains('h-0')
    if (isHidden) {
      container.classList.add('opacity-100')
      container.classList.remove('opacity-0')
      container.classList.remove('h-0')
    } else {
      container.classList.remove('opacity-100')
      container.classList.add('opacity-0')
      setTimeout(() => container.classList.add('h-0'), 250)
    }
  }

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
        <div class="flex flex-col items-center justify-center">
          <div class="mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
            Dimarts 30 de juliol
          </div>
          <div class="mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
            Dimecres 31 de juliol
          </div>
          <div class="mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">Dijous 1 d'agost</div>
          <div class="mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
            Divendres 2 d'agost
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
            Dissabte 3 d'agost
          </div>
          <div class="mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">
            Diumenge 4 d'agost
          </div>
          <div class="mt-4 bg-fme-red px-2 pb-0 pt-1 font-artega text-base uppercase text-white">Dilluns 5 d'agost</div>
        </div>
      </div>

      <div class="mb-6 flex flex-row flex-wrap justify-center gap-4 lg:flex-nowrap">
        <div class="flex-1">
          <h3 class="my-2 font-heading text-xl">La música de la FME</h3>
          <p class="prose mb-4 text-justify">
            Teniu una llista de reproducció amb els èxits de tots els artistes que actuaran a la Festa Major d'Entitats
            d'aquest any.
          </p>
          {/* <!-- TODO: update spotify link --> */}
          <a
            href=""
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
            {/* <!-- <a
                href="https://open.spotify.com/artist/2enhM5DK9oTxWiCVpFIDv3?si=OXNaQ68nTNOdBIO10tj_YQ"
                target="_blank"
                rel="noopener"
                class="transform transition-transform duration-300 hover:scale-110"
                aria-label="Enllaç a la pagina de Spotify de Figa Flawas"
                ><picture>
                  <source srcset="images/figaflawas.avif" type="image/avif" />
                  <source srcset="images/figaflawas.webp" type="image/webp" />
                  <img src="images/figaflawas.png" loading="lazy" alt="Figa Flawas" width="450" height="450" /> </picture
              ></a> --> */}
          </div>
        </div>
        <picture>
          <source srcset="images/cartell2024.avif" type="image/avif" />
          <source srcset="images/cartell2024.webp" type="image/webp" />
          <img
            src="images/cartell2024.jpg"
            loading="lazy"
            alt="Cartell dels concerts de l'edició 2024"
            width="420"
            height="525"
          />
        </picture>
      </div>
    </section>
  )
}
