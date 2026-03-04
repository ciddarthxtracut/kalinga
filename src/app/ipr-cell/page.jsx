import React from "react";
import IPRCellClient from "./IPRCellClient";

export const metadata = {
  title: "Intellectual Property Rights (IPR) Cell | Kalinga University",
  description:
    "The IPR Cell at Kalinga University promotes awareness and management of Intellectual Property Rights. Learn about patents, copyrights, and trademarks for research and innovation.",
  keywords: [
    "IPR Cell",
    "Intellectual Property Rights",
    "Patents",
    "Copyright",
    "Trademark",
    "Innovation",
    "Kalinga University",
    "Research Protection",
    "IP Policy",
    "IPR Committee",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/ipr-cell/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Intellectual Property Rights (IPR) Cell - Kalinga University",
    "url": "https://kalingauniversity.ac.in/ipr-cell/",
    "parentOrganization": {
      "@type": "University",
      "name": "Kalinga University",
      "url": "https://kalingauniversity.ac.in/"
    },
    "description": "The IPR Cell at Kalinga University extends its initiatives for spreading awareness about the concepts of Intellectual Property Rights among academicians, scholars, and students.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "IPR Support",
      "email": "iprcell@kalingauniversity.ac.in"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IPRCellClient />
    </>
  );
}
