import { Link } from "@tanstack/react-router";
import { Github, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/icon_title_logo.webp";
import certikAsset from "@/assets/Certik.pdf.asset.json";
import whitepaperAsset from "@/assets/Whitepaper.pdf.asset.json";

const nav = [
  { label: "Notícias", href: "/noticias" },
  { label: "Análises", href: "/analises" },
  { label: "News", href: "/news" },
];

const ecosystem = [
  { label: "B DEX", href: "https://dex.botchain.ai/#/swap" },
  { label: "BOT Bridge", href: "https://bridge.botchain.ai/" },
  { label: "BO Wallet", href: "https://wallet.botchain.ai/" },
  { label: "BOT Scan", href: "https://scan.botchain.ai/" },
];

const community = [
  { label: "X", href: "https://x.com/BOTChain_ai" },
  { label: "Telegram", href: "https://t.me/BOTChainNetwork" },
  { label: "YouTube", href: "https://www.youtube.com/@BOTChain_ai" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/botchain-official/" },
  { label: "Instagram", href: "https://www.instagram.com/bot_chain/" },
];

const docs = [
  { label: "Desenvolvimento", href: "/desenvolvimento", disabled: false, internal: true },
  { label: "WhitePaper", href: whitepaperAsset.url, disabled: false },
  { label: "Certik", href: certikAsset.url, disabled: false },
];

function DropdownMenu({
  label,
  items,
  open,
  setOpen,
}: {
  label: string;
  items: { label: string; href: string; disabled?: boolean; internal?: boolean }[];
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div role="menu" className="absolute right-0 top-full pt-2 w-48">
          <div className="rounded-md border border-border/60 bg-background/95 backdrop-blur-lg shadow-lg py-1">
            {items.map((d) =>
              d.disabled ? (
                <span
                  key={d.label}
                  className="block px-4 py-2 text-sm text-muted-foreground/50 cursor-not-allowed"
                  title="Em breve"
                >
                  {d.label}
                </span>
              ) : (
                <a
                  key={d.label}
                  href={d.href}
                  {...(d.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/40 transition-colors"
                >
                  {d.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [openDocs, setOpenDocs] = useState(false);
  const [openEcosystem, setOpenEcosystem] = useState(false);
  const [openCommunity, setOpenCommunity] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/70 border-b border-border/60">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="BOT Chain News" className="h-6 w-auto" />
          <span className="text-sm font-semibold tracking-wide text-foreground/90">News</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
          <DropdownMenu
            label="Ecossistema"
            items={ecosystem}
            open={openEcosystem}
            setOpen={setOpenEcosystem}
          />
          <DropdownMenu
            label="Comunidade"
            items={community}
            open={openCommunity}
            setOpen={setOpenCommunity}
          />
          <DropdownMenu
            label="Documentação"
            items={docs}
            open={openDocs}
            setOpen={setOpenDocs}
          />
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Buscar" className="p-2 text-muted-foreground hover:text-primary transition">
            <Search className="h-4 w-4" />
          </button>
          <a href="#" aria-label="GitHub" className="p-2 text-muted-foreground hover:text-primary transition">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
