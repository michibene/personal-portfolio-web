interface SectionFullHeightProps {
    children?: JSX.Element | JSX.Element[];
}

export default function SectionFullHeight({ children }: SectionFullHeightProps) {
    return <section className="min-h-screen my-32 md:my-48 flex flex-col">{children}</section>;
}
