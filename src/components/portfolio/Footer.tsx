export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-[oklch(0.7_0.18_240)] grid place-items-center text-primary-foreground font-display font-extrabold text-sm">S</div>
            <div>
              <div className="font-display font-bold">Sanjay Kumar Thakur</div>
              <div className="text-xs text-text-secondary mono">Building digital experiences with precision.</div>
            </div>
          </div>

          <div className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Sanjay Kumar Thakur. Crafted with care.
          </div>
        </div>
      </div>
    </footer>
  );
}
