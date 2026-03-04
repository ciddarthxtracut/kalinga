import AcademicCalendarClient from "./AcademicCalendarClient";

export const metadata = {
  title: "Academic Calendar 2025-26 | Important Dates | Kalinga University",
  description: "Stay updated with Kalinga University's academic calendar 2025-26. Find important dates for semesters, exams, holidays, and academic events for all departments.",
  keywords: "Academic calendar Kalinga University, university dates 2025-26 Raipur, semester schedule Chhattisgarh, exam dates Kalinga",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/academic-calendar",
  },
};

export default function AcademicCalendarPage() {
  const annualReportButtons = [
    {
      id: 0,
      text: "B. Pharmacy",
      href: "https://cdn.kalingauniversity.ac.in/academic-calendar/Academic+Calendar+(Tentative)+2025-26+Only+for+B.+Pharmacy.pdf",
    },
    {
      id: 1,
      text: "D. Pharmacy & Pharm D (Revised)",
      href: "https://cdn.kalingauniversity.ac.in/academic-calendar/Academic+Calendar+D.+Pharmacy+%26+Pharm+D+(Revised).pdf",
    },
    {
      id: 2,
      text: "Except Annual Mode & B. Pharmacy",
      href: "https://cdn.kalingauniversity.ac.in/academic-calendar/Academic+Calendar+(Tentative)+2025-26+(Except+Annual+Mode+%26+B.+Pharmacy.pdf",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Academic Calendar 2025-26 - Kalinga University",
    "description": "The academic calendar for the year 2025-26 covers all the academic events scheduled throughout the year at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Academic Calendar", "item": "https://kalingauniversity.ac.in/academic-calendar" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademicCalendarClient annualReportButtons={annualReportButtons} />
    </>
  );
}
