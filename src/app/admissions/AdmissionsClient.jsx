"use client";

import { Suspense, useEffect } from "react";
import OurPrograms from "../components/admissions/our_programs";
import ScholarshipsSlider from "../components/admissions/scholarships_slider";
import AdmissionSteps from "../components/admissions/admission-steps";
import Facility from "../components/admissions/facility";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";

export default function AdmissionsClient() {
    // Handle scrolling to program search section when hash is present
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.location.hash === '#program-search-section') {
                setTimeout(() => {
                    const searchSection = document.getElementById('program-search-section');
                    if (searchSection) {
                        const headerOffset = window.innerWidth < 768 ? 100 : 80;
                        const elementPosition = searchSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        setTimeout(() => {
                            const searchInput = searchSection.querySelector('input[type="text"]');
                            if (searchInput) searchInput.focus();
                        }, 500);
                    }
                }, 300);
            }
        }
    }, []);

    const admissionStepsContent = {
        steps: [
            { id: 1, stepNumber: "01", title: "Step Ⅰ", description: "Visit admission portal", backDescription: "Visit admissions.kalingauniversity.ac.in" },
            // ... (rest of steps)
        ],
        subtitle: "Admission Procedure",
        title: "Steps To Get Admission Into KU",
        showHeaderButton: true,
        ctaLabel: "Apply Now",
        showReadMore: true,
        showIcon: true,
    };

    const entranceExamContent = {
        title: "Book Your Spot",
        description: ["Take the first step towards your dream career with KALSEE and KAL-MAT."],
        buttonLabel: "Explore Now",
        cardBackgroundColor: "bg-[var(--dark-blue)]",
        showImage: true,
        imageUrl: "https://cdn.kalingauniversity.ac.in/admission/student-img.png",
        buttonClassName: "!bg-[var(--button-red)] !text-white",
        href: "/entrance-exam",
    };

    const admissionOrganogramContent = {
        title: "Proposed Fee Structure 2025-26",
        description: ["Detailed fee breakdowns for all programs are available for Indian students."],
        buttonLabel: "Learn More",
        cardBackgroundColor: "bg-[var(--dark-blue)]",
        showImage: false,
        buttonClassName: "!bg-white !text-black",
        href: "/ku-fees",
    };

    const facilityContent = {
        title: "Campus Facilities",
        subtitle: "World-Class Infrastructure",
        facilities: [
            { id: 1, name: "Hostel", image: "https://cdn.kalingauniversity.ac.in/facilities/hostel.webp" },
            { id: 2, name: "Library", image: "https://cdn.kalingauniversity.ac.in/admission/library.webp" },
            { id: 3, name: "GYM", image: "https://cdn.kalingauniversity.ac.in/facilities/gym.webp" },
            { id: 4, name: "Sports Complex", image: "https://cdn.kalingauniversity.ac.in/facilities/DSC00047.webp" },
            { id: 5, name: "Laboratories", image: "https://cdn.kalingauniversity.ac.in/facilities/labotories.webp" },
            { id: 6, name: "Cafeteria", image: "https://cdn.kalingauniversity.ac.in/facilities/canteen+mess.webp" },
        ],
    };

    const quickLinksContent = {
        title: "Explore More",
        description: "Access essential information to support your academic journey.",
        links: [
            { id: 1, title: "Value Added Courses", href: "/value-added-course" },
            { id: 2, title: "Value Addition", href: "/value-additions" },
            { id: 3, title: "Hostel", href: "/hostel" },
            { id: 4, title: "Transport", href: "/transport-facility" },
            { id: 5, title: "KU Fees", href: "/ku-fees" },
            { id: 6, title: "Why Kalinga", href: "/about-us" },
        ],
    };

    const faqContent = {
        title: "Frequently Asked Questions",
        items: [
            { id: 1, question: "Am I eligible to take admission?", answer: "Check the minimum eligibility criteria and clear the entrance exam." },
            { id: 2, question: "What is the admission procedure?", answer: "Registration, entrance test, and completion of formalities." },
        ],
    };

    return (
        <div className="pt-[100px] md:pt-0" id="course-finder">
            <Suspense fallback={<div className="text-center py-16">Loading programs...</div>}>
                <OurPrograms programCardTitleClassName=" !text-base md:!text-lg lg:!text-xl" customSubtitle="Explore our programs" />
            </Suspense>
            <OrganogramOfKalinga {...entranceExamContent} useContainer={true} />
            <div id="admission-steps">
                <AdmissionSteps {...admissionStepsContent} ctaHref="https://admissions.kalingauniversity.ac.in/" />
            </div>
            <OrganogramOfKalinga {...admissionOrganogramContent} useContainer={true} />
            <ScholarshipsSlider />
            <Facility {...facilityContent} className="!pt-4 pb-16" />
            <QuickLinks {...quickLinksContent} titleClassName="text-white" />
            <FAQ {...faqContent} subtitle="" />
            <AdmissionCareer />
        </div>
    );
}
