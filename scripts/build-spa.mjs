// Postbuild step: turn the TanStack Start build output into a plain
// static SPA that can be dropped into any static host (Hostinger, S3, etc.).
//
// It writes a single index.html into dist/client/ that references the
// hashed client entry JS + CSS Vite emitted, and removes dist/server/
// (Cloudflare Worker) which is not needed for static hosting.
//
// Combined with an .htaccess rewriting all non-file URLs to /index.html,
// TanStack Router takes over on the client and renders every route.

import { readdir, writeFile, rm, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const CLIENT_DIR = resolve("dist/client");
const SERVER_DIR = resolve("dist/server");
const ASSETS_DIR = join(CLIENT_DIR, "assets");

async function findFile(prefix, ext) {
  const files = await readdir(ASSETS_DIR);
  const match = files.find((f) => f.startsWith(prefix) && f.endsWith(ext));
  if (!match) {
    throw new Error(
      `[build-spa] Could not find ${prefix}*${ext} in ${ASSETS_DIR}`,
    );
  }
  return `/assets/${match}`;
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

const entryJs = await findFile("index-", ".js");
const entryCss = await findFile("styles-", ".css");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vibha Technologies UK Ltd — SAP Treasury &amp; S/4HANA Consulting</title>
    <meta name="description" content="Vibha Technologies UK Ltd delivers specialist SAP S/4HANA, Treasury, Cash &amp; Liquidity, In-House Banking and Payment Management consulting for global enterprises." />
    <meta property="og:title" content="Vibha Technologies UK Ltd — SAP Treasury &amp; S/4HANA Consulting" />
    <meta property="og:description" content="Specialist SAP Treasury and S/4HANA Finance transformation consulting." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="${entryCss}" />
    <script type="module" crossorigin src="${entryJs}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

await writeFile(join(CLIENT_DIR, "index.html"), html, "utf8");
console.log(`[build-spa] wrote ${join(CLIENT_DIR, "index.html")}`);
console.log(`[build-spa]   entry: ${entryJs}`);
console.log(`[build-spa]   css:   ${entryCss}`);

if (await exists(SERVER_DIR)) {
  await rm(SERVER_DIR, { recursive: true, force: true });
  console.log(`[build-spa] removed ${SERVER_DIR} (not needed for static hosting)`);
}

// Also remove the Cloudflare-specific artifacts so the output is portable.
for (const f of ["nitro.json", "wrangler.json", "package.json", "package-lock.json"]) {
  const p = join(resolve("dist"), f);
  if (await exists(p)) {
    await rm(p, { force: true });
  }
}

console.log("[build-spa] done — upload the contents of dist/client/ to public_html/");
