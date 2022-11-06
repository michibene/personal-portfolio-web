import { gsap } from "gsap";
import SplitType from "split-type";

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

    if (document.querySelector(".splitChar")) {
        gsap.to(".splitChar", {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.3,
        });
    }

    return (
        <h1 id={id} className="mb-16 md:mb-24 sectionHeader">
            {title}
        </h1>
    );
}
