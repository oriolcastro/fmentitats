import type { FC } from 'hono/jsx'

// TODO: need to be updated
export const Agenda: FC = () => {
  return (
    <section id="programa" class="m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="font-heading my-2 text-center text-3xl uppercase">Programa d'actes</h2>
      <p class="my-4 text-center text-xl italic">Això és tot el que us hem preparat per a aquesta FME.</p>
      <div class="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="flex flex-col items-start gap-12">
          <div class="flex flex-col gap-4">
            <div class="bg-fme-purple font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dimarts 29 de juliol
            </div>
            <div>
              <p class="font-sm text-sm">17:00h</p>
              <p class="text-lg font-bold">
                La Petita FME: tarda de jocs de carrer en família, amb la companyia La Gralla, contacontes i espectacle
                de Titelles Lambe Lambe
              </p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-purple font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dimecres 30 de juliol
            </div>
            <div>
              <p class="font-sm text-sm">18:30h</p>
              <p class="text-lg font-bold">Show drag: La gran nit de Dragoll Dragom amb Ofèlia Drags.</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Festuc</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-purple font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dijous 31 de juliol
            </div>
            <div>
              <p class="text-lg font-bold">2a Jornada de Glossa de la Festa Major</p>
              <p class="font-sm text-sm">19:00h</p>
              <p class="text-lg font-bold">Taller de cultura popular dels Països Catalans: ball i cant improvisat</p>
              <p class="font-sm text-sm">20:30h</p>
              <p class="text-lg font-bold">Sopar popular</p>
              <p class="font-sm text-sm">21:30h</p>
              <p class="text-lg font-bold">Mostra de Glosa amb Cor de Carxofa</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Ateneu Vilanoví</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-purple font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Divendres 1 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">17:30h</p>
              <p class="text-lg font-bold">Ludoteca del Correfoc</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Ball de Diables de Vilanova i el Drac de Vilanova i la Geltrú</p>
            </div>
            <div>
              <p class="font-sm text-sm">En acabar el sostre de foc</p>
              <p class="text-lg font-bold">Ball de Gralles amb Les Antines i Quatrevents</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-12">
          <div class="flex flex-col gap-4">
            <div class="bg-fme-purple font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dissabte 2 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">En acabar la Diada de les Neus</p>
              <p class="text-lg font-bold">Cercavila d'Entitats amb la xaranga This-Tracció</p>
              <p>Inici des de la Plaça dels Cotxes i pels carrers de la vila.</p>
              <p>Organitza: Apol·lo</p>
            </div>
            <div>
              <p class="font-sm text-sm">20:00h</p>
              <p class="text-lg font-bold">Concerts: Kuu, Cloe, Habla de Mí en presente i DJ Kotxambrosa</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-purple font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Diumenge 3 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">18:00h</p>
              <p class="text-lg font-bold">Estibacaixes</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Bordegassos de Vilanova</p>
            </div>
            <div>
              <p class="font-sm text-sm">20:00h</p>
              <p class="text-lg font-bold">Batussa musical </p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Endimari</p>
            </div>
            <div>
              <p class="font-sm text-sm"> A partir de les 21:30h</p>
              <p class="text-lg font-bold">Se servirà sopar a càrrec de Bordegassos de Vilanova i Endimari</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Endimari i Bordegassos de Vilanova</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-purple font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dilluns 4 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">14:00h</p>
              <p class="text-lg font-bold">Dinar de la FME amb sobretaula musical</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
            <div>
              <p class="font-sm text-sm">23:30h</p>
              <p class="text-lg font-bold">Nit de DJs: MyGystem Sound i la Sra Rauxa</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-purple font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dimarts 5 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">00:00h</p>
              <p class="text-lg font-bold">Ball del Vot del Poble</p>
              <p>Plaça de la Peixateria</p>
              <p>Organitza: Ateneu Vilanoví</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-6 flex flex-col flex-wrap justify-center gap-4 lg:flex-nowrap">
        <div class="flex-1">
          <h3 class="font-heading my-2 text-xl">La música de la FME</h3>
          <div class="grid grid-cols-2 items-center justify-center gap-4 lg:grid-cols-4 lg:gap-6">
            <a
              href="https://open.spotify.com/artist/6Ve7C0L8bH6NfejnYfKOJn?si=mpRYjAW7SMS4d5hv4SAbvw"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Habla de mi en Presente"
            >
              <picture>
                <source srcset="static/images/2025/grups/habla_de_mi_en_presente.avif" type="image/avif" />
                <source srcset="static/images/2025/grups/habla_de_mi_en_presente.webp" type="image/webp" />
                <img
                  src="static/images/2025/grups/habla_de_mi_en_presente.jpg"
                  loading="lazy"
                  alt="Habla de mi en Presente"
                  class="max-h-72"
                />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/0bZpmYTPXVvnSiZ7SLiMPa?si=DyKqogliTiuNfxt6tFPIUw"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Cloe"
            >
              <picture>
                <source srcset="static/images/2025/grups/cloe.avif" type="image/avif" />
                <source srcset="static/images/2025/grups/cloe.webp" type="image/webp" />
                <img src="static/images/2025/grups/cloe.jpg" loading="lazy" alt="Cloe" class="max-h-72" />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/77cBad8DNTobzNpER2rQfX?si=tJfCqoQ6RkeEmJFxfvMMcQ"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Kuu"
            >
              <picture>
                <source srcset="static/images/2025/grups/kuu.avif" type="image/avif" />
                <source srcset="static/images/2025/grups/kuu.webp" type="image/webp" />
                <img src="static/images/2025/grups/kuu.jpg" loading="lazy" alt="Kuu" class="max-h-72" />
              </picture>
            </a>
            <a
              href="https://instagram.com/dj.kotxambrosa"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina d'Instagram de Dj Kotxambrosa"
            >
              <picture>
                <source srcset="static/images/2024/grups/dj_kotxambrosa.avif" type="image/avif" />
                <source srcset="static/images/2024/grups/dj_kotxambrosa.webp" type="image/webp" />
                <img
                  src="static/images/2024/grups/dj_kotxambrosa.jpg"
                  loading="lazy"
                  alt="Dj Kotxambrosa"
                  class="max-h-72"
                />
              </picture>
            </a>
            <a
              href="https://instagram.com/elsquatrevents"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina d'Instagram de Els Quatrevents"
            >
              <picture>
                <source srcset="static/images/2025/grups/els_quatrevents.avif" type="image/avif" />
                <source srcset="static/images/2025/grups/els_quatrevents.webp" type="image/webp" />
                <img
                  src="static/images/2025/grups/els_quatrevents.jpg"
                  loading="lazy"
                  alt="Els Quatrevents"
                  class="max-h-72"
                />
              </picture>
            </a>
            <a
              href="https://instagram.com/lesantines_"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina d'Instagram de Les Antines"
            >
              <picture>
                <source srcset="static/images/2025/grups/les_antines.avif" type="image/avif" />
                <source srcset="static/images/2025/grups/les_antines.webp" type="image/webp" />
                <img src="static/images/2025/grups/les_antines.jpg" loading="lazy" alt="Les Antines" class="max-h-72" />
              </picture>
            </a>
            <a
              href="https://instagram.com/sra_rauxa_dj"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina d'Instagram de la Sra Rauxa"
            >
              <picture>
                <source srcset="static/images/2025/grups/sra_rauxa.avif" type="image/avif" />
                <source srcset="static/images/2025/grups/sra_rauxa.webp" type="image/webp" />
                <img src="static/images/2025/grups/sra_rauxa.jpg" loading="lazy" alt="Sra Rauxa" class="max-h-72" />
              </picture>
            </a>
            <a
              href="https://instagram.com/mygystemsound"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina d'Instagram de Mygystem Sound"
            >
              <picture>
                <source srcset="static/images/2025/grups/mygystem_sound.avif" type="image/avif" />
                <source srcset="static/images/2025/grups/mygystem_sound.webp" type="image/webp" />
                <img
                  src="static/images/2025/grups/mygystem_sound.jpg"
                  loading="lazy"
                  alt="Mygystem Sound"
                  class="max-h-72"
                />
              </picture>
            </a>
          </div>
        </div>
        <div class="mt-6 flex flex-col-reverse justify-center gap-4 lg:flex-row">
          <picture>
            <source srcset="static/images/2025/cartell2025.avif" type="image/avif" />
            <source srcset="static/images/2025/cartell2025.webp" type="image/webp" />
            <img
              src="static/images/2025/cartell2025.jpg"
              loading="lazy"
              alt="Cartell dels concerts de l'edició 2025"
              width="420"
              height="525"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
