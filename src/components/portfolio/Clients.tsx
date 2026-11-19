import { SectionHeader } from "./SectionHeader";
import { TrendingUp } from "lucide-react";

const CLIENTS = [
  { name: "Northwave", country: "Norway", metric: "+62% performance" },
  { name: "Hotstone", country: "United Kingdom", metric: "+118% revenue" },
  { name: "Five Global", country: "Dubai, UAE", metric: "3× lead volume" },
  { name: "PulseAI", country: "United States", metric: "9× faster reports" },
  { name: "Helio Wellness", country: "United Kingdom", metric: "+45% bookings" },
  { name: "Bluepeak", country: "Dubai, UAE", metric: "5 internal tools" },
  { name: "Neo Immigrations", country: "Dubai", metric: "Awwwards SOTD" },
  { name: "RAI Labs", country: "Norway", metric: "0 → MVP in 6 wks" },
];

export function Clients() {
  return (
    <section id="clients" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Freelancing Clients"
          title="Trusted by teams across four continents."
          description="A small showcase of brands and founders I've had the privilege to build with."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENTS.map((c, i) => (
            <div
              key={c.name}
              className="group relative glass rounded-2xl p-5 sm:p-6 hover-lift overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at top, oklch(0.62 0.21 264 / .2), transparent 60%)" }}
              />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] border border-white/[0.08] font-display font-extrabold text-lg text-gradient-accent">
                  {c.name.split(" ").map(w => w[0]).slice(0,2).join("")}
                </div>
                <h3 className="mt-4 font-display font-bold text-base">{c.name}</h3>
                <div className="text-xs text-text-secondary">{c.country}</div>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {c.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
