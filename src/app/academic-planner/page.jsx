import AcademicPlannerClient from "./AcademicPlannerClient";

export const metadata = {
  title: "Academic Planner | Semester Workflow | Kalinga University",
  description: "Plan your semester with Kalinga University's academic planner. Detailed schedule of classes, assignments, and academic milestones for all programs.",
  keywords: "Academic planner Kalinga University, university semester plan Raipur, student study schedule Chhattisgarh",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/academic-planner",
  },
};

export default function AcademicPlannerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Academic Planner - Kalinga University",
    "description": "Plan your academic year with our comprehensive calendar and event schedule.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Academic Planner", "item": "https://kalingauniversity.ac.in/academic-planner" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademicPlannerClient />
    </>
  );
}