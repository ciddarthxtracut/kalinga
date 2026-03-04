"use client";

import { useEffect } from 'react';
import MainIntro from "../components/about/main_intro";
import OpenPositions from "../components/careers/OpenPositions"
import EmployeeBenefits from "../components/careers/EmployeeBenefits"
import CareerForm from "../components/forms/CareerForm"
import FaqSection from "../components/general/faq"
import Gallery from '../components/campuslife/campusgallery';

const CareersClient = ({ careerFAQs }) => {
    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;

        const originalBodyOverflow = body.style.overflowY;
        const originalHtmlOverflow = html.style.overflowY;
        const originalBodyScrollbarWidth = body.style.scrollbarWidth;
        const originalHtmlScrollbarWidth = html.style.scrollbarWidth;
        const originalBodyMsOverflow = body.style.msOverflowStyle;
        const originalHtmlMsOverflow = html.style.msOverflowStyle;

        body.style.overflowY = 'auto';
        html.style.overflowY = 'auto';
        body.style.scrollbarWidth = 'none';
        html.style.scrollbarWidth = 'none';
        body.style.msOverflowStyle = 'none';
        html.style.msOverflowStyle = 'none';

        body.classList.add('scrollbar-hide');
        html.classList.add('scrollbar-hide');

        return () => {
            body.style.overflowY = originalBodyOverflow;
            html.style.overflowY = originalHtmlOverflow;
            body.style.scrollbarWidth = originalBodyScrollbarWidth;
            html.style.scrollbarWidth = originalHtmlScrollbarWidth;
            body.style.msOverflowStyle = originalBodyMsOverflow;
            html.style.msOverflowStyle = originalHtmlMsOverflow;
            body.classList.remove('scrollbar-hide');
            html.classList.remove('scrollbar-hide');
        };
    }, []);

    return (
        <>
            <MainIntro
                title="Why Work With Us?"
                description={["Kalinga University offers a work environment where people feel valued, motivated, and supported. Our faculty members and staff are empowered through continuous learning opportunities where their ideas are encouraged, their voices are heard, and their efforts are appreciated. We value teamwork, transparency, and open communication. Become a part of an academic community that believes in learning, innovation, and collaboration. "
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                imageAlt="Why Work With Us?"
                showKnowMore={false}
            />

            <OpenPositions />
            <EmployeeBenefits />
            <CareerForm />
            <FaqSection items={careerFAQs} title="Frequently Asked Questions" subtitle="" />
            <Gallery
                title="Gallery"
                description=""
                images={[
                    { id: 1, src: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-1.webp", alt: "Life at Kalinga 1" },
                    { id: 2, src: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-2.webp", alt: "Life at Kalinga 2" },
                    { id: 3, src: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-3.webp", alt: "Life at Kalinga 3" },
                    { id: 4, src: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-4.webp", alt: "Life at Kalinga 4" },
                    { id: 5, src: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-5.webp", alt: "Life at Kalinga 5" },
                    { id: 6, src: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/placement-intro-2.webp", alt: "Life at Kalinga 6" },
                    { id: 7, src: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/placemnt-intro.webp", alt: "Life at Kalinga 7" },
                    { id: 8, src: "https://cdn.kalingauniversity.ac.in/placement/placement-intro.jpg", alt: "Life at Kalinga 8" },
                ]}
            />
        </>
    );
};

export default CareersClient;
