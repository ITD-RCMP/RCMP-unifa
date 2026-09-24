/**
 * Financial aid programme listings for Royal College of Medicine Perak (RCMP).
 *
 * IMPORTANT: every programme below is a realistic PLACEHOLDER built so the site can
 * be navigated and reviewed. Amounts, deadlines, contacts and rules must be replaced
 * with the college's real figures before students are sent here.
 */

export type AidType =
  | "loan"
  | "grant"
  | "scholarship"
  | "bursary"
  | "waiver"
  | "work-study"
  | "sponsorship";

export type FundingSource = "government" | "state" | "college" | "private";

export interface AidStep {
  title: string;
  detail: string;
}

export interface AidFaq {
  question: string;
  answer: string;
}

export interface Aid {
  id: string;
  name: string;
  shortName: string;
  type: AidType;
  fundingSource: FundingSource;
  provider: string;
  amount: string;
  amountDetail: string;
  repayment: string;
  summary: string;
  bestFor: string;
  levels: string[];
  tags: string[];
  eligibility: string[];
  notEligible: string[];
  documents: string[];
  steps: AidStep[];
  deadline: string;
  deadlineDetail: string;
  processingTime: string;
  renewal: string;
  serviceCommitment: string;
  contact: string;
  faqs: AidFaq[];
}

export const SITE_IS_SAMPLE = true;

export const SAMPLE_NOTICE =
  "These listings are placeholders. Amounts, deadlines and contacts shown here are illustrative and must be replaced with the college's confirmed figures before this site is used by students.";

export const aidTypeLabels: Record<AidType, { label: string; blurb: string }> = {
  loan: {
    label: "Loan",
    blurb: "Borrowed money you repay after you graduate, usually at a low interest rate.",
  },
  grant: {
    label: "Grant",
    blurb: "Money you do not repay, usually aimed at students with lower household income.",
  },
  scholarship: {
    label: "Scholarship",
    blurb: "Awarded mainly for results. It may come with a service bond.",
  },
  bursary: {
    label: "Bursary",
    blurb: "A partial discount on your fees, awarded by the college.",
  },
  waiver: {
    label: "Fee waiver",
    blurb: "Some or all of your tuition fees are cancelled before you pay them.",
  },
  "work-study": {
    label: "Work-study",
    blurb: "Paid part-time work on campus, arranged around your class timetable.",
  },
  sponsorship: {
    label: "Sponsorship",
    blurb: "An organisation pays your fees and a monthly allowance in return for service.",
  },
};

export const fundingSourceLabels: Record<FundingSource, string> = {
  government: "Federal government",
  state: "Perak state bodies",
  college: "RCMP / college",
  private: "Private sector",
};

export const STUDY_LEVELS = [
  "Foundation in Science",
  "MBBS Year 1",
  "MBBS Year 2",
  "MBBS Year 3",
  "Clinical years (Year 4-5)",
];

