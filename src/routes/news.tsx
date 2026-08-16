import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "News — BOT Chain News" },
      { name: "description", content: "Blog do BOT Chain News: artigos, atualizações, releases e conteúdo editorial sobre o ecossistema BOT Chain." },
      { property: "og:title", content: "News — BOT Chain News" },
      { property: "og:description", content: "Artigos e conteúdo editorial sobre a BOT Chain." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
});

// Cadastre novos artigos abaixo. Cada artigo aparece automaticamente na listagem.
const articles: Array<{
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}> = [];

function NewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-12">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Artigos, atualizações e análises editoriais sobre a BOT Chain, seu ecossistema, projetos, releases
            e movimentações da comunidade.
          </p>
        </header>

        {articles.length === 0 ? (
          <div className="rounded-lg border border-border/60 p-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">Em breve</h2>
            <p className="text-muted-foreground text-base">
              Os primeiros artigos serão publicados aqui em breve. Volte em instantes.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="rounded-lg border border-border/60 p-6 hover:border-primary/60 transition-colors"
              >
                <p className="text-xs text-primary mb-2">{a.category}</p>
                <h3 className="font-semibold mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{a.excerpt}</p>
                <p className="text-xs text-muted-foreground">{a.date}</p>
              </article>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
