import { useEffect, useRef, useCallback } from "react";
import { FileSearch, BarChart3, Figma, Rocket } from "lucide-react";

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("is-visible"); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`fade-in-section ${className}`}>{children}</div>;
}

const projects = [
  {
    icon: FileSearch,
    title: "Case Studies / Product Teardown",
    description: "Deep dives into user flows and growth levers.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: BarChart3,
    title: "Data Analytics Assignment",
    description: "Transforming raw data into strategic insights (SQL/Excel).",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Figma,
    title: "Wireframes & Prototypes",
    description: "Proposed improvements and high-fidelity mockups.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Rocket,
    title: "Side Projects",
    description: "Quick products and MVPs solving real-world problems.",
    span: "md:col-span-1 md:row-span-1",
  },
];

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glass-card rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-primary/20 ${className}`}
      style={{
        background: `radial-gradient(300px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), hsl(217 91% 60% / 0.08), transparent 80%), hsl(222 30% 14% / 0.6)`,
      }}
    >
      {children}
    </div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">
            Projects & Case Studies
          </h2>
          <p className="text-muted-foreground mb-10">Featured work and explorations.</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <FadeIn key={i}>
              <SpotlightCard className="h-full cursor-pointer">
                <p.icon className="h-8 w-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
