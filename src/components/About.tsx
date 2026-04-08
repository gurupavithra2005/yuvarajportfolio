import { useScrollAnimation } from "./useScrollAnimation";
import { Code, Palette, Zap } from "lucide-react";
import profileImg from "@/assets/yuvaraj-profile.jpeg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Get to know me better
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center" style={{ perspective: "800px" }}>
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-primary/20 shadow-xl transition-transform duration-500 group-hover:rotate-y-3">
                <img src={profileImg} alt="Yuvaraj D" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate freelance web developer with a love for crafting clean, responsive, and user-friendly websites. I specialize in turning ideas into functional digital products using modern web technologies including HTML, CSS, JavaScript, and React.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether it's a landing page, a full web application, or a redesign of an existing site, I focus on delivering quality work that exceeds expectations. I'm always eager to learn new technologies and improve my craft.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Code, label: "Clean Code", value: "Quality First" },
                { icon: Palette, label: "Modern Design", value: "Pixel Perfect" },
                { icon: Zap, label: "Fast Delivery", value: "On Time" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <Icon className="mx-auto mb-2 text-primary" size={24} />
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
