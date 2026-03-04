import React from "react";
import ResearchPapersClient from "./ResearchPapersClient";

export const metadata = {
    title: "Research Papers & Publications | Kalinga University",
    description:
        "Browse the research papers and academic publications by the faculty and students of Kalinga University. We are committed to fostering a culture of rigorous inquiry and innovation.",
    keywords: [
        "Research Papers",
        "Academic Publications",
        "Kalinga University Research",
        "Faculty Publications",
        "Scientific Research Papers",
        "Journal Articles",
        "Research Innovation",
    ],
    alternates: {
        canonical: "https://kalingauniversity.ac.in/research-papers/",
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Research Papers - Kalinga University",
        "description": "Database of research papers and publications from Kalinga University.",
        "publisher": {
            "@type": "University",
            "name": "Kalinga University",
            "url": "https://kalingauniversity.ac.in/"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ResearchPapersClient />
        </>
    );
}
