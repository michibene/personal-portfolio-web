import developerWorks from "data/developer/developerPortfolio";
import PortfolioCardItem from "ui/card/PortfolioCardItem";
import { PortfolioItemProps } from "ui/card/PortfolioItemProps";
import SectionFullHeight from "ui/section/SectionFullHeight";
import SectionHeader from "ui/section/SectionHeader";

export default function Works() {
    // Sorting portfolio works - odd numbers first
    // (Columns are ordered in vertical way and we want horizontal order, so after sort, odd id's are on the left side)
    function reorderPortfolioWorks(portfolioArray: PortfolioItemProps[]) {
        return portfolioArray.sort((a, b) => (b.id % 2) - (a.id % 2));
    }

    return (
        <SectionFullHeight>
            <SectionHeader title="Works" />

            <div className="columns-2 gap-14 space-y-14 place-items-end">
                {reorderPortfolioWorks(developerWorks).map((project) => (
                    <PortfolioCardItem
                        key={project.id}
                        id={project.id}
                        backgroundColor={project.backgroundColor}
                        imgPath={project.imgPath}
                        title={project.title}
                        justifyTo={project.justifyTo}
                        smallerSize={project.smallerSize}
                    />
                ))}
            </div>
        </SectionFullHeight>
    );
}
