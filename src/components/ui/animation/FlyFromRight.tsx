import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface FlyFromRightProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

export default function FlyFromRight({ children, className }: FlyFromRightProps) {
    let componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(componentRef.current, {
                opacity: 0,
                x: 400,
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: "top 90%",
                    end: "top 0%",
                },
            });
        }, [componentRef]);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={componentRef} className={`${className ? className : ""}`}>
            {children}
        </div>
    );
}
