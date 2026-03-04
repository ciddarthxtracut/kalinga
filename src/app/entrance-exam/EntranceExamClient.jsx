"use client";

import React from 'react'
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import ImageContent from "@/app/components/ccrc/imagecontent";
import EntranceExamFormCards from "@/app/components/entrance-exam/entrance-exam-cards";
import FaqSection from "@/app/components/general/faq";
import AdmissionCareer from "@/app/components/general/admission_cta";
import EntranceExamUpdated from "@/app/components/entrance-exam/entrance-exam-updated";

const EntranceExamClient = ({ Items, careerFAQs }) => {
    return (
        <>
            <ImageContent
                hasImage={false}
                readmore={false}
                className="items-center justify-center"
                title="Your Dream Career is One Click Away"
                subtitleclassName="hidden"
                description="Crack the KALSEE/KAL-MAT Exam and Join KU’s Prestigious Programs."
            />
            <ImageListItem
                items={Items}
                imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/ccrc.webp"
                title="Apply For KU Entrance Exams"
                subtitle=""
                description="Take the first step towards your dream career. Our entrance examinations are designed to be student-friendly with flexible scheduling, no negative marking, and scholarships up to 100% based on performance."
            />
            <EntranceExamUpdated />
            <AdmissionCareer />
        </>
    );
};

export default EntranceExamClient;
