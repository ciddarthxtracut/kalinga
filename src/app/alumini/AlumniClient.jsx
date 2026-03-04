"use client"

import dynamicImport from 'next/dynamic';
import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ProgramsOffered from "../components/department/programs-offered";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import MainIntro from "../components/about/main_intro";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";
import MentorIntro from "../components/department/dept_head_intro";
import CenterOfExcellence from "../components/about/center_of_excellence";
import AwardsScrollbar from "../components/home/awards-scrollbar";
import ImageContent from "../components/ccrc/imagecontent";
import DataTable from "@/app/components/general/data-table";
import SectionHeading from "@/app/components/general/SectionHeading";
import AlumniForm from "../components/forms/AlumniForm";
import ContactSection from "../components/cif/contact_section";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import VisionMission from "@/app/components/about/vision-mission";

const Testimonials = dynamicImport(() => import("../components/home/Testimonials"), { ssr: false });
const Gallery = dynamicImport(() => import("@/app/components/general/gallery"), { ssr: false });
const MediaCardSlider = dynamicImport(() => import("@/app/components/general/media-card-slider"), { ssr: false });

const AlumniClient = ({
    videoItems,
    testimonials,
    newsConferences,
    galleryImages,
    Items,
    visionMissionData
}) => {
    return (
        <div>
            <ImageContent
                postTitle="Continuing the Legacy of Success Together"
                subtitleclassName="!hidden"
                titleClassName="!hidden"
                imageSrc="https://cdn.kalingauniversity.ac.in/alumini/Alumni+1+1.webp"
                title="About the KU Alumni Association"
                description="The Kalinga University’s alumni network is an open platform where our students share their experiences and build lifelong connections. More than creating a network, our current students and alumni from different academic backgrounds share their experiences from their professional journey, offer tips and tricks on how to crack any job interview, and motivate candidates. Through alumni talks, collaborations, and mentorship programs, our current students learn about industry insights and new-age skills so that they can stand out in job interviews. The association's members also stay informed about the latest university achievements and activities. "
            />
            <ImageListItem
                items={Items}
                description=""
                imageSrc="https://cdn.kalingauniversity.ac.in/placement/placement-intro.jpg"
                title="Objectives"
                className="!bg-[var(--white)]"
                headingClassName="!text-[var(--black)]"
                textClassName="!text-[var(--black)]"
            />
            <VisionMission data={visionMissionData} showImg={false} />
            <Testimonials
                testimonials={testimonials}
                className="bg-[var(--dark-blue)]"
                subtitle="Alumni Success Stories"
                title="Proudly Presenting the Remarkable Achievements of Kalinga University Alumni"
                titleClassName="!text-white"
                subtitleClassName="!text-white"
                subtitleTextColor="!text-white"
            />
            <OrganogramOfKalinga
                title="Become a Member Now"
                description="The Kalinga University Alumni Network is built on trust, connection, and shared mission. Become a part of the KU Alumni Association and avail exclusive opportunities."
                buttonLabel="Explore Now"
                href="https://cdn.kalingauniversity.ac.in/alumini/Alumni.pdf"
                useContainer={true}
            />
            <Gallery title="Glimpses" images={galleryImages} />

            <MediaCardSlider
                categoryTitle=""
                title="Hear From Our Alumni"
                videoItems={videoItems}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />

            <UpcomingConferences
                conferences={newsConferences}
                title="Alumni Talks"
                href="/contact-us"
                description="Their Powerful Session Inspired Every Student to Achieve Their Dreams."
            />
            <OrganogramOfKalinga
                title="Alumni Members"
                description=""
                buttonLabel="Explore Now"
                href="https://cdn.kalingauniversity.ac.in/alumini/alumni-details.pdf"
                useContainer={true}
            />
            <AlumniForm />
            <ContactSection
                title="Contact Us"
                mail="cif@kalingauniversity.ac.in"
                phone="+91 7880135440"
                phone2="+91 7024116966"
                address="Central Instrumentation Facility, Kalinga University, Kotni, Near Mantralaya, Naya Raipur, CG - 492101"
            />
            <AdmissionCareer />
        </div>
    );
};

export default AlumniClient;
