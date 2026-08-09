import token from "@/assets/icon_bot_token.webp";
import platform from "@/assets/icon_platform.webp";

export function Security() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="chip mb-4">Editorial</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Segurança & Empoderamento</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="card-panel card-panel-hover p-8 flex items-center gap-6">
            <img src={token} alt="" className="h-20 w-20" />
            <div>
              <h3 className="font-semibold text-lg mb-1">BOT TOKEN</h3>
              <p className="text-sm text-muted-foreground mb-4">Tudo sobre o token da rede: distribuição, utilidade e boletins de mercado publicados pela redação.</p>
              <a
                href="https://dex.botchain.ai/#/swap"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Ver cotação
              </a>
            </div>
          </article>
          <article className="card-panel card-panel-hover p-8 flex items-center gap-6">
            <img src={platform} alt="" className="h-20 w-20" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Plataforma de Dados On-Chain</h3>
              <p className="text-sm text-muted-foreground mb-4">Análises baseadas em dados abertos: fluxos entre carteiras, atividade de validadores e principais contratos.</p>
              <a
                href="https://scan.botchain.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Ver dashboards
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
