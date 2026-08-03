// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // IMPORTANT: don't use nitro.preset "static" here. Nitro 3's "static" preset
  // prerenders through the same unenv/edge runtime used by "cloudflare-module",
  // which stubs `process` incompletely and breaks this build with
  // "process.cwd is not implemented" (and a follow-up "rollupOptions.input
  // should not be an html file" SSR build failure). It's a known rough edge,
  // not something fixable from userland config.
  //
  // Instead we build a normal Node SSR server (fully supported, no missing
  // polyfills) and let `scripts/prerender-static.mjs` run it in CI only, crawl
  // every route over HTTP, and dump the resulting HTML + hashed assets into
  // dist/static — a 100% static folder with zero Node required at runtime.
  // This preset is only used for the Hostinger production build; inside the
  // Lovable sandbox, isSandbox detection still forces cloudflare-module.
  nitro: {
    preset: "node-server",
    output: {
      dir: "dist/prerender-server",
      publicDir: "dist/prerender-server/public",
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
