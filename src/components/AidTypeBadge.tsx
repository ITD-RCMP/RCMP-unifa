import { Link } from "react-router-dom";
import { aidTypeLabels, type AidType } from "@/data/aids";

const typeStyles: Record<AidType, string> = {
  loan: "bg-secondary text-secondary-foreground",
  grant: "bg-success text-success-foreground",
  scholarship: "bg-gold-soft text-navy",
  bursary: "bg-gold-soft text-navy",
  waiver: "bg-muted text-foreground",
  "work-study": "bg-muted text-foreground",
  sponsorship: "bg-primary text-primary-foreground",
};

interface AidTypeBadgeProps {
  type: AidType;
  showBlurb?: boolean;
}

const AidTypeBadge = ({ type, showBlurb = false }: AidTypeBadgeProps) => (
  <span className="inline-flex flex-col items-start gap-1">
    <span
      className={`inline-block px-2 py-1 text-[10px] uppercase tracking-label font-semibold ${typeStyles[type]}`}
    >
      {aidTypeLabels[type].label}
    </span>
    {showBlurb && (
      <span className="text-xs text-muted-foreground max-w-md">{aidTypeLabels[type].blurb}</span>
    )}
  </span>
);

export default AidTypeBadge;
