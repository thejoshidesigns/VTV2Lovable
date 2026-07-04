// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "static",
    // @ts-expect-error nitro prerender is supported at runtime by the underlying preset
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        "/",
        "/about",
        "/services",
        "/core-competencies",
        "/industries",
        "/client-experience",
        "/contact",
        "/privacy",
        "/terms",
        "/sitemap.xml",
      ],
    },
  },
  vite: {
    plugins: [mcpPlugin()],
  },
});