export const aids: Aid[] = [
  {
    id: "ptptn-loan",
    name: "PTPTN Higher Education Loan",
    shortName: "PTPTN Loan",
    type: "loan",
    fundingSource: "government",
    provider: "Perbadanan Tabung Pendidikan Tinggi Nasional (PTPTN)",
    amount: "Up to RM20,000 per academic year",
    amountDetail:
      "The exact ceiling depends on your programme and household income. Medical programmes sit in the highest band.",
    repayment: "Must be repaid. Interest is low and repayment starts after you graduate.",
    summary:
      "The main source of study funding for Malaysian students. It covers part of your tuition and can also be paid out as a living allowance each semester.",
    bestFor:
      "Any Malaysian student who needs predictable money every semester and plans to repay it calmly after getting a job.",
    levels: ["MBBS Year 1", "MBBS Year 2", "MBBS Year 3", "Clinical years (Year 4-5)"],
    tags: ["Malaysian citizens", "Full-time", "Living allowance", "Repayable"],
    eligibility: [
      "You are a Malaysian citizen",
      "You have an offer or current enrolment in a full-time recognised programme",
      "You do not already hold a degree at bachelor level or above",
      "Your application is submitted within the PTPTN application window for the semester",
      "Your guarantor and bank details are complete and valid",
    ],
    notEligible: [
      "Students on a full sponsorship that already covers tuition and living costs",
      "Part-time or non-recognised programme enrolments",
      "Applicants who still have an unresolved PTPTN repayment on a previous course",
    ],
    documents: [
      "IC (front and back) and student ID",
      "Offer letter or current enrolment proof",
      "Latest semester result slip",
      "Parents' or guardian's income proof (salary slip, SSM letter, or affidavit if informal)",
      "Active bank account in your own name",
    ],
    steps: [
      {
        title: "Create a PTPTN account",
        detail: "Register online with your IC number and activate the account with your email and phone number.",
      },
      {
        title: "Start a loan application for the semester",
        detail: "Select the college and programme, then confirm the amount you are requesting for the year.",
      },
      {
        title: "Upload documents and nominate a guarantor",
        detail: "Your guarantor receives a verification link and must approve before the file moves forward.",
      },
      {
        title: "Wait for approval, then sign the loan agreement",
        detail: "Once approved you sign the agreement online; the college confirms your enrolment on its side.",
      },
      {
        title: "Check the disbursement date",
        detail: "Tuition goes to the college, the living allowance is paid into your bank account in instalments.",
      },
    ],
    deadline: "Opens at the start of each semester",
    deadlineDetail:
      "Apply within the first weeks of the semester. Late files are usually held to the next cycle, which means you pay out of pocket first.",
    processingTime: "4 to 8 weeks from a complete submission",
    renewal: "You re-apply every academic year, with your latest result slip.",
    serviceCommitment: "None. There is no work bond attached to this loan.",
    contact: "Placeholder: aid office can supply the current PTPTN helpdesk line",
    faqs: [
      {
        question: "Can I hold a PTPTN loan and another grant at the same time?",
        answer:
          "Usually yes, as long as the other award does not already cover the same cost. Declare both honestly; undisclosed double funding is the most common reason files are reopened.",
      },
      {
        question: "What happens if I fail a semester?",
        answer:
          "Your next-year application is reviewed on your results. A weak semester is not automatically fatal, but you should write a short explanation and attach your result slip.",
      },
      {
        question: "When do I start repaying?",
        answer:
          "Repayment begins after you finish or leave the programme, not while you are still studying. Keeping your contact details current is what prevents penalties later.",
      },
    ],
  },
  {
    id: "maipk-zakat",
    name: "MAIPk Zakat Education Assistance",
    shortName: "MAIPk Zakat Aid",
    type: "grant",
    fundingSource: "state",
    provider: "Majlis Agama Islam dan Adat Melayu Perak (MAIPk)",
    amount: "RM2,000 to RM5,000 per year",
    amountDetail: "Paid as a lump sum to cover tuition shortfall, books and living costs.",
    repayment: "No repayment. This is zakat distribution, not a loan.",
    summary:
      "Zakat-based education help for eligible Muslim students from lower-income Perak households. It is designed to close the gap that a loan cannot cover.",
    bestFor:
      "Muslim students from Perak whose household income is low and who do not want to add debt to their medical training.",
    levels: ["MBBS Year 1", "MBBS Year 2", "MBBS Year 3", "Clinical years (Year 4-5)"],
    tags: ["Perak residents", "B40", "Muslim", "No repayment", "Annual"],
    eligibility: [
      "You are a Muslim and a Perak resident",
      "Your household income falls within the asnaf category used by MAIPk",
      "You are enrolled full-time and your attendance is satisfactory",
      "You are not receiving a full sponsorship that already covers tuition and allowance",
      "Your parents' or guardian's income proof and zakat status records are available",
    ],
    notEligible: [
      "Students outside the Perak jurisdiction",
      "Households above the income ceiling for the asnaf category",
      "Students already holding a full government or corporate sponsorship",
    ],
    documents: [
      "IC and student ID",
      "Parents' or guardian's income proof, within the last 12 months",
      "Latest result slip or offer letter",
      "Bank account statement in your name",
      "Any existing zakat recipient reference number",
    ],
    steps: [
      {
        title: "Confirm your asnaf category",
        detail: "Check with MAIPk whether your household is registered under a recognised category before you start.",
      },
      {
        title: "Submit the education assistance form",
        detail: "Complete the annual application and attach income proof that is no older than 12 months.",
      },
      {
        title: "Attend the interview or verification visit",
        detail: "Some files are verified by phone or by a home visit. Answer consistently with your documents.",
      },
      {
        title: "Receive the payout and keep your records",
        detail: "Assistance is normally paid directly to your bank account; keep receipts in case of audit.",
      },
    ],
    deadline: "Once a year, around the start of the academic session",
    deadlineDetail:
      "There is one main window each year. Missing it means waiting a full cycle, so submit early even if your documents are still arriving.",
    processingTime: "6 to 10 weeks",
    renewal: "Renewable each year if your income situation and results remain eligible.",
    serviceCommitment: "None.",
    contact: "Placeholder: aid office can supply the current MAIPk education desk line",
    faqs: [
      {
        question: "Does a weak semester disqualify me?",
        answer:
          "Not automatically. Continuous failure or being held back is what normally stops a renewal, so report problems early and ask the aid office to note them.",
      },
      {
        question: "Do I have to repay this if my family's income improves?",
        answer:
          "No repayment is required for assistance already paid. Your renewed application is simply reassessed against your new income position.",
      },
    ],
  },
  {
    id: "yayasan-perak",
    name: "Yayasan Perak Education Loan",
    shortName: "Yayasan Perak Loan",
    type: "loan",
    fundingSource: "state",
    provider: "Yayasan Perak",
    amount: "Up to RM10,000 per academic year",
    amountDetail: "Paid to the college for fees, with any remainder released to you for study costs.",
    repayment: "Repayable after graduation, on a scheduled instalment plan.",
    summary:
      "A state-level loan for Perak-born students, often used alongside PTPTN to cover the part of medical fees a federal loan does not reach.",
    bestFor:
      "Perak-born students whose household income is modest and who want a state-backed loan on top of a federal one.",
    levels: ["Foundation in Science", "MBBS Year 1", "MBBS Year 2", "MBBS Year 3", "Clinical years (Year 4-5)"],
    tags: ["Perak-born", "Modest income", "Repayable", "Annual"],
    eligibility: [
      "You were born in Perak or your parents are long-term Perak residents",
      "Household income is within the foundation's ceiling",
      "You maintain a satisfactory academic standing",
      "You are not holding another full scholarship for the same costs",
    ],
    notEligible: [
      "Applicants without a Perak connection",
      "Students whose fees are fully sponsored elsewhere",
      "Anyone with an outstanding Yayasan loan that has not been settled or restructured",
    ],
    documents: [
      "IC and birth certificate",
      "Parents' income proof, within the last 12 months",
      "Offer letter or enrolment proof",
      "Latest result slip",
      "Two referees, normally one academic and one community leader",
    ],
    steps: [
      {
        title: "Check the application window",
        detail: "The foundation announces a fixed window each year; the aid office posts the link when it opens.",
      },
      {
        title: "Complete the loan form and nominate referees",
        detail: "Referees are contacted directly, so tell them in advance and give current contact numbers.",
      },
      {
        title: "Submit with income proof",
        detail: "Incomplete income documents are the most common reason a file is returned to the start of the queue.",
      },
      {
        title: "Sign the loan agreement",
        detail: "Signed agreements are returned before the disbursement date; keep your own copy of every page.",
      },
    ],
    deadline: "Annual window, announced before the semester begins",
    deadlineDetail: "The window normally closes a few weeks into the semester. Apply in the first week it opens.",
    processingTime: "6 to 12 weeks",
    renewal: "Re-apply each year with a fresh result slip.",
    serviceCommitment: "None.",
    contact: "Placeholder: aid office can supply the current Yayasan Perak scholarship unit line",
    faqs: [
      {
        question: "Can I combine this with PTPTN?",
        answer:
          "In most cases yes, provided the combined amount does not exceed your actual fees and approved living costs. Declare both applications.",
      },
      {
        question: "Is there a bond?",
        answer:
          "There is no service bond. It is a repayable loan, so plan for instalments after you start working.",
      },
    ],
  },
  {
    id: "rcmp-merit-bursary",
    name: "RCMP Merit Bursary",
    shortName: "Merit Bursary",
    type: "bursary",
    fundingSource: "college",
    provider: "Royal College of Medicine Perak",
    amount: "25% to 50% off one year of tuition",
    amountDetail: "Applied as a credit against your tuition invoice, not paid out in cash.",
    repayment: "No repayment.",
    summary:
      "A college bursary that recognises strong results and reduces the next year's tuition bill. It is awarded automatically to shortlisted students, so you usually do not have to chase it.",
    bestFor:
      "Students with consistently strong exam results who want their fees reduced rather than borrowed.",
    levels: ["MBBS Year 1", "MBBS Year 2", "MBBS Year 3", "Clinical years (Year 4-5)"],
    tags: ["Academic merit", "Tuition discount", "No repayment", "College award"],
    eligibility: [
      "You are enrolled full-time at RCMP",
      "Your most recent annual results are inside the merit band published by the college",
      "You have no disciplinary record",
      "You are not already receiving a fee waiver for the same academic year",
    ],
    notEligible: [
      "Students whose fees are already fully waived or fully sponsored",
      "Students carrying unresolved repeat modules",
    ],
    documents: [
      "Latest official result slip",
      "Short personal statement confirming you accept the bursary",
      "Bank details only if a portion is paid out as a book allowance",
    ],
    steps: [
      {
        title: "Results are processed",
        detail: "The registry publishes the merit band shortly after the annual exam board meets.",
      },
      {
        title: "Shortlisted students are contacted",
        detail: "You receive an email from the aid office with your offer and the acceptance deadline.",
      },
      {
        title: "Accept in writing",
        detail: "Reply by the stated date. An unaccepted offer is passed to the next student.",
      },
      {
        title: "Check your invoice",
        detail: "The bursary appears as a credit line on your next tuition invoice before you pay.",
      },
    ],
    deadline: "Acceptance closes two weeks after offers are emailed",
    deadlineDetail: "Offers are sent once a year after the exam board. Watch your college email address, not personal mail.",
    processingTime: "Awarded within 4 weeks of results release",
    renewal: "Reassessed every year against your latest results.",
    serviceCommitment: "None.",
    contact: "Placeholder: student finance desk extension and email",
    faqs: [
      {
        question: "Do I need to apply for it?",
        answer:
          "No. Eligible students are identified from results. Your only task is to accept the offer quickly and keep your college email working.",
      },
      {
        question: "Can I hold it together with a PTPTN loan?",
        answer:
          "Yes. A bursary reduces the fee you owe, and a loan can still cover the balance and living costs.",
      },
    ],
  },
  {
    id: "rcmp-hardship-fund",
    name: "RCMP Student Hardship Fund",
    shortName: "Hardship Fund",
    type: "grant",
    fundingSource: "college",
    provider: "Royal College of Medicine Perak",
    amount: "RM500 to RM3,000, one-off",
    amountDetail: "Released urgently, usually within days, to cover a specific immediate cost.",
    repayment: "No repayment.",
    summary:
      "A fast, confidential grant for students hit by something sudden: a bereavement, a parent losing work, a medical emergency, or a family disaster that makes this semester unaffordable.",
    bestFor:
      "Any enrolled student facing an unexpected financial shock that threatens their ability to continue this semester.",
    levels: ["Foundation in Science", "MBBS Year 1", "MBBS Year 2", "MBBS Year 3", "Clinical years (Year 4-5)"],
    tags: ["Emergency", "Confidential", "No repayment", "Any year"],
    eligibility: [
      "You are currently enrolled at RCMP",
      "A sudden event in the last three months has affected your ability to pay",
      "You have spoken to the student finance desk or your personal tutor about the situation",
    ],
    notEligible: [
      "Planned costs that were foreseeable, such as a known fee increase",
      "Debts arising from personal borrowing or lifestyle spending",
    ],
    documents: [
      "A short written statement of what changed and when",
      "Supporting evidence where available: death certificate, termination letter, hospital bill",
      "Current bank balance or a statement showing the shortfall",
    ],
    steps: [
      {
        title: "Tell someone early",
        detail: "Contact the student finance desk or your personal tutor. Do not wait until the payment deadline passes.",
      },
      {
        title: "Submit a one-page statement",
        detail: "Say what happened, what it costs you, and what you need this week. Short and specific is fine.",
      },
      {
        title: "Attach whatever evidence you have",
        detail: "Missing evidence does not block an emergency award; the panel can follow up with you.",
      },
      {
        title: "Decision and release",
        detail: "Emergency cases are normally decided within 3 to 5 working days and paid to your account or your invoice.",
      },
    ],
    deadline: "Open all year",
    deadlineDetail: "There is no window. Apply the week the problem starts, not the month it becomes a crisis.",
    processingTime: "3 to 5 working days",
    renewal: "One-off by design. Repeat requests are reviewed case by case with a support plan.",
    serviceCommitment: "None.",
    contact: "Placeholder: emergency student finance desk line and email",
    faqs: [
      {
        question: "Will my lecturers find out?",
        answer:
          "The fund is handled confidentially by the student finance desk. Your academic staff are told only what is needed to support you, and only with your consent.",
      },
      {
        question: "Does it affect my other applications?",
        answer:
          "No. Receiving hardship help is not a mark against you, and it does not reduce your standing for loans, bursaries or grants.",
      },
    ],
  },
  {
    id: "campus-work-study",
    name: "Campus Work-Study Placement",
    shortName: "Work-Study",
    type: "work-study",
    fundingSource: "college",
    provider: "Royal College of Medicine Perak",
    amount: "About RM450 to RM600 per month",
    amountDetail: "Paid hourly for up to 10 hours a week during term time, at a higher rate in the vacation.",
    repayment: "Not a loan. You are paid for work done.",
    summary:
      "A paid on-campus job built around your timetable: library, skills lab support, student services or research assistance. It gives you income and something real for your CV.",
    bestFor:
      "Students who want steady income without debt, and who can protect ten hours a week around clinical rotations.",
    levels: ["MBBS Year 1", "MBBS Year 2", "MBBS Year 3", "Clinical years (Year 4-5)"],
    tags: ["Earn while studying", "No debt", "Timetabled", "CV experience"],
    eligibility: [
      "You are enrolled full-time and your attendance is in good standing",
      "You can commit to up to 10 hours a week without clashing with labs or postings",
      "Your results are not currently under an academic probation review",
    ],
    notEligible: [
      "Students on heavy clinical rotations where the hours cannot be scheduled",
      "Anyone already holding an external paid job that conflicts with college hours",
    ],
    documents: [
      "Current timetable showing your free windows",
      "Short CV, one page is enough",
      "Confirmation from your personal tutor that the hours will not clash",
    ],
    steps: [
      {
        title: "Check the open roles",
        detail: "Positions are posted at the start of each semester on the student noticeboard.",
      },
      {
        title: "Apply with your timetable and CV",
        detail: "Say which two or three windows you are genuinely free. Honest availability beats an optimistic one.",
      },
      {
        title: "Short interview with the supervising unit",
        detail: "Ten minutes, practical: what the role involves and how the hours fit.",
      },
      {
        title: "Start and get paid monthly",
        detail: "Hours are logged weekly and paid into your bank account at the end of each month.",
      },
    ],
    deadline: "Applications open two weeks before each semester",
    deadlineDetail: "Places are limited and popular roles close early. Apply in the first week of posting.",
    processingTime: "1 to 3 weeks",
    renewal: "You can continue in the role across semesters if your timetable still fits.",
    serviceCommitment: "None.",
    contact: "Placeholder: student services employment desk",
    faqs: [
      {
        question: "Will it hurt my study time?",
        answer:
          "The cap exists for that reason. Ten hours a week is deliberately modest, and the schedule is agreed with your tutor so it bends around exams.",
      },
      {
        question: "Does it count as work experience?",
        answer:
          "Yes. Supervised college roles are worth listing on your CV and in internship applications, especially research assistance.",
      },
    ],
  },
  {
    id: "atm-medical-sponsorship",
    name: "Malaysian Armed Forces Medical Sponsorship",
    shortName: "ATM Sponsorship",
    type: "sponsorship",
    fundingSource: "government",
    provider: "Malaysian Armed Forces (Angkatan Tentera Malaysia)",
    amount: "Full tuition plus a monthly allowance",
    amountDetail: "Tuition, required books and a monthly living allowance are covered for the whole programme.",
    repayment: "Nothing to repay, but you serve a bond as a medical officer after graduation.",
    summary:
      "A full sponsorship in exchange for a service commitment. It removes tuition and living-cost pressure entirely, in return for working as a military medical officer for the agreed period.",
    bestFor:
      "Students who want their training fully funded and are genuinely comfortable with a bond, posting decisions and military discipline.",
    levels: ["MBBS Year 1", "MBBS Year 2", "MBBS Year 3", "Clinical years (Year 4-5)"],
    tags: ["Full funding", "Service bond", "Competitive", "Allowance"],
    eligibility: [
      "Malaysian citizen, meeting the age range published for the intake",
      "You pass the armed forces medical and physical fitness screening",
      "You meet the academic entry requirements for the medical programme",
      "You accept the bond length and posting terms before you sign",
      "You clear the selection interview and assessment centre",
    ],
    notEligible: [
      "Candidates who decline the bond or the posting terms",
      "Anyone failing the medical, fitness or security screening",
      "Students already holding another full sponsorship without first releasing it",
    ],
    documents: [
      "SPM and foundation or pre-med result slips",
      "IC and passport-sized photographs to the published specification",
      "Medical screening results",
      "Written acceptance of the bond terms",
    ],
    steps: [
      {
        title: "Apply during the intake window",
        detail: "Applications open once a year and close early. Read the bond length before you submit anything.",
      },
      {
        title: "Screening and fitness test",
        detail: "Medical, physical and documentation checks are scheduled in batches after the deadline.",
      },
      {
        title: "Interview and assessment",
        detail: "A panel reviews motivation, discipline and your understanding of what the bond requires.",
      },
      {
        title: "Offer, bond signing, then enrolment",
        detail: "You sign the bond before your sponsorship takes effect. Keep a full signed copy.",
      },
    ],
    deadline: "One intake a year",
    deadlineDetail: "The window is short and fixed. Check the published closing date rather than relying on reminders.",
    processingTime: "3 to 5 months from closing date to final offer",
    renewal: "Continues for the whole programme provided you remain in good standing.",
    serviceCommitment: "Yes. A bond of service as a medical officer, length set in the agreement.",
    contact: "Placeholder: armed forces recruitment education desk",
    faqs: [
      {
        question: "What happens if I leave the programme halfway?",
        answer:
          "The bond converts into a repayment of the sponsorship costs. Read the exit clause carefully before signing, and ask the aid office to walk you through it.",
      },
      {
        question: "Can I do housemanship anywhere I choose?",
        answer:
          "Posting decisions follow the sponsoring organisation's needs. If location certainty matters to you, that is a real trade-off to weigh now.",
      },
    ],
  },
  {
    id: "tuition-fee-waiver",
    name: "Tuition Fee Waiver for B40 and Orphaned Students",
    shortName: "Fee Waiver",
    type: "waiver",
    fundingSource: "college",
    provider: "Royal College of Medicine Perak",
    amount: "50% to 100% of tuition fees",
    amountDetail: "Deducted from your invoice before payment, for the semesters you remain eligible.",
    repayment: "No repayment.",
    summary:
      "Fees cancelled at source for students who cannot realistically carry them: those from the lowest income band, and students who have lost a parent or guardian. No invoice is issued for the waived portion.",
    bestFor:
      "Students from the lowest income band, and orphaned or guardianship students, who need the fee removed rather than financed.",
    levels: ["Foundation in Science", "MBBS Year 1", "MBBS Year 2", "MBBS Year 3", "Clinical years (Year 4-5)"],
    tags: ["B40", "Orphaned students", "No repayment", "Reduced at source"],
    eligibility: [
      "You are enrolled full-time at RCMP",
      "Household income falls inside the lowest income band, or you are orphaned or in state guardianship",
      "You submit income or guardianship evidence that is current",
      "You are not already receiving a full fee waiver from another body",
    ],
    notEligible: [
      "Students whose fees are fully sponsored elsewhere",
      "Applicants whose income evidence is older than the accepted period",
    ],
    documents: [
      "Parents' or guardian's income proof, within the last 12 months",
      "Death certificate or guardianship order where applicable",
      "Latest result slip",
      "Completed waiver request form signed by your personal tutor",
    ],
    steps: [
      {
        title: "Collect current evidence",
        detail: "Income proof older than 12 months will not be accepted, so renew it before you submit.",
      },
      {
        title: "Submit the waiver request before invoicing",
        detail: "Waivers are applied to the invoice, so the request must reach the finance desk before bills are issued.",
      },
      {
        title: "Assessment panel review",
        detail: "Your file is checked against the income band and any other funding you receive.",
      },
      {
        title: "Receive the revised invoice",
        detail: "You are issued an invoice showing the waiver as a line item, then pay only the remaining balance.",
      },
    ],
    deadline: "Six weeks before each semester's invoicing date",
    deadlineDetail: "Late requests cannot be applied to an invoice that has already been issued, so the discount slips to the next semester.",
    processingTime: "2 to 4 weeks",
    renewal: "Reviewed each year, with fresh income evidence.",
    serviceCommitment: "None.",
    contact: "Placeholder: student finance desk extension and email",
    faqs: [
      {
        question: "Is a waiver the same as a bursary?",
        answer:
          "Both reduce your fees. A waiver is need-based and applied before invoicing; a bursary is merit-based and applied after results are released.",
      },
      {
        question: "Can I also take a PTPTN loan?",
        answer:
          "Yes. A waiver lowers what you owe, and a loan can then cover the remaining balance plus living costs, which is often the cheapest combination.",
      },
    ],
  },
];

