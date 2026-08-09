import { ArrowUpRight } from "lucide-react";
import wallet from "@/assets/icon_wallet.webp";
import bridge from "@/assets/icon_bridge.webp";
import dex from "@/assets/icon_dex.webp";

const portals = [
  { icon: wallet, title: "Carteira BO", sub: "Cobertura DeFi & Gateway", desc: "Notícias, tutoriais e atualizações sobre a carteira oficial da rede: novos recursos, integrações e alertas de segurança para usuários finais." },
  { icon: bridge, title: "BOT Bridge", sub: "Interoperabilidade L1", desc: "Reportagens sobre a ponte multichain, novos ativos suportados, movimentações relevantes e análises de risco em pontes de mensagens." },
  { icon: dex, title: "B DEX", sub: "Câmbio Descentralizado", desc: "Panorama do DEX nativo: listagens de pares, volumes, análises de liquidez e destaques semanais de tokens do ecossistema BOT." },
];

export function Portals() {
  return (
    <section className="py-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="chip mb-4">Portais</span>
          <h2 className="section-title">Portais do Ecossistema</h2>
          <p className="section-sub">Lendo o caminho para a inovação em blockchain.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-[820px] mx-auto">
          {portals.map((p) => (
            <article key={p.title} className="card-panel card-panel-hover relative p-5 pt-8 flex flex-col items-center text-center">
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/70 absolute top-3 right-3" />
              <img src={p.icon} alt="" className="h-24 w-24 mb-4 object-contain drop-shadow-[0_0_25px_oklch(0.78_0.15_168/0.45)]" />
              <h3 className="font-semibold text-[13px]">{p.title}</h3>
              <div className="text-[10.5px] text-primary/90 mt-1 mb-2.5">{p.sub}</div>
              <p className="text-[10.5px] text-muted-foreground leading-[1.7]">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
