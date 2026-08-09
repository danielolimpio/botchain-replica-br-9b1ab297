import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import whitepaperAsset from "@/assets/Whitepaper.pdf.asset.json";
import certikAsset from "@/assets/Certik.pdf.asset.json";

export const Route = createFileRoute("/analises")({
  component: AnalisesPage,
  head: () => ({
    meta: [
      { title: "Análises — Dossiê Completo da BOT Chain" },
      {
        name: "description",
        content:
          "Dossiê da BOT Chain: arquitetura, consenso PoSA, ecossistema CaryPact, tokenomics CA/BOT e auditoria CertiK.",
      },
      { property: "og:title", content: "Análises — Dossiê Completo da BOT Chain" },
      {
        property: "og:description",
        content:
          "Dossiê completo da blockchain BOT Chain: tecnologia, ecossistema CaryPact, tokenomics CA/BOT, segurança CertiK e alcance global.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://botchain-replica-br.lovable.app/analises" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://botchain-replica-br.lovable.app/analises" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "Análises — Dossiê Completo da BOT Chain",
          description:
            "Dossiê da BOT Chain: arquitetura, consenso PoSA, ecossistema CaryPact, tokenomics CA/BOT e auditoria CertiK.",
          url: "https://botchain-replica-br.lovable.app/analises",
          inLanguage: "pt-BR",
          author: { "@type": "Organization", name: "BOT Chain News" },
          publisher: { "@type": "Organization", name: "BOT Chain News" },
        }),
      },
    ],
  }),
});

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 border-t border-border/40 first:border-0 first:pt-0 scroll-mt-24">
      {eyebrow && <p className="text-xs uppercase tracking-widest text-primary mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-border/60 p-5">
      <div className="text-2xl md:text-3xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

const toc = [
  { id: "sumario", label: "Sumário executivo" },
  { id: "posicionamento", label: "Posicionamento & Visão" },
  { id: "tecnologia", label: "Arquitetura técnica" },
  { id: "infraestrutura", label: "As 5 grandes infraestruturas" },
  { id: "ecossistema", label: "Ecossistema CaryPact" },
  { id: "tokenomics", label: "Modelo econômico (CA / BOT)" },
  { id: "seguranca", label: "Segurança & CertiK" },
  { id: "alcance", label: "Alcance global & Consenso" },
  { id: "conclusao", label: "Conclusão analítica" },
  { id: "fontes", label: "Fontes" },
];

function AnalisesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-14">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Análise em profundidade</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Dossiê Completo — BOT Chain
          </h1>
          <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
            Análise integral da BOT Chain, blockchain pública EVM-compatível de alto desempenho,
            e do primeiro ecossistema de referência construído sobre ela, o CaryPact. Consolida
            informações do Whitepaper oficial, auditoria de segurança CertiK e a apresentação
            estratégica CaryPact × BOT Chain.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs">
            <a
              href={whitepaperAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-primary/50 text-primary px-3 py-1.5 hover:bg-primary/10"
            >
              Whitepaper (PDF)
            </a>
            <a
              href={certikAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-3 py-1.5 hover:border-primary hover:text-primary"
            >
              Auditoria CertiK (PDF)
            </a>
            <a
              href="https://skynet.certik.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border px-3 py-1.5 hover:border-primary hover:text-primary"
            >
              CertiK Skynet
            </a>
          </div>
        </header>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav className="text-sm space-y-1">
              <p className="text-xs uppercase tracking-widest text-foreground/80 mb-2">Neste dossiê</p>
              {toc.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="block text-muted-foreground hover:text-primary py-1"
                >
                  {t.label}
                </a>
              ))}
            </nav>
          </aside>

          <article>
            <Section id="sumario" eyebrow="01" title="Sumário executivo">
              <p>
                A <strong>BOT Chain</strong> é uma blockchain pública de Camada 1 EVM-compatível,
                projetada para altíssima performance com tempo de bloco de <strong>0,75 segundo</strong>,
                <strong> Finalidade Física</strong> (Physical Finality) e taxas de gas extremamente baixas.
                Positioniona-se como a infraestrutura da chamada geração <em>4.0</em> — combinando rede pública
                com uma camada modular de algoritmos voltada para IA e supercomputação.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose">
                <Stat value="0.75s" label="Tempo de bloco" />
                <Stat value="Chain 677" label="Mainnet EVM" />
                <Stat value="55+" label="Países cobertos" />
                <Stat value="1.500" label="Escritórios globais" />
              </div>
              <p>
                Sobre essa base técnica, o <strong>CaryPact</strong> é apresentado como o primeiro ecossistema
                de referência da BOT Chain — um consórcio global operacional, com liderança executiva
                oriunda de Coinstore (Johnson Zhao, fundador) e de gigantes de distribuição como Amway,
                Nu Skin e Hinode (David Casanova, CEO). O desenvolvimento das blockchains é conduzido por
                <strong> Alexander Ververis</strong>, com histórico em TRON e Tencent.
              </p>
            </Section>

            <Section id="posicionamento" eyebrow="02" title="Posicionamento & Visão">
              <p>
                A tese central da BOT Chain é a de que “toda a Web3 precisa de uma blockchain para rodar e
                pagar taxas”. Assim, ela mira DeFi, dApps, exchanges, comunidades, servidores de API,
                projetos de investimento e MLM — oferecendo um <em>substrato</em> unificado onde o gás circula
                e alimenta o ecossistema.
              </p>
              <p>
                A evolução das blockchains é apresentada como uma sequência: <strong>1.0 BTC</strong> (P2P),
                <strong> 2.0 ETH</strong> (contratos inteligentes), <strong>3.0 BNB</strong> (plataforma + rede pública) e
                <strong> 4.0 BOT</strong> (rede pública + rede de algoritmo modular voltada a IA, criptografia de
                alto nível e transações escaláveis).
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Segurança inigualável — arquitetura robusta e descentralizada.</li>
                <li>Velocidade e escalabilidade — transações rápidas e eficientes.</li>
                <li>Transparência — histórico imutável on-chain.</li>
                <li>Economia sustentável — taxas de gas que sustentam o ecossistema.</li>
              </ul>
            </Section>

            <Section id="tecnologia" eyebrow="03" title="Arquitetura técnica">
              <p>
                A BOT Chain opera sob um mecanismo de consenso <strong>Proof of Staked Authority (PoSA)</strong>,
                unindo eficiência de PoA com segurança econômica de PoS. Combinado à <strong>Fast Finality</strong>,
                garante que uma transação seja irreversível quase que instantaneamente após ser incluída.
              </p>
              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <Stat value="PoSA" label="Consenso Proof of Staked Authority" />
                <Stat value="Fast Finality" label="Finalidade quase instantânea" />
                <Stat value="EVM" label="100% compatível com Ethereum" />
                <Stat value="Blob API" label="Data availability p/ rollups" />
              </div>
              <p>
                Ferramental completo para desenvolvedores: JSON-RPC público, guia de configuração de nós,
                Blob API para disponibilidade de dados, <strong>EOA Paymaster</strong> para abstração de taxas e
                Testnet com faucet de tBOT. Detalhamento completo disponível na seção Desenvolvimento
                deste portal.
              </p>
            </Section>

            <Section id="infraestrutura" eyebrow="04" title="As cinco grandes infraestruturas">
              <div className="grid md:grid-cols-2 gap-4 not-prose">
                {[
                  { t: "01 Mainnet", d: "Rede principal EVM-compatível (Chain ID 677) — base de execução e finalidade." },
                  { t: "02 BOT Scan", d: "Explorador oficial de blocos, transações, contratos e endereços." },
                  { t: "03 BO Wallet", d: "Carteira nativa para gerenciar BOT, USDT e ativos do ecossistema." },
                  { t: "04 BOT Bridge", d: "Ponte cross-chain com Ethereum, BSC e Tron. Modelo Lock & Release em USDT." },
                  { t: "05 BDEX", d: "DEX nativa (V2 e V3) para swap descentralizado e sinergia de liquidez." },
                ].map((x) => (
                  <div key={x.t} className="rounded-lg border border-border/60 p-5">
                    <h3 className="font-semibold mb-1">{x.t}</h3>
                    <p className="text-sm text-muted-foreground">{x.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                A BOT Bridge cobra <strong>0 USDT</strong> em depósitos para a BOT Chain e apenas
                <strong> 0,1% (mín. 1 USDT)</strong> em saídas, com transferências protegidas por quórum de
                validadores e replay-protection por <code>transferId</code>.
              </p>
            </Section>

            <Section id="ecossistema" eyebrow="05" title="Ecossistema CaryPact">
              <p>
                O <strong>CaryPact</strong> é apresentado como o primeiro ecossistema de referência da BOT Chain,
                articulando comunidades, distribuição, staking e utilidades on-chain. Sua liderança une
                experiência em exchanges globais e distribuição em larga escala.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Johnson Zhao</strong> — Fundador (Coinstore, CaryPact, BOT Chain).</li>
                <li><strong>David Casanova</strong> — CEO CaryPact, 35 anos em Amway, Nu Skin, Jeunesse, Hinode.</li>
                <li><strong>Alexander Ververis</strong> — Desenvolvedor das blockchains (TRON, Tencent).</li>
              </ul>
              <p>
                Entre os produtos do ecossistema estão o <strong>Cartão BOT</strong> (bandeira Visa, ligando ativos
                on-chain ao consumo diário), <strong>SilkDAO</strong>, <strong>O-CHAIN</strong>, além de dApps parceiros e
                integrações de mineração/staking.
              </p>
            </Section>

            <Section id="tokenomics" eyebrow="06" title="Modelo econômico (CA / BOT)">
              <p>
                O token <strong>CA</strong> (CaryPact) possui emissão total de <strong>210 milhões</strong> de unidades,
                estruturada em pools estratégicos:
              </p>
              <div className="not-prose overflow-x-auto">
                <table className="w-full text-sm border border-border/60 rounded">
                  <thead>
                    <tr className="bg-muted/30 text-left">
                      <th className="p-3 font-semibold">Alocação</th>
                      <th className="p-3 font-semibold">Percentual</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      ["Pool de prêmios Active (mineração/comunidade)", "35%"],
                      ["Ecossistema e desenvolvimento", "—"],
                      ["Equipe & operação", "—"],
                      ["Liquidez e market making", "—"],
                      ["DAO", "3%"],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-t border-border/60">
                        <td className="p-3">{k}</td>
                        <td className="p-3">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                A tese de valorização combina <strong>CA como moeda de poder computacional</strong> e
                <strong> BOT como “petróleo digital”</strong> da rede — capturando valor via demanda por gas, staking
                e fluxo de aplicações. Segundo a apresentação, uma rodada semente de <strong>US$ 15 milhões</strong> foi
                concluída e há planejamento de listagem em exchanges como OKX, Bybit, KuCoin, MEXC e Bitget.
              </p>
              <p>
                O staking de CA opera em faixas de duração (curto/médio/longo), com efeito de juros compostos
                — quanto mais longo o ciclo, mais expressivo o rendimento acumulado.
              </p>
            </Section>

            <Section id="seguranca" eyebrow="07" title="Segurança & auditoria CertiK">
              <p>
                A BOT Chain foi <strong>auditada e certificada pela CertiK</strong>, referência global em segurança
                Web3. O escopo inclui contratos do ecossistema, checagem estática e monitoramento contínuo
                via CertiK Skynet.
              </p>
              <div className="grid md:grid-cols-3 gap-4 not-prose">
                <Stat value="CertiK" label="Auditoria e monitoramento contínuo" />
                <Stat value="Skynet" label="Score público em tempo real" />
                <Stat value="Quórum" label="Bridge protegido por validadores" />
              </div>
              <p>
                No lado do Bridge, o modelo <strong>Lock &amp; Release</strong> garante lastro 1:1 em USDT nos
                vaults, com liberação exigindo quórum de assinaturas de validadores verificado on-chain,
                além de mecanismos de pausa emergencial via governança.
              </p>
              <p>
                O documento completo da auditoria pode ser consultado{" "}
                <a href={certikAsset.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  aqui (PDF)
                </a>{" "}
                e o dashboard público em{" "}
                <a href="https://skynet.certik.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  skynet.certik.com
                </a>.
              </p>
            </Section>

            <Section id="alcance" eyebrow="08" title="Alcance global & Super Consenso">
              <p>
                A operação global da BOT Chain, através do consórcio CaryPact, cobre mais de{" "}
                <strong>55 países</strong>, <strong>1 milhão de usuários</strong> e <strong>15 grandes sistemas linguísticos</strong>,
                com estrutura de <strong>1.300 estúdios + 200 centros de operação</strong> (1.500 escritórios).
              </p>
              <p>
                O Super Consenso Global BOT já mobilizou eventos em Hong Kong (45 países, 4.000 presenças
                locais, 200.000+ em transmissão ao vivo) e Bangkok (2026.6.28 — Global Ecosystem Summit),
                além de rodadas regionais na Coreia do Sul, Japão, Suécia, Vietnã, Austrália, Brasil, China,
                EUA, Índia e Taiwan.
              </p>
            </Section>

            <Section id="conclusao" eyebrow="09" title="Conclusão analítica">
              <p>
                Do ponto de vista técnico, a BOT Chain se apresenta como uma Layer 1 EVM de <strong>alta
                performance</strong> (0,75s de bloco, Fast Finality, PoSA) com um kit completo para
                desenvolvedores e uma ponte cross-chain de custo baixíssimo, focada em USDT como ativo
                de valor. A auditoria CertiK e o modelo econômico de lastro 1:1 no Bridge sustentam a
                proposta de segurança.
              </p>
              <p>
                Do ponto de vista de mercado, o diferencial é a <strong>estratégia de distribuição global</strong>
                via CaryPact — combinando presença física (1.500 escritórios), tokenomics dual CA/BOT e
                utilidades on/offline como o Cartão BOT. A execução dependerá da consistência da listagem
                nas exchanges anunciadas e da adoção do ecossistema por dApps de terceiros.
              </p>
              <p className="text-sm">
                <em>Aviso: esta análise é informacional e não constitui recomendação financeira. Sempre valide
                dados diretamente com as fontes oficiais.</em>
              </p>
            </Section>

            <Section id="fontes" eyebrow="10" title="Fontes">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  BOT Chain Whitepaper —{" "}
                  <a href={whitepaperAsset.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    PDF oficial
                  </a>
                </li>
                <li>
                  Auditoria CertiK —{" "}
                  <a href={certikAsset.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    PDF
                  </a>{" "}
                  · <a href="https://skynet.certik.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">skynet.certik.com</a>
                </li>
                <li>Apresentação estratégica CaryPact × BOT Chain.</li>
                <li>
                  Documentação de desenvolvimento —{" "}
                  <a href="/desenvolvimento" className="text-primary hover:underline">/desenvolvimento</a>
                </li>
                <li>
                  Ecossistema — <a href="https://dex.botchain.ai/#/swap" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">B DEX</a>,{" "}
                  <a href="https://bridge.botchain.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BOT Bridge</a>,{" "}
                  <a href="https://wallet.botchain.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BO Wallet</a>,{" "}
                  <a href="https://scan.botchain.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BOT Scan</a>.
                </li>
              </ul>
            </Section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
