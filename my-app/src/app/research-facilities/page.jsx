"use client";
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ResearchGrid from '../components/research-facilities/research-grid'
import AdmissionCareer from '../components/general/admission_cta'
import ResearchLab from '../components/research-facilities/research-lab'
import ResearchFacilitiesIntro from '../components/research-facilities/research-intro'

const page = () => {
  const pathname = usePathname();

  

    return (
        <>
            <ResearchFacilitiesIntro />
            <ResearchGrid />
            <ResearchLab />
            <AdmissionCareer />
        </>
    )
}

export default page