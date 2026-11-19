import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "clients", label: "Clients" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
  { id: "case study", label: "Case Study" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      let current = "home";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div className="h-full bg-primary transition-[width]" style={{ width: `${progress}%` }} />
      </div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <nav
            className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              scrolled ? "glass-strong shadow-[var(--shadow-card)]" : "bg-transparent"
            }`}
          >
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[oklch(0.7_0.18_240)] grid place-items-center text-primary-foreground font-display font-extrabold text-sm shadow-[var(--shadow-glow)]">
                S
              </div>
              <span className="font-display font-bold tracking-tight text-sm">
                Sanjay<span className="text-primary">.</span>
              </span>
            </a>

            <ul className="hidden lg:flex items-center gap-1">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`relative px-3 py-2 text-[13px] font-medium transition-colors ${
                      active === s.id ? "text-foreground" : "text-text-secondary hover:text-foreground"
                    }`}
                  >
                    {s.label}
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity ${
                        active === s.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Hire Me
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="lg:hidden grid place-items-center h-9 w-9 rounded-lg glass"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`h-px w-5 bg-foreground transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
                <span className={`h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`h-px w-5 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </div>
            </button>
          </nav>

          {open && (
            <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-up">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm ${
                    active === s.id ? "bg-primary/15 text-foreground" : "text-text-secondary"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
