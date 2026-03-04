"use client";

import React from "react";
import MainIntro from "../components/about/main_intro";
import AdmissionCareer from "../components/general/admission_cta";
import FAQ from "../components/general/faq";
import VerticalTabs from "../components/general/VerticalTabs";

export default function StudentClubsClient({ clubSections }) {
    // Transform clubSections into tabs format for VerticalTabs
    const tabs = clubSections.map((section) => ({
        id: `tab-${section.id}`,
        label: section.title,
        content: (
            <div>
                <h3 className="font-stix text-[var(--foreground)] text-2xl mb-6">
                    {section.title}
                </h3>

                <FAQ
                    items={section.clubs.map((club, index) => ({
                        id: index,
                        question: club.name,
                        component: (
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-full md:w-1/3 flex-shrink-0">
                                    <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 aspect-video md:aspect-[4/3]">
                                        <img
                                            src={club.image}
                                            alt={club.name}
                                            className="w-full h-full object-contain p-4 mix-blend-multiply"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <p className="text-[var(--light-text-gray)] leading-relaxed text-base">
                                        {club.description}
                                    </p>
                                </div>
                            </div>
                        )
                    }))}
                    showHeading={false}
                    noSection={true}
                    pyClassName="py-0"
                />
            </div>
        ),
    }));

    return (
        <>
            <MainIntro
                title="Student Clubs"
                description={[
                    "The vibrant clubs of KU are filled with talented and passionate students who are always ready to showcase their creative skills and develop interests in engaging activities. Our academic clubs motivate students to learn and grow with confidence inside and outside their classrooms. With our clubs, students develop leadership qualities, learn new skills, work in teams, and make unforgettable memories.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/campus-life/campus-life-intro-1.webp"
                imageAlt="Student Clubs"
                showButton={false}
                showKnowMore={false}
                sectionClassName="py-8"
                disableClipPath={false}
            />

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-stix text-[var(--foreground)] mb-3">
                        Academic Clubs
                    </h2>
                    <p className="max-w-5xl mx-auto text-[var(--light-text-gray)]">
                        Our academic clubs provide students with the resources and practical exposure that supplement their studies. We believe that knowledge should go beyond classroom studies, and students must be professionally prepared to take up any challenge in their field of study. Our academic clubs will expand their network and connect them with our faculty members.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <VerticalTabs tabs={tabs} />
            </div>

            <AdmissionCareer />
        </>
    );
}
