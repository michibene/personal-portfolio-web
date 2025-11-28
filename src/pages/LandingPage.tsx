import FadeInOpacity from "@ui/animation/FadeInOpacity";
import Canvas3D from "@features/3d/Canvas3D";
import DeveloperSections from "@sections/index";
import Navigation from "@navigation/Navigation";
import { useEffect } from "react";
import { scrollTriggerRefreshAction } from "@util/scrollTriggerRefresh";

export default function LandingPage() {
  useEffect(() => {
    // Refresh position of car animation start point after preloading images of portfolio works
    scrollTriggerRefreshAction();
  }, []);

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-5">
      <Navigation />

      <FadeInOpacity>
        <div className="z-0 relative fullscreen-without-header flex flex-col md:flex-row justify-around md:justify-between md:items-center gap-6">
          <div className="self-start mt-4 md:mt-32 cursor-default">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:drop-shadow-[0_2px_7px_rgba(0,0,0,0.7)] text-transparent bg-clip-text bg-linear-to-br from-developer-blue to-developer-blue-dark font-extrabold md:font-semibold text-stroke-1 line-height-1 md:text-custom-white hover:text-developer-blue hover:bg-clip-text hover:bg-linear-to-br hover:from-developer-blue hover:to-developer-blue-dark">
              Developer, <br />
              Designer
            </h1>
          </div>

          <div className="-z-10 absolute fullscreen-without-header w-[80vw] md:max-w-[60vw] inset-0 md:inset-y-0 md:left-[50%] md:translate-x-[-50%]">
            <Canvas3D />
          </div>

          <div className="self-end mb-4 md:mb-32 cursor-default">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl text-right drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:drop-shadow-[0_2px_7px_rgba(0,0,0,0.7)] text-transparent bg-clip-text bg-linear-to-r from-landscape-green to-landscape-green-dark font-extrabold md:font-semibold text-stroke-1 line-height-1 md:text-custom-white hover:text-landscape-green hover:bg-clip-text hover:bg-linear-to-r hover:from-landscape-green hover:to-landscape-green-dark">
              Landscape <br />
              architect
            </h1>
          </div>
        </div>
      </FadeInOpacity>

      <DeveloperSections />
    </div>
  );
}
