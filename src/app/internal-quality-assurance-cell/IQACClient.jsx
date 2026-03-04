"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'
import DeptHeadIntro from '../components/department/dept_head_intro'
import ISOCertificateSection from '../components/iqac/iso_certificate_section'
import ContactSection from '../components/cif/contact_section'
import AdmissionCareer from '../components/general/admission_cta'
import IQACTabSection from '../components/iqac/iqac_tab_section'
import StudentActivities from "@/app/components/department/student_activities";
import Gallery from "@/app/components/general/gallery";
import TwoLogo from "../components/iqac/two-logo";
import CareerPath from '@/app/components/course/career_path'

const IQACClient = ({ MentorIntroProps, skillsContent }) => {
    return (
        <>
            <MainIntro
                title="About IQAC"
                description={["In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC) for performance evaluation, assessment and accreditation, and quality upgradation of institutions of higher education, NAAC proposes that every accredited institution should have an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. With this aim, Kalinga University established its internal quality assurance cell on 5th July 2016.",
                    "The primary motto of our IQAC is to continuously monitor and improve the quality of every activity and propose new improvements with the cooperation of all the stakeholders. It will channelise the overall performance of the institute towards academic excellence. Our IQAC produces quality reports on various institutional activities, enabling committee members to take rational and informed decisions for continuous improvement."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/IQAC/banner.webp"
                imageAlt="IQAC"
                descriptionClassName="text-[var(--foreground)]"
                sectionClassName="bg-white !py-0 !pb-0"
            />
            <TwoLogo logos={MentorIntroProps[0].logos} />
            <DeptHeadIntro items={MentorIntroProps} className="pt-10 pb-20" />
            <CareerPath
                title={skillsContent.title}
                description={skillsContent.description}
                careers={skillsContent.careers}
            />
            <IQACTabSection />
            <ISOCertificateSection description="Kalinga University is committed to maintaining the highest standards of quality in all its academic and administrative processes. Our ISO 9001:2015 certification demonstrates our dedication to continuous improvement and excellence in education, ensuring that we meet international quality benchmarks and provide the best possible learning experience to our students" />

            <StudentActivities
                title="News & Events"
                fallbackToGlobal={true}
            />
            <Gallery title="Glimpses" />
            <ContactSection
                mail="iqac@kalingauniversity.ac.in"
                phone=""
                address=""
            />
            <AdmissionCareer />
        </>
    );
};

export default IQACClient;
