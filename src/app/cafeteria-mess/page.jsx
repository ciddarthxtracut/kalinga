import CafeteriaClient from "./CafeteriaClient";

export const metadata = {
  title: "Cafeteria & Mess Facilities | Healthy Dining | Kalinga University",
  description: "Enjoy a variety of healthy and delicious food options at Kalinga University. Our cafeteria and mess facilities provide hygienic dining for students and staff.",
  keywords: "University cafeteria Raipur, Campus dining Chhattisgarh, Student mess facilities Kalinga, Hygienic food university India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/cafeteria-mess",
  },
};

export default function CafeteriaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cafeteria & Mess - Kalinga University",
    "description": "Details about the dining facilities, menu, and hygiene standards at Kalinga University's cafeteria and mess.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Cafeteria & Mess", "item": "https://kalingauniversity.ac.in/cafeteria-mess" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CafeteriaClient />
    </>
  );
}