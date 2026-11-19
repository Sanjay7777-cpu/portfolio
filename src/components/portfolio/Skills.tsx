import { SectionHeader } from "./SectionHeader";
import { Layout, Server, Database, BarChart3 } from "lucide-react";

const GROUPS = [
  {
    icon: BarChart3, title: "Marketing Tools",
    items: [
      { name: "GA4 / GTM", v: 87 },
      { name: "Meta Ads Manager", v: 98 },
      { name: "Google Search Console", v: 84 },
      { name: "Ahrefs / Semrush", v: 80 },
      { name: "Google Business Profile", v: 89 },
      { name: "Reporting & Budget Allocation", v: 90 },
      { name: "Google Ads", v: 94 },
      { name: "Content Writing", v: 89 },
      { name: "ResDiary / OpenTable ", v: 75 },
      { name: "Tiktok Ads & Trend ", v: 90 },
      { name: "Market Research ", v: 85 },

    ],
  },
];

const FLOATING = ["Meta Ads", "Google Ads", "GA 4", "SEO", "Google Search Console", "GBP", "Influencer Marketing", "Content Strategy", "Brand Strategy", "Marketing Funnels", "Email Marketing", "Tiktok Ads", "Market Research", "Content Writing", "ResDiary / OpenTable", "Ahrefs / Semrush", "Reporting & Budget Allocation"];

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Digital Marketing Skills and Tools"
          description="Digital Marketing Skills and Tools I use to help businesses grow and scale their online presence."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {GROUPS.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6 sm:p-7 hover-lift">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 border border-primary/20 text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg">{g.title}</h3>
              </div>
              <div className="mt-6 space-y-4">
                {g.items.map((it) => (
                  <div key={it.name}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium">{it.name}</span>
                      <span className="mono text-xs text-text-secondary">{it.v}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${it.v}%`, background: "var(--gradient-accent)", boxShadow: "0 0 12px oklch(0.62 0.21 264 / .6)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* floating chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {FLOATING.map((f, i) => (
            <span
              key={f}
              className="mono text-xs px-4 py-2 rounded-full glass animate-float-slow"
              style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${10 + (i % 5)}s` }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
