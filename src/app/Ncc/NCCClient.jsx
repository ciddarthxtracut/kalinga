"use client";

import React from 'react'
import NccIntro from '../components/Ncc/ncc-intro'
import NccBenefits from '../components/Ncc/ncc-benefits'
import NccHeadMessage from '../components/Ncc/ncc-coordinator-message'
import NccVisionMission from '../components/Ncc/ncc-visionmission'
import AdmissionCareer from '../components/general/admission_cta';
import RaipurVideoSection from '../components/about-raipur/raipurvideo';
import Nccvideos from '../components/Ncc/ncc-videos';
import Gallerys from '../components/campuslife/campusgallery';
import StudentActivities from "@/app/components/department/student_activities";
import PublicationCard from "../components/general/PublicationCard";
import SectionHeading from "../components/general/SectionHeading";

const NCCClient = ({ nccAchievements, nccgallery }) => {
    return (
        <>
            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 10% !important;
        }
        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>

            <NccIntro />
            <RaipurVideoSection
                videoId="u2yYHsX52Y"
                thumbnail="https://cdn.kalingauniversity.ac.in/about/about-banner.webp"
                title=""
                description=""
                alt="Video thumbnail"
                heightClass="h-[380px] sm:h-[420px] md:h-[520px]"
            />
            <NccBenefits />
            <Nccvideos />
            <NccVisionMission />
            <NccHeadMessage />

            <section className="container mx-auto px-4 md:px-6 py-12">
                <SectionHeading
                    title="NCC Achievers"
                    description=""
                    titleClassName="text-center font-stix "
                    descriptionClassName="text-center mt-4"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mt-12">
                    {nccAchievements.map((achievement) => (
                        <PublicationCard key={achievement.id} data={achievement} className="bg-card-sandal" />
                    ))}
                </div>
            </section>
            <StudentActivities
                title="Events & Activities"
                subtitle="Experience Campus Life Beyond Academics"
                categoryId={2}
                fallbackToGlobal={true}
            />
            <Gallerys
                title="Glimpses"
                subtitle=""
                images={nccgallery}
            />
            <AdmissionCareer />
        </>
    );
};

export default NCCClient;
