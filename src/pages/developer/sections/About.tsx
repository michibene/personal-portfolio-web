import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SectionFullHeight from "ui/section/SectionFullHeight";
import SectionHeader from "ui/section/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1.1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 80%",
                        end: "bottom 0%",
                    },
                }
            );
        }, ref);
        return () => ctx.revert();
    }, []);

    return (
        <SectionFullHeight classNameProps="mt-20 md:mt-28">
            <SectionHeader id="about" title="About" />

            <div className="grow flex items-center">
                <div ref={ref} className="md:ml-[25vw] ">
                    <p className="bigger-thin">I'm a 31 year old junior developer,</p>
                    <p className="bigger-thin mb-16 md:mb-28">
                        a perfectionist and a self-taught designer. Living in Košice.
                    </p>
                    <p className="text-lg mb-6">
                        As a landscape architect I am close to design and 3D modeling. This job taught me how to handle
                        multiple tasks and adhere to strict deadlines. I really like to learn new things and I like
                        graphic design.
                    </p>
                    <p className="text-lg">
                        But I've always been curious about how feature-rich web apps work. This curiosity and eagerness
                        resulted in the completion of the junior programmer course - mainly JAVA for start and JS in the
                        project phase (backend & frontend). I would like to continue this journey with my first
                        full-stack developer job with the opportunity to learn the basics of UX.
                    </p>
                </div>
            </div>
        </SectionFullHeight>
    );
}
