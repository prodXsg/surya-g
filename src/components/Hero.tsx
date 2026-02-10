import { useState, useEffect } from "react";
import { ArrowDown, Mail } from "lucide-react";

const roles = ["SaaS", "FinTech", "HealthTech"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Product Manager & Strategy Professional
        </p>

        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Hi there, I am{" "}
          <span className="gradient-text">Surya</span>.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Product Manager with 2+ years of experience across SaaS, FinTech, and HealthTech, and 4+ years of overall professional experience spanning product strategy, market intelligence, and business operations.
        </p>

        <div className="h-8 mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <span className="text-lg font-display font-medium text-primary">
            {displayed}
          </span>
          <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-glow-pulse align-middle" />
        </div>

        <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#experience"
            className="glow-button text-primary-foreground font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2"
          >
            <ArrowDown className="h-4 w-4" />
            View Work
          </a>
          <a
            href="#contact"
            className="glow-outline bg-transparent text-foreground font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
