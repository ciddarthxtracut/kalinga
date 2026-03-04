import MiniMarketClient from "./MiniMarketClient";

export const metadata = {
  title: "On-Campus Mini Market | Student Conveniences | Kalinga University",
  description: "Get daily essentials without leaving campus. Kalinga University's mini market offers groceries, stationery, and other supplies for the convenience of students and staff.",
  keywords: "University mini market Raipur, Campus convenience store Chhattisgarh, Student essentials Kalinga University, Stationery and groceries campus India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/mini-market",
  },
};

export default function MiniMarketPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mini Market - Kalinga University",
    "description": "Information about the on-campus retail facilities and services for students at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Mini Market", "item": "https://kalingauniversity.ac.in/mini-market" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MiniMarketClient />
    </>
  );
}