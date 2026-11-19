import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Phone, Mail, Linkedin, Github, Send, MapPin, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); }, 1100);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Scale Your Business extraordinary."
          description="Tell me about your project — I usually respond within a few hours."
        />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-5">
          {/* Luxury info card */}
          <div className="relative glass-strong rounded-3xl p-8 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.62 0.21 264 / .35), transparent 70%)", filter: "blur(20px)" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mono text-xs text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available worldwide
              </div>
              <h3 className="mt-5 font-display font-extrabold text-2xl">Get in touch directly</h3>
              <p className="mt-2 text-sm text-text-secondary">Prefer a quick chat? Reach me on any of these channels.</p>

              <div className="mt-8 space-y-4">
                <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+977 9824804400" href="tel:+9779824804400" />
                <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value="the.sanjay7777@gmail.com" href="mailto:the.sanjay7777@gmail.com" />
                <InfoRow icon={<MapPin className="h-4 w-4" />} label="Based In Nepal" value="Available remotely — UK · USA · UAE" />
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-[11px] uppercase tracking-[0.15em] text-text-secondary mb-3">Social</div>
                <div className="flex gap-3">
                  <SocialIcon href="https://www.linkedin.com/in/sanjay-kumar-381291230/" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
                  <SocialIcon href="https://github.com/Sanjay7777-cpu" label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
                  <SocialIcon href="mailto:the.sanjay7777@gmail.com" label="Gmail"><Mail className="h-4 w-4" /></SocialIcon>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" required><input required type="text" className={inputCls} placeholder="John Doe" /></Field>
              <Field label="Email" required><input required type="email" className={inputCls} placeholder="you@company.com" /></Field>
            </div>
            <div className="mt-4">
              <Field label="Project Type">
                <select className={inputCls} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Website Development</option>
                  <option>SaaS / Web App</option>
                  <option>SEO</option>
                  <option>Digital Marketing</option>
                  <option>Meta Ads / Google Ads </option>
                  <option>UI/UX Design</option>
                  <option>Custom Solution</option>
                </select>
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message" required>
                <textarea required rows={5} className={`${inputCls} resize-none`} placeholder="Tell me about the project, timeline and budget..." />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting || sent}
              className="group mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground bg-primary hover-lift glow-ring disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sent ? (
                <><Check className="h-4 w-4" /> Message sent</>
              ) : submitting ? (
                <><span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" /> Sending...</>
              ) : (
                <>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm placeholder:text-text-secondary/60 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06] transition";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-wider text-text-secondary">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 group">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-text-secondary">{label}</div>
        <div className="text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-colors hover:shadow-[var(--shadow-glow)]"
    >
      {children}
    </a>
  );
}
