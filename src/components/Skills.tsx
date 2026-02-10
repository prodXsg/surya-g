import { useEffect, useRef } from "react";

const pmSkills = [
  "Product Strategy",
  "B2B SaaS",
  "Roadmap Planning",
  "Market Research",
  "Agile",
  "RCA",
  "Wireframing",
  "Go-to-Market",
];

const techTools = [
  "Figma",
  "Excel",
  "SPSS",
  "Power BI",
  "SQL",
  "API Basics",
  "LLM Familiarity",
];

function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="fade-in-section">{children}</div>;
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground mb-2">Skills & Tools</h2>
          <p className="text-muted-foreground mb-10">
            Core competencies and technical proficiencies.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Product Management
            </h3>
            <div className="flex flex-wrap gap-2">
              {pmSkills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Technical Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {techTools.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 text-sm font-medium rounded-full bg-card text-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
