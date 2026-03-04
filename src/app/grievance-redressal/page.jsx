import GrievanceClient from "./GrievanceClient";

export const metadata = {
  title: "Grievance Redressal | Student Welfare | Kalinga University",
  description: "Submit and track grievances at Kalinga University. We provide a transparent and efficient mechanism for addressing student concerns and ensuring a fair academic environment.",
  keywords: "Grievance redressal Kalinga University, student complaints Raipur, university welfare Chhattisgarh, academic concern resolution India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/grievance-redressal",
  },
};

export default function GrievanceRedressalPage() {
  const aboutP1 = "The Grievance Redressal Cell is established at KU as per the UGC guidelines...";
  const aboutP2 = "The dedicated committee members look after the seriousness of the problems...";

  const functionsList = [
    { id: 1, text: "To accept written complaints from students and staff members" },
    { id: 2, text: "To follow a proper procedure set by the committee to fairly handle issues" },
  ];

  const columns = [
    { key: "sno", label: "S. No.", width: "w-24" },
    { key: "name", label: "Name Of Member", width: "flex-1" },
    { key: "position", label: "Position", width: "w-[420px]" },
  ];

  const data = [
    { sno: 1, name: "Dr. Rahul Mishra", position: "Dean, Academic Affairs – Chairperson" },
    { sno: 2, name: "Dr. Sandeep Gandhi", position: "Registrar" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Grievance Redressal - Kalinga University",
    "description": "Transparent grievance redressal mechanism for student and staff welfare.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Grievance Redressal", "item": "https://kalingauniversity.ac.in/grievance-redressal" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GrievanceClient
        aboutP1={aboutP1}
        aboutP2={aboutP2}
        functionsList={functionsList}
        columns={columns}
        data={data}
      />
    </>
  );
}
