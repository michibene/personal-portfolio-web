import DeveloperSections from "developer/sections/index";
import characterImg from "images/02_Self_3D_Character_TELO_Front.png";
import Navigation from "navigation/Navigation";

export default function MainPage() {
    return (
        <div className="max-w-7xl mx-auto min-h-screen px-5">
            <Navigation />

            <div className="fullscreen-without-header flex flex-col md:flex-row justify-evenly md:justify-between md:items-center gap-6 md:gap-6">
                <a href="" className="self-start mt-4 md:mt-32">
                    <h1
                        className="text-6xl lg:text-7xl xl:text-8xl
                        hover:text-developerBlue hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-developerBlue hover:to-developerBlueDark"
                    >
                        Developer, Designer
                    </h1>
                </a>

                <div className="self-center max-w-[22vh]">
                    <img
                        src={characterImg}
                        alt="3D self model"
                        className="object-cover md:object-contain object-top h-[40vh] w-[80vw] md:h-auto "
                    ></img>
                </div>

                <a href="" className="self-end mb-4 md:mb-32">
                    <h1
                        className="text-6xl lg:text-7xl xl:text-8xl text-right
                        hover:text-landscapeGreen hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-landscapeGreen hover:to-landscapeGreenDark"
                    >
                        Landscape architect
                    </h1>
                </a>
            </div>

            <DeveloperSections />
        </div>
    );
}
