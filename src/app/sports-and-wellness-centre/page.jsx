import SportsWellnessClient from "./SportsWellnessClient";

export const metadata = {
  title: "Sports & Wellness Centre | Fitness Facilities | Kalinga University",
  description: "Promoting a healthy lifestyle at Kalinga University. Explore our world-class indoor and outdoor sports facilities, gymnasium, and wellness programs for students.",
  keywords: "University sports facilities Raipur, Gymnasium Chhattisgarh, Indoor outdoor sports university India, Fitness and wellness for students",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/sports-and-wellness-centre",
  },
};

export default function SportsWellnessPage() {
  const galleryItems = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/sports/carrom-game-pieces.webp", alt: "Carom", description: "Indoor Sports" },
    { id: 2, image: "https://cdn.kalingauniversity.ac.in/sports/chess+(1).webp", alt: "Chess", description: "Indoor Sports" },
    { id: 3, image: "https://cdn.kalingauniversity.ac.in/sports/table_tennis.webp", alt: "Table Tennis", description: "Indoor Sports" },
    { id: 4, image: "https://cdn.kalingauniversity.ac.in/sports/snooker.webp", alt: "Snooker", description: "Indoor Sports" },
    { id: 5, image: "https://cdn.kalingauniversity.ac.in/sports/cricket.webp", alt: "Cricket", description: "Outdoor Sports" },
    { id: 6, image: "https://cdn.kalingauniversity.ac.in/sports/football.webp", alt: "Football", description: "Outdoor Sports" },
    { id: 7, image: "https://cdn.kalingauniversity.ac.in/sports/badminton.webp", alt: "Badminton", description: "Outdoor Sports" },
    { id: 8, image: "https://cdn.kalingauniversity.ac.in/sports/basektballevent.webp", alt: "Basketball", description: "Outdoor Sports" },
    { id: 9, image: "https://cdn.kalingauniversity.ac.in/sports/volleyball.webp", alt: "Volleyball", description: "Outdoor Sports" },
    { id: 10, image: "https://cdn.kalingauniversity.ac.in/sports/kabaddi+(1).webp", alt: "Kabaddi", description: "Outdoor Sports" },
    { id: 11, image: "https://cdn.kalingauniversity.ac.in/sports/kho-kho.webp", alt: "Kho-Kho", description: "Outdoor Sports" },
    { id: 12, image: "https://cdn.kalingauniversity.ac.in/sports/hockey.webp", alt: "Hockey", description: "Outdoor Sports" },
    { id: 13, image: "https://cdn.kalingauniversity.ac.in/sports/handball.webp", alt: "Handball", description: "Outdoor Sports" },
    { id: 14, image: "https://cdn.kalingauniversity.ac.in/sports/shotput.webp", alt: "Shot Put", description: "Outdoor Sports" },
    { id: 15, image: "https://cdn.kalingauniversity.ac.in/sports/discthrow.webp", alt: "Discus Throw", description: "Outdoor Sports" },
    { id: 16, image: "https://cdn.kalingauniversity.ac.in/sports/javelin_throw.webp", alt: "Javelin Throw", description: "Outdoor Sports" },
    { id: 17, image: "https://cdn.kalingauniversity.ac.in/sports/hammer_throw.webp", alt: "Hammer Throw", description: "Outdoor Sports" },
    { id: 18, image: "https://cdn.kalingauniversity.ac.in/sports/gym1.webp", alt: "Gymnasium", description: "Fitness Centre" },
    { id: 19, image: "https://cdn.kalingauniversity.ac.in/sports/gym2.webp", alt: "Gymnasium", description: "Fitness Centre" },
    { id: 20, image: "https://cdn.kalingauniversity.ac.in/sports/gym3.webp", alt: "Gymnasium", description: "Fitness Centre" },
    { id: 21, image: "https://cdn.kalingauniversity.ac.in/sports/gym4.webp", alt: "Gymnasium", description: "Fitness Centre" },
    { id: 22, image: "https://cdn.kalingauniversity.ac.in/facilities/gym.webp", alt: "Gymnasium", description: "Fitness Centre" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sports & Wellness Centre - Kalinga University",
    "description": "Details about indoor and outdoor sports, gymnasium, and wellness facilities at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Sports & Wellness", "item": "https://kalingauniversity.ac.in/sports-and-wellness-centre" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SportsWellnessClient galleryItems={galleryItems} />
    </>
  );
}
