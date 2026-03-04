"use client";

import React from 'react'
import AboutCafeteria from '../components/cafeteria-mess/about-cafeteria-mess'
import AdmissionCareer from '../components/general/admission_cta';
import CanteenMess from '../components/cafeteria-mess/cafeteria-facility-mess';
import RaipurVideoSection from '../components/about-raipur/raipurvideo';

const CafeteriaClient = () => {
    return (
        <>
            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 40% !important;
        }
        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>
            <AboutCafeteria />
            <CanteenMess />
            <RaipurVideoSection
                videoId="Wsv6dss4wSs"
                thumbnail="https://cdn.kalingauniversity.ac.in/canteen-and-mess/cafeteria-thumbnail.jpg"
                title=""
                description=""
                alt="Video thumbnail"
                heightClass="h-[380px] sm:h-[420px] md:h-[520px]"
            />
            <AdmissionCareer />
        </>
    );
};

export default CafeteriaClient;
