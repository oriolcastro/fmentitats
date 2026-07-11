# New capabilities from the 2026-07 dependency upgrade

_Findings from researching what changed between the pre-upgrade and post-upgrade versions of this project's dependencies (see the "chore: upgrade dependencies, node, and pnpm to latest" commit). Not all of these are worth doing — this is a menu, not a backlog. Revisit when planning future work._

## Versions covered

| Package | From | To |
|---|---|---|
| node | 22.17.1 | 24.18.0 |
| hono | 4.8.5 | 4.12.29 |
| honox | 0.1.43 | 0.1.59 |
| @hono/vite-ssg | 0.1.2 | 0.3.3 |
| @hono/vite-dev-server | 0.20.0 | 0.26.1 |
| @hono/vite-cloudflare-pages | 0.4.2 | 0.4.3 |
| vite | 7.0.5 | 8.1.4 |
| tailwindcss / @tailwindcss/vite | 4.1.11 | 4.3.2 |
| prettier-plugin-tailwindcss | 0.6.14 | 0.8.0 |
| wrangler | 4.25.0 | 4.110.0 |
| @cloudflare/workers-types | 4.20250719.0 | 5.20260711.1 |

---

## Hono / HonoX / Vite

- **SSG `redirectPlugin`** (Hono 4.12.0) — `toSSG(app, fs, { plugins: [defaultPlugin, redirectPlugin] })` emits static HTML redirect pages for 3xx responses. Could cleanly handle retiring old edition URLs (e.g. redirecting a legacy path to `/edicio-2025`) without hand-writing Cloudflare `_redirects`.
- **JSX head-tag hoisting & dedupe** (Hono 4.12.6, React-19-style) — `<title>`/`<link>`/`<meta>` placed inside a component now get hoisted into `<head>` and de-duplicated. Would let each edition route own its SEO/OG tags locally instead of threading them through `_renderer.tsx`.
- **Function-based `jsxRenderer` options** (Hono 4.12.6) — renderer options can be a function evaluated per request, enabling per-route dynamic title/meta computation.
- **SSG plugin architecture + `extensionMap`** (@hono/vite-ssg 0.2.0/0.3.0, plus Hono 4.12.17 adding `atom+xml`/`rss+xml` to the default extension map) — opens the door to generating a sitemap or RSS feed as part of the static build.
- **Vite 8 → Rolldown bundler** — Rust-based unified bundler replacing esbuild+Rollup, with large real-world build-speed wins (case studies report 5-10x). Shortens local build + CI/deploy time.
- **Vite 8 `resolve.tsconfigPaths: true`** — native TS path-alias resolution, no separate plugin needed for `@/...`-style imports.
- **Vite 8 DX**: `server.forwardConsole` (forwards browser console to terminal) + built-in devtools option — useful when debugging island hydration.
- **@hono/vite-dev-server `base` option** (0.23.0) + expanded default excludes (`.md/.mdx`, `.vue/.svelte`) — only relevant if the app is ever served under a subpath.
- **HonoX itself (0.1.43→0.1.59) added no new user-facing features** — that range was bug fixes and Vite-8/rolldown compatibility work.
- Notable correctness fix (not a feature): **Hono 4.12.27 fixed a cross-request data-disclosure bug** in `hono/jsx` SSR (`useContext()`/`useRequestContext()` after an `await` in an async component could leak another concurrent request's value). Low risk for this static SSG site, but the strongest correctness reason the Hono bump mattered.

## Tailwind CSS 4.3

- **`scrollbar-*` utilities** (v4.3.0) — `scrollbar-thin`/`scrollbar-none`, `scrollbar-thumb-*`/`scrollbar-track-*` colors, `scrollbar-gutter-*`. No plugin needed. Could style/hide scrollbars on a horizontally-scrolling sponsor-logo strip or photo gallery to match the festival palette.
- **`@container-size` utility** (v4.3.0) — block-size containers unlocking `cqb`/`cqh` container-query units. Could size agenda/session cards relative to the card itself rather than the viewport.
- **New logical-property utilities** (v4.2.0) — `pbs-*`/`pbe-*` (padding block), inline/block sizing + min/max variants, `inset-bs-*`/`inset-be-*`/`inset-s-*`/`inset-e-*`. Relevant if a non-Catalan-language variant is ever added.
- **`font-features-*` utility** (v4.2.0) — controls `font-feature-settings`, e.g. tabular numbers (`tnum`). Could align times in the agenda/schedule table.
- **Four new neutral color palettes**: `mauve`, `olive`, `mist`, `taupe` (v4.2.0, 11 shades each). Ready-made warm/earthy neutrals for section backgrounds/dividers without hand-defining custom `@theme` colors.
- **Stacked & compound `@variant` in CSS-first config** (v4.3.0) — e.g. `@variant hover:focus {…}` or `@variant hover, focus {…}`, plus `--default(…)` fallback values in custom `@utility` definitions. Since `app/style.css` already uses CSS-first config with custom utilities, this could simplify any bespoke sponsor-tier/badge utilities.
- **prettier-plugin-tailwindcss 0.6.14→0.8.0**: no class-sorting output changes — mostly perf/compat. Requires Prettier ≥3.7 (already satisfied by the prettier bump in this upgrade).

## Wrangler / Cloudflare Workers

- **Workers Static Assets is now the actively-developed deploy target; Pages is feature-frozen** (as of ~March 2026, Cloudflare stated all future investment goes to Workers). Not urgent, but worth planning an eventual migration off `pages_build_output_dir` to a Worker with an `assets` config.
- **Static asset limit raised to 100,000 assets per version** (paid, wrangler ≥4.34.0) — removes any concern about the sponsor image grid / per-year image folders hitting an asset-count ceiling as editions accumulate.
- **`--autoconfig`** graduated from experimental (wrangler 4.101.0) — can auto-detect a purely-static project and configure a Workers static-assets deploy without hand-writing config; relevant if/when migrating off Pages.
- **Turnstile CLI provisioning** (`wrangler turnstile widget ...`, 4.110.0) — could provision free CAPTCHA-alternative bot protection from the CLI if a sponsor-contact or newsletter form is ever added.
- **`compatibility_date` bump (2024-05-24 → 2026-07-11)** is effectively a no-op for this site — the main behavioral change in that window is the maturing of `nodejs_compat`, which has near-zero impact on a purely static-serving app.
- Minor DX: **`--temporary` preview accounts** (4.101.0) and **`--version-tag` on `versions deploy`** (4.104.0) — throwaway preview deploys and tagged version promotion, handy for previewing a new edition's page before promoting it live.

---

## Suggested low-effort candidates

If picking a few to actually implement, the best effort/value ratio looked like:

1. SSG `redirectPlugin` for old edition URL handling.
2. Per-route head-tag hoisting for better per-edition SEO/OG metadata (ties into the existing OG/social-image gaps noted in `IMPROVEMENTS.md` §1.3).
3. Tailwind `scrollbar-*` / `font-features-*` utilities on the sponsor grid and agenda schedule.
