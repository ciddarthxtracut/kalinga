import NCCClient from "./NCCClient";

export const metadata = {
  title: "National Cadet Corps (NCC) | Discipline & Valor | Kalinga University",
  description: "Shape your character and develop leadership with the NCC at Kalinga University. Our active unit offers training, camps, and opportunities to serve the nation.",
  keywords: "NCC university Raipur, National Cadet Corps Chhattisgarh, NCC training and camps India, Student leadership and discipline Kalinga",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/ncc",
  },
};

export default function NCCPage() {
  const nccgallery = [
    { id: 1, src: "https://cdn.kalingauniversity.ac.in/ncc/01.jpg" },
    { id: 2, src: "https://cdn.kalingauniversity.ac.in/ncc/02.jpg" },
    { id: 3, src: "https://cdn.kalingauniversity.ac.in/ncc/03.jpg" },
    { id: 4, src: "https://cdn.kalingauniversity.ac.in/ncc/04.jpg" },
    { id: 5, src: "https://cdn.kalingauniversity.ac.in/ncc/05.jpg" },
    { id: 6, src: "https://cdn.kalingauniversity.ac.in/ncc/06.jpg" },
    { id: 7, src: "https://cdn.kalingauniversity.ac.in/ncc/07.jpg" },
    { id: 8, src: "https://cdn.kalingauniversity.ac.in/ncc/08.jpg" },
    { id: 9, src: "https://cdn.kalingauniversity.ac.in/ncc/09.jpg" },
    { id: 10, src: "https://cdn.kalingauniversity.ac.in/ncc/10.jpg" },
    { id: 11, src: "https://cdn.kalingauniversity.ac.in/ncc/11.jpg" }
  ];

  const nccAchievements = [
    {
      id: 1,
      variant: "achievement",
      imageSrc: "https://cdn.kalingauniversity.ac.in/ncc/01.jpg",
      name: "Zaheen E Fatema",
      degree: "BSC BT 2021-24",
      status: "cleared",
      badge: "NCC \"B\"",
      exam: "Certificate Examination",
    },
    {
      id: 2,
      variant: "achievement",
      imageSrc: "https://cdn.kalingauniversity.ac.in/ncc/02.jpg",
      name: "Lt Vibha Chandrakar",
      degree: "NCC Coordinator",
      status: "Special Achievement",
      badge: "NCC \"C\"",
      exam: "Certificate Excellence",
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "National Cadet Corps (NCC) - Kalinga University",
    "description": "Information about the NCC unit, benefits of joining, coordinator's message, and achievers at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "NCC", "item": "https://kalingauniversity.ac.in/ncc" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NCCClient nccAchievements={nccAchievements} nccgallery={nccgallery} />
    </>
  );
}