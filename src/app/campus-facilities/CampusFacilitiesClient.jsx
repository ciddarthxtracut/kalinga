"use client";

import React from 'react'
import Campusfacilitymainintro from '@/app/components/campus-facilities/campusfacilitymainintro'
import AdmissionCareer from '../components/general/admission_cta'
import Campusfacilitiescard from '../components/campus-facilities/campusfacilitiescard';
import Campusfacilityvideo from '../components/campus-facilities/campusfacilityvideo';

const CampusFacilitiesClient = () => {
    return (
        <>
            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 15% !important;
        }
        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>
            <Campusfacilitymainintro />
            <Campusfacilityvideo />
            <Campusfacilitiescard />
            <AdmissionCareer />
        </>
    );
};

export default CampusFacilitiesClient;
