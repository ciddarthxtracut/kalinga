import VisaFroFrroGuidelines from "../components/international/visa_frofrro_guidelines";

export const metadata = {
  title: "Visa & FRRO Guidelines for International Students | Kalinga University",
  description:
    "Important Visa and FRRO (Foreign Regional Registration Office) guidelines for international students at Kalinga University. Learn about registration, extension, and compliance.",
  keywords: [
    "Visa Guidelines",
    "FRRO",
    "International Students",
    "Kalinga University",
    "Foreign Student Registration",
    "Student Visa India",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/international/",
  },
};

export default function InternationalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Visa & FRRO Guidelines for International Students",
    "description": "Information regarding Visa and FRRO registration for international students.",
    "publisher": {
      "@type": "University",
      "name": "Kalinga University",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.kalingauniversity.ac.in/logo.png"
      }
    }
  };

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* spacing because breadcrumb/header overlaps */}
      <div className="mt-[280px]">
        <VisaFroFrroGuidelines viewAllHref="#" />
      </div>
    </main>
  );
}
