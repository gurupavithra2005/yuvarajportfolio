import { useScrollAnimation } from "./useScrollAnimation";
import profileImg from "@/assets/yuvaraj-profile.jpeg";

const timeline = [
  { year: "2020", title: "Learning Programming", desc: "Started with fundamentals of code." },
  { year: "2021", title: "Full Stack Development", desc: "Dove into modern web frameworks." },
  { year: "2023", title: "Built AI Projects", desc: "Combined AI with real-world use cases." },
  { year: "2024", title: "Hackathons", desc: "Competed and shipped under pressure." },
  { year: "2026", title: "AI Products", desc: "Currently building AI products at scale." },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-28 px-6 relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            The person behind <span className="gold-text">the code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className="relative group" style={{ perspective: "1200px" }}>
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden glass-strong transition-transform duration-700 group-hover:scale-[1.02]">
                <img
                  src={profileImg}
                  alt="Yuvaraj D"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-3 -right-3 glass-strong rounded-2xl px-4 py-2 text-xs font-mono">
                <span className="gold-text font-bold">yuvaraj.dev</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6">Hello!</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm <span className="text-foreground font-semibold">Yuvaraj D</span>, a passionate
              AI Developer and Full Stack Developer from India.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I enjoy building intelligent applications that solve real-world problems. My
              interests include Artificial Intelligence, Web Development, Mobile Apps,
              Automation, and Hackathons.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in creating clean, scalable, user-friendly products that combine
              beautiful design with powerful functionality.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-primary text-center mb-10">
            Journey
          </p>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary gold-glow -translate-x-1/2 mt-2" />
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass rounded-2xl p-5 gradient-border hover-lift inline-block text-left">
                      <div className="text-xs font-mono text-primary mb-1">{t.year}</div>
                      <h4 className="font-semibold mb-1">{t.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
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
