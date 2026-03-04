import AntiRaggingClient from "./AntiRaggingClient";

export const metadata = {
  title: "Anti-Ragging Cell | Zero Tolerance Policy | Kalinga University",
  description: "Kalinga University maintains a ragging-free campus with a zero-tolerance policy. Explore our anti-ragging committee, squads, and reporting mechanisms.",
  keywords: "Anti ragging university Raipur, Zero tolerance policy ragging India, Student safety campus Chhattisgarh, Kalinga University grievance cell",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/anti-ragging-cell",
  },
};

export default function AntiRaggingPage() {
  const visionMissionData = [
    {
      visionTitle: "Vision",
      missionTitle: "Mission",
      visionText: "To create a ragging-free environment by promoting democratic values, compassion, empathy, and kindness among students so that they become responsible citizens.",
      missionText: "Kalinga University is dedicated to creating a safe, secure, and inclusive environment for its students. Our goal is to eliminate all forms of ragging that cause mental and physical harm to our students.",
      imageAlt: "",
      showImage: false,
    },
  ];

  const objectives = [
    { text: "Any Act of Indiscipline, Teasing, or Handling with Rudeness." },
    { text: "Any Act that prevents or disrupts the Regular Academic Activity." },
    { text: "Any Activity which is likely to cause Annoyance or Hardship." },
    { text: "Psychological Harm or Creates Fear or Apprehension." },
    { text: "Any Act of Financial Extortion or Forceful Expenditure." },
    { text: "Any Act of Physical Abuse causing Assault, Harm, or Danger to Health." },
    { text: "Any Act of Abuse by Spoken Words, Emails, SMS, or Public Insult, etc." },
    { text: "Any Act of Injury or Infringement of the Fundamental Right to Human Dignity." },
    { text: "Any Act of Wrongful Confinement, Kidnapping, Molesting or Committing Unnatural Offences, use of Criminal Forces, Trespass or Intimidation." },
    { text: "Any Unlawful Assembly or Conspiracy to Ragging. Any student or group of students found guilty of ragging on the campus or even outside the campus shall be liable to punishment(s)." },
  ];

  const annualReportButtons = [
    { id: 1, text: "Anti-Ragging UGC Policy", href: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/Ugc_Anti_ragging_Regulations.pdf" },
    { id: 2, text: "National Ragging Prevention Programme", href: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/antiragging-information.pdf" },
  ];

  const AntiImages = [
    { id: 1, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(1).webp", alt: "anti(1)" },
    { id: 2, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(2).webp", alt: "anti(2)" },
    { id: 3, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(3).webp", alt: "anti(3)" },
    { id: 4, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(4).webp", alt: "anti(4)" },
    { id: 5, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(5).webp", alt: "anti(5)" },
    { id: 6, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(6).webp", alt: "anti(6)" },
    { id: 7, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(7).webp", alt: "anti(7)" },
    { id: 8, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(8).webp", alt: "anti(8)" },
    { id: 9, src: "https://cdn.kalingauniversity.ac.in/anti-ragging-cell/anti-ragging(9).webp", alt: "anti(9)" },
  ];

  const events2024 = [
    { sno: 1, name: "Dr. A. Vijayanand", designation: "Head of the Committee", area: "Chief Proctor" },
    { sno: 2, name: "Mr. Badrinath Kesharwani", designation: "Member", area: "Civil Representative" },
    { sno: 3, name: "Mr. Gopal Krishna Agrawal", designation: "Member", area: "NGO Representative" },
    { sno: 4, name: "Mr. Lallan Singh", designation: "Member", area: "Police Representative" },
    { sno: 5, name: "Mr. Kailash Agrawal", designation: "Member", area: "Local Media" },
    { sno: 6, name: "Mr. Sarvan Droliya", designation: "Member", area: "Social Worker" },
    { sno: 7, name: "Dr. Rahul Mishra", designation: "Member", area: "Faculty Member" },
    { sno: 8, name: "Dr. Sushma Dubey", designation: "Member", area: "Faculty Member" },
    { sno: 9, name: "Dr. Amit Joshi", designation: "Member", area: "Faculty Member" },
    { sno: 10, name: "Mr. Suresh Sinha", designation: "Member", area: "Parents Representative" },
    { sno: 11, name: "Ms. Lavanya Bilesiya", designation: "Member", area: "Student Representative" },
    { sno: 12, name: "Mr. Vishal Kr. Singh", designation: "Member", area: "Student Representative" },
  ];

  const events2023 = [
    { sno: 1, name: "Dr. Sandeep Gandhi", designation: "Head of the Committee", area: "Registrar" },
    { sno: 2, name: "Dr. A. Vijayanand", designation: "Member", area: "Chief Proctor" },
    { sno: 3, name: "Mr. Manish Singh", designation: "Member", area: "Faculty" },
    { sno: 4, name: "Dr. C. P. Jawahar", designation: "Member", area: "Faculty" },
    { sno: 5, name: "Dr. Manoj Singh", designation: "Member", area: "Faculty" },
    { sno: 6, name: "Ms. Urvashi Sharma", designation: "Member", area: "Student" },
    { sno: 7, name: "Ms. Leena Chandrakar", designation: "Member", area: "Student" },
    { sno: 8, name: "Mr. Tarun Sahu", designation: "Member", area: "Student" },
    { sno: 9, name: "Mr. Bhojraj Sahu", designation: "Member", area: "Student" },
    { sno: 10, name: "Mr. Surendra Kumar Sahu", designation: "Member", area: "Student" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Anti-Ragging Cell - Kalinga University",
    "description": "Details about the anti-ragging policy, committee members, and reporting procedures at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Anti-Ragging", "item": "https://kalingauniversity.ac.in/anti-ragging-cell" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AntiRaggingClient
        visionMissionData={visionMissionData}
        objectives={objectives}
        annualReportButtons={annualReportButtons}
        AntiImages={AntiImages}
        events2024={events2024}
        events2023={events2023}
      />
    </>
  );
}
