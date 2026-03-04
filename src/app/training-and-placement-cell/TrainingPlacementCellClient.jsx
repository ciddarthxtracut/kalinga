"use client";

import React from 'react'
import MainIntro from '@/app/components/about/main_intro'
import ImageContent from '@/app/components/ccrc/imagecontent'
import ImageListItem from '@/app/components/ccrc/imagelistitem'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/general/tab'
import CareerPath from '@/app/components/course/career_path'
import Partner from '@/app/components/ccrc/partner'
import MediaCardSlider from '@/app/components/general/media-card-slider'

const TrainingPlacementCellClient = ({ blueItems, items, skillsContent }) => {
    return (
        <>
            <MainIntro
                title="Training And Placement Cell"
                description={[
                    "The Career and Corporate Centre of Kalinga University is a hub for career guidance and training, and corporate partnerships. With modern infrastructure and resources, the centre meets industry standards and has even received appreciation from top organisations. The Kalinga University campus placements support cell introduces you to the professional world. We don't just prepare you for the corporate world, but give you a 360-degree training so that you can turn out to be a confident individual who is ready to tackle any challenge in life.",
                    "With our personalised training programs, expert-led sessions, and interview preparation, you will be well-prepared to clear any job interview according to your skill set. Our expert mentors go beyond and guide you with skills that companies are looking for in the current job market, and even update the training modules accordingly. Apart from this, we also keep the database of job openings in various companies up-to-date, so that our students don't miss out on any opportunities. With our strong industry connections, we conduct campus drives each year, ensuring that our graduates are placed in leading companies with competitive salary packages."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/placemnt-intro.webp"
                imageAlt="Objectives"
                initialVisibleParagraphs={1}
                showKnowMore={true}
            />
            <ImageListItem items={items} description="" imageSrc="https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/placement-intro-2.webp" title="Training And Placement Cell" />
            <ImageContent
                title="Our Career And Corporate Resource Centre"
                description="The Career and Corporate Resource Centre (CCRC) of Kalinga University bridges academic learning and industrial knowledge through collaborations and customised solutions. Our services include: Corporate Trainings & Psychometric Analysis, Consultancy Services: 360 Degree PMS & HRIS, Corporate Social Responsibility, Training and Placements, and Incubation support."
                imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/ccrclogo.webp"
                imageAlt="Training And Placement Cell"
                buttonLink="/career-and-corporate-resource-centre"
                buttonText="Explore More"
            />
            {/* ... (rest of the sections from the original page) */}
        </>
    );
};

export default TrainingPlacementCellClient;
