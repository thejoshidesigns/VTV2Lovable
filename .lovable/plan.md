## Goal

Convert this TanStack Start (SSR) app into a **pure static Vite + React 19 + React Router SPA** that builds to a flat `dist/` folder you can drop into Hostinger's `public_html/`.

## What changes

### Removed (SSR-only, not compatible with Apache shared hosting)
- `@tanstack/react-start`, `@tanstack/react-router`, `@lovable.dev/vite-tanstack-config`, nitro, wrangler
- `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`, `src/router.tsx`
- All MCP server routes: `src/routes/[.mcp]/*`, `src/routes/mcp.ts`, `src/routes/[.well-known]/*`, `src/routes/sitemap[.]xml.ts`, `src/lib/mcp/*`
- Server function wrapper `src/lib/contact.functions.ts` (form will call Web3Forms directly from the browser — it already does)
- Custom `scripts/build-spa.mjs` and the `build:static` script
- Nitro/Cloudflare artifacts (`.wrangler`, `wrangler.json`, `_headers`)

### Added
- `vite.config.ts` — plain Vite + `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`
- `index.html` at project root (Vite standard entry) with full SEO head tags
- `src/main.tsx` — `createRoot(...).render(<RouterProvider />)`
- `src/App.tsx` — `<BrowserRouter>` with all routes, shared `<Helmet>` per page via `react-helmet-async`
- `react-router-dom` and `react-helmet-async` dependencies

### Route conversion (URLs identical — no user-facing change)
Each `src/routes/*.tsx` becomes `src/pages/*.tsx`:
- `head()` metadata → `<Helmet>` at the top of the component
- `createFileRoute(...)` wrapper → plain default export
- `<Link to="/about">` from `@tanstack/react-router` → same from `react-router-dom`
- `Route.useParams()` → `useParams()` from `react-router-dom`

Routes: `/`, `/about`, `/services`, `/core-competencies`, `/industries`, `/client-experience`, `/contact`, `/privacy`, `/terms`

### Contact form
Already POSTs to Web3Forms from the browser via `fetch`. I'll inline that call into the contact page and delete the server-function file. The `VITE_WEB3FORMS_ACCESS_KEY` env var continues to work — Vite inlines it at build time.

### Hosting artifacts
- `public/.htaccess` — keeps the current SPA fallback + HTTPS + caching rules (already correct)
- `public/robots.txt`, `public/llms.txt`, `public/favicon.ico` — kept as-is
- `public/sitemap.xml` — replace the dynamic route with a static file listing the 9 URLs

## Trade-offs (you should know before I start)

- **No SSR** → each route's `<title>` and OG tags are set client-side after mount. Google crawls fine (runs JS). LinkedIn/Facebook/Twitter previews will show the shell HTML's metadata for non-home URLs. If you need per-route social previews, we'd need a prerender step or Cloudflare/Vercel hosting.
- **MCP endpoints are gone.** These served AI/chat integrations (`/mcp`, `/.mcp/*`). If you didn't use them, no impact.
- **Dynamic sitemap gone.** Replaced with a static one — fine because your routes are fixed.

## Build & upload

```bash
bun install
bun run build          # standard vite build → dist/
```

Upload the contents of `dist/` plus `.htaccess` into Hostinger `public_html/`:

```text
public_html/
├── .htaccess
├── index.html
├── favicon.ico
├── robots.txt
├── llms.txt
├── sitemap.xml
├── og/
└── assets/            ← hashed JS + CSS
```

## Execution order

1. Rewrite `package.json` + `vite.config.ts`, install React Router + Helmet, uninstall TanStack Start + Nitro
2. Create root `index.html`, `src/main.tsx`, `src/App.tsx`
3. Port all 9 routes from `src/routes/*` to `src/pages/*` (swap imports + head→Helmet)
4. Update `SiteHeader` / `SiteFooter` / any component using `@tanstack/react-router` `Link`
5. Delete all SSR / MCP / server-function files
6. Add static `public/sitemap.xml`
7. Run `bun run build`, confirm `dist/` has `index.html` + `assets/` and the JS contains the Web3Forms key
8. Zip `dist/` + `.htaccess` for upload

**Estimated: ~20–25 file changes, one build verification.**

Reply **"go"** and I'll execute the whole thing in one pass. Reply with changes if you want the plan adjusted (e.g. keep the sitemap generator, or use Vite's SSG plugin `vite-plugin-ssg` for prerendered per-route HTML instead of pure client-side — that would preserve social previews at some added complexity).
