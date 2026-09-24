import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, X, ArrowRight, TableProperties } from "lucide-react";
import SEO from "@/components/SEO";
import SampleNotice from "@/components/SampleNotice";
import SectionHeader from "@/components/SectionHeader";
import AidCard from "@/components/AidCard";
import AidTypeBadge from "@/components/AidTypeBadge";
import Footer from "@/components/Footer";
import {
  aids,
  aidTypeCounts,
  comparisonRows,
  fundingSourceLabels,
  STUDY_LEVELS,
  type AidType,
} from "@/data/aids";

type TypeFilter = AidType | "all";

const Aids = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [source, setSource] = useState<string>("all");
  const [level, setLevel] = useState<string>("all");
  const [noRepayOnly, setNoRepayOnly] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const typeParam = (searchParams.get("type") as TypeFilter) || "all";
  const setType = (value: TypeFilter) => {
    if (value === "all") setSearchParams({});
    else setSearchParams({ type: value });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return aids.filter((aid) => {
      if (typeParam !== "all" && aid.type !== typeParam) return false;
      if (source !== "all" && aid.fundingSource !== source) return false;
      if (level !== "all" && !aid.levels.includes(level)) return false;
      if (noRepayOnly && aid.repayment.toLowerCase().includes("must be repaid")) return false;
      if (noRepayOnly && aid.repayment.toLowerCase().includes("repayable")) return false;
      if (!q) return true;
      const haystack = [
        aid.name,
        aid.summary,
        aid.bestFor,
        aid.provider,
        aid.amount,
        ...aid.tags,
        ...aid.eligibility,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, typeParam, source, level, noRepayOnly]);

  const hasActiveFilters =
    typeParam !== "all" || source !== "all" || level !== "all" || noRepayOnly || query.trim() !== "";

  const clearAll = () => {
    setQuery("");
    setSource("all");
    setLevel("all");
    setNoRepayOnly(false);
    setSearchParams({});
  };

  return (
    <div className="bg-background">
      <SEO
        title="All financial aids"
        description="Browse and compare every financial aid programme available to Royal College of Medicine Perak students, including amounts, repayment terms and eligibility."
      />

      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
          <SectionHeader
            eyebrow="Compare side by side"
            title="All financial aids"
            description="Filter the list to what fits your situation, then open a programme to read the full eligibility rules. Nothing here requires you to log in."
          />
        </div>
      </div>

      <SampleNotice />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-14">
        {/* Filters */}
        <div className="bg-card border border-border shadow-card">
          <div className="p-4 border-b border-border">
            <label htmlFor="aid-search" className="sr-only">
              Search financial aids
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input
                id="aid-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by programme, provider or situation — try 'B40' or 'no repayment'"
                className="w-full bg-background border border-input pl-9 pr-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-label text-muted-foreground mb-2">Kind of aid</p>
              <div className="flex flex-wrap gap-2">
                <FilterChip active={typeParam === "all"} onClick={() => setType("all")}>
                  All types
                </FilterChip>
                {aidTypeCounts().map(({ type, count }) => (
                  <FilterChip key={type} active={typeParam === type} onClick={() => setType(type)}>
                    {type === "all" ? "All" : `${type.charAt(0).toUpperCase()}${type.slice(1)}`}
                    <span className="ml-1.5 opacity-60">{count}</span>
                  </FilterChip>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="source" className="block text-[10px] uppercase tracking-label text-muted-foreground mb-2">
                  Who provides it
                </label>
                <select
                  id="source"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="w-full bg-background border border-input px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">Anyone</option>
                  {Object.entries(fundingSourceLabels).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="level" className="block text-[10px] uppercase tracking-label text-muted-foreground mb-2">
                  Year of study
                </label>
                <select
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full bg-background border border-input px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">Any year</option>
                  {STUDY_LEVELS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={noRepayOnly}
                  onChange={(e) => setNoRepayOnly(e.target.checked)}
                  className="w-4 h-4 accent-[hsl(var(--gold))]"
                />
                <span className="text-sm text-foreground">Only show money I don't have to repay</span>
              </label>

              {hasActiveFilters && (
                <button
                  onClick={clearAll}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-label text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <X className="w-3.5 h-3.5" /> Clear filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Result count + comparison toggle */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{results.length}</span>{" "}
            {results.length === 1 ? "programme" : "programmes"} shown
          </p>
          <button
            onClick={() => setShowComparison((v) => !v)}
            className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-[11px] uppercase tracking-label font-semibold text-foreground hover:bg-muted transition-colors duration-200"
            aria-expanded={showComparison}
          >
            <TableProperties className="w-3.5 h-3.5" />
            {showComparison ? "Hide comparison table" : "Compare in a table"}
          </button>
        </div>

        {showComparison && (
          <div className="mt-5 overflow-x-auto border border-border shadow-card bg-card animate-fade-in">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <caption className="sr-only">
                Comparison of financial aid programmes by amount, repayment, eligibility, deadline and bond
              </caption>
              <thead>
                <tr className="bg-navy text-paper">
                  <th className="text-left font-semibold px-4 py-3 sticky left-0 bg-navy">Programme</th>
                  {comparisonRows.map((row) => (
                    <th key={row.label} className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                      {row.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.map((aid) => (
                  <tr key={aid.id} className="border-t border-border align-top hover:bg-muted/50">
                    <th scope="row" className="text-left px-4 py-4 bg-card sticky left-0 z-10">
                      <Link to={`/aids/${aid.id}`} className="font-medium text-foreground hover:text-navy-mid">
                        {aid.shortName}
                      </Link>
                      <div className="mt-2">
                        <AidTypeBadge type={aid.type} />
                      </div>
                    </th>
                    {comparisonRows.map((row) => (
                      <td key={row.label} className="px-4 py-4 text-muted-foreground max-w-xs">
                        {row.value(aid)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Cards */}
        {results.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {results.map((aid) => (
              <AidCard key={aid.id} aid={aid} />
            ))}
          </div>
        ) : (
          <div className="mt-6 border border-dashed border-border bg-card p-10 text-center">
            <p className="text-foreground font-display text-xl">Nothing matches those filters</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              Try removing the year of study or provider filter, or search a wider word such as
              &ldquo;income&rdquo;, &ldquo;bond&rdquo; or &ldquo;allowance&rdquo;.
            </p>
            <button
              onClick={clearAll}
              className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-[11px] uppercase tracking-label font-bold hover:bg-secondary transition-colors duration-200"
            >
              Reset all filters
            </button>
          </div>
        )}

        <div className="mt-14 bg-navy text-paper p-8 md:p-10">
          <h2 className="text-2xl text-paper">Still unsure which one fits you?</h2>
          <p className="mt-3 text-sm text-paper/80 max-w-2xl leading-relaxed">
            Bring your income proof and your latest result slip to the student finance desk. A
            fifteen-minute conversation usually settles which programmes you should apply for and
            in what order.
          </p>
          <Link
            to="/faq"
            className="mt-6 inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 text-[11px] uppercase tracking-label font-bold hover:bg-gold-soft transition-colors duration-200"
          >
            Read common questions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const FilterChip = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`px-3 py-1.5 text-xs border transition-colors duration-200 capitalize ${
      active
        ? "bg-navy text-paper border-navy"
        : "bg-background text-foreground border-border hover:border-navy-mid"
    }`}
  >
    {children}
  </button>
);

export default Aids;
