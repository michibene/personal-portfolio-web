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
            gsap.to(".trigger-container", {
                scrollTrigger: {
                    trigger: ".trigger-container",
                    start: "top top",
                    end: "bottom+=100% top",
                    scrub: false,
                    pin: true,
                },
            });
        }, scrollSectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <SectionFullHeight>
            <div ref={scrollSectionRef}>
                <div className="trigger-container">
                    <SectionHeader id="design-3D" title="3D Design" />

                    <div className="pinned-text flex flex-col md:flex-row gap-24 md:gap-16 justify-between items-center py-16 md:py-14">
                        <p className="bigger-thin md:w-1/3 text-center md:text-left">
                            Job skill that has become a hobby.
                        </p>
                        <CarRotationSequence />
                    </div>
                </div>
            </div>

            <div className="mt-48 mb-28 md:my-40">
                <p className="text-lg text-left md:text-center">
                    As a part of landscape architecture, we worked on 3D models of gardens and parks on a daily basis
                    (see some visualizations in the #landscapeArchitect section). This has become my hobby. Later, I've
                    been actively learning the basics of animation in my spare time. Here is a short animation I've made
                    in Blender.
                </p>
            </div>

            <div className="w-full md:w-2/3 mx-auto">
                <div className="aspect-w-16 aspect-h-9">
                    {/* <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DJA4DQQMRg4"
                        title="YouTube video player - Short 3D animation"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe> */}
                </div>
            </div>
        </SectionFullHeight>
    );
}
