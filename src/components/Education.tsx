import { useEffect, useRef } from "react";
import { GraduationCap, Award, FlaskConical } from "lucide-react";

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

const education = [
  {
    icon: GraduationCap,
    degree: "MBA",
    school: "Alliance University",
    detail: "Strategic Management & Marketing",
  },
  {
    icon: GraduationCap,
    degree: "BBA",
    school: "GITAM University",
    detail: "Business Administration",
  },
  {
    icon: Award,
    degree: "AI Product Management Certification",
    school: "HelloPM",
    detail: "AI/ML Product Strategy",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground mb-2">Education & Projects</h2>
          <p className="text-muted-foreground mb-10">Academic background and key research.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {education.map((e, i) => (
            <FadeIn key={i}>
              <div className="bg-card border border-border rounded-xl p-6 h-full">
                <e.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bg-primary/5 border border-primary/15 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <FlaskConical className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Key Project: Blockchain in Performance Appraisal System
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Demonstrated reduced operational costs and enhanced transparency
                  through blockchain-based performance evaluation frameworks.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
