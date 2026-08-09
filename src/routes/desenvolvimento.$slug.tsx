import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { DocsLayout } from "@/components/site/DocsLayout";
import { devDocsSidebar } from "@/data/devDocsSidebar";
import devDocs from "@/data/devDocsPt.json";

type DocEntry = { title: string; html: string };
const docs = devDocs as Record<string, DocEntry>;

export const Route = createFileRoute("/desenvolvimento/$slug")({
  loader: ({ params }) => {
    const entry = docs[params.slug];
    if (!entry) throw notFound();
    return { entry, slug: params.slug };
  },
  component: DocPage,
  notFoundComponent: DocNotFound,
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Documento não encontrado — BOT Chain News" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = cleanTitle(loaderData.entry.title);
    const description = `${title}: documentação técnica da BOT Chain em português com conceitos, passos e exemplos práticos para desenvolvedores e usuários da rede.`;
    const url = `https://botchain-replica-br.lovable.app/desenvolvimento/${loaderData.slug}`;
    return {
      meta: [
        { title: `${title} — BOT Chain News` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} — BOT Chain News` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: title,
            description,
            url,
            inLanguage: "pt-BR",
            author: { "@type": "Organization", name: "BOT Chain News" },
            publisher: { "@type": "Organization", name: "BOT Chain News" },
          }),
        },
      ],
    };
  },
});

function cleanTitle(t: string) {
  return t.replace(/\|\s*BOT Chain Dev Docs$/, "").replace(/\|\s*BOT Chain Documentation$/, "").replace(/\|\s*Documentação Dev BOT Chain$/, "").replace(/\|\s*Documentação da BOT Chain$/, "").trim();
}

function DocPage() {
  const { entry, slug } = Route.useLoaderData();
  const title = cleanTitle(entry.title);
  const flat = devDocsSidebar.flatMap((s) => s.links);
  const idx = flat.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;

  return (
    <DocsLayout activeSlug={slug}>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="docs-content" dangerouslySetInnerHTML={{ __html: entry.html }} />
      <div className="flex justify-between mt-12 pt-6 border-t border-border/60 gap-4">
        {prev ? (
          <Link
            to="/desenvolvimento/$slug"
            params={{ slug: prev.slug }}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← {prev.label}
          </Link>
        ) : <span />}
        {next ? (
          <Link
            to="/desenvolvimento/$slug"
            params={{ slug: next.slug }}
            className="text-sm text-muted-foreground hover:text-primary text-right"
          >
            {next.label} →
          </Link>
        ) : <span />}
      </div>
    </DocsLayout>
  );
}

function DocNotFound() {
  return (
    <DocsLayout>
      <h1 className="text-2xl font-bold mb-3">Documento não encontrado</h1>
      <p className="text-muted-foreground">O tópico solicitado não existe. Escolha um item no menu lateral.</p>
    </DocsLayout>
  );
}
