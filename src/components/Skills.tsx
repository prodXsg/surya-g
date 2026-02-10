import { useEffect, useRef } from "react";

const corePM = ["Product Strategy", "B2B SaaS", "Roadmap Planning", "Market Research", "Agile", "RCA", "Wireframing", "Go-to-Market"];
const techStack = ["Figma", "SQL", "Excel", "SPSS", "Power BI", "API Basics", "LLM Familiarity"];

function FadeIn({ children }: { children: React.ReactNode }) {
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
  return <div ref={ref} className="fade-in-section">{children}</div>;
}

function Chip({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-default
        ${accent
          ? "bg-primary/10 text-primary border border-primary/25 hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(217_91%_60%/0.15)]"
          : "glass-card text-foreground hover:border-primary/20 hover:shadow-[0_0_15px_hsl(217_91%_60%/0.1)]"
        }`}
    >
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">Skills & Tools</h2>
          <p className="text-muted-foreground mb-10">Core competencies and technical proficiencies.</p>
        </FadeIn>

        <FadeIn>
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Core PM
            </h3>
            <div className="flex flex-wrap gap-2">
              {corePM.map((s) => <Chip key={s} label={s} accent />)}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => <Chip key={t} label={t} />)}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
