import TrainingPlacementCellClient from "./TrainingPlacementCellClient";

export const metadata = {
  title: "Training & Placement Cell | Kalinga University Placements",
  description: "The Training and Placement Cell at Kalinga University Raipur prepares students for successful careers through CRT, CEAT, and top recruiter collaborations.",
  keywords: "Training and Placement Cell, CRT training university, Campus recruitment Raipur, University placement support, Kalinga University career guidance",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/training-and-placement-cell",
  },
};

const blueItems = [
  { imageSrc: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-1.webp", imageAlt: "" },
  { imageSrc: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-2.webp", imageAlt: "" },
  // ... rest of items
];

const items = [
  { id: 1, text: "To provide career counselling services for skill development and better job opportunities" },
  // ... rest of items
];

const skillsContent = {
  title: "Preparing You With Relevant Skills",
  description: "We stand as one of the highest campus placement universities in Chhattisgarh, as we strategically work at every step until students land their dream job.",
  careers: [
    { id: 1, title: "Aptitude Training", description: "We conduct classes on logical reasoning, quantitative aptitude, and analytical skills, which prepare students for pre-employment tests." },
    // ... rest of careers
  ]
};

export default function TrainingPlacementCellPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Training and Placement Cell - Kalinga University",
    "description": "Information about the Training and Placement cell at Kalinga University Raipur.",
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
          "name": "Training and Placement Cell",
          "item": "https://kalingauniversity.ac.in/training-and-placement-cell"
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
      <TrainingPlacementCellClient blueItems={blueItems} items={items} skillsContent={skillsContent} />
    </>
  );
}