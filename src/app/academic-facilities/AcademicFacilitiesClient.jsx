"use client";

import React from "react";
import Academicmainintro from "@/app/components/academic-facilities/academicmainintro";
import Academiccards from "@/app/components/academic-facilities/academiccards";
import AdmissionCareer from "../components/general/admission_cta";
import Academicvideo from "../components/academic-facilities/academicvideo";

const AcademicFacilitiesClient = () => {
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
            <Academicmainintro />
            <Academiccards />
            <Academicvideo />
            <AdmissionCareer />
        </>
    );
};

export default AcademicFacilitiesClient;
