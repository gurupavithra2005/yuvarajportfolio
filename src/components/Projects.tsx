import { useScrollAnimation } from "./useScrollAnimation";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "AI Disaster Response System",
    desc: "Smart emergency reporting with AI, hospital bed availability, citizen reporting, and real-time live alerts.",
    tech: ["React", "Supabase", "Gemini AI"],
    live: "#",
    code: "#",
  },
  {
    n: "02",
    title: "AI Crop Advisory",
    desc: "AI-powered farming assistant with weather prediction, disease detection, and market price forecasting.",
    tech: ["React", "Python", "ML"],
    live: "https://desi-agro-guide.lovable.app/",
    code: "#",
  },
  {
    n: "03",
    title: "Question Bank Generator",
    desc: "Generates university question papers using AI, learning from previous years of exam data.",
    tech: ["Next.js", "OpenAI", "Node.js"],
    live: "#",
    code: "#",
  },
  {
    n: "04",
    title: "Offline Music Player",
    desc: "Beautiful offline music player with real-time lyrics support and smooth playback.",
    tech: ["React Native", "JS"],
    live: "#",
    code: "#",
  },
  {
    n: "05",
    title: "Chess Mate Offline",
    desc: "A polished offline chess application with a modern minimal UI and smooth gameplay.",
    tech: ["JavaScript", "Canvas"],
    live: "https://offline-chessmate.lovable.app",
    code: "#",
  },
  {
    n: "06",
    title: "PDF Reader",
    desc: "Offline PDF reader with bookmarking, night mode, and buttery-smooth scrolling.",
    tech: ["Android", "Java"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gold-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of AI, full-stack, and native applications built to solve real problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.n}
              className="group relative glass rounded-3xl p-8 hover-lift gradient-border overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex items-start justify-between mb-6">
                <span className="text-xs font-mono text-primary/70 tracking-widest">
                  {p.n} / {String(projects.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View code"
                    className="w-9 h-9 rounded-full glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="w-9 h-9 rounded-full glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <h3 className="relative text-2xl md:text-3xl font-bold mb-3 group-hover:gold-text transition-colors">
                {p.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed mb-6">
                {p.desc}
              </p>
              <div className="relative flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-primary/20 text-primary/80 bg-primary/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
