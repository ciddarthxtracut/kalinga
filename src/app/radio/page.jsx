import React from "react";
import RadioClient from "./RadioClient";

export const metadata = {
  title: "Kalinga Radio | Campus Voice & Live Updates | Kalinga University",
  description:
    "Tune into Kalinga Radio, the official voice of Kalinga University. Stay updated with campus news, trending topics, live shows, and interviews with students, faculty, and experts.",
  keywords: [
    "Kalinga Radio",
    "University Radio Station",
    "Campus Radio India",
    "Live Campus News",
    "Student Radio Kalinga",
    "University Broadcast",
    "Kalinga Radio App",
  ],
  alternates: {
    canonical: "https://kalingauniversity.ac.in/radio/",
  },
};

const RadioGallery = [
  {
    id: 1,
    image: "https://cdn.kalingauniversity.ac.in/Radio/Radio-1.webp",
    alt: "Gallery-1",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 2,
    image: "https://cdn.kalingauniversity.ac.in/Radio/Radio-2.webp",
    alt: "Gallery-2",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 3,
    image: "https://cdn.kalingauniversity.ac.in/Radio/Radio-3.webp",
    alt: "Gallery-3",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 4,
    image: "https://cdn.kalingauniversity.ac.in/Radio/Radio-4.webp",
    alt: "Gallery-4",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 5,
    image: "https://cdn.kalingauniversity.ac.in/Radio/Radio-5.webp",
    alt: "Gallery-5",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 6,
    image: "https://cdn.kalingauniversity.ac.in/Radio/Radio-6.webp",
    alt: "Gallery-6",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 7,
    image: "https://cdn.kalingauniversity.ac.in/Radio/Radio-7.webp",
    alt: "Gallery-7",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kalinga Radio - Kalinga University",
    "description": "official campus radio of Kalinga University providing news and entertainment.",
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
      <RadioClient images={RadioGallery} />
    </>
  );
}
