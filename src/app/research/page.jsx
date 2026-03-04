import ResearchClient from "./ResearchClient";

export const metadata = {
  title: "Research & Innovation | Kalinga University Raipur",
  description: "Explore research and innovation at Kalinga University. Our high-tech laboratories, IPR cell, and CIF support groundbreaking research across all disciplines.",
  keywords: "University research Raipur, IPR cell university India, Research publications Chhattisgarh, Ph.D. research Kalinga University",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/research",
  },
};

export default function ResearchPage() {
  const resourceFaqItems = [];
  const awards = [
    { id: 1, year: "2024-25", link: "https://cdn.kalingauniversity.ac.in/placement/Awards+2024-25+(1).pdf", active: true },
    { id: 2, year: "2023-24", link: "https://cdn.kalingauniversity.ac.in/placement/Awards+2023-24+(1).pdf", active: true },
    { id: 3, year: "2022-23", link: "https://cdn.kalingauniversity.ac.in/placement/2022-23+(2).pdf", active: true },
    { id: 4, year: "2021-22", link: "https://cdn.kalingauniversity.ac.in/placement/2021-22+(2).pdf", active: true },
    { id: 5, year: "2020-21", link: "https://cdn.kalingauniversity.ac.in/placement/2020-21+(2).pdf", active: true },
    { id: 6, year: "2019-20", link: "https://cdn.kalingauniversity.ac.in/placement/2019-20+(2).pdf", active: true },
    { id: 7, year: "2018-19", link: "https://cdn.kalingauniversity.ac.in/placement/2018-19+(2)+(1).pdf", active: true },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Research & Innovation - Kalinga University",
    "description": "Information about research initiatives, facilities, and outcomes at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Research", "item": "https://kalingauniversity.ac.in/research" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResearchClient
        awards={awards}
        resourceFaqItems={resourceFaqItems}
      />
    </>
  );
}