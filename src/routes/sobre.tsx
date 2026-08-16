import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre — BOT Chain News" },
      { name: "description", content: "Sobre o BOT Chain News, portal informacional independente que cobre a BOT Chain e seu ecossistema." },
      { property: "og:title", content: "Sobre — BOT Chain News" },
      { property: "og:description", content: "Sobre o BOT Chain News, portal informacional independente." },
    ],
  }),
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o BOT Chain News</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          O BOT Chain News é um portal informacional independente em português dedicado à cobertura
          da BOT Chain — uma blockchain pública de Camada 1 de alto desempenho — e de todo o seu ecossistema
          descentralizado.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Nossa missão</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Traduzir com clareza e profundidade os avanços técnicos, produtos, integrações e movimentos
          do ecossistema BOT Chain para desenvolvedores, investidores e entusiastas de língua portuguesa.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">O que cobrimos</h2>
        <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2 mb-6">
          <li>Notícias e anúncios oficiais da BOT Chain</li>
          <li>Análises técnicas de arquitetura, consenso PoSA, sharding e segurança</li>
          <li>Guias práticos para desenvolvedores, validadores e usuários</li>
          <li>Cobertura de dApps do ecossistema: B DEX, BOT Bridge, BO Wallet e BOT Scan</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Independência editorial</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Somos um portal informativo independente. Nenhum conteúdo aqui publicado constitui recomendação
          de investimento. Sempre faça sua própria pesquisa (DYOR) antes de tomar decisões financeiras.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Fale conosco</h2>
        <p className="text-lg text-muted-foreground">
          Sugestões de pauta, correções e parcerias: entre em contato através dos nossos canais oficiais
          em Comunidade, no menu superior.
        </p>
      </main>
      <Footer />
    </div>
  );
}
