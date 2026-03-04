import HostelClient from "./HostelClient";

export const metadata = {
  title: "University Hostels & Accommodation | Home Away From Home | Kalinga University",
  description: "Experience comfortable and secure living at Kalinga University hostels. Explore our separate boys' and girls' hostels, modern amenities, mess facilities, and fee structures.",
  keywords: "University hostels Raipur, Student accommodation Chhattisgarh, Boys and girls hostel Kalinga, Hostel fees and facilities India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/hostel",
  },
};

export default function HostelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hostel & Accommodation - Kalinga University",
    "description": "Details about hostel life, facilities, warden contact, and fee structure at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Hostel", "item": "https://kalingauniversity.ac.in/hostel" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HostelClient />
    </>
  );
}