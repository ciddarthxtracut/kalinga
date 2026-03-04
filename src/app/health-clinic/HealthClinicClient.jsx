"use client";

import React from 'react'
import HCIntro from '../components/health-clinic/healthclinic-intro'
import HealthClinicTable from '../components/health-clinic/healthclinic-table'
import AdmissionCareer from '../components/general/admission_cta'
import RaipurVideoSection from '../components/about-raipur/raipurvideo';

const HealthClinicClient = () => {
    return (
        <>
            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 60% !important;
        }
        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>
            <HCIntro />
            <HealthClinicTable />
            <RaipurVideoSection
                videoId="ogUpFzbzP1c"
                thumbnail="https://cdn.kalingauniversity.ac.in/about/about-banner.webp"
                title=""
                description=""
                alt="Video thumbnail"
                heightClass="h-[380px] sm:h-[420px] md:h-[520px]"
            />
            <AdmissionCareer />
        </>
    );
};

export default HealthClinicClient;
