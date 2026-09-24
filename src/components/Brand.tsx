import { Link } from "react-router-dom";

interface BrandProps {
  to?: string;
  compact?: boolean;
  onNavigate?: () => void;
}

const Brand = ({ to = "/", compact = false, onNavigate }: BrandProps) => (
  <Link
    to={to}
    onClick={onNavigate}
    className="group flex items-center gap-3 no-underline"
    aria-label="Royal College of Medicine Perak — financial aids home"
  >
    <span
      className="flex items-center justify-center shrink-0 border border-gold/60 font-display text-gold bg-navy-mid/60"
      style={{ width: compact ? 34 : 44, height: compact ? 34 : 44, fontSize: compact ? 12 : 14 }}
    >
      RCMP
    </span>
    <span className="flex flex-col leading-[1.3] text-left">
      <span
        className="font-display text-paper"
        style={{ fontSize: compact ? 14 : 17 }}
      >
        Financial Aids
      </span>
      <span className="text-paper/60 uppercase tracking-label" style={{ fontSize: 10 }}>
        Royal College of Medicine Perak
      </span>
    </span>
  </Link>
);

export default Brand;
