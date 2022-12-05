import developerWorks from "data/developer/developerPortfolio";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PortfolioCardItem from "ui/card/PortfolioCardItem";
import { PortfolioItemProps } from "ui/card/PortfolioItemProps";
import SectionFullHeight from "ui/section/SectionFullHeight";
import SectionHeader from "ui/section/SectionHeader";

export default function Works() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItemProps[]>([]);

    useEffect(() => {
        setPortfolioItems(handleItemsShowingOnDifferentScreens(developerWorks));
    }, [isTabletOrMobile]);

    function handleItemsShowingOnDifferentScreens(portfolioArray: PortfolioItemProps[]) {
        return isTabletOrMobile ? portfolioArray : reorderPortfolioWorks(portfolioArray);
    }

    // Sorting portfolio items - odd numbers first
    // (Columns are ordered in vertical way and we want horizontal order, so after sort, odd id's are on the left side)
    function reorderPortfolioWorks(portfolioArray: PortfolioItemProps[]) {
        return portfolioArray.sort((a, b) => (b.id % 2) - (a.id % 2));
    }

    return (
        <SectionFullHeight>
            <SectionHeader id="works" title="Works" />

            <div className="columns-1 md:columns-2 gap-14 space-y-14">
                {portfolioItems.map((project) => (
                    <div key={project.id}>
                        {isTabletOrMobile && (
                            <p
                                className={`mb-4 text-lg uppercase ${
                                    project.justifyTo == "justify-start" ? "text-left" : "text-right"
                                }`}
                            >
                                {project.techStack}
                            </p>
                        )}
                        <PortfolioCardItem
                            id={project.id}
                            backgroundColor={project.backgroundColor}
                            imgName={project.imgName}
                            title={project.title}
                            techStack={project.techStack}
                            justifyTo={project.justifyTo}
                            smallerSize={project.smallerSize}
                            linkTo={project.linkTo}
                        />
                    </div>
                ))}
            </div>
        </SectionFullHeight>
    );
}
