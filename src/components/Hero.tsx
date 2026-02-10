import { Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Avatar placeholder */}
        <div className="w-28 h-28 rounded-full bg-secondary border-4 border-primary/20 mx-auto mb-8 flex items-center justify-center text-3xl font-bold text-primary">
          SG
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
          Driving Growth across{" "}
          <span className="text-primary">SaaS</span>,{" "}
          <span className="text-primary">FinTech</span>, and{" "}
          <span className="text-primary">HealthTech</span>.
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Product Manager and Strategy Professional with 2+ years of experience.
          I align technical execution with business strategy to accelerate
          adoption and deliver measurable value.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/surya-gummalla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="mailto:surya7824@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
