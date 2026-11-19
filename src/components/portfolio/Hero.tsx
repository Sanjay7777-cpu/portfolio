import { useEffect, useState } from "react";
import { ArrowRight, Code2, Sparkles, Cpu, Braces, Terminal } from "lucide-react";
import portrait from "@/assets/portrait.jpeg";

const ROLES = [
  "Digital Marketing Manager",
  "Meta Ads / SEO Specialist",
  "Performance Marketer",
  "Business Growth Consultant",
];

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI(i + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

const STATS = [
  { value: "110+", label: "Projects Completed" },
  { value: "37+", label: "Clients Served" },
  { value: "3+", label: "Years Experience" },
  { value: "99%", label: "Response Rate" },
];

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="relative pt-32 lg:pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-text-secondary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects — Nepal . UK · USA · Dubai
            </div>

            <h1 className="font-display font-black tracking-tight text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02]">
              <span className="text-gradient">SANJAY KUMAR</span>
              <br />
              <span className="shimmer-text">THAKUR</span>
            </h1>

            <div className="mt-5 flex items-baseline gap-2 text-lg sm:text-xl text-text-secondary">
              <span className="text-foreground/70">I'm a</span>
              <span className="font-display font-semibold text-foreground">
                {role}
                <span className="ml-0.5 inline-block w-[2px] h-5 bg-primary align-middle" style={{ animation: "typing-cursor 1s infinite" }} />
              </span>
            </div>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-text-secondary leading-relaxed">
              I help business to scale revenue and sales through data driven marketing strategies.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground bg-primary overflow-hidden hover-lift glow-ring"
              >
                <span className="relative z-10">Hire Me</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-[oklch(0.7_0.18_240)] to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold glass hover:bg-white/[0.08] transition-colors"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl glass">
              {STATS.map((s) => (
                <div key={s.label} className="p-5 bg-background/40">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-gradient-accent">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — portrait */}
          <div className="relative animate-scale-in-soft">
            <div className="relative mx-auto aspect-square max-w-[460px]">
              {/* spinning rings */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-primary/30 animate-spin-reverse" style={{ borderStyle: "dashed" }} />
              <div className="absolute inset-12 rounded-full border border-white/5 animate-spin-slow" />

              {/* glow */}
              <div className="absolute inset-10 rounded-full blur-3xl opacity-60" style={{ background: "var(--gradient-accent)" }} />

              {/* portrait */}
              <div className="absolute inset-14 rounded-full overflow-hidden border border-white/20 shadow-[var(--shadow-elevated)] glow-ring">
                <img src={portrait} alt="Sanjay Kumar Thakur" className="h-full w-full object-cover" width={896} height={1152} />
              </div>

              {/* floating tech chips */}
              <FloatingChip className="absolute -top-2 right-6 animate-float-slow" icon={<Code2 className="h-4 w-4" />} label="GA4" />
              <FloatingChip className="absolute top-1/2 -left-6 animate-float-slower" icon={<Braces className="h-4 w-4" />} label="Meta Ads" />
              <FloatingChip className="absolute -bottom-2 left-12 animate-float-slow" icon={<Terminal className="h-4 w-4" />} label="Google Ads" />
              <FloatingChip className="absolute bottom-10 -right-6 animate-float-slower" icon={<Cpu className="h-4 w-4" />} label="Web" />
              <FloatingChip className="absolute top-10 -right-10 animate-float-slow" icon={<Sparkles className="h-4 w-4" />} label="SEO" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ icon, label, className = "" }: { icon: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`glass-strong rounded-xl px-3 py-2 text-xs font-medium flex items-center gap-2 shadow-[var(--shadow-card)] ${className}`}>
      <span className="text-primary">{icon}</span>
      <span className="mono">{label}</span>
    </div>
  );
}
