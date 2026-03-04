import React from "react";
import ResearchConferencesClient from "./ResearchConferencesClient";

export const metadata = {
  title: "Research Conferences | Global & National Academic Events | Kalinga University",
  description:
    "Explore the upcoming and past research conferences organized by Kalinga University. A platform for scholars, experts, and students to discuss innovative ideas in technology, law, pharmacy, and more.",
  keywords: [
    "Research Conferences",
    "International Conference 2025",
    "National Conference Kalinga",
    "Academic Events Raipur",
    "Scientific Gatherings",
    "IEEE Conferences",
    "Research Symposia",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/research-conferences/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Research Conferences - Kalinga University",
    "description": "Comprehensive list of international and national research conferences at Kalinga University.",
    "publisher": {
      "@type": "University",
      "name": "Kalinga University",
      "url": "https://kalingauniversity.ac.in/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResearchConferencesClient />
    </>
  );
}
