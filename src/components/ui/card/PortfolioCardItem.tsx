import { PortfolioItemProps } from "ui/card/PortfolioItemProps";

export default function PortfolioCardItem({
    id,
    backgroundColor,
    imgPath,
    title,
    justifyTo,
    smallerSize,
}: PortfolioItemProps) {
    return (
        <div className={`flex ${justifyTo}`}>
            <div className={`p-8 ${smallerSize ? "w-[80%]" : "w-full"}`} style={{ backgroundColor: backgroundColor }}>
                <img src={imgPath} alt="Portfolio item" className="shadow-xl" />

                <div className="flex gap-4 mt-10 text-black">
                    <p className="text-3xl w-">{String(id).padStart(2, "0")}</p>
                    <p className="text-3xl font-bold">{title}</p>
                </div>
            </div>
        </div>
    );
}
