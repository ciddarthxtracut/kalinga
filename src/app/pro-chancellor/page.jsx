import ProChancellorClient from "./ProChancellorClient";

export const metadata = {
  title: "Pro-Chancellor's Message | Leadership | Kalinga University",
  description: "Read the message from the Pro-Chancellor of Kalinga University. Our focus on student success, industry collaboration, and global academic standards.",
  keywords: "Pro-Chancellor Kalinga University, university leadership Raipur, student success Chhattisgarh, global education India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/pro-chancellor",
  },
};

export default function Leadership() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pro-Chancellor's Message - Kalinga University",
    "description": "Leadership vision and commitment to academic excellence from our Pro-Chancellor.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Pro-Chancellor", "item": "https://kalingauniversity.ac.in/pro-chancellor" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProChancellorClient />
    </>
  );
}
