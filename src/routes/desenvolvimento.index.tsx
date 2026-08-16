import { createFileRoute, Link } from "@tanstack/react-router";
import { DocsLayout } from "@/components/site/DocsLayout";
import { devDocsSidebar } from "@/data/devDocsSidebar";

export const Route = createFileRoute("/desenvolvimento/")({
  component: DevIndex,
  head: () => ({
    meta: [
      { title: "Desenvolvimento — BOT Chain News" },
      { name: "description", content: "Documentação técnica da BOT Chain: introdução, developers, DEX, Bridge e Staking." },
    ],
  }),
});

function DevIndex() {
  return (
    <DocsLayout>
      <h1 className="text-3xl md:text-4xl font-bold mb-5">Documentação de Desenvolvimento</h1>
      <p className="text-muted-foreground mb-8 text-base md:text-lg">
        Conteúdo técnico completo da BOT Chain — introdução, guias de desenvolvedores, DEX, Bridge e Staking.
        Selecione um tópico no menu lateral ou comece pela visão geral.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {devDocsSidebar.map((s) => (
          <div key={s.title} className="rounded-lg border border-border/60 p-5">
            <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
            <ul className="space-y-2">
              {s.links.map((l) => (
                <li key={l.slug}>
                  <Link
                    to="/desenvolvimento/$slug"
                    params={{ slug: l.slug }}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DocsLayout>
  );
}
