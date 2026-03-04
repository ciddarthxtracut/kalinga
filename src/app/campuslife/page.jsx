import CampusLifeClient from "./CampusLifeClient";

export const metadata = {
  title: "Campus Life at Kalinga University | Student Experience",
  description: "Experience the vibrant campus life at Kalinga University. Discover student clubs, sports, events, hostel facilities, and a supportive community for holistic growth.",
  keywords: "Campus life Kalinga University, student life in Raipur, university facilities Chhattisgarh, student community India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/campuslife",
  },
};

export default function CampusLifePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Campus Life - Kalinga University",
    "description": "A vibrant community where students learn, grow, and thrive.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Campus Life", "item": "https://kalingauniversity.ac.in/campuslife" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CampusLifeClient />
    </>
  );
}
