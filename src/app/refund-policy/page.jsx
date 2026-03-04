import React from 'react'
import SectionHeading from '../components/general/SectionHeading'

export const metadata = {
    title: "Refund & Cancellation Policy | Kalinga University",
    description:
        "Review Kalinga University's refund and cancellation policy. Our guidelines follow the University Grants Commission (UGC) norms for fee refunds and course cancellations.",
    keywords: [
        "Refund Policy",
        "Cancellation Policy",
        "Kalinga University Refund",
        "UGC Refund Guidelines",
        "Fee Refund Policy",
        "University Cancellation Terms",
    ],
    alternates: {
        canonical: "https://kalingauniversity.ac.in/refund-policy/",
    },
};

export default function RefundPolicyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Refund & Cancellation Policy - Kalinga University",
        "description": "Information about refund and cancellation procedures at Kalinga University as per UGC norms.",
        "publisher": {
            "@type": "University",
            "name": "Kalinga University",
            "url": "https://kalingauniversity.ac.in/"
        }
    };

    return (
        <section className='container mx-auto px-6 py-16'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='text-center'>
                <SectionHeading
                    title="Refund & Cancellation Policy"
                    subtitle=""
                    titleClassName="text-center"
                    subtitleClassName="text-center text-sm sm:text-base text-[var(--lite-sand)] max-w-3xl mx-auto"
                />
            </div>
            <div className='mt-8 text-justify'>
                <p className='text-sm'>
                    For any refund and cancellation, the University follows guidelines as per the University Grants Commission Policy issued from time to time.
                </p>
            </div>
        </section>
    )
}
