import TransportFacilityClient from "./TransportFacilityClient";

export const metadata = {
  title: "School Transport Facility | Bus Routes | Kalinga University",
  description: "Convenient and safe transport facilities for students and staff at Kalinga University. With 30+ buses covering up to 70 KM, we ensure reliable commuting to campus.",
  keywords: "University transport Raipur, Bus facility Chhattisgarh, Kalinga University bus routes, Student commuting Raipur India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/transport-facility",
  },
};

export default function TransportFacilityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Transport Facility - Kalinga University",
    "description": "Information about the university's bus routes, safety measures, and transport services.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Transport", "item": "https://kalingauniversity.ac.in/transport-facility" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TransportFacilityClient />
    </>
  );
}