"use client";

import React from 'react'
import MiniMarketFacility from '../components/mini-market/minimarket-facility'
import AdmissionCareer from '../components/general/admission_cta'
import RaipurVideoSection from '../components/about-raipur/raipurvideo';

const MiniMarketClient = () => {
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
            <MiniMarketFacility />
            <RaipurVideoSection
                videoId="8bqYKGqQ8XI"
                thumbnail="https://cdn.kalingauniversity.ac.in/mini-market/thumbnail.webp"
                title=""
                description=""
                alt="Video thumbnail"
                heightClass="h-[380px] sm:h-[420px] md:h-[520px]"
            />
            <AdmissionCareer />
        </>
    );
};

export default MiniMarketClient;
