import { useEffect, useRef, useCallback } from "react";
import { GraduationCap, Award, FlaskConical } from "lucide-react";

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
      className={`glass-card rounded-xl p-6 relative overflow-hidden group ${className}`}
      style={{
        background: `radial-gradient(200px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), hsl(217 91% 60% / 0.06), transparent 80%), hsl(222 30% 14% / 0.6)`,
      }}
    >
      {children}
    </div>
  );
}

const education = [
  { icon: GraduationCap, degree: "MBA", school: "Alliance University", detail: "Strategic Management & Marketing" },
  { icon: GraduationCap, degree: "BBA", school: "GITAM University", detail: "Business Administration" },
  { icon: Award, degree: "AI PM Certification", school: "HelloPM", detail: "AI/ML Product Strategy" },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-display font-bold text-foreground mb-2">Education & Projects</h2>
          <p className="text-muted-foreground mb-10">Academic background and key research.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {education.map((e, i) => (
            <FadeIn key={i}>
              <SpotlightCard className="h-full">
                <e.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground text-sm">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.detail}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <SpotlightCard className="border-primary/20">
            <div className="flex items-start gap-3">
              <FlaskConical className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  Key Project: Blockchain in Performance Appraisal System
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Demonstrated reduced operational costs and enhanced transparency
                  through blockchain-based performance evaluation frameworks.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </section>
  );
}
