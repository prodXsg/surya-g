import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Surya Gummalla. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
