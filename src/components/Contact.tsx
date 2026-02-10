import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Ready to build scalable products?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">Let's chat.</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:surya7824@gmail.com">
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://linkedin.com/in/surya-gummalla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>+91 9676701167</span>
        </div>
      </div>
    </section>
  );
}
