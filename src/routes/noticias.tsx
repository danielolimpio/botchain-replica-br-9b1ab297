import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/noticias")({
  component: NoticiasPage,
  head: () => ({
    meta: [
      { title: "Notícias — BOT Chain News" },
      { name: "description", content: "Últimas notícias oficiais e anúncios do ecossistema BOT Chain." },
      { property: "og:title", content: "Notícias — BOT Chain News" },
      { property: "og:description", content: "Notícias oficiais e anúncios da BOT Chain." },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
});

function NoticiasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Cobertura</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Notícias</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
          Anúncios oficiais, releases, integrações e marcos do ecossistema BOT Chain.
        </p>
        <div className="rounded-lg border border-border/60 p-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">Em breve</h2>
          <p className="text-muted-foreground text-base">
            As primeiras notícias serão publicadas aqui em breve.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
