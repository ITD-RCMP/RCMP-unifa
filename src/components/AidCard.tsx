import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AidTypeBadge from "./AidTypeBadge";
import { fundingSourceLabels, type Aid } from "@/data/aids";

const AidCard = ({ aid }: { aid: Aid }) => {
  const mustRepay = aid.repayment.toLowerCase().startsWith("must") || aid.repayment.toLowerCase().includes("repayable");

  return (
    <article className="group bg-card border border-border shadow-card hover:shadow-raise transition-shadow duration-200 flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <AidTypeBadge type={aid.type} />
          <span className="text-[10px] uppercase tracking-label text-muted-foreground text-right">
            {fundingSourceLabels[aid.fundingSource]}
          </span>
        </div>

        <h3 className="mt-4 text-xl leading-snug text-foreground">
          <Link to={`/aids/${aid.id}`} className="hover:text-navy-mid transition-colors duration-200">
            {aid.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{aid.summary}</p>

        <dl className="mt-5 space-y-3 border-t border-border pt-4">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-[10px] uppercase tracking-label text-muted-foreground">Amount</dt>
            <dd className="text-sm font-medium text-foreground text-right">{aid.amount}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-[10px] uppercase tracking-label text-muted-foreground">Repay?</dt>
            <dd
              className={`text-sm font-medium text-right ${
                mustRepay ? "text-destructive" : "text-success"
              }`}
            >
              {mustRepay ? "Yes" : "No"}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-[10px] uppercase tracking-label text-muted-foreground">Apply by</dt>
            <dd className="text-sm text-foreground text-right">{aid.deadline}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {aid.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-muted text-muted-foreground text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        to={`/aids/${aid.id}`}
        className="flex items-center justify-between gap-2 px-6 py-3 border-t border-border bg-muted/50 text-[11px] uppercase tracking-label font-semibold text-foreground hover:bg-gold-soft hover:text-navy transition-colors duration-200"
      >
        See if you qualify
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </article>
  );
};

export default AidCard;
