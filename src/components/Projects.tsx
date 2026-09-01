import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { ArrowUpRight, Github, FileText, Sparkles, Languages, MessageSquareText, Scan, Scissors, Merge, Image as ImageIcon, Library, Bookmark, X } from "lucide-react";

type Project = {
  n: string;
  title: string;
  desc: string;
  tech: string[];
  live: string;
  code: string;
  details?: boolean;
};

const projects: Project[] = [
  {
    n: "01",
    title: "PDF Master Pro",
    desc: "AI-powered PDF reader & productivity app with summarization, Q&A, translation, scan, split, merge, and image-to-PDF tools.",
    tech: ["React", "TypeScript", "Supabase", "AI", "PDF"],
    live: "https://pdfmasterproai.lovable.app",
    code: "#",
    details: true,
  },
  {
    n: "02",
    title: "AI Disaster Response System",
    desc: "Smart emergency reporting with AI, hospital bed availability, citizen reporting, and real-time live alerts.",
    tech: ["React", "Supabase", "Gemini AI"],
    live: "#",
    code: "#",
  },
  {
    n: "03",
    title: "AI Crop Advisory",
    desc: "AI-powered farming assistant with weather prediction, disease detection, and market price forecasting.",
    tech: ["React", "Python", "ML"],
    live: "https://desi-agro-guide.lovable.app/",
    code: "#",
  },
  {
    n: "04",
    title: "Question Bank Generator",
    desc: "Generates university question papers using AI, learning from previous years of exam data.",
    tech: ["Next.js", "OpenAI", "Node.js"],
    live: "#",
    code: "#",
  },
  {
    n: "05",
    title: "Offline Music Player",
    desc: "Beautiful offline music player with real-time lyrics support and smooth playback.",
    tech: ["React Native", "JS"],
    live: "#",
    code: "#",
  },
  {
    n: "06",
    title: "Chess Mate Offline",
    desc: "A polished offline chess application with a modern minimal UI and smooth gameplay.",
    tech: ["JavaScript", "Canvas"],
    live: "https://offline-chessmate.lovable.app",
    code: "#",
  },
  {
    n: "07",
    title: "PDF Reader",
    desc: "Offline PDF reader with bookmarking, night mode, and buttery-smooth scrolling.",
    tech: ["Android", "Java"],
    live: "#",
    code: "#",
  },
];

const aiFeatures = [
  { icon: FileText, label: "PDF Summarization" },
  { icon: MessageSquareText, label: "PDF Q&A" },
  { icon: Sparkles, label: "Document Understanding" },
  { icon: Languages, label: "Translation Assistance" },
];

const tools = [
  { icon: Scan, label: "Scan" },
  { icon: Scissors, label: "Split" },
  { icon: Merge, label: "Merge" },
  { icon: ImageIcon, label: "Image → PDF" },
  { icon: Library, label: "Library" },
  { icon: Bookmark, label: "Bookmarks" },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showDetails, setShowDetails] = useState(false);

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

              {p.details && (
                <div className="relative flex flex-wrap gap-3 mt-6">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all gold-glow"
                  >
                    Live Demo <ArrowUpRight size={15} />
                  </a>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/30 text-sm font-semibold text-primary hover:border-primary/60 transition-all"
                  >
                    View Details
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="glass rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 gradient-border"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="PDF Master Pro details"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <FileText size={20} />
                </div>
                <h3 className="text-2xl font-bold gold-text">PDF Master Pro</h3>
              </div>
              <button
                onClick={() => setShowDetails(false)}
                aria-label="Close details"
                className="w-9 h-9 rounded-full glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              PDF Master Pro is a modern AI-powered PDF reader and productivity application designed for students, professionals, and researchers — combining powerful PDF management tools with AI document understanding in a clean, responsive interface.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              <span className="text-foreground font-semibold">Problem: </span>
              Traditional PDF readers only offer viewing and basic file operations, forcing users to juggle separate tools for summarization, translation, and document management.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              <span className="text-foreground font-semibold">Solution: </span>
              PDF Master Pro unifies reading, management, productivity tools, and AI intelligence into one offline-first application.
            </p>

            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">AI Capabilities</h4>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {aiFeatures.map((f) => (
                <div key={f.label} className="glass rounded-2xl p-4 flex items-center gap-3 border border-border">
                  <f.icon size={16} className="text-primary shrink-0" />
                  <span className="text-xs font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">PDF Productivity Tools</h4>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {tools.map((t) => (
                <div key={t.label} className="glass rounded-2xl p-3 flex flex-col items-center gap-2 border border-border text-center">
                  <t.icon size={16} className="text-primary" />
                  <span className="text-[11px] font-medium">{t.label}</span>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "TypeScript", "Tailwind CSS", "Supabase", "AI APIs", "PDF Processing"].map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-primary/20 text-primary/80 bg-primary/5">
                  {t}
                </span>
              ))}
            </div>

            <a
              href="https://pdfmasterproai.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all gold-glow"
            >
              Open PDF Master Pro <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
