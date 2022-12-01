import portfolioWorksImagesUrls from "data/developer/cachedImagesSources";
import MainPage from "pages/MainPage";
import useImagePreloader from "utilities/useImagePreloader";

export default function Web() {
    const { imagesPreloaded } = useImagePreloader(portfolioWorksImagesUrls);

    return <>{!imagesPreloaded ? <p>Preloading Assets</p> : <MainPage />}</>;
}
