import { ArrowDown, Github, Linkedin, Mail, Globe, Download } from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";

const roles = ["AI Developer", "Full Stack Developer", "Software Engineer"];

const Hero = () => {
  const [i, setI] = useState(0);
  const [c, setC] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    let t: ReturnType<typeof setTimeout>;
    if (!del && c < current.length) t = setTimeout(() => setC((v) => v + 1), 70);
    else if (!del && c === current.length) t = setTimeout(() => setDel(true), 1800);
    else if (del && c > 0) t = setTimeout(() => setC((v) => v - 1), 35);
    else {
      setDel(false);
      setI((v) => (v + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [c, del, i]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-6"
    >
      {/* ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,hsl(45_100%_52%/0.10),transparent_55%)]" />
      <div className="absolute w-[600px] h-[600px] -top-40 left-1/2 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-xs uppercase tracking-[0.25em] mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="gold-text font-semibold">Open to Work</span>
        </div>

        {/* name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-in-up animation-delay-200 text-balance">
          <span className="block">Yuvaraj</span>
          <span className="block gold-text animate-gradient bg-gradient-to-r from-[hsl(45_100%_45%)] via-[hsl(45_100%_65%)] to-[hsl(45_100%_45%)]">
            D.
          </span>
        </h1>

        {/* typing role */}
        <div className="font-mono text-base md:text-xl mb-6 h-8 animate-fade-in-up animation-delay-400 text-muted-foreground">
          <span className="text-primary">{roles[i].substring(0, c)}</span>
          <span className="inline-block w-[2px] h-5 bg-primary ml-1 align-middle animate-pulse" />
        </div>

        {/* role list */}
        <p className="text-sm md:text-base tracking-widest uppercase text-muted-foreground/70 mb-8 animate-fade-in-up animation-delay-400">
          AI Developer <span className="text-primary/60">•</span> Full Stack Developer{" "}
          <span className="text-primary/60">•</span> Software Engineer
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-600 text-balance">
          I build AI-powered applications, modern web experiences, hackathon-winning
          solutions, and scalable software that solve real-world problems.
        </p>

        {/* buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
          <MagneticButton
            onClick={() => scrollTo("projects")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow shadow-lg font-semibold"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="glass border border-primary/30 text-foreground hover:border-primary hover:text-primary"
          >
            <Download size={16} /> Resume
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
            className="glass border border-border text-foreground hover:border-primary/50"
          >
            Contact Me
          </MagneticButton>
        </div>

        {/* socials */}
        <div className="flex justify-center gap-3 animate-fade-in-up animation-delay-800">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:www.yuvaraj933@gmail.com", label: "Email" },
            { icon: Globe, href: "https://yuvarajportfolio.lovable.app", label: "Portfolio" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative w-11 h-11 rounded-full glass border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:gold-glow"
            >
              <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo("tech")}
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/60 hover:text-primary animate-bounce"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
