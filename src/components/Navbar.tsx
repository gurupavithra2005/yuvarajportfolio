import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 120) {
          setActive(links[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("Home")} className="text-xl font-bold font-['Syne'] text-primary">
          YD.
        </button>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`text-sm transition-colors hover:text-primary ${active === l ? "text-primary" : "text-muted-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`block w-full text-left px-6 py-3 text-sm transition-colors hover:text-primary ${active === l ? "text-primary" : "text-muted-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
