import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface FadeInOpacityProps {
  children: ReactNode;
}

export default function FadeInOpacity({ children }: FadeInOpacityProps) {
  let componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        componentRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 80%",
            end: "bottom 0%",
          },
        },
      );
    }, [componentRef]);
    return () => ctx.revert();
  }, []);

  return <div ref={componentRef}>{children}</div>;
}
