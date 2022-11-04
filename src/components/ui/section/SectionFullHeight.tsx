interface SectionFullHeightProps {
    children?: JSX.Element | JSX.Element[];
}

export default function SectionFullHeight({ children }: SectionFullHeightProps) {
    return <section className="min-h-screen mb-32 md:mb-48 flex flex-col">{children}</section>;
}
