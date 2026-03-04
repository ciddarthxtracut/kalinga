"use client";

import React from "react";
import Image from "next/image";
import CareerPath from "@/app/components/course/career_path";
import MainIntro from "@/app/components/about/main_intro";
import VisionMission from "@/app/components/about/vision-mission";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import Gallerys from '../components/campuslife/campusgallery';
import MentorIntro from "@/app/components/department/dept_head_intro";
import AdmissionCareer from "@/app/components/general/admission_cta";
import StudentActivities from "@/app/components/department/student_activities";

const NSSClient = ({ aboutP1, aboutP2, objectiveItems, MentorIntroProps, visionMissionData, benefitsBoxItems, learningOutcomeCards }) => {
    return (
        <>
            <MainIntro
                subtitle="National Service Scheme"
                title="About NSS At KU"
                description={[aboutP1, aboutP2]}
                imageUrl="https://cdn.kalingauniversity.ac.in/nss/nns-logo.webp"
                imageAlt="NSS at Kalinga University"
                showKnowMore={true}
                knowMoreLabel="Read More"
                initialVisibleParagraphs={1}
            />

            <ImageListItem
                title="Objectives"
                items={objectiveItems}
                imageSrc="https://cdn.kalingauniversity.ac.in/nss/nss-benefits-new.webp"
                imageAlt="NSS Objectives"
                description=""
            />

            <div className="-mt-16 md:-mt-20">
                <MentorIntro items={MentorIntroProps} />
            </div>
            <VisionMission data={visionMissionData} />
            <div className="nss-benefits-equal-height">
                <ImageListItem
                    title="Benefits Of Joining Our NSS Team"
                    imageSrc="https://cdn.kalingauniversity.ac.in/common/students-3.jpg"
                    imageAlt="NSS Benefits"
                    boxItems={benefitsBoxItems}
                    description=""
                    reverseLayout={true}
                />
            </div>

            <CareerPath careers={learningOutcomeCards} title="Learning Outcomes" description="" />

            <StudentActivities
                title="Events & Activities"
                subtitle="Experience Campus Life Beyond Academics"
                categoryId={2}
                fallbackToGlobal={true}
            />
            <Gallerys />
            <AdmissionCareer />

            <style jsx global>{`
        .nss-benefits-equal-height .grid {
          align-items: stretch !important;
        }
        .nss-benefits-equal-height img {
          height: 100% !important;
          object-fit: cover !important;
        }
        .absolute.inset-0 > img {
          object-position: center 10% !important;
        }
        @media (max-width: 500px) {
          .absolute.inset-0 > img {
            object-position: center 10% !important;
          }
        }
      `}</style>
        </>
    );
};

export default NSSClient;
