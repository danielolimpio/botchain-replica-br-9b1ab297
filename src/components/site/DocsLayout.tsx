import { Link, useParams } from "@tanstack/react-router";
import { devDocsSidebar } from "@/data/devDocsSidebar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import type { ReactNode } from "react";

export function DocsLayout({ children, activeSlug }: { children: ReactNode; activeSlug?: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-[260px_1fr] gap-10">
        <aside className="md:sticky md:top-24 md:self-start md:max-h-[calc(100vh-8rem)] md:overflow-y-auto pr-2">
          <nav className="space-y-6">
            {devDocsSidebar.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/90 mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-1.5">
                  {section.links.map((l) => {
                    const active = activeSlug === l.slug;
                    return (
                      <li key={l.slug}>
                        <Link
                          to="/desenvolvimento/$slug"
                          params={{ slug: l.slug }}
                          className={
                            "block text-sm py-1.5 px-2 rounded transition-colors " +
                            (active
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-primary hover:bg-muted/40")
                          }
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <main className="min-w-0">
          <article className="docs-prose max-w-3xl">{children}</article>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export function useActiveSlug() {
  const params = useParams({ strict: false }) as { slug?: string };
  return params.slug;
}
