import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CalendarClock, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import SampleNotice from "@/components/SampleNotice";
import SectionHeader from "@/components/SectionHeader";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { aids } from "@/data/aids";

const stages = [
  {
    title: "Work out what you qualify for",
    detail:
      "Open the programmes that look relevant and read only the eligibility block first. Anything you clear completely goes on your list; anything you do not, you ask about rather than assume.",
    when: "Before the semester",
  },
  {
    title: "Get your documents current",
    detail:
      "Income proof is the one that ages. Anything older than twelve months gets sent back, so renew it before you start any application.",
    when: "Two weeks before a window opens",
  },
  {
    title: "Apply to the deadline-driven ones first",
    detail:
      "Fee waivers must reach the finance desk before invoicing, and annual grants have one window a year. Loans have a window too, but a late loan hurts less than a missed waiver.",
    when: "First week of the window",
  },
  {
    title: "Track, then chase politely",
    detail:
      "Note the date you submitted and the reference number. If nothing has moved by the stated processing time, ask — files stall on missing pages far more often than they are refused.",
    when: "Two weeks after submitting",
  },
  {
    title: "Accept offers quickly",
    detail:
      "Merit bursaries and sponsorships expire if they are not accepted in writing within the stated period, and the place moves to the next student.",
    when: "Within days of the email",
  },
];

const commonDocuments = [
  "Your IC and your student ID",
  "Parents' or guardian's income proof from the last 12 months",
  "Latest official result slip",
  "Offer letter or proof of current enrolment",
  "Bank account statement in your own name",
  "Death certificate or guardianship order, where it applies",
  "Referee names and current contact numbers",
];

const mistakes = [
  {
    mistake: "Waiting until the payment deadline to ask for help",
    fix: "Ask the week the problem starts. Hardship help and waivers both work better when there is still time to act on them.",
  },
  {
    mistake: "Submitting income proof that is two years old",
    fix: "Renew it first. It is the single most common reason a complete-looking file is returned to the start of the queue.",
  },
  {
    mistake: "Applying to one programme and stopping",
    fix: "Most students qualify for more than one. A waiver plus a loan is usually cheaper and calmer than a bigger loan alone.",
  },
  {
    mistake: "Not declaring a second award",
    fix: "Double funding that is disclosed is usually fine. Double funding that is discovered is what gets files reopened.",
  },
  {
    mistake: "Watching personal email instead of college email",
    fix: "Offers and requests for missing pages go to your college address. Check it weekly during application season.",
  },
];

const HowToApply = () => {
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("rcmp-doc-checklist");
      if (stored) setChecked(JSON.parse(stored));
    } catch {
      /* ignore unreadable storage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("rcmp-doc-checklist", JSON.stringify(checked));
    } catch {
      /* ignore blocked storage */
    }
  }, [checked]);

  const toggleDoc = (doc: string) =>
    setChecked((current) =>
      current.includes(doc) ? current.filter((item) => item !== doc) : [...current, doc]
    );

  const progress = useMemo(
    () => Math.round((checked.filter((d) => commonDocuments.includes(d)).length / commonDocuments.length) * 100),
    [checked]
  );

  return (
    <div className="bg-background">
      <SEO
        title="How to apply"
        description="The order to apply for financial aid at Royal College of Medicine Perak, the documents you need, and the mistakes that cost students money."
      />

      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
          <SectionHeader
            as="h1"
            eyebrow="The process"
            title="How applying actually works"
            description="Applying for aid is not one form. It is a short sequence, and the order matters more than most students expect. Here is the sequence, and where the time goes."
          />
        </div>
      </div>

      <SampleNotice />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        {/* Stages */}
        <ol className="border border-border bg-card shadow-card divide-y divide-border">
          {stages.map((stage, index) => (
            <li key={stage.title} className="p-6 md:p-7 flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-center gap-3 md:w-48 shrink-0">
                <span className="font-display text-2xl text-gold leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-label text-muted-foreground">
                  <CalendarClock className="w-3 h-3" aria-hidden="true" />
                  {stage.when}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-lg md:text-xl text-foreground">{stage.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{stage.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Documents checklist */}
        <section className="mt-14">
          <SectionHeader
            eyebrow="Documents"
            title="The checklist that covers almost everything"
            description="Tick these off as you collect them. Your progress is kept on this device only, and resets if you clear your browser storage."
          />

          <div className="mt-6 bg-card border border-border shadow-card">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between gap-4">
              <p className="text-[11px] uppercase tracking-label text-muted-foreground">
                Documents collected
              </p>
              <p className="text-sm font-semibold text-foreground">{progress}%</p>
            </div>
            <div className="h-1 bg-muted">
              <div
                className="h-full bg-gold transition-all duration-300"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Documents collected"
              />
            </div>
            <ul className="divide-y divide-border">
              {commonDocuments.map((doc) => {
                const done = checked.includes(doc);
                return (
                  <li key={doc}>
                    <label className="flex items-start gap-3 p-4 cursor-pointer hover:bg-muted/50 transition-colors duration-200">
                      <input
                        type="checkbox"
                        checked={done}
                        onChange={() => toggleDoc(doc)}
                        className="mt-0.5 w-4 h-4 accent-[hsl(var(--gold))]"
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          done ? "text-muted-foreground line-through" : "text-foreground"
                        }`}
                      >
                        {doc}
                      </span>
                      {done && <CheckCircle2 className="w-4 h-4 text-success ml-auto shrink-0" aria-hidden="true" />}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Mistakes */}
        <section className="mt-14">
          <SectionHeader
            eyebrow="Avoid these"
            title="Five mistakes that cost students money"
            description="None of these are about being ineligible. They are about timing and paperwork, which is why they are so avoidable."
          />
          <div className="mt-8 space-y-4">
            {mistakes.map((item) => (
              <div key={item.mistake} className="bg-card border border-border shadow-card p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-foreground font-medium text-sm md:text-base">{item.mistake}</p>
                </div>
                <p className="mt-3 pl-7 text-sm text-muted-foreground leading-relaxed">{item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timing summary */}
        <section className="mt-14">
          <SectionHeader eyebrow="Realistic timing" title="How long each kind of aid takes" />
          <div className="mt-6 overflow-x-auto border border-border shadow-card bg-card">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <caption className="sr-only">Processing times for each financial aid programme</caption>
              <thead>
                <tr className="bg-navy text-paper">
                  <th className="text-left font-semibold px-4 py-3">Programme</th>
                  <th className="text-left font-semibold px-4 py-3">Apply by</th>
                  <th className="text-left font-semibold px-4 py-3">Decision takes</th>
                </tr>
              </thead>
              <tbody>
                {aids.map((aid) => (
                  <tr key={aid.id} className="border-t border-border hover:bg-muted/50">
                    <th scope="row" className="text-left px-4 py-3 font-medium text-foreground">
                      <Link to={`/aids/${aid.id}`} className="hover:text-navy-mid transition-colors duration-200">
                        {aid.shortName}
                      </Link>
                    </th>
                    <td className="px-4 py-3 text-muted-foreground">{aid.deadline}</td>
                    <td className="px-4 py-3 text-muted-foreground">{aid.processingTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-2xl">
            If a programme's stated time passes with no news, contact the student finance desk with
            your submission date and reference. Silence usually means a page is missing, not a refusal.
          </p>
        </section>

        <Newsletter />

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/aids"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-label font-bold hover:bg-secondary transition-colors duration-200"
          >
            Browse the programmes <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-xs uppercase tracking-label font-bold text-foreground hover:bg-muted transition-colors duration-200"
          >
            Common questions
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToApply;
