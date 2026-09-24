import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Eye, Users } from "lucide-react";
import SEO from "@/components/SEO";
import SampleNotice from "@/components/SampleNotice";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";

const principles = [
  {
    icon: Eye,
    title: "Say the rules out loud",
    detail:
      "Every programme on this site shows its eligibility conditions in full, including the ones that disqualify you. A hidden condition is worse than no condition at all.",
  },
  {
    icon: Users,
    title: "A person answers",
    detail:
      "This site is the map, not the decision. Borderline cases are settled by the student finance desk, and asking early is always better than self-disqualifying.",
  },
  {
    icon: ShieldCheck,
    title: "Your situation stays yours",
    detail:
      "Income details and hardship statements are handled by the finance desk only. Academic staff are told what is needed to support you, and only with your say-so.",
  },
];

const About = () => (
  <div className="bg-background">
    <SEO
      title="About the aid office"
      description="What the Royal College of Medicine Perak student finance desk does, how it handles your information, and how to reach it."
    />

    <div className="border-b border-border bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        <SectionHeader
          as="h1"
          eyebrow="Who we are"
          title="About the aid office"
          description="The student finance desk sits between you and the funding bodies: PTPTN, the state zakat authority, the state foundation, the armed forces, and the college's own bursaries, waivers and hardship fund."
        />
      </div>
    </div>

    <SampleNotice />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
      <section className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl text-foreground">What we do</h2>
          <div className="w-14 h-0.5 bg-gold mt-3" />
          <ul className="mt-6 space-y-4 text-sm md:text-base text-foreground leading-relaxed font-light">
            <li>Keep one honest list of the money available to RCMP students, and say plainly who each programme is open to.</li>
            <li>Check your documents before you submit, so a file is not returned for something as small as an old income letter.</li>
            <li>Chase funding bodies on your behalf when a file has stalled past its stated processing time.</li>
            <li>Run the college's own hardship fund quietly and quickly when something sudden happens.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-foreground">What we don't do</h2>
          <div className="w-14 h-0.5 bg-gold mt-3" />
          <ul className="mt-6 space-y-4 text-sm md:text-base text-foreground leading-relaxed font-light">
            <li>We don't decide federal or state awards. Those panels do; we help your file be complete when it reaches them.</li>
            <li>We don't publish your income or family circumstances to anyone outside the desk.</li>
            <li>We don't promise an award. Anyone who tells you a programme is guaranteed is not reading the eligibility rules.</li>
            <li>We don't hold your documents beyond the appeal period for the year they relate to.</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader eyebrow="How we work" title="Three commitments on this site" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="bg-card border border-border shadow-card p-6">
              <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-lg text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-navy text-paper p-8 md:p-10">
        <h2 className="text-2xl text-paper">Reach the desk</h2>
        <p className="mt-3 text-sm text-paper/80 max-w-2xl leading-relaxed">
          Walk in on weekday mornings, or write first if that is easier. Bring your IC, your latest
          result slip and current income proof, and most questions are settled in one visit.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
          <div>
            <p className="text-[10px] uppercase tracking-label text-gold">Location</p>
            <p className="mt-1 text-paper/85">Placeholder room, RCMP campus, Ipoh</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-label text-gold">Email</p>
            <p className="mt-1 text-paper/85">placeholder@rcmp.example.my</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-label text-gold">Hours</p>
            <p className="mt-1 text-paper/85">Weekdays, 9am to 1pm</p>
          </div>
        </div>
        <Link
          to="/aids"
          className="mt-8 inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 text-[11px] uppercase tracking-label font-bold hover:bg-gold-soft transition-colors duration-200"
        >
          See what's available <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>

    <Footer />
  </div>
);

export default About;
