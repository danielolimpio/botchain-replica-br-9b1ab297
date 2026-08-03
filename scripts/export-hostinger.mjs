import { spawn } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const serverEntry = path.join(root, "dist/hostinger-server/server/index.mjs");
const publicDir = path.join(root, "dist/hostinger-server/public");
const outputDir = path.join(root, "dist/static");
const origin = "http://127.0.0.1:4173";

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

const server = spawn(process.execPath, [serverEntry], {
  cwd: root,
  env: {
    ...process.env,
    HOST: "127.0.0.1",
    PORT: "4173",
    NODE_ENV: "production",
  },
  stdio: ["ignore", "pipe", "pipe"],
});

let serverLogs = "";
server.stdout.on("data", (chunk) => {
  serverLogs += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  serverLogs += chunk.toString();
});

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) {
      throw new Error(`Servidor de exportação encerrou antes de iniciar.\n${serverLogs}`);
    }
    try {
      const response = await fetch(origin, { redirect: "manual" });
      if (response.status < 500) return;
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Servidor de exportação não iniciou em 30 segundos.\n${serverLogs}`);
}

try {
  await waitForServer();

  for (const route of routes) {
    const response = await fetch(`${origin}${route}`);
    if (!response.ok) {
      throw new Error(`Falha ao exportar ${route}: HTTP ${response.status}`);
    }

    const html = await response.text();
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
} finally {
  if (server.exitCode === null) server.kill("SIGTERM");
}