"use client";

import React from 'react';
import HeroSectionTwo from '../components/general/hero-section-two';
import MainIntro from '../components/about/main_intro';
import MasterClassTab from '../components/ctcd/master_class_tab';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import AdmissionSteps from '../components/admissions/admission-steps';
import Specialization from '../components/course/specialization';
import AdmissionCareer from '../components/general/admission_cta';
import CTCDApplicationForm from '../components/forms/CTCDApplicationForm';
import CtcdTrainingTabs from '../components/ctcd/ctcd_training_tabs';
import CTCDConsultancyTabSection from '../components/ctcd/ctcd_consultancy_tab_section';

const CTCDClient = ({
    benefitsData,
    admissionSteps,
    masterclassActivities,
    galleryImages,
    masterclassActivities2,
    galleryImages2
}) => {
    return (
        <>
            <HeroSectionTwo
                showBlackOverlay={true}
                titleTextColor="text-white"
                subtitleTextColor="text-white"
                subtitle=""
                hideBorder={true}
                subtitleImage="https://cdn.kalingauniversity.ac.in/ccrc/logo-ctcd.svg"
                subtitleImageAlt="CTCD Logo"
                customForm={<CTCDApplicationForm />}
                showButton={false}
            />
            <div id="ctcd-main-intro">
                <MainIntro
                    title="Corporate Training and Consultancy Division (CTCD)"
                    description={[
                        "Due to increasing competition in the domestic and international markets, political influence, and technological advancements, organisations find it difficult to compete in the marketplace. Corporate Training and Consultancy Division (CTCD) at Kalinga helps businesses effectively utilise their most valuable asset, i.e., THEIR PEOPLE.",
                        "We offer training programs and provide one-on-one consultancy services to corporate employees using experiential methods at their location, at our campus, or through online mode, helping them upgrade their skills, boost morale, and improve productivity. Our team continuously researches and stays updated with the latest concepts and trends to provide valuable solutions to organisations. Through our soft skills, technical skills, and compliance training, they become ready to face any challenge and stand out in the workplace."
                    ]}
                    points={[
                        "To align training programs with business needs",
                        "To measure the impact of training through Key Result Areas (KRAs) and business metrics",
                        "To develop core competencies among employees",
                        "To measure the effectiveness of training through employees' performance evaluation and business results",
                        "To use the Phase-Wise training approach for continuous performance improvement"
                    ]}
                    imageUrl="https://cdn.kalingauniversity.ac.in/csr/csr-intro.png"
                    imageAlt="CTCD"
                    initialVisibleParagraphs={1}
                    hidePointsUntilExpanded={true}
                />
            </div>
            <CtcdTrainingTabs />
            <MasterClassTab
                tab1Activities={masterclassActivities}
                tab1Gallery={galleryImages}
                tab1GalleryTitle="Glimpses"
                tab2Activities={masterclassActivities2}
                tab2Gallery={galleryImages2}
                tab2GalleryTitle="Glimpses"
                tab2GalleryclassName="mt-10"
            />
            <AdmissionSteps
                title="Our Training Cycle"
                subtitle=""
                steps={admissionSteps}
                bgColor="bg-[var(--background)]"
                showReadMore={false}
                showIcon={false}
                showHeaderButton={false}
                itemsAlignment="center"
            />
            <div className="container mx-auto px-4 mt-16 mb-16">
                <h2 className="font-stix text-center mb-8">Benefits for Organisations</h2>
                <Specialization cards={benefitsData} />
            </div>
            <MainIntro
                title="Training Benefits"
                description={[
                    "Training and development programs are a top priority in companies as they aim to maximise profit by eliminating low-productive tasks. But, how do they do it in the right direction?",
                    "Well, Kalinga's CTCD team uses effective training methods and trains employees to stay productive, motivated, and improve soft and cognitive skills."
                ]}
                points={[
                    "Customised training programs",
                    "Improved problem-solving and Decision-Making Skills",
                    "Bridge skills gaps",
                    "Aligns employees' goals with organisational objectives",
                    "Improved employees' performance",
                    "Flexibility in timings and location (Online, In-Person, and Hybrid)",
                    "Access to the latest training technologies",
                    "Improved employee engagement and morale",
                    "Increased innovation and adaptability",
                    "Development of future leaders",
                    "Boosts employees' retention",
                    "Improves workforce competitiveness"
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/ctcd/ctcd-meeting.jpg"
                imageAlt="CTCD"
                initialVisibleParagraphs={2}
                hidePointsUntilExpanded={true}
                showKnowMore={true}
            />
            <OrganogramOfKalinga
                title="Consultancy Services"
                description={[
                    "Our consultancy services are designed to transform organisations to reach their maximum potential. Our experts conduct one-on-one discussions with team members of companies and develop strategies that improve their organisations' workflows, HR processes, and performance management systems. ",
                    "More specifically, we assist them in talent management, digital integration, and workforce planning; every approach ensures improved productivity and employee engagement. We help them make SMARTER decisions with proper resource planning and integration, enabling them to grow with a clear roadmap"
                ]}
                buttonLabel="Explore Now"
                href="#ctcd-consultancy-tab-section"
                cardBackgroundColor="bg-[var(--dark-blue)]"
                useContainer={true}
            />
            <CTCDConsultancyTabSection />

            <OrganogramOfKalinga
                title="Download Brochure 2025-26"
                description="Download our comprehensive Corporate Training and Consultancy Division (CTCD) brochure..."
                buttonLabel="Explore Now"
                href="https://cdn.kalingauniversity.ac.in/ctcd/CTCD+-+Corporate+Training+and+Consultancy+Division_compressed+(1).pdf"
                cardBackgroundColor="bg-[var(--button-red)]"
                useContainer={true}
            />
            <AdmissionCareer />
        </>
    );
};

export default CTCDClient;
