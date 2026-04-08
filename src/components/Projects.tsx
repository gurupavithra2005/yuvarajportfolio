import { useScrollAnimation } from "./useScrollAnimation";
import { ExternalLink, Github, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Desi Agro Guide",
    description: "A web application that helps users with agriculture-related guidance and information.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://desi-agro-guide.lovable.app/",
    code: "#",
  },
  {
    title: "Offline Chessmate Game",
    description: "A chess game that works offline with smooth gameplay.",
    tech: ["JavaScript"],
    live: "https://offline-chessmate.lovable.app",
    code: "#",
    amazon: "https://www.amazon.com/dp/B0G71X3PT4/ref=aow_ads_s_1_1",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website to showcase my projects and skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Some of my recent work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-card border border-border p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 overflow-hidden group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                <span className="text-4xl font-bold text-primary/50 font-['Syne'] group-hover:scale-125 transition-transform duration-500">{project.title.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" asChild className="rounded-full text-xs shadow-lg shadow-primary/20">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild className="rounded-full text-xs border-border">
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> View Code
                  </a>
                </Button>
                {project.amazon && (
                  <Button size="sm" variant="outline" asChild className="rounded-full text-xs border-border">
                    <a href={project.amazon} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart size={14} /> Amazon
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
