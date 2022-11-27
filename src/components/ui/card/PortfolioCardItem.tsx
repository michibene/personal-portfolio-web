import { PortfolioItemProps } from "ui/card/PortfolioItemProps";

export default function PortfolioCardItem({
    id,
    backgroundColor,
    imgPath,
    title,
    techStack,
    justifyTo,
    smallerSize,
}: PortfolioItemProps) {
    return (
        <div className={`flex ${justifyTo}`}>
            <div className={`group ${smallerSize ? "w-[80%]" : "w-full"} break-inside-avoid relative`}>
                <div className={"p-6 md:p-8 md:group-hover:brightness-30"} style={{ backgroundColor: backgroundColor }}>
                    <img src={imgPath} alt="Portfolio item" className="shadow-xl" />
                    <div className="flex gap-4 mt-8 md:mt-10 text-black">
                        <p className="text-3xl w-">{String(id).padStart(2, "0")}</p>
                        <p className="text-3xl font-bold">{title}</p>
                    </div>
                </div>

                <div
                    className="p-6 md:p-8 absolute bottom-0 left-0 w-full h-0 opacity-0
                    bg-black/75 md:group-hover:h-full md:group-hover:opacity-100 "
                >
                    <div className="flex justify-center items-center h-full">
                        <p className="text-2xl leading-relaxed text-center drop-shadow-[0_0px_6px_rgba(0,0,0,0.8)]">
                            {techStack}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
