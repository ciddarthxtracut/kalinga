import AdmissionProcedureClient from "./AdmissionProcedureClient";

export const metadata = {
    title: "Admission Procedure 2026 | How to Apply | Kalinga University",
    description: "Find out how to apply for admissions at Kalinga University for 2026. Step-by-step guide to the admission process, entrance exams, and eligibility criteria.",
    keywords: "Kalinga University admission process, how to apply Raipur university, admission steps India 2026, university entrance exam Raipur",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/admission-procedure",
    },
};

export default function AdmissionProcedurePage() {
    const scholarshipContent = {
        title: "Scholarships & Financial Assistance",
        description: [
            "Your hard work deserves a reward.",
            "At Kalinga University, you don’t have to worry about the tuition fee as we’ve got you covered. Our scholarships are designed to help bright minds and talented students succeed in their careers. ",
            "<span style='font-weight: bold; font-size: 1.125rem;'>Who Are Eligible For Our Scholarships?</span>",
        ],
        points: [
            "Merit-based performers",
            "Students who scored 80+ percentile or above in competitive examinations",
            "State, National, and International sports champions",
            "Received awards or recognition in National and International cultural events or participated in TV reality shows",
            "Female students",
            "Physically challenged students",
            "Wards and siblings of personnel from the Indian Army, Air Force, Indian Navy, Paramilitary Forces, and Police",
            "Wards of health and hospital frontline workers",
            "National award winners",
            "Students from North-East India",
            "Siblings (valid only until the completion of the course of the elder sibling)",
            "Applicants listed in the Limca Book of Records, Golden Book of Records, or Guinness World Records",
            "Applicants with a strong social media presence",
            "Students who have published research papers, books, technology, or product innovations",
            "Wards of Kalinga University teaching and non-teaching staff"
        ],
        imageUrl: "https://cdn.kalingauniversity.ac.in/ccrc/placement.png",
        imageAlt: "Scholarships & Financial Assistance",
        knowMoreLabel: "Read More",
        extraLink: "https://cdn.kalingauniversity.ac.in/scholarships/Scholarships+2026-2027.pdf",
        extraLinkLabel: "Download Scholarship Policy"
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Admission Procedure - Kalinga University",
        "description": "Step-by-step admission process for Kalinga University Raipur.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", "position": 2, "name": "Admission Procedure", "item": "https://kalingauniversity.ac.in/admission-procedure" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AdmissionProcedureClient scholarshipContent={scholarshipContent} />
        </>
    );
}