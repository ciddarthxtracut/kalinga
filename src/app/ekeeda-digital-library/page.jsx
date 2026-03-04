import EkeedaClient from "./EkeedaClient";

export const metadata = {
    title: "Ekeeda Digital Library | Online Resources | Kalinga University",
    description: "Access the Ekeeda Digital Library at Kalinga University. A comprehensive online platform with engineering, technology, and management resources for enhanced learning.",
    keywords: "Digital library Kalinga University, Ekeeda online resources Raipur, university e-library Chhattisgarh, academic digital portal India",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/ekeeda-digital-library",
    },
};

export default function EkeedaPage() {
    const buttons = [
        { id: 1, text: "Mechanical Engineering", href: "https://ekeeda.com/degree-courses/mechanical-engineering" },
        { id: 2, text: "Civil Engineering", href: "https://ekeeda.com/degree-courses/civil-engineering" },
        { id: 3, text: "Computer Engineering", href: "https://ekeeda.com/degree-courses/computer-engineering" },
        { id: 4, text: "Electronics Engineering", href: "https://ekeeda.com/degree-courses/electronics-engineering" },
        { id: 5, text: "Electrical Engineering", href: "https://ekeeda.com/degree-courses/electrical-engineering" },
        { id: 6, text: "Electronics and Telecommunication Engineering", href: "https://ekeeda.com/degree-courses/electronics-and-telecommunication-engineering" },
        { id: 7, text: "Instrumentation Engineering", href: "https://ekeeda.com/degree-courses/instrumentation-engineering" },
        { id: 8, text: "Information Technology Engineering", href: "https://ekeeda.com/degree-courses/information-technology-engineering" },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Ekeeda Digital Library - Kalinga University",
        "description": "Comprehensive digital library offering 90,000+ engineering video resources.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", "position": 2, "name": "Ekeeda Digital Library", "item": "https://kalingauniversity.ac.in/ekeeda-digital-library" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EkeedaClient buttons={buttons} />
        </>
    );
}
