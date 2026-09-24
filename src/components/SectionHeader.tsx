interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-xl md:text-2xl font-normal text-foreground uppercase tracking-wide mb-2">
        {title}
      </h2>
      <div className="w-16 h-px bg-foreground" />
    </div>
  );
};

export default SectionHeader;
