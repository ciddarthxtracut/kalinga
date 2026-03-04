import CampusFacilitiesClient from "./CampusFacilitiesClient";

export const metadata = {
  title: "University Campus Facilities | Kalinga University Hostel & Sports",
  description: "Explore Kalinga University campus facilities. We offer world-class hostels, libraries, gym, sports complex, and cafeteria in a 50+ acre eco-friendly campus.",
  keywords: "University campus facilities, University hostel facilities, Student life in university, Kalinga University Raipur campus",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/campus-facilities",
  },
};

export default function CampusFacilitiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Campus Facilities - Kalinga University",
    "description": "Information about campus facilities at Kalinga University Raipur including hostel, library, and sports.",
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
          "name": "Campus Facilities",
          "item": "https://kalingauniversity.ac.in/campus-facilities"
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
      <CampusFacilitiesClient />
    </>
  );
}
