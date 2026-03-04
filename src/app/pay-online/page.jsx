import React from "react";
import PayOnlineClient from "./PayOnlineClient";

export const metadata = {
  title: "Online Fee Payment | National & International | Kalinga University",
  description:
    "Securely pay your university fees online at Kalinga University. Options available for both national and international students. Quick, safe, and convenient payment gateway.",
  keywords: [
    "Kalinga University Pay Online",
    "Online Fee Payment",
    "University Payment Gateway",
    "Student Fee Payment",
    "International Student Payment",
    "Net Banking University Fees",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/pay-online/",
  },
};

const paymentOptions = [
  {
    id: 1,
    title: "Click here to pay online (National)",
    href: "https://kuerp.in/",
    image: "https://cdn.kalingauniversity.ac.in/common/student.jpg",
    name: "National Online Payment"
  },
  {
    id: 2,
    title: "Click here to pay online (International)",
    href: "https://kuerp.in/",
    image: "https://cdn.kalingauniversity.ac.in/international-students/international-students-intro.jpg",
    name: "International Online Payment"
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kalinga University Online Payment Portal",
    "description": "Payment portal for national and international students of Kalinga University.",
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
      <PayOnlineClient paymentOptions={paymentOptions} />
    </>
  );
}