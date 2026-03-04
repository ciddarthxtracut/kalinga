import DownloadsClient from "./DownloadsClient";

export const metadata = {
  title: "Downloads | Resources | Kalinga University",
  description: "Access and download important forms, brochures, syllabus, and academic resources from Kalinga University. All necessary documents for students and applicants in one place.",
  keywords: "University downloads Kalinga University, admission forms Raipur, syllabus download Chhattisgarh, academic brochures India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/downloads",
  },
};

export default function DownloadsPage() {
  const downloadsreport = [
    { id: 8, text: "New Admission Form", href: "https://cdn.kalingauniversity.ac.in/downloads/newadmissionform.pdf" },
    { id: 1, text: "Application for Bonafide Certificate", href: "https://cdn.kalingauniversity.ac.in/downloads/BONAFIDE+APPLICATION+FORM.pdf" },
    { id: 2, text: "Application for Transcript", href: "https://cdn.kalingauniversity.ac.in/downloads/APPLICATION_FORM_FOR_TRANSCRIPT+CERTIFICATE.pdf" },
    { id: 3, text: "Application for Migration Certificate", href: "https://cdn.kalingauniversity.ac.in/downloads/APPLICATION_FORM_MIGRATION+CERTIFICATE.pdf" },
    { id: 4, text: "Application for Provisional Degree", href: "https://cdn.kalingauniversity.ac.in/downloads/APPLICATION_+FORM_PROVISIONAL+CERTIFICATE.pdf" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Downloads - Kalinga University",
    "description": "Essential academic forms and resources for Kalinga University students.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Downloads", "item": "https://kalingauniversity.ac.in/downloads" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DownloadsClient downloadsreport={downloadsreport} />
    </>
  );
}
