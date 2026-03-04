import RTIClient from "./RTIClient";

export const metadata = {
  title: "Right to Information (RTI) | Transparency | Kalinga University",
  description: "Kalinga University adheres to the RTI Act, 2005. Details of the Public Information Officer (PIO) and Appellate Authority for submitting RTI applications.",
  keywords: "RTI university Raipur, Right to Information act India, University transparency portal Chhattisgarh, PIO Kalinga University",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/rti",
  },
};

export default function RTIPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Right to Information (RTI) - Kalinga University",
    "description": "Information about the RTI Act compliance and contact details for the Public Information Officer.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "RTI", "item": "https://kalingauniversity.ac.in/rti" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RTIClient />
    </>
  );
}
