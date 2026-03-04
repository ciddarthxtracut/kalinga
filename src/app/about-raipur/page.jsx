import AboutRaipurClient from "./AboutRaipurClient";

export const metadata = {
  title: "About Raipur | Smart City Raipur Chhattisgarh",
  description: "Explore Raipur, the heart of Chhattisgarh and a growing smart city. Learn about its heritage, modern infrastructure, and student life at Kalinga University.",
  keywords: "Raipur city guide, Naya Raipur smart city, Raipur tourism Chhattisgarh, Life in Raipur for students",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/about-raipur",
  },
};

export default function AboutRaipurPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Raipur - Kalinga University",
    "description": "Information about Raipur city, its culture, and infrastructure.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "About Raipur", "item": "https://kalingauniversity.ac.in/about-raipur" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutRaipurClient />
    </>
  );
}
