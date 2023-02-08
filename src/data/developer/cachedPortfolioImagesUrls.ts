import developerWorks from "data/developer/developerPortfolio";
import { PortfolioItemProps } from "ui/card/PortfolioItemProps";

const portfolioWorksImagesUrls: string[] = populatePortfolioImagesArray();

function populatePortfolioImagesArray() {
    const portfolioItems: PortfolioItemProps[] = developerWorks;
    const portfolioImagesUrls: string[] = [];

    // Get full, resolved URL of a static image asset (to properly build path)
    function getPortfolioImageUrl(imgName: string) {
        return new URL(`/src/assets/images/works/${imgName}.png`, import.meta.url).href;
    }

    portfolioItems.forEach((project) => {
        portfolioImagesUrls.push(getPortfolioImageUrl(project.imgName));
    });

    return portfolioImagesUrls;
}

export default portfolioWorksImagesUrls;
