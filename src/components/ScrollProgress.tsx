import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent">
      <div
        className="h-full origin-left transition-transform duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, hsl(45 100% 52%), hsl(45 100% 65%))",
          boxShadow: "0 0 12px hsl(45 100% 52% / 0.6)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
