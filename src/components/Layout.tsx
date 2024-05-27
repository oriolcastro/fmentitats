import { html } from 'hono/html'
import type { PropsWithChildren } from 'hono/jsx'

import type { PageProps } from '../types'

export const Layout = (props: PropsWithChildren<PageProps['meta']>) => {
  return html`<!doctype html>
    <html lang="ca">
      <head>
        <link href="/static/styles.css" rel="stylesheet" />
        <style>
          @font-face {
            font-family: Buchery;
            src:
              url('/static/fonts/Buchery.woff2') format('woff2'),
              url('/static/fonts/Buchery.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: Jost;
            src:
              url('/static/fonts/Jost.woff2') format('woff2'),
              url('/static/fonts/Jost.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: Artega;
            src:
              url('/static/fonts/Artega.woff2') format('woff2'),
              url('/static/fonts/Artega.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        </style>
        <title>${props.title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="${props.description}" />
        <meta itemprop="name" content="${props.title}" />
        <meta itemprop="description" content="${props.description}" />
        <!-- TODO: update social images -->
        <meta itemprop="image" content="/static/images/social_facebook.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <!-- TODO: update social images -->
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="${props.title}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fme.cat" />
        <meta property="og:description" content="${props.description}" />
        <!-- TODO: update social images -->
        <meta property="og:image" content="/static/images/social_facebook.webp" itemprop="image" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1692" />
        <meta property="og:image:alt" content="Cartell de la Festa Major d'Entitats 2024" />
        <meta property="og:locale" content="ca" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fme.cat/" />
        <meta property="twitter:title" content="${props.title}" />
        <meta property="twitter:description" content="${props.description}" />
        <meta name="twitter:site" content="@fmentitats" />
        <meta name="twitter:creator" content="@fmentitats" />
        <!-- TODO: update social images -->
        <meta name="twitter:image" content="/static/images/social_twitter.webp" />
        <style>
          .dropdown:hover .dropdown-content {
            display: block;
          }
          .dropdown:hover .dropdown-trigger {
            background-color: hsl(2 63 55 / 100);
          }
        </style>
        <script>
          !(function (t, e) {
            var o, n, p, r
            e.__SV ||
              ((window.posthog = e),
              (e._i = []),
              (e.init = function (i, s, a) {
                function g(t, e) {
                  var o = e.split('.')
                  2 == o.length && ((t = t[o[0]]), (e = o[1])),
                    (t[e] = function () {
                      t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                    })
                }
                ;((p = t.createElement('script')).type = 'text/javascript'),
                  (p.async = !0),
                  (p.src = s.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js'),
                  (r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(p, r)
                var u = e
                for (
                  void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
                    u.people = u.people || [],
                    u.toString = function (t) {
                      var e = 'posthog'
                      return 'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e
                    },
                    u.people.toString = function () {
                      return u.toString(1) + '.people (stub)'
                    },
                    o =
                      'capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId'.split(
                        ' ',
                      ),
                    n = 0;
                  n < o.length;
                  n++
                )
                  g(u, o[n])
                e._i.push([i, s, a])
              }),
              (e.__SV = 1))
          })(document, window.posthog || [])
          posthog.init('phc_Eb5TtlXxGYT5nesa65yyFhJ5GGrtWLGa1wDJRpzYrPx', { api_host: 'https://eu.i.posthog.com' })
        </script>
      </head>
      <body>
        <header
          class="sticky top-0 z-100 flex w-full flex-wrap items-center bg-fme-black px-6 py-2 shadow-md lg:px-16 lg:py-0"
        >
          <div class="flex flex-1 items-center justify-between py-2">
            <a href="/">
              <picture>
                <source srcset="/static/images/logo-fme.avif" type="image/avif" />
                <source srcset="/static/images/logo-fme.webp" type="image/webp" />
                <img
                  src="/static/images/logo-fme.png"
                  alt="Logo Festa Major d'Entitats"
                  loading="eager"
                  width="102"
                  height="40"
                />
              </picture>
            </a>
          </div>
          <button onclick="toggleMenu()" class="pointer-cursor block lg:hidden">
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <div
            class="fixed right-0 top-14 z-10 hidden w-full bg-fme-black px-6 lg:relative lg:right-auto lg:top-auto lg:flex lg:w-auto lg:items-center"
            id="menu"
          >
            <nav>
              <ul class="items-center justify-between pt-4 text-base text-white lg:flex lg:pt-0">
                <li>
                  <a
                    class="block border-b-4 border-transparent px-0 py-3 hover:border-fme-red lg:p-4"
                    href="#projecte"
                    onclick="toggleMenu()"
                    >Que és la FME?</a
                  >
                </li>
                <li>
                  <a
                    class="block border-b-4 border-transparent px-0 py-3 hover:border-fme-green lg:p-4"
                    href="#programa"
                    onclick="toggleMenu()"
                    >Programa d'actes</a
                  >
                </li>
                <li>
                  <a
                    class="block border-b-4 border-transparent px-0 py-3 hover:border-fme-yellow lg:p-4"
                    href="#collaboradors"
                    onclick="toggleMenu()"
                    >Col·laboradors</a
                  >
                </li>
                <li class="dropdown relative inline-block w-full lg:w-auto">
                  <div class="dropdown-trigger block w-full px-0 py-3 lg:p-4">Edicions anteriors</div>
                  <div class="dropdown-content w-full bg-fme-black pl-3 lg:absolute lg:hidden lg:pl-0">
                    <a href="edicio-2023" class="block px-0 py-3 hover:bg-fme-red lg:p-4">2023</a>
                    <a href="edicio-2022" class="block px-0 py-3 hover:bg-fme-red lg:p-4">2022</a>
                  </div>
                </li>
                <li class="mb-4 flex flex-row lg:mb-0">
                  <a href="https://twitter.com/fmentitats" target="_blank" rel="noopener" class="block p-3 lg:py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current text-white"
                    >
                      <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/fmentitats"
                    target="_blank"
                    rel="noopener"
                    class="block p-3 lg:py-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current text-white"
                    >
                      <path
                        d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"
                      />
                    </svg>
                  </a>
                  <!-- <a href="https://www.facebook.com/FMEntitatsVNG" target="_blank" rel="noopener" class="block p-3 lg:py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current text-white"
                >
                  <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                  />
                </svg>
              </a> -->
                  <a
                    href="https://open.spotify.com/user/cb44avwfmmjada7ccotzddckm?si=2b9ee626286e4dd4"
                    target="_blank"
                    rel="noopener"
                    class="block p-3 lg:py-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current text-white"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-12-7c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.207-.394.271-.6.146-1.643-1.005-3.712-1.232-6.149-.675-.235.053-.469-.094-.522-.328-.054-.235.092-.469.328-.523 2.666-.609 4.954-.347 6.799.78.205.126.27.395.144.6zm.857-1.906c-.158.257-.494.338-.751.18-1.881-1.156-4.75-1.491-6.975-.816-.289.088-.594-.075-.681-.363-.087-.289.076-.593.364-.681 2.542-.771 5.703-.398 7.863.93.257.158.338.494.18.75zm.074-1.984c-2.257-1.34-5.979-1.464-8.133-.81-.345.105-.711-.09-.816-.436-.105-.346.09-.712.436-.817 2.473-.75 6.583-.605 9.181.937.311.184.413.586.229.897-.185.311-.587.413-.897.229z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        ${props.children}
        <footer class="bg-fme-black p-2 text-center text-white"><p>Fet amb ❤️ a Vilanova i la Geltrú</p></footer>
      </body>
      <script>
        function toggleMenu() {
          const element = document.getElementById('menu')
          element.classList.toggle('hidden')
        }
      </script>
    </html>`
}
