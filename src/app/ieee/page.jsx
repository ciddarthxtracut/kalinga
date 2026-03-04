import React from "react";
import IEEEClient from "./IEEEClient";

export const metadata = {
  title: "IEEE Student Branch | Kalinga University",
  description: "Join the IEEE Student Branch at Kalinga University. Advance your technology skills through workshops, seminars, and global networking opportunities.",
  keywords: [
    "IEEE",
    "Kalinga University",
    "Student Branch",
    "Engineering",
    "Technology",
    "Research",
    "Workshops",
    "Conferences",
    "CS Chapter",
    "AESS Chapter",
    "WIE Affinity Group",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/ieee/",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IEEE Student Branch - Kalinga University",
    "url": "https://kalingauniversity.ac.in/ieee/",
    "parentOrganization": {
      "@type": "University",
      "name": "Kalinga University",
      "url": "https://kalingauniversity.ac.in/"
    },
    "description": "The IEEE student branch of Kalinga University is part of the IEEE Madhya Pradesh Section and was established on 4th April, 2022. It promotes excellence in computing, software, and emerging technologies.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "ieeeku@kalingauniversity.ac.in",
      "contactType": "Student Branch Support"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IEEEClient />
    </>
  );
}
