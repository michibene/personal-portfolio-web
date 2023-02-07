import developerPortfolio from "data/developer/developerPortfolio";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import CloseButton from "components/ui/CloseButton";

type WorksDetailSectionProps = {
    id: number;
    abstractParagraph: string;
    centerImage: string;
    centerImageBackgroundColor: string;
    teamNames?: string;
    children: JSX.Element | JSX.Element[];
};

export default function WorksDetailSection({
    id,
    abstractParagraph,
    centerImage,
    centerImageBackgroundColor,
    teamNames,
    children,
}: WorksDetailSectionProps) {
    const portfolioItem = developerPortfolio.find((item) => item.id === id);
    const navigate = useNavigate();

    function handleCloseButton() {
        navigate(-1);
    }

    return (
        <>
            {portfolioItem ? (
                <div className="max-w-7xl mx-auto px-5">
                    <div
                        className="my-5 lg:mt-24 lg:mb-0 text-customBlack shadow-[0_-5px_80px_-15px_rgba(217,216,209,0.5)] shadow-stone-50/20 lg:shadow-stone-50/30"
                        style={{ backgroundColor: portfolioItem.backgroundColor }}
                    >
                        <div className="p-5 md:px-10 md:pt-10 md:pb-0 flex justify-end opacity-60 hover:opacity-100">
                            <button className="w-8 md:w-12" onClick={handleCloseButton}>
                                <CloseButton />
                            </button>
                        </div>

                        <h1 className="mb-12 md:mt-0 md:mb-14 text-center font-extrabold opacity-95">
                            {portfolioItem.title}
                        </h1>

                        <div className="p-8 md:pt-8 md:pb-0 md:px-16 flex flex-col lg:flex-row justify-between gap-16 lg:gap-18">
                            <div className="lg:pt-20 lg:w-[30%]">
                                <p>{abstractParagraph}</p>
                            </div>

                            <div
                                className="p-8 md:p-16 lg:p-20 flex justify-center"
                                style={{ backgroundColor: centerImageBackgroundColor }}
                            >
                                <img
                                    src={centerImage}
                                    className="md:max-h-[75vh]"
                                    alt="Main dashboard view on mobile - responsive"
                                />
                            </div>

                            <div className="pb-8 md:pb-16 lg:pt-20 lg:w-[30%] flex flex-col gap-8 lg:gap-14">
                                {teamNames && (
                                    <div>
                                        <p className="uppercase mb-2"># Team</p>
                                        <p>{teamNames}</p>
                                    </div>
                                )}

                                <div>
                                    <p className="uppercase mb-2"># Tech stack</p>
                                    <p>{portfolioItem.techStack}</p>
                                </div>
                                <div>
                                    <p className="uppercase mb-2"># Project year</p>
                                    <p>{portfolioItem.projectYear}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {children}

                    <div className="pt-20 pb-12 md:pt-24 md:pb-16 flex justify-center">
                        <button className="w-8 md:w-12 hover:text-developerBlue" onClick={handleCloseButton}>
                            <CloseButton />
                        </button>
                    </div>

                    <ScrollRestoration />
                </div>
            ) : (
                <div className="min-h-screen pb-20 lg:pb-16 flex flex-col">
                    <div className="grow flex justify-center items-center">
                        <p>Loading...</p>
                    </div>

                    <div className="my-auto flex justify-center">
                        <button className="w-8 md:w-12 hover:text-developerBlue" onClick={handleCloseButton}>
                            <CloseButton />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
