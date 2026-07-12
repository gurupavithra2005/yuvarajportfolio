import { useScrollAnimation } from "./useScrollAnimation";
import { Trophy, Award, Brain, GitBranch, Lightbulb } from "lucide-react";

const items = [
  { icon: Trophy, title: "Hackathon Participant", desc: "Multiple hackathons across AI & web tracks." },
  { icon: Award, title: "NPTEL Cloud Computing", desc: "Silver-tier elite certification." },
  { icon: Brain, title: "AI Projects", desc: "Shipped several AI-powered production apps." },
  { icon: GitBranch, title: "Open Source", desc: "Active contributor & tinkerer." },
  { icon: Lightbulb, title: "Problem Solver", desc: "Turning real problems into shipped software." },
];

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="achievements" className="py-28 px-6 relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Milestones</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements & <span className="gold-text">Highlights</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group glass rounded-2xl p-6 text-center hover-lift gradient-border"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:gold-glow transition-shadow">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
