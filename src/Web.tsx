import carAnimationImagesSources from "data/developer/cachedCarImagesUrls";
import portfolioWorksImagesUrls from "data/developer/cachedPortfolioImagesUrls";
import developerPortfolio from "data/developer/developerPortfolio";
import GFADashboardApp from "pages/developer/works/GFADashboardApp";
import LandingPage from "pages/LandingPage";
import PreloadingPage from "pages/PreloadingPage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import useImagePreloader from "utilities/useImagePreloader";

export default function Web() {
    // Join images sources arrays to preload all of them
    const allImagesUrls: string[] = [...new Set([...portfolioWorksImagesUrls, ...carAnimationImagesSources])];
    const { isImagesPreloaded } = useImagePreloader(allImagesUrls);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route index element={<LandingPage />} />
                <Route path={developerPortfolio[0].linkTo} element={<GFADashboardApp id={0} />} />
            </Route>
        )
    );

    return <>{!isImagesPreloaded ? <PreloadingPage /> : <RouterProvider router={router} />}</>;
}
