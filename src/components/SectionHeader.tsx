interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2";
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  className = "",
  as = "h2",
}: SectionHeaderProps) => {
  const Tag = as;
  const sizeClass =
    as === "h1"
      ? "text-3xl md:text-4xl lg:text-5xl"
      : "text-2xl md:text-3xl";

  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-label text-gold font-semibold mb-2">{eyebrow}</p>
      )}
      <Tag className={`${sizeClass} text-foreground tracking-tight`}>{title}</Tag>
      <div className="w-14 h-0.5 bg-gold mt-3" />
      {description && (
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
