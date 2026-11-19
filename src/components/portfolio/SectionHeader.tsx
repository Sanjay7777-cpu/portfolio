export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-secondary`}>
        <span className="h-1 w-1 rounded-full bg-primary" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display font-extrabold tracking-tight text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.05]">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
