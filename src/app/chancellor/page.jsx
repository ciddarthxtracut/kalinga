import ChancellorClient from "./ChancellorClient";

export const metadata = {
  title: "Chancellor's Message | Leadership | Kalinga University",
  description: "Read the message from the Chancellor of Kalinga University. Discover our mission to empower students through transformative education and research excellence.",
  keywords: "Chancellor Kalinga University, university leadership Raipur, academic mission Chhattisgarh, research excellence India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/chancellor",
  },
};

export default function ChancellorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chancellor's Message - Kalinga University",
    "description": "Leadership vision and commitment to academic excellence from our Chancellor.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Chancellor", "item": "https://kalingauniversity.ac.in/chancellor" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChancellorClient />
    </>
  );
}
