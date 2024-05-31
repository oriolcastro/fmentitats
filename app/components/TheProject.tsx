import type { FC } from 'hono/jsx'

export const TheProject: FC = () => {
  return (
    <section id="projecte" class="m-auto my-10 max-w-5xl px-4" style="scroll-margin-top: 84px">
      <h2 class="my-2 text-center font-heading text-3xl uppercase">Que és la FME?</h2>
      <p class="my-4 text-center text-xl italic">
        Coneix l'origen, el projecte i les entitats que hi ha darrere de la FME
      </p>
      <div class="mb-6 flex flex-col-reverse flex-wrap items-center gap-8 lg:flex-row lg:flex-nowrap">
        <picture>
          <source srcset="/static/images/logo.avif" type="image/avif" />
          <source srcset="/static/images/logo.webp" type="image/webp" />
          <img
            src="/static/images/logo.png"
            loading="lazy"
            class="m-auto max-w-xs flex-1 rounded-full"
            alt="Logo Festa Major d'Entitats"
            width="320"
            height="320"
          />
        </picture>
        <div>
          <p class="mb-4 flex-1 text-justify">
            La Festa Major d'Entitats neix l'any 2017 després que un grup d'entitats vinculades al teixit associatiu
            juvenil i cultural de la ciutat veiessin la necessitat d'implicar-se de forma més activa en la programació
            de la Festa Major.
          </p>
          <p class="mb-4 flex-1 text-justify">
            A diferència del que passa en altres actes del cicle festiu de la ciutat, una part important de la gent viu
            la Festa Major com a espectadora. D'aquesta anàlisi sorgeix l'objectiu general del nou projecte de la FME:
            <span class="italic">
              Oferir a la ciutat una programació cultural àmplia, popular i gratuïta emmarcada en la Festa Major a
              través de la participació directa de les entitats i la seva massa social.
            </span>
          </p>
          <p class="mb-4 flex-1 text-justify">
            La FME pretén promoure la transformació del model cultural de la ciutat i oferir una alternativa a la festa
            major de Vilanova més participativa i accessible i alhora donar a conèixer el potencial i la riquesa de
            l'associacionisme a la ciutat.
          </p>
          <p class="flex-1 text-justify">
            A banda de les entitats que ja en formen part, la Festa Major d'Entitats pretén fer-se extensiva i
            interpel·lar progressivament a més entitats del teixit associatiu de la ciutat.
          </p>
        </div>
      </div>
      <p class="mb-4 text-center font-bold">Entitats organitzadores</p>
      <div class="flex flex-wrap justify-center gap-2 md:flex-nowrap lg:flex-nowrap lg:gap-8">
        <a
          href="https://www.instagram.com/launiovilanovina/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram de La Unió"
        >
          <picture>
            <source srcset="/static/images/entitats/launio.avif" type="image/avif" />
            <source srcset="/static/images/entitats/launio.webp" type="image/webp" />
            <img
              src="/static/images/entitats/launio.jpg"
              loading="lazy"
              class="max-w-[75px] opacity-75 hover:opacity-100 lg:max-w-[120px]"
              alt="La Unió"
              width="240"
              height="264"
            />
          </picture>
        </a>
        <a
          href="https://www.instagram.com/diablesvng/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram dels Diables de Vilanova"
        >
          <picture>
            <source srcset="/static/images/entitats/diables.avif" type="image/avif" />
            <source srcset="/static/images/entitats/diables.webp" type="image/webp" />
            <img
              src="/static/images/entitats/diables.jpg"
              loading="lazy"
              class="max-w-[75px] opacity-75 hover:opacity-100 lg:max-w-[120px]"
              alt="Ball de Diables de Vilanova"
              width="240"
              height="264"
            />{' '}
          </picture>
        </a>
        <a
          href="https://www.instagram.com/festuc_vng/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram de Festuc"
        >
          <picture>
            <source srcset="/static/images/entitats/festuc.avif" type="image/avif" />
            <source srcset="/static/images/entitats/festuc.webp" type="image/webp" />
            <img
              src="/static/images/entitats/festuc.jpg"
              loading="lazy"
              class="max-w-[75px] opacity-75 hover:opacity-100 lg:max-w-[120px]"
              alt="Festuc"
              width="240"
              height="264"
            />{' '}
          </picture>
        </a>
        <a
          href="https://www.instagram.com/apollovng/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram d'Apol·lo"
        >
          <picture>
            <source srcset="/static/images/entitats/apollo.avif" type="image/avif" />
            <source srcset="/static/images/entitats/apollo.webp" type="image/webp" />
            <img
              src="/static/images/entitats/apollo.jpg"
              loading="lazy"
              class="max-w-[75px] opacity-75 hover:opacity-100 lg:max-w-[120px]"
              alt="Apol·lo"
              width="240"
              height="264"
            />{' '}
          </picture>
        </a>
        <a
          href="https://www.instagram.com/bordegassosvilanova/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram dels Bordegassos de Vilanova"
          class="flex flex-col items-center justify-center"
        >
          <picture>
            <source srcset="/static/images/entitats/bordegassos.avif" type="image/avif" />
            <source srcset="/static/images/entitats/bordegassos.webp" type="image/webp" />
            <img
              src="/static/images/entitats/bordegassos.png"
              loading="lazy"
              class="max-w-[120px] opacity-75 hover:opacity-100 lg:max-w-[180px]"
              alt="Bordegassos"
              width="240"
              height="264"
            />
          </picture>
        </a>
        <a
          href="https://www.instagram.com/ateneuvilanovi/"
          target="_blank"
          rel="noopener"
          aria-label="Enllaç a l'Instagram del Ateneu Vilanovi"
          class="flex flex-col items-center justify-center"
        >
          <picture>
            <source srcset="/static/images/entitats/ateneu.avif" type="image/avif" />
            <source srcset="/static/images/entitats/ateneu.webp" type="image/webp" />
            <img
              src="/static/images/entitats/ateneu.png"
              loading="lazy"
              class="max-w-[120px] opacity-75 hover:opacity-100 lg:max-w-[180px]"
              alt="Ateneu Vilanovi"
              width="790"
              height="180"
            />
          </picture>
        </a>
      </div>
    </section>
  )
}
