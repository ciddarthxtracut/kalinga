import PlacementsClient from "./PlacementsClient";

export const metadata = {
  title: "Training & Placement Cell | Top Placements at Kalinga Raipur",
  description: "Explore the Training & Placement cell at Kalinga University Raipur. We offer 100% placement support, industry-relevant training, and top recruiter tie-ups.",
  keywords: "Best university for placements, University placement record, Campus placement India, Top recruiters university, Placement cell Chhattisgarh",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/training-and-placements",
  },
};

export default function PlacementsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Training and Placement Cell - Kalinga University",
    "description": "Career Development and Placement cell at Kalinga University Raipur.",
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
          "name": "Training and Placements",
          "item": "https://kalingauniversity.ac.in/training-and-placements"
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
      <PlacementsClient />
    </>
  );
}