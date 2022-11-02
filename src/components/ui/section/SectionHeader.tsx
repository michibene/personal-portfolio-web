interface SectionHeaderProps {
    title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
    return <h1 className="mb-16 md:mb-36">{title}</h1>;
}
