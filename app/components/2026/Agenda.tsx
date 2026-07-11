import type { FC } from 'hono/jsx'

export const Agenda: FC = () => {
  return (
    <section id="programa" class="m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="font-heading my-2 text-center text-3xl uppercase">Programa d'actes</h2>
      <p class="my-4 text-center text-xl italic">Això és tot el que us hem preparat per a aquesta FME.</p>
      <div class="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="flex flex-col items-start gap-12">
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dimecres 29 de juliol
            </div>
            <div>
              <p class="font-sm text-sm">17:30h</p>
              <p class="text-lg font-bold">La petita FME: Tarda de jocs de carrer en família</p>
              <p class="font-sm text-sm">20:30h</p>
              <p class="text-lg font-bold">Torneig popular de futbolí</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dijous 30 de juliol
            </div>
            <div>
              <p class="font-sm text-sm">18h</p>
              <p class="text-lg font-bold">Tarda de Cotonines</p>
              <p>
                Taller de manualitats per conèixer les Cotonines i la seva història, ballar al ritme de la seva música
                i crear un record personalitzat.
              </p>
              <p>Edat recomanada: 3 a 12 anys</p>
              <p>Preu de l'activitat: 2€ per infant</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Ball de Cotonines de Vilanova i la Geltrú</p>
            </div>
            <div>
              <p class="font-sm text-sm">20:30h</p>
              <p class="text-lg font-bold">3a Jornada de Glosa de la Festa Major</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Ateneu Vilanoví</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Divendres 31 de juliol
            </div>
            <div>
              <p class="font-sm text-sm">17:30h</p>
              <p class="text-lg font-bold">Ludoteca del Correfoc</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Ball de Diables de Vilanova i el Drac de Vilanova i la Geltrú</p>
            </div>
            <div>
              <p class="font-sm text-sm">En acabar el sostre de foc</p>
              <p class="text-lg font-bold">Ball de Gralles amb Les Antines i Canya d'or</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dissabte 1 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">11:00h</p>
              <p class="text-lg font-bold">Baixada d'andròmines</p>
              <p>Tot seguit, vermut musical</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Festuc</p>
            </div>
            <div>
              <p class="font-sm text-sm">18:00h</p>
              <p class="text-lg font-bold">Diada de les Neus</p>
              <p>Plaça de la Vila</p>
            </div>
            <div>
              <p class="font-sm text-sm">20:30h</p>
              <p class="text-lg font-bold">De faixa a plaça amb This-Tracció xaranga</p>
              <p>Inici des de la plaça dels Cotxes fins a la plaça de les Casernes</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-12">
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dissabte 1 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">21:30h</p>
              <p class="text-lg font-bold">Sopar popular</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Borregos</p>
            </div>
            <div>
              <p class="font-sm text-sm">22:30h</p>
              <p class="text-lg font-bold">Concerts amb Jara Mago, Gavina.mp3, BALMA i ByoungC</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Diumenge 2 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">18:30h</p>
              <p class="text-lg font-bold">Estibacaixes i 1r Torneig de Bitlles Catalanes</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Bordegassos de Vilanova i Apol·lo</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dilluns 3 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">18:30h</p>
              <p class="text-lg font-bold">Batussa musical</p>
              <p class="font-sm text-sm">21h</p>
              <p class="text-lg font-bold">Sopar popular</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: Endimari</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dimarts 4 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">14:00h</p>
              <p class="text-lg font-bold">Dinar de la FME amb sobretaula musical</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
            <div>
              <p class="font-sm text-sm">23:30h</p>
              <p class="text-lg font-bold">Col·lectiu Tonyina i Kötxambrosa</p>
              <p>Plaça de les Casernes</p>
              <p>Organitza: FME</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-fme-blue font-artega w-fit px-2 pt-1 pb-0 text-base text-white uppercase">
              Dimecres 5 d'agost
            </div>
            <div>
              <p class="font-sm text-sm">00h</p>
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
              href="https://open.spotify.com/artist/6AtVLxBJ9xd5FqtSB3EK3O?si=GBfjsY5qTbiF6YvTKJ_dXA"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Jara Mago"
            >
              <picture>
                <source srcset="static/images/2026/grups/jara_mago.avif" type="image/avif" />
                <source srcset="static/images/2026/grups/jara_mago.webp" type="image/webp" />
                <img src="static/images/2026/grups/jara_mago.jpg" loading="lazy" alt="Jara Mago" class="max-h-72" />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/1HQjBUjN7QCO8rIldwSXeZ?si=9d76gaHsRiy2un_AlSz2BQ"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Gavina.mp3"
            >
              <picture>
                <source srcset="static/images/2026/grups/gavinamp3.avif" type="image/avif" />
                <source srcset="static/images/2026/grups/gavinamp3.webp" type="image/webp" />
                <img src="static/images/2026/grups/gavinamp3.jpg" loading="lazy" alt="Gavina.mp3" class="max-h-72" />
              </picture>
            </a>
            <a
              href="https://open.spotify.com/artist/120KlGliWpuFD6rw7oiLAH?si=0gU2bypFSdmkAbJMza74BQ"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina de Spotify de Balma"
            >
              <picture>
                <source srcset="static/images/2026/grups/balma.avif" type="image/avif" />
                <source srcset="static/images/2026/grups/balma.webp" type="image/webp" />
                <img src="static/images/2026/grups/balma.jpg" loading="lazy" alt="Balma" class="max-h-72" />
              </picture>
            </a>
            <a
              href="https://www.instagram.com/byoungc.pd"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina d'Instagram de ByoungC"
            >
              <picture>
                <source srcset="static/images/2026/grups/byoungc.avif" type="image/avif" />
                <source srcset="static/images/2026/grups/byoungc.webp" type="image/webp" />
                <img src="static/images/2026/grups/byoungc.jpg" loading="lazy" alt="ByoungC" class="max-h-72" />
              </picture>
            </a>
            <a
              href="https://www.instagram.com/collectiu.tonyina"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina d'Instagram de Col·lectiu Tonyina"
            >
              <picture>
                <source srcset="static/images/2026/grups/colectiu_tonyina.avif" type="image/avif" />
                <source srcset="static/images/2026/grups/colectiu_tonyina.webp" type="image/webp" />
                <img
                  src="static/images/2026/grups/colectiu_tonyina.jpg"
                  loading="lazy"
                  alt="Col·lectiu Tonyina"
                  class="max-h-72"
                />
              </picture>
            </a>
            <a
              href="https://www.instagram.com/dj.kotxambrosa"
              target="_blank"
              rel="noopener"
              class="transform justify-self-center transition-transform duration-300 hover:scale-110"
              aria-label="Enllaç a la pagina d'Instagram de Dj Kötxambrosa"
            >
              <picture>
                <source srcset="static/images/2026/grups/dj_kötxambrosa.avif" type="image/avif" />
                <source srcset="static/images/2026/grups/dj_kötxambrosa.webp" type="image/webp" />
                <img
                  src="static/images/2026/grups/dj_kötxambrosa.jpg"
                  loading="lazy"
                  alt="Dj Kötxambrosa"
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
                <source srcset="static/images/2026/grups/les_antines.avif" type="image/avif" />
                <source srcset="static/images/2026/grups/les_antines.webp" type="image/webp" />
                <img
                  src="static/images/2026/grups/les_antines.jpg"
                  loading="lazy"
                  alt="Les Antines"
                  class="max-h-72"
                />
              </picture>
            </a>
            <a
              href="https://www.instagram.com/canyador"
              target="_blank"
              rel="noopener"
              class="flex h-full items-center justify-self-center text-center text-lg font-bold underline"
              aria-label="Enllaç a la pagina d'Instagram de Canya d'or"
            >
              Canya d'or
            </a>
          </div>
        </div>
        <div class="mt-6 flex flex-col-reverse justify-center gap-4 lg:flex-row">
          <picture>
            <source srcset="static/images/2026/cartell2026.avif" type="image/avif" />
            <source srcset="static/images/2026/cartell2026.webp" type="image/webp" />
            <img
              src="static/images/2026/cartell2026.jpg"
              loading="lazy"
              alt="Cartell dels concerts de l'edició 2026"
              width="420"
              height="525"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
