import token from "@/assets/icon_bot_token.webp";
import platform from "@/assets/icon_platform.webp";

export function Security() {
  return (
    <section className="px-6 py-6">
      <div className="section-panel max-w-[1300px] mx-auto py-14">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title">BOT Token &amp; Dados da Rede</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-[620px] mx-auto">
            <article className="card-panel card-panel-hover p-5 flex items-center gap-3">
              <div className="min-w-0">
                <h3 className="font-semibold text-[12px] mb-1.5">BOT TOKEN</h3>
                <p className="text-[10.5px] text-muted-foreground mb-3 leading-[1.65]">
                  Tudo sobre o token da rede: distribuição, utilidade e boletins de mercado publicados pela redação.
                </p>
                <a
                  href="https://dex.botchain.ai/#/swap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Ver cotação
                </a>
              </div>
              <img src={token} alt="" className="h-16 w-16 shrink-0 object-contain" />
            </article>
            <article className="card-panel card-panel-hover p-5 flex items-center gap-3">
              <div className="min-w-0">
                <h3 className="font-semibold text-[12px] mb-1.5">Plataforma de Dados On-Chain</h3>
                <p className="text-[10.5px] text-muted-foreground mb-3 leading-[1.65]">
                  Análises baseadas em dados abertos: fluxos entre carteiras, atividade de validadores e principais contratos.
                </p>
                <a
                  href="https://scan.botchain.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Ver dashboards
                </a>
              </div>
              <img src={platform} alt="" className="h-16 w-16 shrink-0 object-contain" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
