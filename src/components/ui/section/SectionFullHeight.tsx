interface SectionFullHeightProps {
    children?: JSX.Element | JSX.Element[];
}

export default function SectionFullHeight({ children }: SectionFullHeightProps) {
    return <div className="min-h-screen my-32 md:my-48 flex flex-col">{children}</div>;
}
