import Canvas3D from "components/character3D/Canvas3D";
import DeveloperSections from "developer/sections/index";
import characterImg from "images/02_Self_3D_Character_TELO_Front.png";
import Navigation from "navigation/Navigation";
import { useEffect } from "react";
import { scrollTriggerRefreshAction } from "utilities/scrollTriggerRefresh";

export default function LandingPage() {
    useEffect(() => {
        // Refresh position of car animation start point after preloading images of portfolio works
        scrollTriggerRefreshAction();
    }, []);

    return (
        <div className="max-w-7xl mx-auto min-h-screen px-5">
            <Navigation />

            <div className="z-0 relative fullscreen-without-header flex flex-col md:flex-row justify-around md:justify-between md:items-center gap-6">
                <div className="self-start mt-4 md:mt-32 cursor-default">
                    <h1
                        className="text-6xl lg:text-7xl xl:text-8xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:drop-shadow-[0_2px_7px_rgba(0,0,0,0.7)]
                        text-transparent bg-clip-text bg-gradient-to-br from-developerBlue to-developerBlueDark
                        font-extrabold md:font-semibold text-stroke-1 line-height-1
                        md:text-customWhite hover:text-developerBlue hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-developerBlue hover:to-developerBlueDark"
                    >
                        Developer, Designer
                    </h1>
                </div>

                <div className="-z-10 absolute fullscreen-without-header w-[80vw] md:max-w-[60vw] inset-0 md:inset-y-0 md:left-[50%] md:translate-x-[-50%]">
                    <Canvas3D />
                </div>

                <div className="self-end mb-4 md:mb-32 cursor-default">
                    <h1
                        className="text-6xl lg:text-7xl xl:text-8xl text-right md:drop-shadow-[0_2px_7px_rgba(0,0,0,0.7)]
                        text-transparent bg-clip-text bg-gradient-to-r from-landscapeGreen to-landscapeGreenDark
                        font-extrabold md:font-semibold text-stroke-1  line-height-1
                        md:text-customWhite hover:text-landscapeGreen hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-landscapeGreen hover:to-landscapeGreenDark"
                    >
                        Landscape architect
                    </h1>
                </div>
            </div>

            <DeveloperSections />
        </div>
    );
}
