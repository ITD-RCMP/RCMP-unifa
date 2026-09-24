interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({ eyebrow, title, description, className = "" }: SectionHeaderProps) => (
  <div className={className}>
    {eyebrow && (
      <p className="text-[11px] uppercase tracking-label text-gold font-semibold mb-2">{eyebrow}</p>
    )}
    <h2 className="text-2xl md:text-3xl text-foreground tracking-tight">{title}</h2>
    <div className="w-14 h-0.5 bg-gold mt-3" />
    {description && (
      <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
