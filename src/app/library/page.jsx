import LibraryClient from "./LibraryClient";

export const metadata = {
  title: "Central Library | Digital & Physical Resources | Kalinga University",
  description: "Access a world of knowledge at Kalinga University's Central Library. Explore thousands of books, digital journals, and e-resources through our e-access portal.",
  keywords: "University library Raipur, Digital library Chhattisgarh, Kalinga University e-resources, Academic journals India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/library",
  },
};

export default function LibraryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Central Library - Kalinga University",
    "description": "Details about the library facilities, resources, and digital access at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Library", "item": "https://kalingauniversity.ac.in/library" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LibraryClient />
    </>
  );
}