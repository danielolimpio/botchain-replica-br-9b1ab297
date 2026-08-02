/**
 * Exporta o site (SSR) para HTML estático, para hospedagem em FTP (Hostinger).
 *
 * 1. Sobe o build de produção com wrangler dev
 * 2. Rastreia todas as páginas a partir de "/"
 * 3. Grava cada rota como <rota>/index.html em dist/static
 * 4. Copia os assets de dist/client
 */
import { spawn } from "node:child_process";
import { cp, mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const PORT = Number(process.env.EXPORT_PORT ?? 8790);
const ORIGIN = `http://localhost:${PORT}`;
const OUT = path.resolve("dist/static");

function startServer() {
  const child = spawn(
    "npx",
    ["--yes", "wrangler@4", "dev", "--port", String(PORT)],
    { cwd: path.resolve("dist/server"), stdio: ["ignore", "inherit", "inherit"] },
  );
  return child;
}

async function waitForServer() {
  for (let i = 0; i < 120; i++) {
    try {
      const res = await fetch(`${ORIGIN}/`);
      if (res.ok) return;
    } catch {
      /* ainda subindo */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("Servidor de export não respondeu em tempo");
}

function normalize(href) {
  if (!href) return null;
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return null;
  const url = new URL(href, ORIGIN);
  if (url.origin !== ORIGIN) return null;
  let p = url.pathname;
  if (p.startsWith("/_") || p.startsWith("/assets") || p.startsWith("/api")) return null;
  if (path.extname(p)) return null;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const server = startServer();
  try {
    await waitForServer();

    const queue = ["/"];
    const seen = new Set();

    while (queue.length) {
      const route = queue.shift();
      if (seen.has(route)) continue;
      seen.add(route);

      const res = await fetch(`${ORIGIN}${route}`);
      if (!res.ok) {
        console.warn(`[export] ignorado ${route}: ${res.status}`);
        continue;
      }
      const html = await res.text();

      const dir = route === "/" ? OUT : path.join(OUT, route);
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, "index.html"), html, "utf8");
      console.log(`[export] ${route} -> ${path.relative(process.cwd(), dir)}/index.html`);

      for (const match of html.matchAll(/href="([^"]+)"/g)) {
        const next = normalize(match[1]);
        if (next && !seen.has(next)) queue.push(next);
      }
    }

    await cp(path.resolve("dist/client"), OUT, { recursive: true });
    console.log(`[export] ${seen.size} páginas geradas em dist/static`);
  } finally {
    server.kill("SIGKILL");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
