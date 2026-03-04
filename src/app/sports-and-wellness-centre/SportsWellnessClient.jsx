"use client";

import React from 'react'
import SportsWellnessOverview from '@/app/components/sports-and-wellness-centre/sportsandwellnesshero'
import SportsandwellnessMainIntro from '@/app/components/sports-and-wellness-centre/sportsandwellness_main_intro'
import SportsFacilitiesTabs from '@/app/components/sports-and-wellness-centre/sportsfacilitiestabs'
import NewsEvents from '@/app/components/home/news_and_events'
import AdmissionCareer from '@/app/components/general/admission_cta'
import Gallery from '@/app/components/general/gallery'
import Sportsandwellnesshighlightvideo from '../components/sports-and-wellness-centre/sportsandwellnesshighlightvideo'
import Sportsandwellnessvideo from '../components/sports-and-wellness-centre/sportsandwellnessvideo'
import SectionHeading from '../components/general/SectionHeading'

const SportsWellnessClient = ({ galleryItems }) => {
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
            <SportsandwellnessMainIntro />
            <Sportsandwellnesshighlightvideo />
            <SportsWellnessOverview />
            <Sportsandwellnessvideo />
            <div className="container py-10 text-center">
                <SectionHeading title="Sports Facilities" titleClassName="text-center" />
                <SportsFacilitiesTabs />
            </div>
            <NewsEvents categoryId="6" title="Sports Achievers" titleClassName="text-center" hideCalendar={true} />
            <Gallery title='Glimpses' images={galleryItems} />
            <AdmissionCareer />
        </>
    );
};

export default SportsWellnessClient;
