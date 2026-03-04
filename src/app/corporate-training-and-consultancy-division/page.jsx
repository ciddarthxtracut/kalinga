import CTCDClient from "./CTCDClient";

export const metadata = {
  title: "Corporate Training & Consultancy | Skill Development | Kalinga University",
  description: "Discover the Corporate Training and Consultancy Division at Kalinga University. We offer specialized training programs and consultancy services for professionals and organizations.",
  keywords: "Corporate training Raipur, consultancy services Chhattisgarh, professional development India, CTCD Kalinga University",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/corporate-training-and-consultancy-division",
  },
};

export default function CorporateTrainingAndConsultancyDivisionPage() {
  const benefitsData = [
    { icon: "https://cdn.kalingauniversity.ac.in/icons/facility-management.svg", title: "Improved workflow across different departments", description: "" },
    { icon: "https://cdn.kalingauniversity.ac.in/icons/Career+Counseling.svg", title: "Better employee management with optimised HR processes", description: "" },
    { icon: "https://cdn.kalingauniversity.ac.in/icons/Holistic+Development.svg", title: "Improved performance management systems", description: "" },
    { icon: "https://cdn.kalingauniversity.ac.in/careers/wages.svg", title: "Cost-cutting and reduced wastage of resources", description: "" },
    { icon: "https://cdn.kalingauniversity.ac.in/admission/Value+addition.svg", title: "Improved efficiency in day-to-day processes", description: "" },
    { icon: "https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg", title: "Seamless integration of digital tools", description: "" },
    { icon: "https://cdn.kalingauniversity.ac.in/icons/Future+Career+Planning.svg", title: "Long-term growth and profitability", description: " " },
  ];

  const admissionSteps = [
    { id: 1, stepNumber: "01", title: "Step 1", description: "Understanding Organisational Objectives" },
    { id: 2, stepNumber: "02", title: "Step 2", description: "Conducting Assessments" },
    { id: 3, stepNumber: "03", title: "Step 3", description: "Identifying Training Needs" },
    { id: 4, stepNumber: "04", title: "Step 4", description: "Mapping Training to Roles" },
    { id: 5, stepNumber: "05", title: "Step 5", description: "Delivering Training and Monitoring Quality" },
    { id: 6, stepNumber: "06", title: "Step 6", description: "Developing Content and Methodology" },
    { id: 7, stepNumber: "07", title: "Step 7", description: "Gathering Feedback and Analysing Results" },
    { id: 8, stepNumber: "08", title: "Step 8", description: "Follow-Up and Refresher Sessions" },
  ];

  const masterclassActivities = [
    { id: 1, imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/master-class.webp", title: "Grow As a Leader", date: "17.08.2024" },
    { id: 2, imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/master-class-2.webp", title: "Maximising Fund-Raising for CSR", date: "19.10.2024" },
  ];

  const masterclassActivities2 = [
    { id: 1, imageSrc: "https://cdn.kalingauniversity.ac.in/ctcd/annual-5.webp", title: "Operational Excellence with Six Sigma", date: "November 2025" },
  ];

  const galleryImages = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/ctcd/chart+(1).webp", alt: "Glimpse 1" },
  ];

  const galleryImages2 = [
    { id: 1, image: "https://cdn.kalingauniversity.ac.in/ctcd/annual-1.png", alt: "Glimpse 1" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Corporate Training and Consultancy - Kalinga University",
    "description": "Professional training and consultancy solutions for workforce empowerment.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "CTCD", "item": "https://kalingauniversity.ac.in/corporate-training-and-consultancy-division" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CTCDClient
        benefitsData={benefitsData}
        admissionSteps={admissionSteps}
        masterclassActivities={masterclassActivities}
        galleryImages={galleryImages}
        masterclassActivities2={masterclassActivities2}
        galleryImages2={galleryImages2}
      />
    </>
  );
}