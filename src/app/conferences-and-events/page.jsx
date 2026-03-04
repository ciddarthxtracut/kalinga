import ConferencesClient from "./ConferencesClient";

export const metadata = {
  title: "Conferences and Events | Knowledge Exchange | Kalinga University",
  description: "Explore the national and international conferences and events hosted by Kalinga University. A platform for scholars, researchers, and students to exchange knowledge and innovation.",
  keywords: "University conferences Raipur, academic events Chhattisgarh, knowledge exchange India, Kalinga University event calendar",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/conferences-and-events",
  },
};

export default function ConferencesAndEventsPage() {
  const whyAttendItems = [
    { id: 1, text: "Present your research paper to a wide audience." },
    { id: 2, text: "Get inspired by the industrial leaders/guest speakers." },
    { id: 3, text: "Obtain participation certificates and cash prizes." },
    { id: 4, text: "Build networks with peers, industry leaders, and research scholars." },
    { id: 5, text: "Stay updated with the latest technology trends." },
    { id: 6, text: "Strengthen your research work with valuable feedback from experts." },
  ];

  const conferencesHeldAtKU = [
    { slNo: 1, faculty: "IEEE", conferenceName: "2025 World Conference on Communication & Computing (WCONF)", level: "International", date: "25.07.2025 to 27.07.2025", year: 2025 },
    { slNo: 2, faculty: "Faculty of CS & IT", conferenceName: "Recent Trends in Emerging Technologies...", level: "International", date: "22.03.2025 to 23.03.2025", year: 2025 },
    { slNo: 3, faculty: "Faculty of Pharmacy", conferenceName: "Training Programme on “Research Methodology...”", level: "National", date: "20.03.2025 to 22.03.2025", year: 2025 },
    { slNo: 4, faculty: "Faculty of Arts & Humanities", conferenceName: "Two-day National Seminar on “The Human Rights...”", level: "National", date: "19.03.2025 to 20.03.2025", year: 2025 },
    { slNo: 5, faculty: "Faculty of Law", conferenceName: "National Seminar on “Challenges and Issues...”", level: "National", date: "18.03.2025", year: 2025 },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Conferences and Events - Kalinga University",
    "description": "National and international conferences fostering knowledge and research exchange.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Conferences & Events", "item": "https://kalingauniversity.ac.in/conferences-and-events" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConferencesClient
        whyAttendItems={whyAttendItems}
        conferencesHeldAtKU={conferencesHeldAtKU}
      />
    </>
  );
}
