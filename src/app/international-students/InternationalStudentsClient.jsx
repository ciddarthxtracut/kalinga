"use client";

import React from 'react'
import MainIntro from '../components/about/main_intro'
import PublicationGrid from '../components/research/publication-grid'
import AccreditationRanking from '../components/home/AccreditationRanking'
import FeatureCards from "../components/home/featurecard";
import ImageListItem from '../components/ccrc/imagelistitem';
import StudentCell from '../components/international-students/student_cell';
import AdmissionSteps from '../components/admissions/admission-steps';
import AppreciationLetterLayout from '../components/international-students/appreciation_letter_layout';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import MediaCardSlider from '../components/general/media-card-slider';
import UpcomingConference from '../components/research/upcoming_conference';
import Gallery from '../components/campuslife/campusgallery';
import AdmissionCareer from '../components/general/admission_cta';
import OpenPositions from '../components/careers/OpenPositions';
import VisaFrofrroGuidelines from '../components/international/visa_frofrro_guidelines';

const InternationalStudentsClient = ({ newsConferences, videoItems, boxItems, internationalStudentsFeatureCards, publicationStats, internationalAdmissionSteps }) => {
    return (
        <>
            <MainIntro
                title="Where Dreams Across Borders Take Flight"
                subtitle="A Global Learning Hub"
                description={[
                    "Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education with equal opportunities to its international students.",
                    "Our international collaborations are with different nationalities, including Afghanistan, Angola, Bangladesh, Burundi, Cameroon, Congo, Gambia, Ghana, Ivory Coast, Lesotho, Liberia, Malawi, Mozambique, Namibia, Nepal, Nigeria, PNG, Rwanda, Somalia, South Korea, South Sudan, Sudan, Swaziland, Syria, Tanzania, Zambia, Zimbabwe, ⁠Singapore, ⁠South Africa. We offer our global students a vibrant platform where they can all express their views and share their country's culture and values.",
                    "From pre-arrival to post-arrival, we're here to support them at every step of their academic journey. We conduct one-on-one counselling sessions for every student, helping them select the programs of their interest. Our highly experienced faculty members provide unparalleled mentorship to our international students in academics and personal growth. Explore Diploma, UG, PG, and Doctorate programs designed to meet your academic aspirations.",
                    "At Kalinga, you're not just another student but a part of a global community where IDEAS are nurtured, and DREAMS are fulfilled."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/international-students/international-students-intro.jpg"
                imageAlt="International Students"
                initialVisibleParagraphs={2}
                showKnowMore={true}
            />
            <PublicationGrid stats={publicationStats} />
            <AccreditationRanking
                heading="Approvals & Accreditations"
                secondHeading=""
            />

            <ImageListItem
                imageSrc="https://cdn.kalingauniversity.ac.in/international-students/int-g-3.webp"
                boxItems={boxItems}
                title="Why study in India"
                subtitle=""
                description=""
                className="bg-white"
                textClassName=""
                headingClassName=""
                cardBackgroundColor="bg-[var(--button-red)]"
                cardTitleClassName="text-white"
                listItemTextClassName="text-white"
                hideIcons={true}
            />
            <FeatureCards
                title="Why International Students Choose Kalinga University?"
                subtitle=""
                description="At Kalinga University, international students discover an education hub designed for global success. From academic excellence to an inclusive learning environment, every step of their journey is thoughtfully designed so that they can focus on fulfilling their aspirations."
                imageUrl="https://cdn.kalingauniversity.ac.in/international-students/int-why.jpg"
                imageAlt="International Students"
                cards={internationalStudentsFeatureCards}
            />
            <StudentCell />
            <VisaFrofrroGuidelines />
            <AdmissionSteps
                steps={internationalAdmissionSteps}
                bgColor="bg-[var(--background)]"
            />
            <AppreciationLetterLayout />
            <MainIntro
                subtitle="Faith and Worship Facility"
                title="Honouring Every Faith and Religion"
                description={[
                    "At Kalinga University, you'll find the world in one place. With students from 29+ countries, we celebrate their cultures, faiths, and beliefs. We offer an inclusive environment to all our students where they can freely practice their religion and stay connected with their roots.",
                    "Our multi-faith services are accessible to all students at our campus, which include:"
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/international-students/international-students-group.webp"
                imageAlt="International Students"
                reverseLayout={true}
                applyTransform3dSlant={false}
                initialVisibleParagraphs={1}
                showKnowMore={true}
                hidePointsUntilExpanded={true}
                points={[
                    "Free-of-cost transportation facility for prayers at the Mosque (on Fridays) and the Church (on Sundays) to our Muslim and Christian students.",
                    "A visit to the Temple is organised on demand for our Hindu students.",
                    "During Ramadan, an appropriate meal plan is provided to our Muslim students.",
                    "During Navratri, a special meal is provided to our Hindu Students.",
                    "The Meditation Room is available for all students (Hostel + Regular) to meditate or offer prayers."
                ]}
            />
            <div id="bridge-course" className="scroll-mt-24 md:scroll-mt-28">
                <OpenPositions
                    title="BRIDGE Courses for International Students"
                    subtitle="Pre-Semester Preparation Programs"
                    description="BRIDGE Courses for newly admitted international students are conducted before the commencement of the first semester classes. The main objective of the course is to bridge the gap between subjects studied at the Pre-university level and subjects they would be studying here. We also understand that the students applying to the university come from different backgrounds and countries, and thus, we have included a few topics that will help them understand the local culture and history of India. To make this bridge course interesting for the students, we have included workshops related to art and culture & a hobby class too. We have bridge courses of 2 months, 4 months, and 6 months (5 days a week)."
                    hideCheckEligibility={true}
                    cardTitleClassName="font-plus-jakarta-sans"
                    positions={[
                        {
                            title: "Technical BRIDGE Courses",
                            description: "Maths, Physics, Chemistry, Biology",
                            checkEligibilityLink: "/contact-us",
                            applyNowLink: "/contact-us"
                        },
                        {
                            title: "Non-Technical BRIDGE Courses",
                            description: "Yoga & Meditation, Indian Arts & Crafts",
                            checkEligibilityLink: "/contact-us",
                            applyNowLink: "/contact-us"
                        },
                        {
                            title: "Common Topics (Technical & Non-Technical)",
                            description: "English & Soft Skills, Language Communications (Hindi), Indian Culture & Lifestyle, IT Skills,Grooming & Personality Development, GD & PI, Hobby Class (Music & Dance / Painting & Other Fine Arts / Modelling & Fashion Style / Library Arts / Book Club)",
                            checkEligibilityLink: "/contact-us",
                            applyNowLink: "/contact-us"
                        }
                    ]}
                />
            </div>
            <OrganogramOfKalinga
                title="Download Brochure 2025-26"
                description="Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence."
                buttonLabel="Download PDF"
                href="https://cdn.kalingauniversity.ac.in/international-students/International+Student_compressed.pdf"
                useContainer={true}
            />
            <MainIntro
                subtitle="Campus Safety and Security"
                title="A Safe & Protected Learning Environment "
                description="Kalinga University is committed to maintaining a safe and secure campus environment for its students, staff members, and visitors. The entire campus area, including hostels, parking areas, and academic buildings, is very well-secured by the in-house security team. CCTV cameras are also installed all across the campus to continuously monitor all the activities of the University. We even encourage everyone on our campus to take care of their personal belongings. "
                imageUrl="https://cdn.kalingauniversity.ac.in/international-students/int-sage.jpg"
                imageAlt="International Students"
                initialVisibleParagraphs={1}
                showKnowMore={true}
            />
            <MediaCardSlider
                categoryTitle=""
                title="Hear From Our International Students"
                description="Discover firsthand experiences from our international students as they share their journey at Kalinga University. From academic excellence to campus life, cultural integration, and career aspirations, listen to their inspiring stories and learn why they chose Kalinga University for their higher education."
                videoItems={videoItems}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />
            <UpcomingConference
                categoryIds={['']}
                fallback="all"
                limit={5}

                title="News & Events"
                backgroundColor="bg-[var(--light-gray)]"
                backgroundColorcard="bg-white"
            />
            <Gallery
                title="Glimpses"
                description="Explore the vibrant life of our international students at Kalinga University. From cultural celebrations to academic achievements, witness the diverse experiences that make our campus a global community."
                images={[
                    { id: 1, src: "https://cdn.kalingauniversity.ac.in/international-students/int-g-1.webp", alt: "International Students Introduction" },
                    { id: 2, src: "https://cdn.kalingauniversity.ac.in/international-students/int-g-2.webp", alt: "Why Choose Kalinga University" },
                    { id: 3, src: "https://cdn.kalingauniversity.ac.in/international-students/int-g-3.webp", alt: "International Students Group" },
                    { id: 4, src: "https://cdn.kalingauniversity.ac.in/international-students/int-g-4.webp", alt: "Campus Safety and Security" },
                    { id: 5, src: "https://cdn.kalingauniversity.ac.in/international-students/int-g-5.webp", alt: "International Students Banner" },
                    { id: 6, src: "https://cdn.kalingauniversity.ac.in/international-students/int-g-6.webp", alt: "International Students Banner" },
                    { id: 7, src: "https://cdn.kalingauniversity.ac.in/international-students/int-g-7.webp", alt: "International Students Banner" },
                    { id: 8, src: "https://cdn.kalingauniversity.ac.in/international-students/int-g-8.webp", alt: "International Students Banner" },
                ]}
            />
            <AdmissionCareer />
        </>
    );
};

export default InternationalStudentsClient;
