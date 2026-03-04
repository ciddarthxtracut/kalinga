import ContactUsClient from "./ContactUsClient";

export const metadata = {
  title: "Contact Kalinga University Raipur | Campus Address & Support",
  description: "Get in touch with Kalinga University Raipur. Find our campus address, contact number, and email. Visit us for admissions inquiry or career guidance.",
  keywords: "University contact number, University address Raipur, Kalinga University contact, Raipur university helpdesk",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/contact-us",
  },
};

export default function ContactUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "Kalinga University",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kotni, Near Mantralaya, Naya Raipur",
        "addressLocality": "Raipur",
        "addressRegion": "Chhattisgarh",
        "postalCode": "492101",
        "addressCountry": "IN"
      },
      "telephone": "+91 99072 80000",
      "email": "admission@kalingauniversity.ac.in"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactUsClient />
    </>
  );
}