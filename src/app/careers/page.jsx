import CareersClient from "./CareersClient";

export const metadata = {
  title: "Careers at Kalinga University | Job Opportunities in Raipur",
  description: "Join the faculty and staff at Kalinga University. Explore job openings for teaching, non-teaching, and administrative roles. Apply now for a rewarding career.",
  keywords: "University jobs Raipur, Teaching vacancies Chhattisgarh, Kalinga University careers, Higher education recruitment India",
  alternates: {
    canonical: "https://kalingauniversity.ac.in/careers",
  },
};

export default function CareersPage() {
  const careerFAQs = [
    { id: 1, question: "How can I apply for a job at Kalinga University?", answer: "You can apply directly through our official careers page by filling out the Career Application Form and uploading your updated resume. Shortlisted candidates will be contacted by our HR team for further rounds of the selection process." },
    { id: 2, question: "What types of positions are available at Kalinga University?", answer: "We offer opportunities for teaching, non-teaching, marketing, and administrative roles across various departments. Open positions are updated regularly on our website under the “Open Positions” section." },
    { id: 3, question: "What qualifications are required to apply for teaching positions?", answer: "Applicants should possess a postgraduate degree or Ph.D. in the relevant discipline, as per UGC norms. Relevant teaching and research experience will be an added advantage." },
    { id: 4, question: "Does Kalinga University offer internships or training opportunities?", answer: "Yes, Kalinga University provides internships and professional training for both fresh graduates and students. These programs help participants gain practical exposure and industry-relevant skills." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers - Kalinga University",
    "description": "Job opportunities and career paths at Kalinga University Raipur.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
        { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://kalingauniversity.ac.in/careers" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareersClient careerFAQs={careerFAQs} />
    </>
  );
}
