import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Ban,
  FileText,
  HelpCircle,
  ListChecks,
} from "lucide-react";
import SEO from "@/components/SEO";
import SampleNotice from "@/components/SampleNotice";
import AidTypeBadge from "@/components/AidTypeBadge";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import {
  fundingSourceLabels,
  getAidById,
  relatedAids,
} from "@/data/aids";

const AidDetail = () => {
  const { id } = useParams();
  const aid = getAidById(id);

  if (!aid) {
    return (
      <div className="bg-background min-h-screen">
        <SEO title="Programme not found" description="This financial aid programme could not be found." />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-24 text-center">
          <p className="text-[11px] uppercase tracking-label text-gold font-semibold">Not found</p>
          <h1 className="mt-4 text-3xl md:text-4xl text-foreground">We don't have that programme</h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            The link may be out of date, or the programme may have been renamed. The full list is
            the safest place to start.
          </p>
          <Link
            to="/aids"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-label font-bold hover:bg-secondary transition-colors duration-200"
          >
            See all financial aids <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const facts: { label: string; value: string }[] = [
    { label: "What you get", value: aid.amount },
    { label: "Do you repay it?", value: aid.repayment },
    { label: "Apply by", value: aid.deadline },
    { label: "Decision takes", value: aid.processingTime },
    { label: "Renewal", value: aid.renewal },
    { label: "Service bond", value: aid.serviceCommitment },
  ];

  const others = relatedAids(aid, 3);

  return (
    <div className="bg-background">
      <SEO title={aid.name} description={`${aid.summary} Amount: ${aid.amount}. ${aid.repayment}`} />

      {/* Header */}
      <section className="bg-navy text-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-14">
          <Link
            to="/aids"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-label text-paper/70 hover:text-gold transition-colors duration-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All financial aids
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <AidTypeBadge type={aid.type} />
            <span className="text-[10px] uppercase tracking-label text-paper/60">
              {fundingSourceLabels[aid.fundingSource]}
            </span>
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl leading-[1.16] text-paper">{aid.name}</h1>
          <p className="mt-3 text-sm text-gold">{aid.provider}</p>
          <p className="mt-6 text-base md:text-lg text-paper/85 max-w-3xl leading-relaxed">{aid.summary}</p>

          <div className="mt-8 inline-block bg-navy-mid border border-gold/40 px-5 py-4">
            <p className="text-[10px] uppercase tracking-label text-paper/60">Headline amount</p>
            <p className="mt-1 font-display text-2xl md:text-3xl text-gold">{aid.amount}</p>
          </div>
        </div>
      </section>

      <SampleNotice />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        {/* Key facts */}
        <div className="grid gap-px bg-border border border-border shadow-card sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-card p-5">
              <p className="text-[10px] uppercase tracking-label text-muted-foreground">{fact.label}</p>
              <p className="mt-2 text-sm text-foreground leading-relaxed">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* What it is */}
        <section className="mt-14">
          <SectionHeader eyebrow="In plain language" title="What this actually does" />
          <div className="mt-6 space-y-5 text-foreground">
            <p className="reading-text text-base md:text-lg font-light leading-relaxed">
              {aid.amountDetail}
            </p>
            <div className="bg-gold-soft border-l-2 border-gold p-5">
              <p className="text-[10px] uppercase tracking-label text-navy font-semibold">Best suited to</p>
              <p className="mt-2 text-sm md:text-base text-navy leading-relaxed">{aid.bestFor}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Available to students in:{" "}
              <span className="text-foreground">{aid.levels.join(", ")}</span>
            </p>
          </div>
        </section>

        {/* Eligibility */}
        <section className="mt-14">
          <SectionHeader
            eyebrow="Before you start"
            title="Can you apply?"
            description="Read every line. If you clear all of these and none of the blockers below, you should apply — a weak result or a missing document is worth asking about rather than assuming."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="bg-card border border-border shadow-card p-6">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-success" aria-hidden="true" />
                <h3 className="text-base text-foreground">You can apply if</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {aid.eligibility.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-foreground leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-success shrink-0" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border shadow-card p-6">
              <div className="flex items-center gap-2">
                <Ban className="w-4 h-4 text-destructive" aria-hidden="true" />
                <h3 className="text-base text-foreground">You cannot apply if</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {aid.notEligible.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-foreground leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-destructive shrink-0" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="mt-14">
          <SectionHeader
            eyebrow="Paperwork"
            title="Have these ready first"
            description="Almost every rejection on timing grounds is a document that was not current. Income proof older than twelve months is the usual culprit."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {aid.documents.map((doc) => (
              <li key={doc} className="flex gap-3 bg-card border border-border p-4 text-sm text-foreground leading-relaxed">
                <FileText className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
                {doc}
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section className="mt-14">
          <SectionHeader eyebrow="Step by step" title="How to apply" />
          <ol className="mt-8 border border-border bg-card shadow-card divide-y divide-border">
            {aid.steps.map((step, index) => (
              <li key={step.title} className="p-6 flex gap-5">
                <span className="font-display text-2xl text-gold leading-none shrink-0 w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 bg-muted/70 border border-border p-5 flex items-start gap-3">
            <ListChecks className="w-4 h-4 text-navy shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-semibold">Timing:</span> {aid.deadlineDetail}
            </p>
          </div>
        </section>

        {/* FAQs */}
        {aid.faqs.length > 0 && (
          <section className="mt-14">
            <SectionHeader eyebrow="Questions" title="Asked most about this programme" />
            <div className="mt-6 border border-border bg-card shadow-card divide-y divide-border">
              {aid.faqs.map((faq) => (
                <details key={faq.question} className="group p-5">
                  <summary className="flex items-start gap-3 cursor-pointer list-none">
                    <HelpCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm md:text-base text-foreground font-medium flex-1">
                      {faq.question}
                    </span>
                  </summary>
                  <p className="mt-3 pl-7 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        <section className="mt-14 bg-navy text-paper p-8 md:p-10">
          <h2 className="text-2xl text-paper">Talk to the student finance desk</h2>
          <p className="mt-3 text-sm text-paper/80 max-w-2xl leading-relaxed">
            If a rule on this page is unclear, or you are one line short on the eligibility list,
            ask before you give up on a programme. Borderline cases are decided by people, not
            by the list.
          </p>
          <p className="mt-5 text-sm text-gold">{aid.contact}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/how-to-apply"
              className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 text-[11px] uppercase tracking-label font-bold hover:bg-gold-soft transition-colors duration-200"
            >
              How applying works <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 border border-paper/30 text-paper px-5 py-2.5 text-[11px] uppercase tracking-label font-bold hover:bg-navy-mid transition-colors duration-200"
            >
              Common questions
            </Link>
          </div>
        </section>

        {/* Related */}
        {others.length > 0 && (
          <section className="mt-14">
            <SectionHeader eyebrow="Also worth checking" title="Other programmes in a similar position" />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {others.map((other) => (
                <Link
                  key={other.id}
                  to={`/aids/${other.id}`}
                  className="group bg-card border border-border p-5 shadow-card hover:shadow-raise transition-shadow duration-200 flex flex-col"
                >
                  <AidTypeBadge type={other.type} />
                  <h3 className="mt-3 text-base text-foreground leading-snug flex-1">{other.name}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{other.amount}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-label font-semibold text-foreground group-hover:text-navy-mid transition-colors duration-200">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AidDetail;
