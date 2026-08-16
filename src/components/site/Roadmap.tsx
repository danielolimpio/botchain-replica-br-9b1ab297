const stages = [
  {
    q: "2025 Q3 – 2026 Q1",
    items: [
      "Cobertura do lançamento da testnet institucional",
      "Reportagens especiais sobre o whitepaper",
      "Guia editorial: como acompanhar validadores",
      "Análises semanais do desempenho da mainnet",
      "Lançamento da BOT Chain Bridge",
    ],
  },
  {
    q: "2026 Q2 – 2026 Q3",
    items: [
      "Série sobre atualização do Programa de Validação",
      "Reportagens sobre integrações institucionais",
      "Cobertura do primeiro relatório de auditoria",
    ],
  },
  {
    q: "2026 Q4 – 2027 Q1",
    items: [
      "Especial sobre governança on-chain",
      "Análise da nova camada de dados",
      "Cobertura da campanha de expansão global",
    ],
  },
  {
    q: "2027 Q2 – 2027 Q4",
    items: [
      "Anúncio da BOT L2 — cobertura ao vivo",
      "Reportagens sobre novas parcerias corporativas",
      "Retrospectiva anual e prêmios do ecossistema",
    ],
  },
];

export function Roadmap() {
  return (
    <section className="px-6 py-6">
      <div className="section-panel max-w-[1300px] mx-auto py-14">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="chip mb-4">Editorial</span>
            <h2 className="section-title">Agenda Editorial BOT Chain</h2>
            <p className="section-sub">Nossa pauta e cronograma de reportagens especiais.</p>
          </div>
          <div className="relative pt-6">
            <div className="absolute left-0 right-0 top-6 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
            <div className="grid md:grid-cols-4 gap-6">
              {stages.map((s) => (
                <div key={s.q} className="relative pt-6">
                  <span className="absolute -top-[3px] left-0 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.78_0.15_168)]" />
                  <div className="text-[13px] md:text-[14px] text-primary font-medium mb-4">{s.q}</div>
                  <ul className="space-y-3 text-[13px] md:text-[14px] text-muted-foreground leading-[1.7]">
                    {s.items.map((i) => (
                      <li key={i}>— {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
