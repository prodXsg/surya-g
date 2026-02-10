import { useEffect, useRef } from "react";

interface Role {
  title: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

const roles: Role[] = [
  {
    title: "Product and Growth Strategist",
    company: "VETiNSTANT",
    location: "Bengaluru",
    date: "Apr 2025 – Jan 2026",
    points: [
      "Onboarded 3 clinics (projected ARR ₹15–25 lakhs) and accelerated P.A.W.S. adoption by <hl>70%</hl> in the first 4 months by optimizing user journeys.",
      "Reduced clinic implementation cycle time by <hl>40%</hl> (25 → 15 days) by developing training resources and standardizing processes.",
      "Partnered with engineering to deliver AI-powered ASR & NLP features that automated clinical documentation and reduced provider workload by <hl>33%</hl>.",
      "Conducted on-site validation and beta testing to ensure alignment with operational workflows.",
      "Proactively managed product backlog, addressing AI hallucinations and <hl>20+</hl> critical issues.",
      "Executed end-to-end clinic data migration with zero data loss.",
    ],
  },
  {
    title: "Product Manager",
    company: "BIZITS Venture Mentors",
    location: "Remote",
    date: "Nov 2023 – Jan 2025",
    points: [
      'Co-managed design of "eTrustScore," a SaaS-based AI/ML fraud detection platform, reducing fraud by <hl>80%</hl>.',
      "Conducted in-depth market research and competitor analysis in the MENA region to identify scalability areas.",
      "Managed Agile Scrum processes, overseeing sprint cycles from planning to delivery.",
      "Partnered with cross-functional teams (marketing/design) to streamline growth initiatives.",
      "Validated product-market fit through POCs with <hl>5</hl> potential clients.",
    ],
  },
  {
    title: "Analyst (Market Intelligence)",
    company: "Course5i",
    location: "Bengaluru",
    date: "Aug 2022 – Feb 2023",
    points: [
      "Conducted market research across <hl>15+</hl> countries and analyzed <hl>700+</hl> competitor insights for retail and telecom sectors.",
      "Enabled strategic decision-making for a global e-commerce leader by transforming raw data into high-signal insights.",
      "Delivered APAC & MENA market opportunity assessments shaping brand awareness initiatives.",
    ],
  },
  {
    title: "Business Development Associate",
    company: "ScrapQ",
    location: "Hyderabad",
    date: "May 2019 – Dec 2020",
    points: [
      "Conducted market and competitor research to identify user needs.",
      "Assisted in creating content for social media channels to maintain brand visibility.",
    ],
  },
];

function highlightMetrics(text: string) {
  const parts = text.split(/<hl>(.*?)<\/hl>/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-primary font-bold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground mb-2">Work Experience</h2>
          <p className="text-muted-foreground mb-12">
            A timeline of my professional journey across industries.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {roles.map((role, idx) => (
              <FadeIn key={idx}>
                <div className="relative pl-12 md:pl-16">
                  {/* Dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-semibold text-foreground">
                        {role.title}{" "}
                        <span className="text-muted-foreground font-normal">
                          @ {role.company}
                        </span>
                      </h3>
                      <span className="text-xs text-muted-foreground mt-1 sm:mt-0 whitespace-nowrap">
                        {role.date}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">{role.location}</p>

                    <ul className="space-y-2">
                      {role.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1 shrink-0">•</span>
                          <span>{highlightMetrics(point)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
