import CarRotationSequence from "components/carAnimation/CarRotationSequence";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SectionFullHeight from "ui/section/SectionFullHeight";
import SectionHeader from "ui/section/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function Design3D() {
    const scrollSectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to("#design-3D", {
                scrollTrigger: {
                    trigger: scrollSectionRef.current,
                    start: "top 0%",
                    end: () => "bottom+=100% 0%",
                    pin: true,
                },
            });
        }, scrollSectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <SectionFullHeight>
            <div>
                <div ref={scrollSectionRef}>
                    <SectionHeader id="design-3D" title="3D Design" />

                    <div className="flex flex-col h-[70vh] md:h-[60vh] md:flex-row md:gap-16 justify-around items-center">
                        <p className="bigger-thin md:w-1/3 text-center md:text-left md:pb-16 lg:pb-28">
                            Job skill that has become a hobby.
                        </p>
                        <CarRotationSequence />
                    </div>
                </div>
            </div>

            <div className="mt-20 mb-32 md:mt-36 md:mb-40">
                <p className="text-left md:text-center">
                    As a part of landscape architecture, we worked on 3D models of gardens and parks on a daily basis
                    (see some visualizations in the #landscapeArchitect section). This has become my hobby. Later, I've
                    been actively learning the basics of animation in my spare time. Here is a short animation I've made
                    in Blender.
                </p>
            </div>

            <div className="w-full md:w-2/3 mx-auto">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DJA4DQQMRg4"
                        title="YouTube video player - Short 3D animation"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </SectionFullHeight>
    );
}
