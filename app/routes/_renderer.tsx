import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
import { html } from 'hono/html'

import Header from '../islands/Header'

export default jsxRenderer(({ children, title, description, socialImage }) => {
  return (
    <html lang="ca">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {html`<style>
          @font-face {
            font-family: 'Buchery';
            src:
              url('/static/fonts/Buchery.woff2') format('woff2'),
              url('/static/fonts/Buchery.woff') format('woff');
            font-weight: 400;
            font-style: 'normal';
            font-display: 'swap';
          }
          @font-face {
            font-family: 'Jost';
            src:
              url('/static/fonts/Jost.woff2') format('woff2'),
              url('/static/fonts/Jost.woff') format('woff');
            font-weight: 400;
            font-style: 'normal';
            font-display: 'swap';
          }
          @font-face {
            font-family: 'Artega';
            src:
              url('/static/fonts/Artega.woff2') format('woff2'),
              url('/static/fonts/Artega.woff') format('woff');
            font-weight: 400;
            font-style: 'normal';
            font-display: 'swap';
          }
        </style>`}
        {import.meta.env.PROD ? (
          <link href="/static/assets/style.css" rel="stylesheet" />
        ) : (
          <link href="/app/style.css" rel="stylesheet" />
        )}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta itemprop="name" content="{props.title}" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fme.cat" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1692" />
        <meta property="og:image:alt" content="Cartell de la Festa Major d'Entitats 2024" />
        <meta property="og:locale" content="ca" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fme.cat/" />
        <meta name="twitter:site" content="@fmentitats" />
        <meta name="twitter:creator" content="@fmentitats" />
        {title && (
          <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />
          </>
        )}
        {description && (
          <>
            <meta name="description" content={description} />
            <meta itemprop="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="twitter:description" content={description} />
          </>
        )}
        {socialImage && (
          <>
            <meta itemprop="image" content={socialImage} />
            <meta property="og:image" content={socialImage} itemprop="image" />
            <meta name="twitter:image" content={socialImage} />
          </>
        )}
        <Script src="/app/client.ts" />
        {html`<script>
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
        </script>`}
      </head>
      <body>
        <Header />
        {children}
      </body>
      <footer class="bg-fme-black p-2 text-center text-white">
        <p>Fet amb ❤️ a Vilanova i la Geltrú</p>
      </footer>
    </html>
  )
})
