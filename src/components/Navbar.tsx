import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = ["Home", "Tech", "Projects", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 140) {
          setActive(links[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 transition-all duration-500 ${
          scrolled ? "mt-2" : "mt-0"
        }`}
      >
        <div
          className={`flex items-center justify-between px-5 h-14 rounded-full transition-all duration-500 ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <button
            onClick={() => scrollTo("Home")}
            className="text-lg font-bold tracking-tight"
            aria-label="Home"
          >
            <span className="gold-text">Yuvaraj</span>
            <span className="text-foreground">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`relative px-4 py-1.5 text-sm rounded-full transition-all ${
                  active === l
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === l && (
                  <span className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20" />
                )}
                <span className="relative">{l}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl overflow-hidden">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`block w-full text-left px-6 py-3 text-sm transition-colors ${
                  active === l ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
