// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isHostingerExport = process.env.HOSTINGER_STATIC_EXPORT === "1";

export default defineConfig({
  // The Hostinger workflow builds a temporary Node server and snapshots every
  // route afterward. Nitro's `static` preset cannot be used here because it
  // treats TanStack Start's SSR entry as an HTML entry and aborts the build.
  ...(isHostingerExport
    ? {
        nitro: {
          preset: "node-server",
          output: {
            dir: "dist/hostinger-server",
            publicDir: "dist/hostinger-server/public",
          },
        },
      }
    : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
