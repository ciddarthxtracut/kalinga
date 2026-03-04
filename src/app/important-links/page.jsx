import React from "react";
import ImportantLinksClient from "./ImportantLinksClient";

export const metadata = {
  title: "Important Links & Regulatory Bodies | Kalinga University",
  description:
    "Access important links to regulatory bodies like UGC, AICTE, BCI, and PCI. Stay informed about Kalinga University's affiliations and rankings.",
  keywords: [
    "UGC",
    "AICTE",
    "BCI",
    "PCI",
    "NAAC",
    "NIRF",
    "AISHE",
    "Kalinga University",
    "Regulatory Bodies",
    "Affiliations",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/important-links/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Important Links and Regulatory Bodies",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "University Grants Commission",
        "url": "https://www.ugc.ac.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "All India Council for Technical Education",
        "url": "https://www.aicte-india.org"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bar Council of India",
        "url": "http://www.barcouncilofindia.org"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Pharmacy Council of India",
        "url": "https://pci.nic.in"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "National Council for Teacher Education",
        "url": "https://ncte.gov.in/Website/Index.aspx"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "National Assessment and Accreditation Council",
        "url": "http://www.naac.gov.in"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "National Institutional Ranking Framework",
        "url": "https://www.nirfindia.org/Home"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "All India Survey on Higher Education",
        "url": "https://aishe.gov.in/aishe/home"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImportantLinksClient />
    </>
  );
}
