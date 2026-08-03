import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const serverEntry = path.join(root, "dist/server/index.mjs");
const publicDir = path.join(root, "dist/client");
const outputDir = path.join(root, "dist/static");
const origin = "https://botchain-replica-br.lovable.app";

const fixedRoutes = [
  "/",
  "/analises",
  "/desenvolvimento",
  "/news",
  "/noticias",
  "/politica-de-privacidade",
  "/sobre",
  "/termos-de-uso",
];

const docs = JSON.parse(
  await readFile(path.join(root, "src/data/devDocsPt.json"), "utf8"),
);
const routes = [
  ...fixedRoutes,
  ...Object.keys(docs).map((slug) => `/desenvolvimento/${slug}`),
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(publicDir, outputDir, { recursive: true });

const serverModule = await import(pathToFileURL(serverEntry).href);
const handler = serverModule.default;
if (!handler || typeof handler.fetch !== "function") {
  throw new Error("O build não gerou um handler SSR compatível para a exportação.");
}

const executionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

for (const route of routes) {
  const response = await handler.fetch(
    new Request(`${origin}${route}`),
    {},
    executionContext,
  );
  if (!response.ok) {
    throw new Error(`Falha ao exportar ${route}: HTTP ${response.status}`);
  }

  // TanStack's streamed state uses NUL separators inside inline JavaScript.
  // HTTP can carry them, but static HTML files must escape them or Apache/the
  // browser may replace the bytes and break hydration.
  const html = (await response.text()).replaceAll("\0", "\\u0000");
  if (!html.includes("<!DOCTYPE html") && !html.includes("<html")) {
    throw new Error(`A rota ${route} não retornou HTML válido.`);
  }

  const routeDir = route === "/" ? outputDir : path.join(outputDir, route.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
  console.log(`Exportado: ${route}`);
}

const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule . /index.html [L]
</IfModule>
DirectoryIndex index.html
ErrorDocument 404 /index.html
`;
await writeFile(path.join(outputDir, ".htaccess"), htaccess);
console.log(`Exportação concluída: ${routes.length} páginas em dist/static`);