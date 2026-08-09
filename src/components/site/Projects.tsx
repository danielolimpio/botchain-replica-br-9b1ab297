import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import money from "@/assets/projects/Money.webp.asset.json";
import arcadex from "@/assets/projects/arcadex.webp.asset.json";
import tandot from "@/assets/projects/tandot.webp.asset.json";
import meridian from "@/assets/projects/meridian.webp.asset.json";
import finnext from "@/assets/projects/finnext.webp.asset.json";
import ciao from "@/assets/projects/ciao.webp.asset.json";
import nas from "@/assets/projects/nas.webp.asset.json";
import silkdao from "@/assets/projects/silkdao.webp.asset.json";
import choicepop from "@/assets/projects/choicepop.webp.asset.json";

const projects = [
  { img: money.url, name: "Dinheiro", desc: "Money é um portal descentralizado de serviços financeiros para usuários da Web3." },
  { img: arcadex.url, name: "ArcadeX", desc: "ArcadeX é uma plataforma de jogos arcade on-chain onde os usuários podem jogar para ganhar dinheiro e os desenvolvedores podem publicar jogos." },
  { img: tandot.url, name: "Tandot", desc: "A Tandot é uma plataforma de poupança para o mercado latino-americano que melhora a eficiência utilizando agentes de IA." },
  { img: meridian.url, name: "Meridiano", desc: "Meridian é uma infraestrutura de pagamentos para a comercialização de agentes de IA." },
  { img: finnext.url, name: "Carteira Finnext", desc: "Finnext é uma carteira híbrida CeFi-DeFi que permite aos usuários gerenciar ativos de forma eficiente." },
  { img: ciao.url, name: "Tchau", desc: "A CIAO é uma plataforma de lançamento e gestão de tokens que oferece ferramentas para criação de tokens, implementação de liquidez e gestão de projetos." },
  { img: nas.url, name: "Nasera", desc: "A Nasera é um ecossistema de entretenimento competitivo focado em IA e DeFi." },
  { img: silkdao.url, name: "Silkdao", desc: "SilkDAO é uma plataforma de tokenização RWA e governança de DAO." },
  { img: choicepop.url, name: "Choicepop", desc: "Choicepop é um mercado de previsões descentralizado onde os usuários podem criar e participar de previsões sobre diversos eventos." },
];

export function Projects() {
  return (
    <section className="py-16">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-9">
          <h2 className="section-title">Construindo o Futuro Juntos</h2>
          <p className="section-sub">Conheça os projetos e equipes acompanhados pela nossa redação.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {projects.map((p) => (
            <article key={p.name} className="card-panel card-panel-hover p-4 flex gap-3 relative">
              <div className="h-11 w-11 shrink-0 rounded-lg overflow-hidden bg-background/40 border border-border/60 grid place-items-center">
                <img src={p.img} alt={`Logotipo ${p.name}`} className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="pr-5">
                <h3 className="font-semibold text-[12px]">{p.name}</h3>
                <p className="text-[10.5px] text-muted-foreground mt-1 leading-[1.65]">{p.desc}</p>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/70 absolute top-3 right-3" />
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/analises" className="btn-ghost inline-flex items-center gap-2">
            Ver todos os projetos <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

