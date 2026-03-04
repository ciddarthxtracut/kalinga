import ChairmanClient from "./ChairmanClient";

export const metadata = {
  title: "Chairman's Message | Leadership | Kalinga University",
  description: "Read the message from the Chairman of Kalinga University. Learn about our commitment to providing quality education and fostering an environment of innovation and growth.",
  keywords: "Chairman Kalinga University, university leadership Raipur, educational vision Chhattisgarh, academic growth India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/chairman",
  },
};

export default function Leadership() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Chairman's Message - Kalinga University",
    "description": "Leadership vision and commitment to academic excellence from our Chairman.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Chairman", "item": "https://kalingauniversity.ac.in/chairman" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChairmanClient />
    </>
  );
}