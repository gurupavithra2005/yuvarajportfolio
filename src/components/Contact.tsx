import { useState } from "react";
import { useScrollAnimation } from "./useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:www.yuvaraj933@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your mail app…", description: "I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's build something <span className="gold-text">extraordinary</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project, idea, or opportunity? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-3xl p-8 gradient-border">
            <h3 className="text-xl font-semibold mb-6">Reach me directly</h3>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:www.yuvaraj933@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-border hover:border-primary/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="text-sm group-hover:text-primary transition-colors">
                    www.yuvaraj933@gmail.com
                  </div>
                </div>
              </a>
              <a
                href="tel:+919043269455"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-border hover:border-primary/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="text-sm group-hover:text-primary transition-colors">
                    +91 9043269455
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                  <div className="text-sm">Chennai, India</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
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
                  className="w-11 h-11 rounded-full glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 gradient-border space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Name
              </label>
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-background/40 border-border rounded-xl h-12"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Email
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-background/40 border-border rounded-xl h-12"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Message
              </label>
              <Textarea
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="bg-background/40 border-border rounded-xl"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xl h-12 bg-primary text-primary-foreground hover:bg-primary/90 gold-glow font-semibold"
            >
              <Send size={16} /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
