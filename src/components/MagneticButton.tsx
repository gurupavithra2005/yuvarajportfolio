import { useRef, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
  ariaLabel?: string;
}

const MagneticButton = ({
  children,
  className,
  onClick,
  as = "button",
  href,
  target,
  rel,
  strength = 0.35,
  ariaLabel,
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  const commonProps = {
    ref: ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
    className: cn(
      "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-transform duration-300 will-change-transform",
      className
    ),
    "aria-label": ariaLabel,
  };

  if (as === "a") {
    return (
      <a {...commonProps} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return <button {...commonProps}>{children}</button>;
};

export default MagneticButton;
