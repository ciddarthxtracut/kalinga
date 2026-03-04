import CentresOfExcellenceClient from "./CentresOfExcellenceClient";

export const metadata = {
  title: "Centres of Excellence | Innovation Hub | Kalinga University",
  description: "Explore the various Centres of Excellence at Kalinga University. Advancing research, innovation, and industry collaborations in emerging fields of technology and management.",
  keywords: "Centres of Excellence Kalinga University, innovation hubs Raipur, research centres Chhattisgarh, university industry collaboration India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/centresofexcellence",
  },
};

export default function CentresOfExcellencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Centres of Excellence - Kalinga University",
    "description": "Specialized hubs for research, training, and industry collaboration.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Centres of Excellence", "item": "https://kalingauniversity.ac.in/centresofexcellence" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CentresOfExcellenceClient />
    </>
  );
}