import IQACClient from "./IQACClient";

export const metadata = {
  title: "Internal Quality Assurance Cell (IQAC) | Kalinga University",
  description: "The IQAC at Kalinga University ensures continuous improvement in academic and administrative performance. Explore our quality initiatives, audits, and certifications.",
  keywords: "IQAC university Raipur, Internal Quality Assurance Cell Chhattisgarh, NIRF NAAC quality standards, University academic audits India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/internal-quality-assurance-cell",
  },
};

export default function IQACPage() {
  const MentorIntroProps = [
    {
      id: 1,
      title: "Dr. Vijayalaxmi Biradar",
      subtitle: "A Message From the Director",
      department: "Director, IQAC",
      quote: "Quality is built daily through reflection, feedback, and continuous improvement.",
      message: `
        <p>Kalinga University's Internal Quality Assurance Cell is committed to maintaining and improving the quality of teaching practices, learning, and research work through continuous audits, teacher training programs, and feedback from students. Through open communication between university members and students, we keep a close watch on the overall performance of the institute. Our team members perform some of the main functions, like quality checks in academic and administrative activities, organise workshops and seminars, and closely monitor the university's infrastructure resources.</p>
        <p>The IQAC is committed to ensuring the effectiveness of the curriculum in terms of industry requirements and technology through its regular updation and evaluation. We also ensure compliance with the accreditation standards to maintain the credibility of the university. With all these measures, the IQAC of KU becomes one of the most important components that meet institutional progress and enrich its students' educational experience.</p>
      `,
      logos: [
        { src: "https://cdn.kalingauniversity.ac.in/accreditation/nirf-new.webp", alt: "NAAC", name: "NAAC", width: 1000, height: 80 },
        { src: "https://cdn.kalingauniversity.ac.in/accreditation/naac-new.webp", alt: "NIRF", name: "NIRF", width: 150, height: 80 }
      ],
      contentWrapperClassName: "lg:!pt-0",
    },
  ];

  const skillsContent = {
    title: "Other Quality Initiatives",
    description: "",
    careers: [
      { id: 2, title: "Setting a robust Feedback System", description: "", imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/Feedback+System.svg", imageAlt: "Setting a robust Feedback System" },
      { id: 3, title: "Setting an Audit System", description: "", imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/Audit+System.svg", imageAlt: "Setting an Audit System" },
      { id: 4, title: "Applying for Rankings", description: "", imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/ranking.svg", imageAlt: "Applying for Rankings" },
      { id: 5, title: "Workshops/Seminars", description: "", imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/Seminars.svg", imageAlt: "Workshops/Seminars" },
      { id: 6, title: "Building a POCO Software", description: "", imageSrc: "https://cdn.kalingauniversity.ac.in/IQAC/POCO+Software.svg", imageAlt: "Building a POCO Software" },
    ]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Internal Quality Assurance Cell (IQAC) - Kalinga University",
    "description": "Details about the quality assurance cell, its objectives, functions, and initiatives at Kalinga University.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "IQAC", "item": "https://kalingauniversity.ac.in/internal-quality-assurance-cell" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IQACClient MentorIntroProps={MentorIntroProps} skillsContent={skillsContent} />
    </>
  );
}