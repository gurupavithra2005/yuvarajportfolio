import { useScrollAnimation } from "./useScrollAnimation";

const skills = [
  { name: "HTML", level: 90, color: "hsl(12, 77%, 52%)" },
  { name: "CSS", level: 85, color: "hsl(207, 90%, 54%)" },
  { name: "JavaScript", level: 80, color: "hsl(53, 93%, 54%)" },
  { name: "Git & GitHub", level: 75, color: "hsl(0, 0%, 45%)" },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Technologies I work with
        </p>

        <div className="grid gap-8">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    background: skill.color,
                    transitionDelay: `${i * 200}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
