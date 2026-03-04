"use client";

import React from "react";
import Image from "next/image";
import KIFCertificateSection from "@/app/components/kif/kif-certificate-section";
import ImageContent from "@/app/components/ccrc/imagecontent";
import VisionMission from "@/app/components/about/vision-mission";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import Testimonials from "@/app/components/home/Testimonials";
import QuickLinks from "@/app/components/general/quick_links";
import AdmissionSteps from "@/app/components/admissions/admission-steps";
import OrganogramOfKalinga from "@/app/components/about/organogram_of_kalinga";
import CenterOfExcellence from "@/app/components/about/center_of_excellence";
import StudentActivities from "@/app/components/department/student_activities";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Gallery from '../components/campuslife/campusgallery';

export default function KIFClient({
    visionMissionData,
    boxItems,
    boxItems1,
    testimonials,
    links,
    kifSteps,
    organogram,
    centres,
    activities,
    galleryImages,
    kifAdditionalContent
}) {
    return (
        <div>
            <ImageContent
                title="About Kalinga Incubation Foundation (KIF)"
                subtitle="Ideation | Execution | Expansion"
                description="KIF was established in 2023, where students' bold and unique ideas are supported so that their entrepreneurial ambitions can be turned into ACTION. Recognised as a Host Institute under the Ministry of MSME, Government of India, and structured as a Section 8, not-for-profit company under the Ministry of Corporate Affairs (MCA), Government of India, its motive is to promote the spirit of research, innovation, and entrepreneurship among students and faculty members of our University."
                additionalContent={kifAdditionalContent}
            />
            <KIFCertificateSection />
            <VisionMission data={visionMissionData} showImg={false} />
            <ImageListItem
                textClassName="hidden"
                listItemTextClassName="text-black"
                imageSrc="https://cdn.kalingauniversity.ac.in/kif/chart+(17).webp"
                boxItems={boxItems}
                title="Our Key Offerings"
                subtitle="About KIF"
                description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality."
            />
            <QuickLinks
                links={links}
                title="What Awaits You At KIF?"
                description="Discover a comprehensive ecosystem with state-of-the-art infrastructure, expert mentorship, networking opportunities, seed funding support, and hands-on training through workshops and pitch sessions to transform your innovative ideas into successful startups."
                backgroundColor="bg-white"
                textColorClassName="text-black"
                showReadMore={false}
            />
            <ImageContent
                title="Career and Corporate Resource Centre"
                subtitle="About CCRC"
                description="The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS, Corporate Social Responsibility, Training and Placements, and Incubation support."
                imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/ccrclogo.webp"
                imageAlt="CCRC Banner"
                buttonLink="/career-and-corporate-resource-centre"
                buttonText="Read More"
            />
            <AdmissionSteps
                steps={kifSteps}
                subtitleClassName="hidden"
                title="Your Step-By-Step Startup Process"
                ctaLabel="Apply Now"
                showReadMore={false}
                showHeaderButton={false}
                showIcon={false}
                showImage={false}
                bgColor="bg-white"
            />
            <ImageListItem
                textClassName="text-white"
                listItemTextClassName="text-black"
                imageSrc="https://cdn.kalingauniversity.ac.in/kif/chart+(16).webp"
                boxItems={boxItems1}
                title="Join Us on Your Entrepreneurial Journey"
                subtitle="About KIF"
                description="We transform young innovators' ideas into scalable and profitable ventures."
            />

            <Testimonials testimonials={testimonials} />

            <OrganogramOfKalinga
                title="Join Us on Your Entrepreneurial Journey"
                description="Let’s work together on your ideas and turn them into a successful venture."
                buttonLabel="Download Form"
                href="https://cdn.kalingauniversity.ac.in/kif/stratup_reg_form.pdf"
                cardBackgroundColor="bg-[var(--button-red)]"
                useContainer={true}
            />
            <CenterOfExcellence
                centres={centres}
                title="Startups"
                subtitle="Supporting Ideas of Innovators"
                description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation."
            />
            <StudentActivities activities={activities} subtitle="" title="KIF Events" showReadMore={false} />
            <Gallery
                images={galleryImages}
                title="Glimpses"
            />
            <AdmissionCareer />
        </div>
    );
}
