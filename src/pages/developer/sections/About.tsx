import SectionFullHeight from "ui/section/SectionFullHeight";
import SectionHeader from "ui/section/SectionHeader";

export default function About() {
    return (
        <SectionFullHeight>
            <SectionHeader title="About" />

            <div className="grow flex items-center">
                <div className="md:ml-[25vw]">
                    <p className="bigger-thin">I'm a 31 year old junior developer,</p>
                    <p className="bigger-thin mb-16 md:mb-28">a perfectionist and a self-taught designer. Living in Košice.</p>
                    <p className="text-lg">
                        As a landscape architect I am close to design and 3D modeling. This job taught me how to handle
                        multiple tasks and adhere to strict deadlines. But I've always been curious about how
                        feature-rich web apps work. I really like to learn new things and I like graphic design. This
                        curiosity and eagerness resulted in the completion of the junior programmer course - mainly JAVA
                        for start and JS in the project phase (backend & frontend). I would like to continue this
                        journey with my first full-stack developer job with the opportunity to learn the basics of UX.
                    </p>
                </div>
            </div>
        </SectionFullHeight>
    );
}
