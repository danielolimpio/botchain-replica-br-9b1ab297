import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-original.png.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-bg">
      <div className="absolute -left-40 -top-40 h-[420px] w-[520px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative max-w-[1440px] mx-auto grid md:grid-cols-2 items-center">
        <div className="pl-6 md:pl-[calc((100vw-1120px)/2)] pr-6 pt-24 pb-24">
          <span className="chip mb-5">● BOT Chain News</span>
          <h1 className="text-[40px] md:text-[54px] font-bold leading-[1.06] tracking-[-0.02em]">
            Inteligência<br />Reinventada
          </h1>
          <p className="mt-5 text-muted-foreground text-[13px] leading-[1.75] max-w-[480px]">
            O portal informacional da BOT Chain — cobertura completa sobre a rede de próxima geração
            que combina consenso híbrido, mineração dupla e finalidade rápida para uma economia
            computacional aberta.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/noticias" className="btn-primary">Ler as notícias</Link>
            <Link to="/desenvolvimento" className="btn-ghost">Explorar guias</Link>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src={heroImage.url}
            alt="Ilustração BOT Chain"
            className="w-full h-full object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
