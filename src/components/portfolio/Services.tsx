import { SectionHeader } from "./SectionHeader";
import { Code2, Search, Megaphone, Boxes, Target, Palette, ArrowUpRight } from "lucide-react";

const SERVICES = [
  { icon: Search, title: "Search Engine Optimization", desc: "Technical SEO, on-page strategy and content systems that compound organic traffic.", tags: ["Tech SEO", "Schema", "Core Web Vitals"] },
  { icon: Megaphone, title: "Digital Marketing", desc: "End-to-end growth strategies — content, funnels, automation and reporting.", tags: ["Funnels", "CRM", "Analytics"] },
  { icon: Boxes, title: "Performance Marketing", desc: "Performance marketing campaigns — targeting, tracking and optimisation.", tags: ["Automation", "APIs", "Dashboards"] },
  { icon: Target, title: "Content Marketing", desc: "Strategic content creation and distribution to engage and convert your audience.", tags: ["Facebook", "Instagram", "Pixel"] },
  { icon: Code2, title: "AI Website Development", desc: "High-performance marketing sites, web apps and SaaS dashboards built with modern stacks.", tags: ["React", "Next.js", "Node"] },
  { icon: Code2, title: "Market Research", desc: "In-depth market analysis and consumer insights to drive strategic decision-making.", tags: ["Research", "Analytics", "Strategy"] },


];

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title="Services built for serious growth."
          description="A focused suite of services that takes brands from idea to revenue — without the agency overhead."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="group relative glass rounded-2xl p-6 sm:p-7 overflow-hidden hover-lift"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle, oklch(0.62 0.21 264 / .4), transparent 70%)", filter: "blur(20px)" }}
              />
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-text-secondary group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-6 font-display font-bold text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="mono text-[10.5px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
