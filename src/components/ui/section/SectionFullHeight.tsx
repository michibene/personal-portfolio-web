interface SectionFullHeightProps {
    children?: JSX.Element | JSX.Element[];
    classNameProps: string;
}

export default function SectionFullHeight({ children, classNameProps }: SectionFullHeightProps) {
    return <section className={`min-h-screen mb-32 md:mb-48 flex flex-col ${classNameProps}`}>{children}</section>;
}
