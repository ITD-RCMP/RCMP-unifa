import { Link } from "react-router-dom";
import { ArrowRight, CalendarClock, FileCheck2, HandCoins } from "lucide-react";
import SEO from "@/components/SEO";
import SampleNotice from "@/components/SampleNotice";
import SectionHeader from "@/components/SectionHeader";
import AidTypeBadge from "@/components/AidTypeBadge";
import Footer from "@/components/Footer";
import {
  aids,
  aidTypeCounts,
  aidTypeLabels,
  getAidById,
  type AidType,
} from "@/data/aids";

const highlights: { id: string; reason: string }[] = [
  { id: "rcmp-hardship-fund", reason: "Open all year, decided in days" },
  { id: "ptptn-loan", reason: "The main source of semester funding" },
  { id: "tuition-fee-waiver", reason: "Fees cancelled before you are invoiced" },
];

const deadlineTraps = [
  {
    title: "Fee waivers must land before invoicing",
    detail:
      "A waiver is a line on your invoice. If the request arrives after bills are issued, the discount slips to the next semester instead.",
  },
  {
    title: "Loans have a semester window",
    detail:
      "Apply in the first weeks of the semester. A late file is normally held to the next cycle, which means paying out of pocket first.",
  },
  {
    title: "Merit offers expire quietly",
    detail:
      "Bursary offers are emailed after the exam board and close within two weeks. The college email address is the only channel.",
  },
];

const Index = () => {
  const noRepayCount = aids.filter((aid) => aid.type !== "loan" && aid.type !== "sponsorship").length;
  const yearRound = aids.filter((aid) => aid.deadline.toLowerCase().includes("all year")).length;

  return (
    <div className="bg-background">
      <SEO
        title="Financial Aids"
        description="Find and compare the financial aid available to Royal College of Medicine Perak students, with eligibility rules explained in plain language."
      />

      {/* Intro band */}
      <section className="bg-navy text-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
          <p className="text-[11px] uppercase tracking-label text-gold font-semibold">Student finance</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.16] text-paper">
            Money for your medical training, without the guesswork.
          </h1>
          <p className="mt-6 text-base md:text-lg text-paper/80 max-w-2xl leading-relaxed">
            Every loan, grant, bursary and sponsorship open to RCMP students, listed in one place
            with the eligibility rules spelled out plainly — so you can tell in two minutes which
            ones you can actually apply for.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/aids"
              className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 text-xs uppercase tracking-label font-bold hover:bg-gold-soft transition-colors duration-200"
            >
              Browse all financial aids <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-to-apply"
              className="inline-flex items-center gap-2 border border-paper/30 text-paper px-6 py-3 text-xs uppercase tracking-label font-bold hover:bg-navy-mid transition-colors duration-200"
            >
              How applying works
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-paper/15 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-label text-paper/60">Programmes listed</dt>
              <dd className="mt-1 font-display text-3xl text-gold">{aids.length}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-label text-paper/60">No repayment needed</dt>
              <dd className="mt-1 font-display text-3xl text-gold">{noRepayCount}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-label text-paper/60">Open all year</dt>
              <dd className="mt-1 font-display text-3xl text-gold">{yearRound}</dd>
            </div>
          </dl>
        </div>
      </section>

      <SampleNotice />

      {/* Types of aid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <SectionHeader
          eyebrow="Know the difference"
          title="Four kinds of money, four different promises"
          description="Before you read a single programme, know which category it sits in. The category tells you whether you will owe anything at the end."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {aidTypeCounts().map(({ type, count }) => (
            <Link
              key={type}
              to={`/aids?type=${type}`}
              className="group bg-card border border-border p-6 shadow-card hover:shadow-raise transition-shadow duration-200 flex flex-col"
            >
              <AidTypeBadge type={type as AidType} />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                {aidTypeLabels[type as AidType].blurb}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-label font-semibold text-foreground group-hover:text-navy-mid transition-colors duration-200">
                {count} {count === 1 ? "programme" : "programmes"} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Where to start */}
      <section className="bg-muted/60 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-20">
          <SectionHeader
            eyebrow="Start here"
            title="Three moves, in this order"
            description="Most students lose money by applying in the wrong order, or too late. This is the sequence that works."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: HandCoins,
                title: "Check what you qualify for",
                detail:
                  "Open each programme and read the eligibility block. If you clear every line, it belongs on your list.",
              },
              {
                icon: FileCheck2,
                title: "Gather the documents once",
                detail:
                  "Income proof, result slips and bank details are asked for by almost everything. Get them current, then reuse them.",
              },
              {
                icon: CalendarClock,
                title: "Apply before you are invoiced",
                detail:
                  "Waivers and bursary acceptances are tied to dates you cannot move. Apply in the first week a window opens.",
              },
            ].map(({ icon: Icon, title, detail }) => (
              <div key={title} className="bg-card border border-border p-6 shadow-card">
                <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-lg text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <Link
            to="/aids"
            className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-label font-bold text-foreground hover:text-navy-mid transition-colors duration-200"
          >
            Start with the full list <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <SectionHeader
          eyebrow="Most requested"
          title="The three students ask about first"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map(({ id, reason }) => {
            const aid = getAidById(id);
            if (!aid) return null;
            return (
              <div key={id} className="bg-card border border-border p-6 shadow-card flex flex-col">
                <AidTypeBadge type={aid.type} />
                <h3 className="mt-4 text-lg text-foreground leading-snug">{aid.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{aid.amount}</p>
                <p className="mt-3 text-xs text-gold font-semibold uppercase tracking-label">{reason}</p>
                <Link
                  to={`/aids/${aid.id}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-label font-semibold text-foreground hover:text-navy-mid transition-colors duration-200"
                >
                  Read the rules <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deadline traps */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 md:pb-20">
        <SectionHeader
          eyebrow="Timing"
          title="The deadlines that catch people out"
          description="These are the dates that quietly cost students money, because the application was fine but it arrived late."
        />
        <div className="mt-10 border border-border divide-y divide-border bg-card shadow-card">
          {deadlineTraps.map((trap, index) => (
            <div key={trap.title} className="p-6 flex gap-5">
              <span className="font-display text-2xl text-gold leading-none shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg text-foreground">{trap.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{trap.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
