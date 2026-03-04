'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/app/components/general/SectionHeading'
import AdmissionCareer from '@/app/components/general/admission_cta'
import QuickLinks from "@/app/components/general/quick_links";
import Stack from '@/app/components/gsap/Stack'
import GlobalArrowButton from '@/app/components/general/global-arrow_button'

const toTitleCase = (str) => {
    if (!str) return '';
    const lowercaseWords = ['of', 'and', 'the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'with', 'by'];
    return str.toLowerCase().split(' ').map((word, index) => {
        if (index === 0 || !lowercaseWords.includes(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    }).join(' ');
};

const truncateToWords = (text, maxWords = 30) => {
    if (!text) return '';
    const words = text.split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
};

function DepartmentCard({ program }) {
    const isExpanded = program.isExpanded;

    const imageCard = (
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
            <Image
                src={program.img}
                alt={program.title}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-5 left-8 right-3 text-white">
                <h3 className="font-stix text-lg sm:text-xl leading-snug drop-shadow">{toTitleCase(program.title)}</h3>
            </div>
        </div>
    );

    const overviewCard = (
        <div className="w-full h-full rounded-xl overflow-hidden shadow-xl p-4 sm:p-4 lg:p-4 flex flex-col" style={{ backgroundColor: 'rgba(254, 192, 113, 1)' }}>
            <div>
                <h3 className="font-stix !text-[25px] leading-tight mb-3 sm:mb-4">Overview</h3>
                <p className="font-plus-jakarta-sans text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 !text-gray-800">
                    {program.summary || 'Learn more about this department and its opportunities.'}
                </p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                    <GlobalArrowButton
                        className="!bg-white !text-black"
                        arrowClassName="!bg-[var(--button-red)]"
                        arrowIconClassName="!text-white"
                        textClassName="!text-black"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (program.onKnowMore) program.onKnowMore();
                        }}
                    >
                        Know More
                    </GlobalArrowButton>
                    <GlobalArrowButton
                        onClick={(e) => {
                            e.stopPropagation();
                            if (program.onApplyNow) program.onApplyNow();
                        }}
                    >
                        Apply Now
                    </GlobalArrowButton>
                </div>
            </div>
        </div>
    );

    const cards = [overviewCard, imageCard];

    return (
        <div className="flex justify-center">
            <div className="h-[340px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px]">
                <Stack
                    cards={cards}
                    randomRotation
                    sendToBackOnClick
                    pauseOnHover
                    autoplay={false}
                    mobileClickOnly
                />
            </div>
        </div>
    );
}

const AcademicsClient = ({ departments, quickLinks }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedDept, setExpandedDept] = useState(null);

    const filteredDepartments = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return departments;
        return departments.filter(dept =>
            dept.title.toLowerCase().includes(query)
        );
    }, [departments, searchQuery]);

    const handleKnowMore = (dept) => {
        if (dept.slug === 'phd') {
            window.location.href = '/phd';
            return;
        }
        window.location.href = `/departments/${dept.slug}`;
    };

    const handleApplyNow = () => {
        window.open("https://admissions.kalingauniversity.ac.in/", "_blank");
    };

    const handleReadMore = (dept) => {
        if (expandedDept === dept.id) {
            if (dept.slug === 'phd') {
                window.location.href = '/phd';
            } else {
                window.location.href = `/departments/${dept.slug}`;
            }
        } else {
            setExpandedDept(dept.id);
        }
    };

    return (
        <>
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-2">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <SectionHeading
                            subtitle="Explore Academics"
                            title="Your Journey Begins Here"
                            subtitleClassName="text-center !text-[var(--button-red)]"
                            titleClassName="text-center"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredDepartments.length === 0 && (
                            <div className="col-span-full text-center py-8">
                                <p className="text-gray-600">No departments found matching your search.</p>
                            </div>
                        )}
                        {filteredDepartments.map((dept) => {
                            const isExpanded = expandedDept === dept.id;
                            const displaySummary = isExpanded ? dept.fullSummary : truncateToWords(dept.fullSummary, 30);
                            const shouldShowReadMore = dept.fullSummary && dept.fullSummary.split(/\s+/).length > 30;

                            const programData = {
                                ...dept,
                                summary: displaySummary,
                                onKnowMore: () => handleKnowMore(dept),
                                onApplyNow: handleApplyNow,
                                onReadMore: shouldShowReadMore ? () => handleReadMore(dept) : null,
                                isExpanded: isExpanded,
                            };

                            return (
                                <div key={dept.id} className="flex justify-center">
                                    <DepartmentCard program={programData} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <QuickLinks
                title="Quick Links"
                description="Learning at Kalinga University goes beyond classroom lectures and textbook knowledge. From participating in student clubs to attending conferences and events, these experiences will make you well-rounded learners and future professionals."
                links={quickLinks}
                titleClassName="text-white"
            />
            <AdmissionCareer />
        </>
    );
};

export default AcademicsClient;
