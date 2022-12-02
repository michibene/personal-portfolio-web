import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
    id: string;
    title: string;
}

export default function SectionHeader({ id, title }: SectionHeaderProps) {
    // Split header text into separate character div
    const headerSplit = new SplitType(".sectionHeader", {
        types: "chars",
        splitClass: "splitChar",
    });

    // Create array for each header section to apply the same effect with different scrollTriggers
    const headers = gsap.utils.toArray<HTMLElement>(".sectionHeader");

    headers.forEach((header) => {
        gsap.to(header.querySelectorAll(".splitChar"), {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.3,
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
                end: "bottom 10%",
                scrub: false,
            },
        });
    });

    return (
        <h1 id={id} className="mb-16 md:mb-24 pt-16 md:pt-14 sectionHeader ">
            {title}
        </h1>
    );
}
