import portfolioWorksImagesUrls from "data/developer/cachedPortfolioImagesUrls";
import { Link } from "react-router-dom";
import { PortfolioItemProps } from "ui/card/PortfolioItemProps";

export default function PortfolioCardItem({
    id,
    backgroundColor,
    imgName,
    title,
    techStack,
    justifyTo,
    smallerSize,
    linkTo,
}: PortfolioItemProps) {
    function getImageUrl(imgName: string, imagesUrlsArray: string[]) {
        return imagesUrlsArray.find((element) => element.toLowerCase().includes(imgName.toLowerCase()));
    }

    return (
        <div className={`flex ${justifyTo}`}>
            <div className={`group ${smallerSize ? "w-[80%]" : "w-full"} break-inside-avoid relative`}>
                <Link to={linkTo}>
                    <div
                        className={"p-6 md:p-8 md:group-hover:brightness-25"}
                        style={{ backgroundColor: backgroundColor }}
                    >
                        <img
                            src={getImageUrl(imgName, portfolioWorksImagesUrls)}
                            alt={`${title} project`}
                            className="shadow-xl"
                        />
                        <div className="flex gap-4 mt-8 md:mt-10 text-black">
                            <p className="text-3xl w-">{String(id).padStart(2, "0")}</p>
                            <p className="text-3xl font-bold">{title}</p>
                        </div>
                    </div>
                    <div
                        className="p-6 md:p-8 absolute bottom-0 left-0 w-full h-0 opacity-0
                        bg-black/75 md:group-hover:h-full md:group-hover:opacity-100"
                    >
                        <div className="flex justify-center items-center h-full">
                            <p className="text-2xl leading-relaxed text-center drop-shadow-[0_0px_6px_rgba(0,0,0,0.8)]">
                                {techStack}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
