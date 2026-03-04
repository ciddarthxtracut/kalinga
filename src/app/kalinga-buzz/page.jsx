import React from "react";
import KalingaBuzzClient from "./KalingaBuzzClient";

export const metadata = {
  title: "Kalinga Buzz - Monthly Newsletters | Kalinga University",
  description:
    "Stay updated with Kalinga Buzz, the monthly newsletter of Kalinga University. Discover campus news, academic achievements, research breakthroughs, and events.",
  keywords: [
    "Kalinga Buzz",
    "University Newsletter",
    "Kalinga University News",
    "Campus Updates",
    "Academic Achievements",
    "Monthly Newsletter",
    "Kalinga University",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/kalinga-buzz/",
  },
};

export default function Page() {
  const buttons = [
    { id: 1, text: "Kalinga Buzz July 2019", href: "https://cdn.kalingauniversity.ac.in/buzz/July+2019.pdf" },
    { id: 2, text: "Kalinga Buzz August 2019", href: "https://cdn.kalingauniversity.ac.in/buzz/Aug+2019.pdf" },
    { id: 3, text: "Kalinga Buzz September 2019", href: "https://cdn.kalingauniversity.ac.in/buzz/Sep+2019.pdf" },
    { id: 4, text: "Kalinga Buzz October 2019", href: "https://cdn.kalingauniversity.ac.in/buzz/Oct+2019.pdf" },
    { id: 5, text: "Kalinga Buzz November 2019", href: "https://cdn.kalingauniversity.ac.in/buzz/Nov+2019.pdf" },
    { id: 6, text: "Kalinga Buzz December 2019", href: "https://cdn.kalingauniversity.ac.in/buzz/Dec+2019.pdf" },
  ];

  const buttons2 = [
    { id: 1, text: "Kalinga Buzz January 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+Jan+2020.pdf" },
    { id: 2, text: "Kalinga Buzz February 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+Feb+2020.pdf" },
    { id: 3, text: "Kalinga Buzz March 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+March+2020.pdf" },
    { id: 4, text: "Kalinga Buzz April 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+April+2020.pdf" },
    { id: 5, text: "Kalinga Buzz May 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+May+2020.pdf" },
    { id: 6, text: "Kalinga Buzz June 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+June+2020.pdf" },
    { id: 7, text: "Kalinga Buzz July 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+July+2020.pdf" },
    { id: 8, text: "Kalinga Buzz September 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+September+2020.pdf" },
    { id: 10, text: "Kalinga Buzz November 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+November+2020.pdf" },
    { id: 11, text: "Kalinga Buzz December 2020", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+Dec+2020.pdf" },
  ];

  const buttons3 = [
    { id: 1, text: "Kalinga Buzz January 2021", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+jan+2021.pdf" },
    { id: 2, text: "Kalinga Buzz February 2021", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+Feb+2021.pdf" },
    { id: 3, text: "Kalinga Buzz April 2021", href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+april+2021.pdf" },
  ];

  const buttons4 = [
    { id: 1, text: "Kalinga Buzz January 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+January+2025.pdf" },
    { id: 2, text: "Kalinga Buzz February 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+February+2025.pdf" },
    { id: 3, text: "Kalinga Buzz March 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+March+2025.pdf" },
    { id: 4, text: "Kalinga Buzz April 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+April+2025.pdf" },
    { id: 5, text: "Kalinga Buzz May 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+May+2025.pdf" },
    { id: 6, text: "Kalinga Buzz June 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+June+2025.pdf" },
    { id: 8, text: "Kalinga Buzz August 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+August+2025.pdf" },
    { id: 10, text: "Kalinga Buzz October 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+October+2025.pdf" },
    { id: 11, text: "Kalinga Buzz November 2025", href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+November+2025.pdf" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kalinga Buzz - Monthly Newsletters",
    "description": "Monthly newsletters highlighting cultural events, research breakthroughs, and academic achievements at Kalinga University.",
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
      <KalingaBuzzClient
        buttons={buttons}
        buttons2={buttons2}
        buttons3={buttons3}
        buttons4={buttons4}
      />
    </>
  );
}