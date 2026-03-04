import AdmissionsClient from "./AdmissionsClient";

export const metadata = {
  title: "University Admissions 2026 | Kalinga University Raipur Open",
  description: "Apply for Kalinga University admissions 2026. Explore courses, eligibility criteria, fee structure, and scholarships at the best private university in Raipur.",
  keywords: "University admissions 2026, Admission open 2026 university, How to apply for university admission, University eligibility criteria, University fees structure, University scholarship India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/admissions",
  },
};

export default function AdmissionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
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
          "name": "Admissions",
          "item": "https://kalingauniversity.ac.in/admissions"
        }
      ]
    },
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Kalinga University Admissions",
      "description": "Admission procedure for Kalinga University Raipur for the academic year 2026."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AdmissionsClient />
    </>
  );
}
