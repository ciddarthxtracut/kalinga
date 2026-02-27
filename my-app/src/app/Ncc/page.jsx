"use client";
import React, { useEffect } from 'react'
import NccIntro from '../components/Ncc/ncc-intro'
import NccBenefits from '../components/Ncc/ncc-benefits'
import NccHeadMessage from '../components/Ncc/ncc-coordinator-message'
import NccVisionMission from '../components/Ncc/ncc-visionmission'
import NccEvents from '../components/Ncc/ncc-events'
import AdmissionCareer from '../components/general/admission_cta';
import UpcomingConferences from '../components/research/upcoming_conference';
import RaipurVideoSection from '../components/about-raipur/raipurvideo';
import Ncctopvideo from '../components/Ncc/ncc-topvideo';
import Nccvideos from '../components/Ncc/ncc-videos';
import Gallerys from '../components/campuslife/campusgallery';
import StudentActivities from "@/app/components/department/student_activities";

const page = () => {

  const nccgallery = [
    {
      id: 1,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/01.jpg",
    },
    {
      id: 2,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/02.jpg",
    },
    {
      id: 3,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/03.jpg",
    },
    {
      id: 4,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/04.jpg",
    },
    {
      id: 5,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/05.jpg",
    },
    {
      id: 6,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/06.jpg",
    },
    {
      id: 7,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/07.jpg",
    },
    {
      id: 8,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/08.jpg",
    },
    {
      id: 9,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/09.jpg",
    },
    {
      id: 10,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/10.jpg",
    },
    {
      id: 11,
      src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/11.jpg",
    }
  ];

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
        thumbnail="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp"
        title="Why Every Student Should Join NCC | Career Boost, Discipline & More Revealed"
        description="" // optional
        alt="Video thumbnail"
        heightClass="h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
        className="" // optional wrapper class
      />
      <NccBenefits />
      <Nccvideos />
      <NccVisionMission />
      <NccHeadMessage />
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
  )
}

export default page