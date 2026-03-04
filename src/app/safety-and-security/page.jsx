import SafetyAndSecurityClient from "./SafetyAndSecurityClient";

export const metadata = {
  title: "Campus Safety & Security | 24/7 Protection | Kalinga University",
  description: "Your safety is our priority. Kalinga University provides 24/7 security, CCTV surveillance, and a dedicated security team to ensure a safe learning environment.",
  keywords: "Campus security Raipur, Student safety Chhattisgarh, University CCTV surveillance India, 24/7 security campus Kalinga",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/safety-and-security",
  },
};

export default function SafetyAndSecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Safety & Security - Kalinga University",
    "description": "Details about the safety measures, security personnel, and surveillance systems at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Safety & Security", "item": "https://kalingauniversity.ac.in/safety-and-security" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SafetyAndSecurityClient />
    </>
  );
}
