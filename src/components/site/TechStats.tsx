const rows = [
  {
    title: "Consenso PoSA & Dual-Mining",
    desc: "Cobrimos como a BOT Chain combina Prova de Autoridade e mineração dupla para entregar throughput de rede validado por operadores institucionais, com incentivos econômicos para produtores de blocos e nós de referência.",
    metric: "0,75 segundos",
    label: "Tempo de bloco",
  },
  {
    title: "Finalidade Rápida & Segurança",
    desc: "Reportagens sobre a estrutura de finalidade em duas fases, resistente a censura e otimizada para participação de validadores em múltiplas jurisdições, com auditoria contínua de código e provas criptográficas.",
    metric: "~0,9s méd.",
    label: "Finalidade",
  },
  {
    title: "Economia de Emissão Zero",
    desc: "Análises sobre o modelo de tokenomics deflacionário: recompras via receita de taxas, queima programada e alinhamento de longo prazo entre validadores, desenvolvedores e a comunidade que sustenta a rede.",
    metric: "64 tx / lote",
    label: "Execução paralela",
  },
];

export function TechStats() {
  return (
    <section className="px-6 py-6">
      <div className="section-panel max-w-[1300px] mx-auto py-14">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="chip mb-4">Tecnologia</span>
            <h2 className="section-title">Tecnologia &amp; Mineração Dupla</h2>
          </div>
          <div className="divide-y divide-border/50">
            {rows.map((r) => (
              <div key={r.title} className="grid md:grid-cols-[1.6fr_1fr] gap-6 py-6 items-start">
                <div>
                  <h3 className="font-semibold text-[16px] md:text-[17px] text-foreground mb-2">{r.title}</h3>
                  <p className="text-[14px] md:text-[15px] text-muted-foreground max-w-[540px] leading-[1.7]">{r.desc}</p>
                </div>
                <div className="md:text-right">
                  <div className="text-[30px] md:text-[36px] font-semibold text-gradient-teal leading-tight">{r.metric}</div>
                  <div className="text-[13px] md:text-[14px] text-muted-foreground mt-1">{r.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
