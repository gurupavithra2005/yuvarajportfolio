import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import profileImg from "@/assets/yuvaraj-profile.jpeg";

const titles = ["Freelance Web Developer", "Frontend Specialist", "UI/UX Enthusiast"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(262_83%_58%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-40 -left-40 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute w-[400px] h-[400px] -bottom-20 -right-20 rounded-full bg-primary/8 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6 animate-fade-in-up">
            <Sparkles size={14} />
            Available for Work
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 animate-fade-in-up animation-delay-200">
            Hi There! 👋
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in-up animation-delay-200">
            I'm <span className="text-primary">Yuvaraj D.</span>
          </h2>
          <p className="text-xl md:text-2xl text-primary/80 mb-2 animate-fade-in-up animation-delay-200 h-8">
            {titles[titleIndex].substring(0, charIndex)}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>
          <p className="text-muted-foreground max-w-lg mb-8 animate-fade-in-up animation-delay-400">
            I build responsive and user-friendly websites and applications for clients. Crafting pixel-perfect digital experiences that bring ideas to life.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
            <Button size="lg" onClick={() => scrollTo("projects")} className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="rounded-full px-8 border-primary/30 hover:bg-primary/10">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Profile image with 3D decorative frame */}
        <div className="flex justify-center animate-fade-in-up animation-delay-400">
          <div className="relative group" style={{ perspective: "1000px" }}>
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-primary/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Decorative half-circle */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/50 to-transparent" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }} />
            {/* Profile image */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 transition-transform duration-500 group-hover:scale-105"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={profileImg}
                alt="Yuvaraj D"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating sparkle decorations */}
            <div className="absolute -top-2 -right-2 w-4 h-4 text-primary animate-pulse">✦</div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 text-primary/60 animate-pulse" style={{ animationDelay: "1s" }}>✦</div>
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
