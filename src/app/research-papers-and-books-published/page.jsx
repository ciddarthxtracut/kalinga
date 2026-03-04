import React from "react";
import ResearchPapersAndBooksPublishedClient from "./ResearchPapersAndBooksPublishedClient";

export const metadata = {
    title: "Publications, Patents & Books | Research Output | Kalinga University",
    description:
        "Comprehensive record of research papers, patents filed, and books published by Kalinga University. Discover our academic contributions across multiple years and disciplines.",
    keywords: [
        "Research Papers",
        "Patents Filed",
        "Books Published",
        "Academic Publications",
        "University Research Output",
        "Scientific Patents India",
        "Kalinga University Faculty Research",
    ],
    alternates: {
        canonical: "https://kalingauniversity.ac.in/research-papers-and-books-published/",
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Research Papers, Patents & Books Published - Kalinga University",
        "description": "Annual report of research publications, patents, and books authored by Kalinga University members.",
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
            <ResearchPapersAndBooksPublishedClient />
        </>
    );
}