import logo from "@/assets/icon_title_logo.webp";
import { Twitter, Github, Send, MessageCircle } from "lucide-react";

const ecosystemLinks = [
  { label: "B DEX", href: "https://dex.botchain.ai/#/swap" },
  { label: "BOT Bridge", href: "https://bridge.botchain.ai/" },
  { label: "BO Wallet", href: "https://wallet.botchain.ai/" },
  { label: "BOT Scan", href: "https://scan.botchain.ai/" },
];

const communityLinks = [
  { label: "X", href: "https://x.com/BOTChain_ai" },
  { label: "Telegram", href: "https://t.me/BOTChainNetwork" },
  { label: "YouTube", href: "https://www.youtube.com/@BOTChain_ai" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/botchain-official/" },
  { label: "Instagram", href: "https://www.instagram.com/bot_chain/" },
];

const contentLinks = [
  { label: "Notícias", href: "/noticias", internal: true },
  { label: "Análises", href: "/analises", internal: true },
  { label: "News", href: "/news", internal: true },
];

const docLinks = [
  { label: "Desenvolvimento", href: "/desenvolvimento", internal: true },
  { label: "Sobre nós", href: "/sobre", internal: true },
  { label: "Fale com a redação", href: "/sobre", internal: true },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade", internal: true },
  { label: "Termos de Uso", href: "/termos-de-uso", internal: true },
];

const cols = [
  { title: "Conteúdo", links: contentLinks },
  { title: "Ecossistema", links: ecosystemLinks },
  { title: "Comunidade", links: communityLinks },
  { title: "Documentação", links: docLinks },
  { title: "Legal", links: legalLinks },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-6 gap-10">
        <div>
          <img src={logo} alt="BOT Chain News" className="h-6 mb-4" />
          <p className="text-[14px] text-muted-foreground mb-4">
            Portal informacional independente cobrindo a BOT Chain e seu ecossistema.
          </p>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="X"><Twitter className="h-[18px] w-[18px] hover:text-primary" /></a>
            <a href="#" aria-label="Telegram"><Send className="h-[18px] w-[18px] hover:text-primary" /></a>
            <a href="#" aria-label="Discord"><MessageCircle className="h-[18px] w-[18px] hover:text-primary" /></a>
            <a href="#" aria-label="GitHub"><Github className="h-[18px] w-[18px] hover:text-primary" /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-[15px] font-semibold mb-3">{c.title}</h4>
            <ul className="space-y-2.5 text-[14px] text-muted-foreground">
              {c.links.map((l) => (
                <li key={l.label}>
                  {(l as { internal?: boolean }).internal ? (
                    <a href={l.href} className="hover:text-primary transition">{l.label}</a>
                  ) : (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-[1120px] mx-auto px-6 mt-10 pt-6 border-t border-border/40 text-[14px] text-muted-foreground text-center">
        © 2026 BOT Chain News. Todos os direitos reservados.
      </div>
    </footer>
  );
}
