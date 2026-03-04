import React from "react";
import APITable from "../components/general/api-table";

export const metadata = {
    title: "Memorandum of Understanding (MOU) | Kalinga University",
    description:
        "Kalinga University has signed several MOUs with national and international institutions, industries, and research organizations to promote academic excellence and research.",
    keywords: [
        "Kalinga University MOU",
        "Memorandum of Understanding",
        "Academic Collaboration",
        "Industry Partnership",
        "University Tie-ups",
        "International Collaborations",
    ],
    alternates: {
        canonical: "https://kalingauniversity.ac.in/mou/",
    },
};

export default function MOUPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Memorandum of Understanding (MOU) - Kalinga University",
        "description": "Information about active MOUs of Kalinga University with various organizations.",
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
            <APITable
                tableId="10"
                title="Active Memorandum of Understanding"
                className="py-16"
                overflowX={true}
            />
        </>
    );
}
