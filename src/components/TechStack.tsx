import { useScrollAnimation } from "./useScrollAnimation";
import { Code2, Layout, Server, Sparkles, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "Supabase", "Firebase"],
  },
  {
    icon: Sparkles,
    title: "AI",
    items: ["OpenAI", "Gemini AI", "Computer Vision", "Prompt Engineering", "Machine Learning"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Lovable", "Figma", "Android Studio"],
  },
];

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="tech" className="py-28 px-6 relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools I <span className="gold-text">craft</span> with
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A curated toolkit spanning AI, full-stack web, and everything in between.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(({ icon: Icon, title, items }, gi) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-6 hover-lift gradient-border overflow-hidden"
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="relative flex flex-wrap gap-2">
                {items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-3 py-1.5 rounded-full glass border border-border/50 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all cursor-default"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
