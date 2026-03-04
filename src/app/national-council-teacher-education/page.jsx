import React from "react";
import NCTEClient from "./NCTEClient";

export const metadata = {
  title: "National Council for Teacher Education (NCTE) Compliance | Kalinga University",
  description:
    "Public disclosure and compliance documents for the National Council for Teacher Education (NCTE) at Kalinga University. View details on sanctioned programs, faculty, and infrastructure for teacher education.",
  keywords: [
    "NCTE",
    "National Council for Teacher Education",
    "Kalinga University",
    "Teacher Education Compliance",
    "B.Ed. M.Ed. Programs",
    "Education Faculty",
    "Public Disclosure NCTE",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/national-council-teacher-education/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "National Council for Teacher Education (NCTE) Compliance - Kalinga University",
    "description": "Compliance and disclosure portal for NCTE regulated programs at Kalinga University.",
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
      <NCTEClient />
    </>
  );
}
