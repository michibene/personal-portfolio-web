type SecondaryButtonProps = {
    buttonText: string;
    icon?: JSX.Element;
    buttonType: "button" | "submit" | "reset" | undefined;
    onClickAction: () => void;
};

export default function SecondaryButton({ buttonText, icon, buttonType, onClickAction }: SecondaryButtonProps) {
    return (
        <button
            type={buttonType}
            onClick={onClickAction}
            className="py-4 px-8 inline-flex items-center gap-4 border border-customWhite text-customWhite
            hover:bg-customWhite hover:text-customBlack hover:drop-shadow-[6px_6px_18px_rgba(217,216,208,0.2)]"
        >
            {icon && <span className="text-xl">{icon}</span>}
            {buttonText}
        </button>
    );
}
