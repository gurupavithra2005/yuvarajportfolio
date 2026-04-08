import { useScrollAnimation } from "./useScrollAnimation";
import { Globe, Layout, Bug, RefreshCw } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Building responsive, modern websites from scratch using the latest web technologies." },
  { icon: Layout, title: "Landing Page Design", desc: "Creating high-converting landing pages that capture attention and drive results." },
  { icon: Bug, title: "Bug Fixing", desc: "Identifying and resolving issues in existing websites to ensure smooth functionality." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Transforming outdated websites into modern, user-friendly experiences." },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          What I can do for you
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group rounded-2xl bg-card border border-border p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
