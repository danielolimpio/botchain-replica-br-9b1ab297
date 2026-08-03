#!/usr/bin/env node
// Gera um site 100% estático (HTML + assets) para hospedagem sem Node (Hostinger/Apache).
//
// Por que existir: o preset "static" do Nitro 3 tenta prerenderizar usando o mesmo
// runtime "universal" (unenv) usado pelos presets de edge (cloudflare-module), que
// stub-a `process` de forma incompleta. Nesse projeto isso quebra o build com
// "process.cwd is not implemented" / 404 no crawler interno e, em seguida,
// "rollupOptions.input should not be an html file when building for SSR".
//
// Solução mínima: build com o preset "node-server" (Node real, 100% suportado),
// subir esse servidor Node *só durante o CI*, rastrear todas as rotas via HTTP
// (mesma técnica de qualquer prerender), salvar o HTML resultante e depois
// descartar o servidor. Nada de Node roda em produção — só os arquivos estáticos
// vão para a Hostinger via FTP.

import { spawn } from "node:child_process";
import { mkdir, writeFile, cp, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SERVER_ENTRY = "dist/prerender-server/server/index.mjs";
const CLIENT_PUBLIC_DIR = "dist/prerender-server/public";
const OUT_DIR = "dist/static";
const PORT = process.env.PRERENDER_PORT ?? "4173";
const ORIGIN = `http://127.0.0.1:${PORT}`;
// Sementes: pelo menos uma rota estática por seção. As demais (ex.: /desenvolvimento/$slug)
// são descobertas automaticamente seguindo os <a href> internos renderizados no HTML.
const SEED_ROUTES = ["/", "/analises", "/noticias", "/desenvolvimento", "/sobre", "/politica-de-privacidade", "/termos-de-uso"];

function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok || res.status === 404) return resolve();
      } catch {
        // servidor ainda não subiu
      }
      if (Date.now() - start > timeoutMs) return reject(new Error("Servidor de prerender não respondeu a tempo."));
      setTimeout(tick, 200);
    };
    tick();
  });
}

function extractInternalLinks(html) {
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  return hrefs.filter((href) => !href.startsWith("//") && !path.extname(href));
}

async function crawl() {
  const visited = new Set();
  const queue = [...SEED_ROUTES];
  const failures = [];

  while (queue.length > 0) {
    const route = queue.shift();
    if (visited.has(route)) continue;
    visited.add(route);

    const res = await fetch(`${ORIGIN}${route}`);
    if (!res.ok) {
      failures.push(`${route} -> HTTP ${res.status}`);
      continue;
    }
    const html = await res.text();

    const outPath = route === "/" ? path.join(OUT_DIR, "index.html") : path.join(OUT_DIR, route, "index.html");
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    console.log(`✔ ${route} -> ${outPath}`);

    for (const link of extractInternalLinks(html)) {
      if (!visited.has(link)) queue.push(link);
    }
  }

  if (failures.length > 0) {
    console.error("\nRotas que falharam no prerender:");
    for (const f of failures) console.error(`  ✖ ${f}`);
    throw new Error("Prerender falhou para uma ou mais rotas. Veja acima.");
  }
}

async function writeSpaFallback() {
  // Fallback client-side: se uma rota nova/futura não foi prerenderizada,
  // serve o shell do TanStack Router (roteamento client-side assume o resto).
  const shell = await readFile(path.join(OUT_DIR, "index.html"), "utf8");
  await writeFile(path.join(OUT_DIR, "404.html"), shell, "utf8");
}

async function writeHtaccess() {
  const htaccess = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  # Serve o HTML pré-renderizado de cada rota quando existir /<rota>/index.html
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.*[^/])$ /$1/ [L,R=301]
  RewriteRule ^ /404.html [L]
</IfModule>
ErrorDocument 404 /404.html
`.trimStart();
  await writeFile(path.join(OUT_DIR, ".htaccess"), htaccess, "utf8");
}

async function main() {
  if (!existsSync(SERVER_ENTRY)) {
    throw new Error(`Não achei ${SERVER_ENTRY}. Rode "bun run build:prerender-server" antes.`);
  }

  await mkdir(OUT_DIR, { recursive: true });
  // Copia assets com hash (JS/CSS/imagens) gerados pelo build do cliente.
  await cp(CLIENT_PUBLIC_DIR, OUT_DIR, { recursive: true });

  const server = spawn(process.execPath, [SERVER_ENTRY], {
    env: { ...process.env, PORT, NITRO_PORT: PORT },
    stdio: "inherit",
  });

  const cleanup = () => {
    if (!server.killed) server.kill("SIGTERM");
  };
  process.on("exit", cleanup);

  try {
    await waitForServer(`${ORIGIN}/`);
    await crawl();
    await writeSpaFallback();
    await writeHtaccess();
    console.log(`\n✅ Site estático gerado em ${OUT_DIR}/ — pronto para FTP na Hostinger.`);
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
