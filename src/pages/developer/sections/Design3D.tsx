import SectionFullHeight from "ui/section/SectionFullHeight";
import SectionHeader from "ui/section/SectionHeader";
import CarRotationSequence from "components/carAnimation/CarRotationSequence";

export default function Design3D() {
    return (
        <SectionFullHeight>
            <SectionHeader id="3d-design" title="3D Design" />

            <div>
                <div className="flex flex-col md:flex-row gap-24 md:gap-16 justify-between items-center py-12 md:py-28">
                    <p className="bigger-thin md:w-1/3 text-center md:text-left">Job skill that has become a hobby.</p>

                    <CarRotationSequence />
                </div>

                <div className="mt-48 mb-28 md:my-40">
                    <p className="text-lg text-left md:text-center">
                        As a part of landscape architecture, we worked on 3D models of gardens and parks on a daily
                        basis (see some visualizations in the #landscapeArchitect section). This has become my hobby.
                        Later, I've been actively learning the basics of animation in my spare time. Here is a short
                        animation made in Blender.
                    </p>
                </div>

                <div className="lg:w-2/3 mx-auto">
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
            </div>
        </SectionFullHeight>
    );
}
