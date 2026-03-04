import ScholarshipsClient from "./ScholarshipsClient";

export const metadata = {
  title: "Scholarships 2026-27 | Kalinga University Raipur",
  description: "Explore Kalinga University scholarships for meritorious students. We offer social, merit, and sports scholarships worth 3 Crores+ distributed. Apply now.",
  keywords: "University scholarship India, Merit scholarship Raipur, Scholarships for students 2026, Kalinga University financial aid, SC/ST scholarships Chhattisgarh",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/scholarships",
  },
};

export default function ScholarshipsPage() {
  const whyStudyItems = [
    { id: 1, title: "Over 5000+ top performers have been rewarded." },
    { id: 2, title: "Scholarships worth 3 Crores+ distributed." },
    { id: 3, title: "Recognising the hard work and talent of young minds." },
    { id: 4, title: "Rewarding excellence beyond academics." },
    { id: 5, title: "Fast-track your university admission process." },
    { id: 6, title: "Focus on learning instead of stressing." },
    { id: 7, title: "Helping you manage your academic budget." },
  ];

  const defaultFAQItems = [
    { id: 1, question: "When can I apply for scholarships?", answer: "As soon as you complete your 12th board exams or graduation exams, you can complete the university admission process. Our admission counsellors will check your eligibility, and if you are found eligible, you can claim a scholarship on your tuition fee." },
    { id: 2, question: "How will I know if I have received a scholarship?", answer: "Students will be informed about the scholarship at the time of admission. The updated fees will be reflected in their ERP." },
    { id: 3, question: "Can I get multiple scholarships?", answer: "No, students can avail themselves of only one scholarship at a time during their college admission process." },
    { id: 4, question: "What are the chances of securing a scholarship?", answer: "Our scholarships are highly competitive, and we offer a limited number of scholarships. You need to act fast before all slots are filled." },
    { id: 5, question: "Is there an interview process for scholarship selection?", answer: "There is no interview round for availing scholarships. You just need to meet the eligibility criteria, and we will keep you informed." },
    { id: 6, question: "Are Kalinga University scholarships available for international students?", answer: "No, currently Kalinga University does not offer scholarships for international students." },
    { id: 7, question: "Can I get a scholarship for a postgraduate program?", answer: "Yes, based on your graduation marks and KALSEE scores, you may receive a certain percentage of scholarship on your tuition fee." },
    { id: 8, question: "Can I get a scholarship if I don’t have good academic marks?", answer: "If your academic marks are not strong, you may still be eligible for scholarships based on your KALSEE marks or through other exclusive scholarship schemes." },
    { id: 9, question: "Does the scholarship cover hostel or living expenses?", answer: "No, scholarships do not cover hostel or living expenses. However, a good tuition fee scholarship can significantly reduce your overall academic cost." },
    { id: 10, question: "Can I get a scholarship if I have a gap year in my education?", answer: "Yes, students with a gap year are still eligible for scholarships, depending on the marks secured in their academics." },
  ];

  const Banks = [
    { id: 1, name: "Canara Bank", title: "Canara Bank provides education loans and financial assistance to needy and meritorious students seeking admission to Kalinga University, subject to the fulfilment of the bank’s terms, conditions, and eligibility norms.", image: "https://cdn.kalingauniversity.ac.in/scholarships/canara.webp" },
    { id: 2, name: "Central Bank of India", title: "Central Bank of India offers education loans and financial assistance to students pursuing studies at Kalinga University, in accordance with the bank’s guidelines and applicable norms.", image: "https://cdn.kalingauniversity.ac.in/scholarships/central-1.webp" },
  ];

  const scholarships = [
    { id: 1, title: "Social Scholarships", description: "Scholarships supporting special categories and social causes (as per KU policy).", icon: "https://cdn.kalingauniversity.ac.in/logos/book-logo.png" },
    { id: 2, title: "Merit Scholarships", description: "Scholarships based on aggregate percentage in qualifying examination.", icon: "https://cdn.kalingauniversity.ac.in/admission/merit.svg" },
    { id: 3, title: "Entrance Exam Scholarships", description: "Scholarships based on percentile in national/state entrance & competitive exams.", icon: "https://cdn.kalingauniversity.ac.in/admission/social.svg" },
    { id: 4, title: "Culture & Achievers Scholarships", description: "Scholarships for cultural excellence and exceptional achievements (case-to-case).", icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/scholarship-2.png" },
    { id: 5, title: "Siblings Scholarships", description: "Scholarships for direct blood relations of current KU students (as per policy).", icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/scholarship-3.png" },
    { id: 6, title: "Sports Scholarships", description: "Scholarships for participation at District/State/National/International levels.", icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/sports-bg.png" },
    { id: 7, title: "Social Media Scholarships", description: "Scholarships for strong social media presence involved in knowledge dissemination.", icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/social_media-bg.png" },
    { id: 8, title: "Innovation & Research Scholarships", description: "Scholarships for research publications, books, startups, and product innovation.", icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/research-bg.png" },
    { id: 9, title: "Other Scholarships", description: "Additional KU-specific scholarships as per scholarship committee/policy.", icon: "https://cdn.kalingauniversity.ac.in/admission/scholarship/scholarship-10bg.png" },
  ];

  const scholarshipPopupData = {
    "Social Scholarships": {
      heading: "Social Scholarships",
      intro: "Applicable on Tuition Fee (as per KU Scholarship Policy 2025–26).",
      points: [
        "Scholarship to the wards and siblings of Martyred Personnel of the Indian Army / Indian Air Force / Indian Navy / Indian Central & State paramilitary forces / Police / NCC — 50%",
        "Scholarship to the wards of serving and retired personnel of the Indian Army / Indian Air Force / Indian Navy / Indian Central & State paramilitary forces / Police / NCC — 20%",
        "Scholarship to students who are physically challenged at the time of applying — 20%",
        "Scholarship to Girl applicants — 20%",
        "Scholarship for the wards of Health and Hospital frontline workers — 20%",
        "Scholarship for the wards of Bharat Ratna / Padma Vibhushan / Padma Bhushan / Padma Shri / National Award winners — 100%",
      ],
    },
    "Merit Scholarships": {
      heading: "Merit Scholarships",
      intro: "Merit scholarships are based on the aggregate percentage scored in the qualifying examination (Tuition Fee waiver).",
      points: [
        "95% & Above — 100%",
        "Between 90% to 94% — 50%",
        "Between 80% to 89% — 30%",
        "Between 70% to 79% — 20%",
        "Between 60% to 69% — 15%",
        "Top 10 positions in CBSE / State Boards / IB / ICSE / Cambridge boards (2025) — 100%",
      ],
    },
    // ... truncated some for brevity if needed, but normally keep full data
    "Entrance Exam Scholarships": {
      heading: "Entrance Exam Scholarships",
      intro: "Applicable for students who scored well in national/state competitive & entrance exams in 2024–25 (Tuition Fee waiver).",
      points: [
        "Eligible exams include: UGAT, JEE, CAT, XAT, MAT, ATMA, CMAT, LSAT, CLAT, SAT, GMAT, NEET, GATE, NDA, NIFT, UPSC, CGPSC, GPAT, UGAT, other State PSC exams.",
        "80 percentile and above — 50%",
        "70 to 79.99 percentile — 30%",
      ],
    },
    "Culture & Achievers Scholarships": {
      heading: "Culture & Achievers Scholarships",
      intro: "Applicable on Tuition Fee (as per policy).",
      points: [
        "Applicants who participated and secured positions/awards in recognized National/International cultural events or participated in TV reality shows — 30%",
        "Applicants listed in Limca Book of Records / Golden Book of Records / Guinness Book of Records may be considered on a case-to-case basis.",
      ],
    },
    "Siblings Scholarships": {
      heading: "Siblings Scholarships",
      intro: "Applicable only for direct blood relations of students currently studying.",
      points: [
        "20% scholarship is offered on Tuition Fee to students taking admission in Academic Session 2025–26.",
        "Valid only till completion of the course of the elder sibling.",
      ],
    },
    "Sports Scholarships": {
      heading: "Sports Scholarships",
      intro: "Applicable on Tuition Fee for sports participation in last 3 years.",
      points: [
        "Asiad / International level recognized sports events — 40%",
        "National level recognized sports events — 30%",
        "State level recognized sports events — 20%",
        "District level recognized sports events — 10%",
      ],
    },
    "Social Media Scholarships": {
      heading: "Social Media Scholarships",
      intro: "Applicants with strong social media presence involved in knowledge dissemination.",
      points: [
        "50K+ subscribers/followers — 50%",
        "25K+ subscribers/followers — 30%",
      ],
    },
    "Innovation & Research Scholarships": {
      heading: "Innovation & Research Scholarships",
      intro: "Decided by the University Scholarship Committee (Tuition Fee waiver).",
      points: [
        "Applicants who have published research papers, books, startups and product innovation — 50%",
      ],
    },
    "Other Scholarships": {
      heading: "Other Scholarships",
      intro: "Additional KU scholarships (Tuition Fee waiver).",
      points: [
        "Wards of Kalinga University Teaching and Non-Teaching Staff — 50%",
      ],
    },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Scholarships - Kalinga University",
    "description": "Scholarship opportunities and financial aid for students at Kalinga University Raipur.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Scholarships", "item": "https://kalingauniversity.ac.in/scholarships" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScholarshipsClient
        whyStudyItems={whyStudyItems}
        defaultFAQItems={defaultFAQItems}
        Banks={Banks}
        scholarships={scholarships}
        scholarshipPopupData={scholarshipPopupData}
      />
    </>
  );
}
