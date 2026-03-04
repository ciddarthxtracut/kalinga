import LeadershipClient from "./LeadershipClient";

export const metadata = {
  title: "University Leadership & Administration | Kalinga University",
  description: "Meet the visionary leaders of Kalinga University. Our administration is dedicated to operational excellence, academic quality, and student success.",
  keywords: "University leadership Raipur, Kalinga University administration, Academic governance Chhattisgarh, Higher education management India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/leadership",
  },
};

export default function LeadershipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Leadership & Administration - Kalinga University",
    "description": "Information about the administrative and leadership structure of Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Leadership", "item": "https://kalingauniversity.ac.in/leadership" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LeadershipClient />
    </>
  );
}