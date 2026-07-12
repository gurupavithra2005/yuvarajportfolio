import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative py-12 px-6 border-t border-border/50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-sm text-muted-foreground flex items-center gap-2">
        Made with <Heart size={14} className="text-primary fill-primary animate-pulse" /> by{" "}
        <span className="gold-text font-semibold">Yuvaraj D</span>
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
          { icon: Mail, href: "mailto:www.yuvaraj933@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Yuvaraj D. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
