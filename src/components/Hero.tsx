import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(262_83%_58%/0.15),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6 animate-fade-in-up">
            <Sparkles size={14} />
            Available for Work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up animation-delay-200">
            Hi, I'm{" "}
            <span className="text-primary">Yuvaraj D.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in-up animation-delay-200">
            Freelance Web Developer
          </p>
          <p className="text-muted-foreground max-w-lg mb-8 animate-fade-in-up animation-delay-400">
            I build responsive and user-friendly websites and applications for clients. Crafting pixel-perfect digital experiences that bring ideas to life.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
            <Button size="lg" onClick={() => scrollTo("projects")} className="rounded-full px-8">
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="rounded-full px-8 border-primary/30 hover:bg-primary/10">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Code card decoration */}
        <div className="hidden lg:flex justify-center animate-fade-in-up animation-delay-400">
          <div className="relative w-80 h-72 rounded-2xl bg-card border border-border p-6 shadow-xl" style={{ animation: "float 6s ease-in-out infinite" }}>
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <pre className="text-xs text-muted-foreground font-mono leading-relaxed">
              <code>
{`const developer = {
  name: "Yuvaraj D",
  role: "Web Developer",
  skills: [
    "HTML", "CSS",
    "JavaScript", "React"
  ],
  passion: "Building
    awesome websites"
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={() => scrollTo("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
