import React from "react";
import OrganogramClient from "./OrganogramClient";

export const metadata = {
    title: "University Organogram | Governance & Hierarchy | Kalinga University",
    description:
        "Explore the organizational structure of Kalinga University. Understand our governance model, leadership hierarchy, and administrative flow from the Chancellor to academic departments.",
    keywords: [
        "Kalinga University Organogram",
        "University Hierarchy",
        "Governance Structure",
        "Administrative Flow",
        "University Leadership",
        "Organizational Chart",
    ],
    alternates: {
        canonical: "https://kalingauniversity.ac.in/organogram/",
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "University Organogram - Kalinga University",
        "description": "Organizational structure and governance hierarchy of Kalinga University.",
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
            <OrganogramClient />
        </>
    );
}