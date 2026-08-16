import { Link } from "@tanstack/react-router";
import logo from "@/assets/icon_title_logo.webp";

export function MediaKit() {
  return (
    <section className="py-16">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="card-panel p-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <img src={logo} alt="" className="h-6" />
            <div>
              <h3 className="font-semibold text-[14px] md:text-[15px]">Kit de Mídia BOT Chain News</h3>
              <p className="text-[13px] md:text-[14px] text-muted-foreground mt-1.5">
                Baixe logos, guias de marca e recursos para veículos parceiros.
              </p>
            </div>
          </div>
          <Link to="/sobre" className="btn-ghost">Baixar kit</Link>
        </div>
      </div>
    </section>
  );
}
