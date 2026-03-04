import ResearchFacilitiesClient from "./ResearchFacilitiesClient";

export const metadata = {
    title: "Research Facilities & CoE | Kalinga University Raipur",
    description: "Discover the research facilities at Kalinga University. Our Centres of Excellence provide skill-based training in AI, EV, Drone Technology, and Cyber Security.",
    keywords: "Research university Raipur, Centres of Excellence Kalinga, University innovation hub, Skill-based training Raipur, Kalinga University Research",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/research-facilities",
    },
};

export default function ResearchFacilitiesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Research Facilities - Kalinga University",
        "description": "Research infrastructure and Centres of Excellence at Kalinga University Raipur.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://kalingauniversity.ac.in/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Research Facilities",
                    "item": "https://kalingauniversity.ac.in/research-facilities"
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ResearchFacilitiesClient />
        </>
    );
}