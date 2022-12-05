import CloseButton from "../CloseButton";

interface WorksSectionSummaryProps {
    title: string;
    abstractParagraph: string;
    centerImage: string;
    teamNames?: string;
    techStack: string;
    projectYear: number;
    handleCloseButton: () => void;
}

export default function WorksSectionSummary({
    title,
    abstractParagraph,
    centerImage,
    teamNames,
    techStack,
    projectYear,
    handleCloseButton,
}: WorksSectionSummaryProps) {
    return (
        <div className="my-5 lg:mt-24 lg:mb-0 bg-customWhite text-customBlack ">
            <div className="p-5 md:px-10 md:pt-10 flex justify-end opacity-60 hover:opacity-100">
                <button className="w-8 md:w-12" onClick={handleCloseButton}>
                    <CloseButton />
                </button>
            </div>

            <h1 className="mb-12 md:mt-0 md:mb-14 text-center font-extrabold opacity-95">{title}</h1>

            <div className="p-8 md:pt-8 md:pb-0 md:px-16 flex flex-col lg:flex-row justify-between gap-16 lg:gap-18">
                <div className="lg:pt-20 lg:w-[30%]">
                    <p>{abstractParagraph}</p>
                </div>

                <div className="p-8 md:p-16 lg:p-20 bg-[#16241F] flex justify-center">
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
                        <p>{techStack}</p>
                    </div>
                    <div>
                        <p className="uppercase mb-2"># Project year</p>
                        <p>{projectYear}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
