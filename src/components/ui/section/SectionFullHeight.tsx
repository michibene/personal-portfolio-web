interface SectionFullHeightProps {
    children?: JSX.Element | JSX.Element[];
}

export default function SectionFullHeight({ children }: SectionFullHeightProps) {
    return <div className="min-h-screen py-24 flex flex-col">{children}</div>;
}
