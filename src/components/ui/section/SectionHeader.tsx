interface SectionHeaderProps {
    title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
    return <h1 className="my-16 md:my-24">{title}</h1>;
}
