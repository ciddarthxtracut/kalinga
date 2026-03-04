import React from 'react';
import KUFeesClient from './KUFeesClient';

export const metadata = {
  title: "Fee Structure 2026-27 | Kalinga University",
  description:
    "Detailed fee structure for various undergraduate, postgraduate, and Ph.D. programs at Kalinga University. Check course fees, hostel charges, and payment options.",
  keywords: [
    "Kalinga University Fees",
    "Course Fee Structure",
    "Hostel Fees",
    "Tuition Fees",
    "University Payment",
    "KU Fees",
    "Admission Fees",
    "Scholarship Discounts",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/ku-fees/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kalinga University Fee Structure 2026-27",
    "description": "Information about tuition fees, hostel charges, and admission fees for various courses at Kalinga University.",
    "publisher": {
      "@type": "University",
      "name": "Kalinga University",
      "url": "https://kalingauniversity.ac.in/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KUFeesClient />
    </>
  );
}