import AboutUsClient from "./AboutUsClient";

export const metadata = {
  title: "About Kalinga University Raipur | Top Private University in Chhattisgarh",
  description: "Discover Kalinga University Raipur, a NAAC B+ & UGC approved private university in Chhattisgarh offering top UG, PG, and PhD programs with excellent placements.",
  keywords: "Kalinga University, Kalinga University Raipur, Private university in Chhattisgarh, UGC approved private university, NAAC accredited private university",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/about-us",
  },
};

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Kalinga University",
    "url": "https://kalingauniversity.ac.in",
    "logo": "https://cdn.kalingauniversity.ac.in/favicon.png",
    "sameAs": [
      "https://www.facebook.com/KalingaUniversityRaipur/",
      "https://twitter.com/KalingaUniv",
      "https://www.instagram.com/kalinga_university/",
      "https://www.linkedin.com/school/kalinga-university-raipur/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kotni, Near Mantralaya, Naya Raipur",
      "addressLocality": "Raipur",
      "addressRegion": "Chhattisgarh",
      "postalCode": "492101",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutUsClient />
    </>
  );
}

