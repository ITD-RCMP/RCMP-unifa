import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import SEO from "@/components/SEO";
import SampleNotice from "@/components/SampleNotice";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";

interface Group {
  heading: string;
  intro: string;
  items: { question: string; answer: string }[];
}

const groups: Group[] = [
  {
    heading: "Getting started",
    intro: "The questions students ask before they have read a single listing.",
    items: [
      {
        question: "Do I need to be struggling financially to apply for anything?",
        answer:
          "No. Merit bursaries are awarded on results, work-study is open to anyone who can fit the hours, and a loan is available on income rather than hardship. Read the eligibility block for each programme rather than guessing which ones are 'for people like you'.",
      },
      {
        question: "Can I hold more than one award at the same time?",
        answer:
          "Often yes, as long as the combined money does not exceed your actual fees and approved living costs. A common and sensible combination is a fee waiver to cut what you owe, plus a loan for the balance and living costs. Always declare every award you hold.",
      },
      {
        question: "I'm an international student. What is open to me?",
        answer:
          "Most of the programmes listed here are funded by public money and are restricted to Malaysian citizens. College-level discounts and some private sponsorships can be open to you. Ask the student finance desk rather than assuming the answer.",
      },
      {
        question: "Does using financial aid affect my chances of getting places or rotations?",
        answer:
          "No. Your funding position is not part of academic or placement decisions. The only exception is a sponsorship with a bond, which shapes where you work after you graduate, not your student life.",
      },
    ],
  },
  {
    heading: "Money and repayment",
    intro: "What you actually owe at the end of it.",
    items: [
      {
        question: "What is the difference between a loan, a grant and a waiver?",
        answer:
          "A loan is borrowed and repaid. A grant is given and not repaid, usually because of income. A waiver means the fee is cancelled before it is ever invoiced, so you never pay it and never owe it. A bursary sits close to a waiver but is awarded on results.",
      },
      {
        question: "If I withdraw from the programme, do I owe everything back?",
        answer:
          "Loans follow their own repayment terms and are not automatically cancelled. A sponsorship with a bond normally converts into a repayment of the costs already covered. Read the exit clause of any agreement before signing, and ask the aid office to explain it in plain terms.",
      },
      {
        question: "Will a scholarship or sponsorship show up on my transcript?",
        answer:
          "No. Awards are recorded with the finance office, not on your academic record, and they do not change how your results are read.",
      },
    ],
  },
  {
    heading: "If something goes wrong",
    intro: "Sudden problems, weak semesters and missing documents.",
    items: [
      {
        question: "Something sudden has happened to my family. What is the fastest option?",
        answer:
          "The hardship fund exists for exactly this: it is open all year, decided in days rather than weeks, and confidential. Tell the student finance desk or your personal tutor in the week the problem starts.",
      },
      {
        question: "I had a bad semester. Does that end my funding?",
        answer:
          "Rarely. One weak semester is normally explained rather than punished — write a short note, attach your result slip, and say what changed. Repeated failure or being held back is what puts a renewal at risk.",
      },
      {
        question: "A document I need doesn't exist yet. Should I wait?",
        answer:
          "Submit on time with a note listing what is outstanding. A file inside the window with one page missing beats a complete file that arrives after the deadline.",
      },
      {
        question: "My application has gone quiet. What should I do?",
        answer:
          "Contact the desk with your submission date and reference number once the stated processing time has passed. Stalls are nearly always a missing page or an unread email, not a decision.",
      },
    ],
  },
];

const Faq = () => (
  <div className="bg-background">
    <SEO
      title="Common questions"
      description="Straight answers about financial aid at Royal College of Medicine Perak: holding several awards, repayment, weak semesters and sudden hardship."
    />

    <div className="border-b border-border bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        <SectionHeader
          eyebrow="Quick answers"
          title="Common questions"
          description="The questions the student finance desk hears most often, answered without the form-filling language. If your situation is not here, ask — most odd cases have a workable route."
        />
      </div>
    </div>

    <SampleNotice />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
      <div className="space-y-14">
        {groups.map((group) => (
          <section key={group.heading}>
            <SectionHeader eyebrow={group.heading} title={group.intro} />
            <div className="mt-6 border border-border bg-card shadow-card divide-y divide-border">
              {group.items.map((item) => (
                <details key={item.question} className="group p-5 md:p-6">
                  <summary className="flex items-start gap-3 cursor-pointer list-none">
                    <HelpCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm md:text-base text-foreground font-medium flex-1">
                      {item.question}
                    </span>
                  </summary>
                  <p className="mt-3 pl-7 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 bg-navy text-paper p-8 md:p-10">
        <h2 className="text-2xl text-paper">Your question isn't here?</h2>
        <p className="mt-3 text-sm text-paper/80 max-w-2xl leading-relaxed">
          Bring your income proof and latest result slip to the student finance desk and ask
          directly. A short conversation settles most things that a page of text cannot.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/aids"
            className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 text-[11px] uppercase tracking-label font-bold hover:bg-gold-soft transition-colors duration-200"
          >
            Browse financial aids <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-paper/30 text-paper px-5 py-2.5 text-[11px] uppercase tracking-label font-bold hover:bg-navy-mid transition-colors duration-200"
          >
            About the aid office
          </Link>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Faq;
