import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
          Let's build something <span className="gradient-text">scalable</span>.
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Ready to create impact? Let's chat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="mailto:surya7824@gmail.com"
            className="glow-button text-primary-foreground font-medium px-8 py-3 rounded-lg inline-flex items-center gap-2 text-sm"
          >
            <Mail className="h-5 w-5" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/surya-gummalla"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-outline bg-transparent text-foreground font-medium px-8 py-3 rounded-lg inline-flex items-center gap-2 text-sm"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>

        <p className="text-sm text-muted-foreground">+91 9676701167</p>
      </div>
    </section>
  );
}