export const getAidById = (id?: string): Aid | undefined =>
  aids.find((aid) => aid.id === id);

export const aidsByType = (type: AidType): Aid[] =>
  aids.filter((aid) => aid.type === type);

export const relatedAids = (aid: Aid, limit = 3): Aid[] =>
  aids
    .filter((other) => other.id !== aid.id)
    .sort((a, b) => {
      const shared = (x: Aid) => x.tags.filter((t) => aid.tags.includes(t)).length;
      return shared(b) - shared(a);
    })
    .slice(0, limit);

export const aidTypeCounts = (): { type: AidType; count: number }[] =>
  (Object.keys(aidTypeLabels) as AidType[])
    .map((type) => ({ type, count: aidsByType(type).length }))
    .filter((entry) => entry.count > 0);

/** Rows used by the comparison table on the browse page. */
export const comparisonRows: {
  label: string;
  value: (aid: Aid) => string;
}[] = [
  { label: "What you get", value: (aid) => aid.amount },
  { label: "Do you repay it?", value: (aid) => aid.repayment },
  { label: "Who it's for", value: (aid) => aid.bestFor },
  { label: "Apply by", value: (aid) => aid.deadline },
  { label: "How long it takes", value: (aid) => aid.processingTime },
  { label: "Service bond", value: (aid) => aid.serviceCommitment },
];
