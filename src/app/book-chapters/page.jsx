import BookChaptersClient from "./BookChaptersClient";

export const metadata = {
    title: "Book Chapters Published | Faculty Research | Kalinga University",
    description: "Explore the scholarly contributions of Kalinga University faculty. A comprehensive list of published book chapters across various academic disciplines.",
    keywords: "Book chapters Kalinga University, research publications Raipur, faculty research Chhattisgarh",
    alternates: {
        canonical: "https://kalingauniversity.ac.in/book-chapters",
    },
};

export default function BookChaptersPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Book Chapters - Kalinga University",
        "description": "Scholarly book chapters published by our distinguished faculty members.",
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kalingauniversity.ac.in/" },
                { "@type": "ListItem", "position": 2, "name": "Book Chapters", "item": "https://kalingauniversity.ac.in/book-chapters" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BookChaptersClient />
        </>
    );
}
