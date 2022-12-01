import developerWorks from "data/developer/developerPortfolio";
import { PortfolioItemProps } from "ui/card/PortfolioItemProps";

const portfolioWorksImagesUrls: string[] = [];

function populateImagesArray() {
    const portfolioItems: PortfolioItemProps[] = developerWorks;

    // Get full, resolved URL of a static image asset (to properly build path)
    function getPortfolioImageUrl(imgName: string) {
        return new URL(`/src/assets/images/works/${imgName}.png`, import.meta.url).href;
    }

    portfolioItems.forEach((project) => {
        portfolioWorksImagesUrls.push(getPortfolioImageUrl(project.imgName));
    });
}
populateImagesArray();

export default portfolioWorksImagesUrls;
