"use client";

import React from "react";
import FeaturesSection from "../components/campuslife/featuresection";
import MainIntro from "../components/about/main_intro";
import Facilities from "../components/home/facilities";
import GalleryAll from "../components/general/image_animation";
import CampusVideo from "../components/campuslife/campusvideo";
import CampusGallery from "../components/campuslife/campusgallery";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";

const CampusLifeClient = () => {
    return (
        <>
            <MainIntro
                title="Life at Kalinga University"
                subtitle="Get Ready to Explore a Thriving Campus Life"
                description={[
                    "Your long-awaited feeling of experiencing college life finally begins. Step into a journey full of new learnings, exploration, and self-discovery, right from day one. Every day starts with a fresh sense of excitement, new connections, self-development, and opportunities that help you discover your potential and prepare for a successful future. As you move forward, you’ll gain confidence, independence, and clarity about your goals.",
                    "Focusing on student success and their holistic development, our learning environment goes beyond classroom education through academic events, extracurricular activities, and cultural celebrations. It adds excitement to their daily routines and makes learning feel purposeful. At Kalinga, students don't just enjoy campus life; they get prepared to make a mark in evolving industries. Your new adventure begins, make it unforgettable!"
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/campus-life/campus-life-intro-1.webp"
                imageAlt="Life at KU"
                showButton={false}
                showKnowMore={false}
            />
            <Facilities />
            <FeaturesSection />
            <CampusVideo />
            <GalleryAll className="mt-10 mb-10" />
            <UpcomingConferences
                categoryIds={['6', '7']}
                title="Campus Events"
                fallback="hide"
            />
            <CampusGallery title="Glimpses" />
            <AdmissionCareer />
        </>
    );
};

export default CampusLifeClient;
