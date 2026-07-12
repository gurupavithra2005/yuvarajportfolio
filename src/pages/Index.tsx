import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Particles count={45} />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <Projects />
          <Achievements />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>

      <BackToTop />
    </div>
  );
};

export default Index;
