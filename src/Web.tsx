import SpinnerLoader from "components/ui/SpinnerLoader";
import carAnimationImagesSources from "data/developer/cachedCarImagesUrls";
import portfolioWorksImagesUrls from "data/developer/cachedPortfolioImagesUrls";
import MainPage from "pages/MainPage";
import useImagePreloader from "utilities/useImagePreloader";

export default function Web() {
    // Join images sources arrays to preload all of them
    const allImagesUrls: string[] = [...new Set([...portfolioWorksImagesUrls, ...carAnimationImagesSources])];
    const { imagesPreloaded } = useImagePreloader(allImagesUrls);

    return (
        <>
            {!imagesPreloaded ? (
                <SpinnerLoader>
                    <div className="mb-20 lg:mb-28 text-center uppercase font-bold font text-4xl lg:text-5xl">
                        <p className="pb-2 lg:pb-5">Michal Beno</p>
                        <p>Portfolio ©2022</p>
                    </div>
                </SpinnerLoader>
            ) : (
                <MainPage />
            )}
        </>
    );
}
