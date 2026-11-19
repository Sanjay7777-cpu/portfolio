import { SectionHeader } from "./SectionHeader";
import { Award, Globe2, Rocket, Shield } from "lucide-react";


const HIGHLIGHTS = [
  {
    icon: Rocket,
    title: "Performance-Driven",
    text: "I build and optimize high-performing Meta and Google Ads campaigns focused on measurable growth, qualified leads."
  },
  {
    icon: Globe2,
    title: "Brand Strategy",
    text: "I develop meaningful brand identities and positioning that connect businesses with the right audience."
  },
  {
    icon: Shield,
    title: "Data-Driven Insights",
    text: "I leverage GA4, Google Search Console, and analytics to uncover opportunities, measure performance, and turn data into actionable strategies."
  },
  {
    icon: Award,
    title: "Growth-Focused Partner",
    text: "I combine branding, paid advertising, and performance analytics to build sustainable marketing strategies that drive long-term business growth."
  },
];


export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About"
          title="Engineering trust into every digital experience."
          description="I'm Sanjay — a Digital Marketer & Brand Strategist helping ambitious brands across Dubai, the UK, and beyond grow through smart strategy, creative thinking, and meaningful digital experiences."
        />

        <div className="mt-16 grid lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title}
              className="group glass rounded-2xl p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary border border-primary/20">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg">{h.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
