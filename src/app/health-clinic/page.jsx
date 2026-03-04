import HealthClinicClient from "./HealthClinicClient";

export const metadata = {
  title: "University Health Clinic | Medical Facilities | Kalinga University",
  description: "Ensuring student well-being at Kalinga University. Our on-campus health clinic provides medical assistance, first aid, and wellness support for all students.",
  keywords: "University health clinic Raipur, Medical facilities Chhattisgarh, Student wellness support Kalinga, On-campus physician India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/health-clinic",
  },
};

export default function HealthClinicPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Health Clinic - Kalinga University",
    "description": "Details about the medical clinic and health support services available to students at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Health Clinic", "item": "https://kalingauniversity.ac.in/health-clinic" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HealthClinicClient />
    </>
  );
}