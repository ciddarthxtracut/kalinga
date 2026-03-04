import DirectorGeneralClient from "./DirectorGeneralClient";

export const metadata = {
  title: "Director General's Message | Leadership | Kalinga University",
  description: "Read the message from the Director General of Kalinga University. Learn about our vision for academic excellence, professional development, and student success.",
  keywords: "Director General Kalinga University, university leadership Raipur, academic excellence Chhattisgarh, professional growth India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/director-general",
  },
};

export default function Leadership() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Director General's Message - Kalinga University",
    "description": "Leadership vision and commitment to academic excellence from our Director General.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Director General", "item": "https://kalingauniversity.ac.in/director-general" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DirectorGeneralClient />
    </>
  );
}
