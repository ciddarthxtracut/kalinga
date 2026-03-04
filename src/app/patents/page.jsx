import React from "react";
import PatentsClient from "./PatentsClient";

export const metadata = {
    title: "Patents & Intellectual Property | Kalinga University",
    description:
        "Explore the innovative research and patents filed by Kalinga University. Our commitment to intellectual property and technological advancement is reflected in our growing list of national and international patents.",
    keywords: [
        "Kalinga University Patents",
        "Intellectual Property Rights",
        "Research Innovations",
        "University Patents India",
        "Scientific Research",
        "Innovation & Research",
    ],
    alternates: {
        canonical: "https://kalingauniversity.ac.in/patents/",
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Patents and Intellectual Property - Kalinga University",
        "description": "Information about patents filed and granted to Kalinga University researchers.",
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
            <PatentsClient />
        </>
    );
}
