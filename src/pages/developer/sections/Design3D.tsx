import SectionFullHeight from "ui/section/SectionFullHeight";
import SectionHeader from "ui/section/SectionHeader";
import carRenderImg from "images/BMW_render.png";

export default function Design3D() {
    return (
        <SectionFullHeight>
            <SectionHeader title="3D Design" />

            <div className="grow flex flex-col md:flex-row md:gap-16 justify-evenly md:justify-between items-center">
                <p className="bigger-thin md:w-1/3 text-center md:text-left">Job skill that has become a hobby.</p>

                <div className="px-4 md:w-2/3">
                    <img src={carRenderImg} alt="3D car model"></img>
                </div>
            </div>
        </SectionFullHeight>
    );
}
