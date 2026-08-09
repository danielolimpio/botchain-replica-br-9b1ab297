import { Link } from "@tanstack/react-router";
import logo from "@/assets/icon_title_logo.webp";

export function MediaKit() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 card-panel p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="" className="h-8" />
          <div>
            <h3 className="font-semibold">Kit de Mídia BOT Chain News</h3>
            <p className="text-sm text-muted-foreground">Baixe logos, guias de marca e recursos para veículos parceiros.</p>
          </div>
        </div>
        <Link to="/sobre" className="btn-ghost">Baixar kit</Link>
      </div>
    </section>
  );
}
