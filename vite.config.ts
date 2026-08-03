import { defineConfig } from "@lovable.dev/vite-tanstack-config";
export default defineConfig({
  nitro: { preset: "node-server", output: { dir: "dist/prerender-server" } },
  tanstackStart: { server: { entry: "server" } },
});
