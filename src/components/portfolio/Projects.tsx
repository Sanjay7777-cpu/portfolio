
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "HotStone London",
    desc: "Digital marketing strategy and execution for a London-based company in Nepal, focusing on reporting, research, and Meta Ads.",
    stack: ["Meta Pixel", "GA4", "GSC", "Google Ads"],
    img: "linear-gradient(135deg, #422006, #b45309 50%, #fbbf24)",
    href: "https://hotstonelondon.com/",
  },
  {
    title: "Five Global",
    desc: "Managed digital marketing campaigns for a Dubai HR company, driving significant lead generation and brand awareness.",
    stack: ["Meta Ads", "Google Ads", "GBP"],
    img: "linear-gradient(135deg, #0f172a, #1e293b 50%, #6366f1)",
    href: "https://fivegae.com/",
  },

  {
    title: "Rai Restaurant London",
    desc: "Funnel optimization and paid media management for a restaurant, enhancing user acquisition and retention.",
    stack: ["Funnel Optimization", "Meta Ads", "Google Ads"],
    img: "linear-gradient(135deg, #4a044e, #7e22ce 50%, #f0abfc)",
    href: "http://rairestaurant.com/",
  },
    {
    title: "RJ UPVC Nepal",
    desc: "Scaled revenue by 3.5x for a Nepal-based UPVC manufacturer through a paid media strategy.",
    stack: ["Meta Ads", "Content", "AI Marketing"],
    img: "linear-gradient(135deg, #1e3a8a, #2563eb 60%, #60a5fa)",
    href: "#",
  },
  {
    title: "Scholarix Study Abroad Dubai",
    desc: "Content planning, social media management, and Meta Business setup for a Dubai-based study abroad consultancy.",
    stack: ["Meta Ads", "Content", "Content Management"],
    img: "linear-gradient(135deg, #042f2e, #0d9488 55%, #2dd4bf)",
    href: "#",
  },
  {
    title: "Suits Nepal",
    desc: "Developed a comprehensive digital marketing strategy for a Nepalese fashion brand, increasing online sales and customer engagement.",
    stack: ["Meta Ads", "Content", "SEO"],
    img: "linear-gradient(135deg, #111827, #374151 50%, #9ca3af)",
    href: "https://www.suitbazar.com.np/",
  },
];

export function Projects() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Selected Work"
            title="Projects shipped with precision."
            description="A curated selection of projects that showcase my expertise in digital marketing, GA4, GSC, GBP, Meta Ads, Content Marketing & business growth strategies."
          />

          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-white/[0.08] transition">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-white/[0.08] transition">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative shrink-0 w-[88%] sm:w-[480px] snap-start glass rounded-3xl overflow-hidden hover-lift"
            >
              <div className="relative h-56 overflow-hidden" style={{ background: p.img }}>
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 50%)" }} />
                <div className="absolute inset-0 grid place-items-center font-display font-black text-4xl text-white/90 tracking-tight">
                  {p.title}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-display font-bold text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="mono text-[10.5px] px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full glass hover:bg-white/[0.08] transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Web Portal
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
