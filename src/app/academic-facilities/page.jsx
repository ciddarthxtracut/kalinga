import AcademicFacilitiesClient from "./AcademicFacilitiesClient";

export const metadata = {
  title: "Academic Facilities at Kalinga University | Labs & Libraries",
  description: "Explore the academic facilities at Kalinga University Raipur. Our campus features 90+ advanced labs, a vast central library, and modern learning resources.",
  keywords: "University academic facilities, 90+ Labs Kalinga University, Central Instrumentation Facility Raipur, Academic resources university",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/academic-facilities",
  },
};

export default function AcademicFacilitiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Academic Facilities - Kalinga University",
    "description": "State-of-the-art academic facilities and infrastructure at Kalinga University Raipur.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kalingauniversity.ac.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Academic Facilities",
          "item": "https://kalingauniversity.ac.in/academic-facilities"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AcademicFacilitiesClient />
    </>
  );
}
