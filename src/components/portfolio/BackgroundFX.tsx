import { useEffect, useRef } from "react";

export function BackgroundFX() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const bubbles = Array.from({ length: 14 });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-60" />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / .5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / .5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Floating bubbles */}
      {bubbles.map((_, i) => {
        const size = 80 + ((i * 37) % 220);
        const left = (i * 73) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 7) * -2;
        const duration = 14 + (i % 6) * 3;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background:
                "radial-gradient(circle at 30% 30%, oklch(1 0 0 / 0.18), oklch(1 0 0 / 0.02) 60%, transparent 70%)",
              filter: "blur(1px)",
              animation: `drift ${duration}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
      {/* Big accent blobs */}
      <div
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.21 264 / .35), transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full animate-float-slower"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.2 280 / .28), transparent 70%)", filter: "blur(70px)" }}
      />
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="absolute h-[500px] w-[500px] rounded-full opacity-60 transition-transform duration-300 ease-out hidden md:block"
        style={{
          background: "radial-gradient(circle, oklch(0.62 0.21 264 / .18), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
