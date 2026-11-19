import { SectionHeader } from "./SectionHeader";
import { Briefcase } from "lucide-react";

const TIMELINE = [
  { year: "2025 — Present", role: "Digital Marketing Manager", company: "HotStone", location: "London Based Company In Nepal", desc: " Reporting & Research , Meta Ads Specialist , Strategist based on GA4 , GSC , Google Ads & GBP " },
  { year: "2024 — 2025", role: "Digital Marketing Specialist (Co - Founder) ", company: "Dream Digital ", location: " Bhaktapur, Nepal ", desc: "Lead a 4 Members team in developing and executing digital marketing strategies." },
  { year: "2023 — 2024", role: "Digital Marketing Specialist", company: "Scholarix Study Abroad", location: "Dubai , UAE ( Remote ) ", desc: "Content Planning , Social Media Management , Meta Business Setup , Ads Account" },
  { year: "2022 — 2023", role: "Digital Marketing Executive", company: "Kabita Fruit Processing Industry", location: "Dhankuta Nepal", desc: "Managed Social Media Accounts & Ran Ads on Meta Ads / Google Ads , Writing Ads Copies." },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title="A track record across globe."
          description=" 3 years of shipping skills across UK, USA, Norway and the UAE — for founders, agencies and enterprise teams."
        />

        <div className="mt-16 relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {TIMELINE.map((t, i) => (
              <div key={t.role} className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}>
                {/* dot */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 grid place-items-center">
                  <div className="h-3 w-3 rounded-full bg-primary glow-ring" />
                </div>

                <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:pl-10"}`}>
                  <div className="mono text-xs text-primary">{t.year}</div>
                  <h3 className="mt-1 font-display font-bold text-lg">{t.role}</h3>
                  <div className="mt-1 text-sm text-text-secondary">{t.company} · {t.location}</div>
                </div>
                <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:pl-10" : "sm:text-right sm:pr-10"}`}>
                  <div className="glass rounded-2xl p-5 hover-lift">
                    <div className="flex items-center gap-2 text-text-secondary text-xs mb-2">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span className="uppercase tracking-wider">Role overview</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
