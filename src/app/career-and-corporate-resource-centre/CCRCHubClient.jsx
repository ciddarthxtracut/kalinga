"use client"

import React from "react";
import Specialization from "../components/course/specialization";
import ImageContent from "@/app/components/ccrc/imagecontent";
import Cards from "@/app/components/ccrc/cards";
import Hearfrom from "@/app/components/ccrc/Hearfrom";
import Partner from "@/app/components/ccrc/partner";
import UpcomingConferences from "@/app/components/research/upcoming_conference";
import Gallery from "@/app/components/general/gallery";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";
import AdmissionCareer from "@/app/components/general/admission_cta";
import MediaCardSlider from "@/app/components/general/media-card-slider";
import SectionHeading from "../components/general/SectionHeading";

const CCRCHubClient = ({
    cards,
    sliderItems,
    ccrcBenefitsData,
    blueItems,
    redItems,
    videoItems,
    MentorIntroProps
}) => {
    return (
        <>
            <ImageContent
                imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/ccrclogo.webp"
                description="The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS, Corporate Social Responsibility, Training and Placements, and Incubation support."
                additionalContent={[
                    "With skill-based training programs, workshops, guest lectures, corporate mentorship, industrial visits, soft skill trainings, personality development workshops, internships, industrial training, campus placement drives, and industry-certified programs, we're able to maximise the output and save the time of students and working professionals, and build a future-ready workforce. The Centre features state-of-the-art infrastructure and resources that meet industry standards and has earned high appreciation from leading organisations across India and abroad. With experiential learning strategies and an updated curriculum, our students are placed at top companies, and corporate professionals have learned to deliver maximum output and maintain consistent performance."
                ]}
            />
            <div className="container mx-auto px-4 mt-16 mb-16">
                <h2 className="font-stix text-center mb-8">Benefits for Organisations</h2>
                <Specialization cards={ccrcBenefitsData} />
            </div>
            <DeptHeadIntro items={MentorIntroProps} />
            <SectionHeading
                title="Our Domains"
                titleClassName="text-center mt-10"
            />
            <p className="text-center text-gray-600 max-w-6xl mx-auto mt-4 mb-8">
                Explore our customised solutions designed to strengthen corporate systems and improve student employability.
            </p>
            <Cards cards={cards} />
            <Hearfrom items={sliderItems} title="From Our Clients" />
            <MediaCardSlider
                categoryTitle=""
                title="Featured Expert Talks"
                description=""
                videoItems={videoItems}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />
            <Partner
                blueTitle="Industry Partner"
                redTitle="MoU Partners"
                blueItems={blueItems}
                redItems={redItems}
                ccrcLogo="https://cdn.kalingauniversity.ac.in/ccrc/ccrclogo.webp"
            />
            <UpcomingConferences
                categoryIds={['']}
                title="Conferences & Events"
                fallback="all"
                limit={5}
                backgroundColor="bg-[var(--light-gray)]"
                backgroundColorcard="bg-white"
                href="/contact-us"
            />
            <Gallery title="Glimpses" paddingClassName="py-16" />
            <AdmissionCareer />
        </>
    );
};

export default CCRCHubClient;
