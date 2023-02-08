import carAnimationImagesSources from "data/developer/cachedCarImagesUrls";
import portfolioWorksImagesUrls from "data/developer/cachedPortfolioImagesUrls";
import developerPortfolio from "data/developer/developerPortfolio";
import GFADashboardApp from "pages/developer/works/GFADashboardApp";
import HEBEAVirtualQueueApp from "pages/developer/works/HEBEAVirtualQueueApp";
import LandingPage from "pages/LandingPage";
import PreloadingPage from "pages/PreloadingPage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import useImagePreloader from "utilities/useImagePreloader";

export default function Web() {
    // Join images sources arrays to preload all of them
    const allImagesUrls: string[] = [...new Set([...portfolioWorksImagesUrls, ...carAnimationImagesSources])];
    const { isImagesPreloaded } = useImagePreloader(allImagesUrls);

    function getPathLinkById(id: number) {
        const portfolioItem = developerPortfolio.find((item) => item.id === id);
        if (portfolioItem) {
            return portfolioItem.linkTo;
        }
        return "/";
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route index element={<LandingPage />} />
                <Route path={getPathLinkById(1)} element={<HEBEAVirtualQueueApp />} />
                <Route path={getPathLinkById(2)} element={<GFADashboardApp />} />
            </Route>
        )
    );

    return <>{!isImagesPreloaded ? <PreloadingPage /> : <RouterProvider router={router} />}</>;
}
