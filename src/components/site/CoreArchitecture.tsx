import coreAsset from "@/assets/botchain-core.png.asset.json";

const items = [
  {
    title: "Consenso Híbrido SPoA",
    body: "A BOT Chain adota um modelo híbrido de Prova de Autoridade e Prova de Participação, combinando validação institucional com incentivos econômicos para uma finalidade rápida e segura, otimizada para aplicações de escala.",
  },
  {
    title: "Segurança de Nível Institucional",
    body: "Baseada em criptografia auditada e um conjunto de validadores selecionados, a rede foi projetada para uso corporativo, oferecendo isolamento de ambientes, controle granular de permissões e resistência a ataques coordenados.",
  },
  {
    title: "Finalidade Física e Prova de Estado",
    body: "Um bloco leve, entregue e assinado com testemunhas independentes garante o registro definitivo em segundos. Essa estrutura reduz reorganizações a praticamente zero e simplifica auditoria em ambientes regulados.",
  },
  {
    title: "Governança Descentralizada",
    body: "Mecanismos de votação on-chain permitem que a comunidade e parceiros institucionais participem das decisões técnicas e econômicas — desde upgrades da rede até parâmetros de consenso e alocações do tesouro.",
  },
];

export function CoreArchitecture() {
  return (
    <section className="relative py-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="chip mb-4">Notícias</span>
          <h2 className="section-title">Arquitetura Central BOT</h2>
          <p className="section-sub">Cobertura estruturada para a economia computacional aberta.</p>
        </div>
        <div className="relative grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <article key={it.title} className="card-panel card-panel-hover p-6">
              <h3 className="text-primary font-semibold text-[15px] md:text-[16px] mb-3">{it.title}</h3>
              <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">{it.body}</p>
            </article>
          ))}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <img
              src={coreAsset.url}
              alt="Representação 3D do núcleo da BOT Chain"
              className="w-28 h-28 object-contain drop-shadow-[0_0_50px_oklch(0.78_0.15_168/0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
