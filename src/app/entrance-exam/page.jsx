import EntranceExamClient from "./EntranceExamClient";

export const metadata = {
  title: "University Entrance Exams 2026 | KALSEE & KAL-MAT",
  description: "Apply for KALSEE and KAL-MAT entrance exams at Kalinga University. Earn up to 100% scholarship. No negative marking, flexible scheduling, and online mode.",
  keywords: "University entrance exam 2026, KALSEE exam registration, KAL-MAT admission test, University scholarship exam India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/entrance-exam",
  },
};

export default function EntranceExamPage() {
  const Items = [
    { id: 1, text: "Earn Scholarships: Up to 100%." },
    { id: 2, text: "Flexible Scheduling: Schedule the exam at your preferred time." },
    { id: 3, text: "No Negative Marking: Attempt all questions with no worries." },
    { id: 4, text: "Fast-Track Your College Application Process: First-Come, First-Served Basis." },
    { id: 5, text: "Recognised Entrance Exam: A trusted online exam." },
    { id: 6, text: "Access to Premium Programs: Enroll in our world-class programs." },
  ];

  const careerFAQs = [
    { id: 1, question: "What is the fee structure and payment options?", answer: "The fee structure varies by program and includes tuition fees, examination fees, and other charges. We offer flexible payment options including installments and various payment methods. Detailed fee structure is available in the admission brochure." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Entrance Exam - Kalinga University",
    "description": "Details about KALSEE and KAL-MAT entrance examinations for Kalinga University admissions.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Entrance Exam", "item": "https://kalingauniversity.ac.in/entrance-exam" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EntranceExamClient
        Items={Items}
        careerFAQs={careerFAQs}
      />
    </>
  );
}