import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Yuvaraj D. All rights reserved.
      </p>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="mailto:www.yuvaraj933@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail size={14} /> www.yuvaraj933@gmail.com
        </a>
        <a href="tel:+919043269455" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone size={14} /> +91 9043269455
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
