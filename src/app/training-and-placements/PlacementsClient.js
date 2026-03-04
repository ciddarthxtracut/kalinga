"use client"
import { useFlipbook } from "../components/general/FlipbookContext";
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
import MentorIntro from "../components/department/dept_head_intro";
import CenterOfExcellence from "../components/about/center_of_excellence";
import AwardsScrollbar from "../components/home/awards-scrollbar";
import MediaCardSlider from "@/app/components/general/media-card-slider";
import Gallery from '../components/campuslife/campusgallery';
import Placements from "../components/home/placements";
import Partner from "../components/ccrc/partner";
import ContactSection from "../components/cif/contact_section";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/general/tab'
import CareerPath from '@/app/components/course/career_path'
import ImageContent from '@/app/components/ccrc/imagecontent'
import APITable from "../components/general/api-table";
import GlobalArrowButton from "../components/general/global-arrow_button";
import FlipbookTrigger from "../components/general/FlipbookTrigger";
import CustomGallery from '../components/general/gallery'

export default function PlacementsClient() {
    const { openFlipbook } = useFlipbook();

    const blueItems = [
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/infosys.webp",
            imageAlt: "Infosys",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/capgemini.webp",
            imageAlt: "Capgemini",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/airtel.webp",
            imageAlt: "Airtel",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/amul.webp",
            imageAlt: "Amul",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/cipla.webp",
            imageAlt: "Cipla",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/wipro.webp",
            imageAlt: "Wipro",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/adani.webp",
            imageAlt: "Adani",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/bosch.webp",
            imageAlt: "Bosch",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/biocon.webp",
            imageAlt: "Biocon",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/apollo.webp",
            imageAlt: "Apollo",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/asahi.webp",
            imageAlt: "Asahi",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/axis.webp",
            imageAlt: "Axis",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/cognizant.webp",
            imageAlt: "Cognizant",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/suzuki.webp",
            imageAlt: "Suzuki",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/himalaya.webp",
            imageAlt: "Himalaya",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/decathlon.webp",
            imageAlt: "Decathlon",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/force.webp",
            imageAlt: "Force",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/goorej.webp",
            imageAlt: "Godrej",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/genpact.webp",
            imageAlt: "Genpact",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/hdfc.webp",
            imageAlt: "HDFC",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/jio.webp",
            imageAlt: "Jio",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/justdail.webp",
            imageAlt: "Justdial",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/lg.webp",
            imageAlt: "LG",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/nestle.webp",
            imageAlt: "Nestle",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/sail.webp",
            imageAlt: "SAIL",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/tata-motors.webp",
            imageAlt: "Tata Motors",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/tech+mahindra.webp",
            imageAlt: "Tech Mahindra",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/placement/ultratech.webp",
            imageAlt: "UltraTech",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/agenterprise.png",
            imageAlt: "AG Enterprise",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/care.png",
            imageAlt: "CARE",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/central+bank+of+india.png",
            imageAlt: "Central Bank of India",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/cisco.png",
            imageAlt: "Cisco",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/edunet.png",
            imageAlt: "EduNet",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/eduskills.png",
            imageAlt: "EduSkills",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/godwari.png",
            imageAlt: "Godwari",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/Group+86.png",
            imageAlt: "MoU Partner",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/ibm.png",
            imageAlt: "IBM",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/incube.png",
            imageAlt: "InCube",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/just.png",
            imageAlt: "Just",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/singhania.png",
            imageAlt: "Singhania",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/subros.png",
            imageAlt: "Subros",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/techoviz.png",
            imageAlt: "Techoviz",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/utkarsh.png",
            imageAlt: "Utkarsh",
        },
        {
            imageSrc: "https://cdn.kalingauniversity.ac.in/ccrc/mou/veterans.png",
            imageAlt: "Veterans",
        },
    ]
    const skillsContent = {
        title: "Preparing You With Relevant Skills",
        description: "We stand as one of the highest campus placement universities in Chhattisgarh, as we strategically work at every step until students land their dream job.",
        careers: [
            {
                id: 1,
                title: "Aptitude Training",
                description: "We conduct classes on logical reasoning, quantitative aptitude, and analytical skills, which prepare students for pre-employment tests.",
                imageSrc: "https://cdn.kalingauniversity.ac.in/placement/icons/Aptitude+Training.svg",
                imageAlt: "Aptitude Training",
            },
            {
                id: 2,
                title: "Certification Programs",
                description: "We offer short-term and skill-oriented certification programs that will introduce them to trending tools and technologies so that they can impress the interviewers.",
                imageSrc: "https://cdn.kalingauniversity.ac.in/placement/icons/Certification+Programs.svg",
                imageAlt: "Certification Programs",
            },
            {
                id: 3,
                title: "Communication Skills",
                description: "Our T&P cell conducts personalised sessions on English speaking skills, email writing, and presentation skills.",
                imageSrc: "https://cdn.kalingauniversity.ac.in/placement/icons/Communication+Skills.svg",
                imageAlt: "Communication Skills",
            },
            {
                id: 4,
                title: "Resume Building",
                description: "Our workshops guide students in preparing a well-structured resume that highlights their strengths, skills, projects, and internships.",
                imageSrc: "https://cdn.kalingauniversity.ac.in/placement/icons/Resume+Building.svg",
                imageAlt: "Resume Building",
            },
            {
                id: 5,
                title: "Interview Preparation",
                description: "A special session is conducted where students are trained with mock interviews and group discussions so that they can clear each round without any hesitation.",
                imageSrc: "https://cdn.kalingauniversity.ac.in/placement/icons/Interview+Preparation.svg",
                imageAlt: "Interview Preparation",
            },
        ]
    }
    const milestones = [
        { value: "400", label: "Recruitment Partners" },
        { value: "12 L ", label: "Highest Package" },
        { value: "4 Lakh ", label: "Average Package" },
    ]

    const links = [
        { id: 7, title: "Career Counselling", href: "/training-and-placement-cell" },
        { id: 8, title: "Soft Skills Development", href: "/value-added-course" },
        { id: 9, title: "Language Lab", href: "/academic-facilities" },
        { id: 10, title: "Bridge Courses", href: "/international-students#bridge-course" },
        { id: 11, title: "Competitive Exams Coaching", href: "/entrance-exam" },
        { id: 12, title: "Remedial Coaching", href: "/training-and-placement-cell" },
    ]

    const videoItems = [
        {
            id: 1,
            name: "Anant Jha",
            videoUrl: "https://cdn.kalingauniversity.ac.in/placement/Anant+Jha+CCRC+Placement+Video.mp4",
            thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Anant+Jha.jpg",
            description: "Pharmacy department",
        },
        // ... other success story video items
    ]

    const videoItems2 = [
        {
            id: 1,
            name: "SGS Technical Services Pvt Ltd ",
            videoUrl: "https://cdn.kalingauniversity.ac.in/placement/rec-1.mp4",
            thumbnail: "https://cdn.kalingauniversity.ac.in/placement/rec-1.png",
            description: "Abhijeet Lal - IndusInd Bank Ltd",
        },
        // ... other recruiter video items
    ]

    const videoItems1 = [
        {
            id: 1,
            name: "SGS Technical Services Pvt Ltd ",
            videoUrl: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/SGS+Technical+services+Pvt.+ltd+Campus+Drive.mp4",
            thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Campus+Drives/campus-1.png",
            description: "SGS Technical Services Pvt Ltd",
        },
        // ... other campus drive video items
    ];

    const videoItems3 = [
        {
            id: 1,
            name: "Anant Jha",
            thumbnail: "https://cdn.kalingauniversity.ac.in/placement/Aditi+singh.jpeg",
            description: "Aditya Birla Fashion Retail Ltd.",
            title: "Aditi Singh - BBA",
        },
        // ... other internship video items
    ]

    const items = [
        { id: 1, text: "To provide career counselling services for skill development and better job opportunities" },
        // ... other objective items
    ]

    const annualReportButtons = [
        { id: 1, text: "Annual Report 2022\u201323 (Volume I)", href: "https://cdn.kalingauniversity.ac.in/annual-reports/Annual-Report-2022-23-(Vol-1).pdf" },
        // ... other report buttons
    ];

    const CapacityInitiatives202425Tables = [{ id: 61, title: "Capacity Development & Skill Enhancement Initiatives - 2024 - 25" }];
    const CapacityInitiatives202324Tables = [{ id: 62, title: "Capacity Development & Skill Enhancement Initiatives - 2023 - 24" }];
    const CapacityInitiatives202223Tables = [{ id: 63, title: "Capacity Development & Skill Enhancement Initiatives - 2022 - 23" }];
    const CapacityInitiatives202122Tables = [{ id: 64, title: "Capacity Development & Skill Enhancement Initiatives - 2021 - 22" }];
    const CapacityInitiatives202021Tables = [{ id: 65, title: "Capacity Development & Skill Enhancement Initiatives - 2020 - 21" }];
    const CapacityInitiatives201819Tables = [{ id: 67, title: "Capacity Development & Skill Enhancement Initiatives - 2018 - 19" }];

    const collaborationTables = [{ id: 59, title: "Our Collaborations" }];
    const guidanceForCompetitiveExamsTables = [{ id: 60, title: "Guidance For Competitive Exams" }];
    const DetailsofCareerCounsellingTables = [{ id: 58, title: "Details of Career Counselling" }];
    const internshipTables = [
        { id: 44, title: "Training & Internship for Session 2024-25" },
        { id: 43, title: "Training & Internship for Session 2023-24" },
        { id: 42, title: "Training & Internship for Session 2022-23" },
        { id: 45, title: "Training & Internship for Session 2021-22" },
    ];

    const galleryImages = [
        { id: 1, image: "https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/pt-glimple-1.webp", alt: "Training and Placement Gallery 1" },
        // ... rest of gallery images
    ];

    // Helper to map tables to FAQ items
    const mapTablesToFAQ = (tables) => tables.map(item => ({
        id: item.id,
        question: item.title,
        component: (
            <APITable
                tableId={item.id.toString()}
                className="py-0"
                overflowX={true}
                showTableTitle={false}
                nested={true}
                maxHeight="max-h-[600px]"
                excludeColumns={["Certificate No.", "Certificate No"]}
            />
        )
    }));

    return (
        <>
            <MainIntro
                title="Shaping Your Career with the Right Opportunities"
                subtitle="Successful Placement Track Record"
                description={[
                    "Your journey from the classroom to the corporate world begins at Kalinga University. KU offers personalised training and conducts campus drives each year so that you can begin your professional journey right after you graduate. We just don\u2019t teach you the curriculum, but we train, guide, and connect you with industry leaders. We help students build confidence to clear any interview by securing top positions and packages in leading companies."]}
                imageUrl="https://cdn.kalingauniversity.ac.in/placement/placement-intro.jpg"
                imageAlt="Kalinga University Research"
                initialVisibleParagraphs={1}
                showKnowMore={true}
            />
            <MentorIntro
                title="Shubham Sharma"
                subtitle="Outstanding Achiever"
                department={null}
                imageSrc="https://cdn.kalingauniversity.ac.in/placement/out.webp"
                quote="B.Tech. 2019 <br/> Sr. Software Developer at Oracle India Private Ltd.<br/>Package: <span style='color: var(--background);'>29.98 LPA</span><br/><img src='https://cdn.kalingauniversity.ac.in/placement/oracle.png' alt='Oracle Logo' style='height: 80px; margin-top: 10px; background: white; padding: 5px; border-radius: 4px;' />"
                showQuotes={false}
                quoteContainerClassName="pl-6 md:pl-14"
                className="pb-10 bg-white"
            />
            <Partner
                blueTitle="Best Campus Placement University in Chhattisgarh"
                redTitle="MoU Partners"
                blueItems={blueItems}
                ccrcLogo="https://cdn.kalingauniversity.ac.in/ccrc/ccrclogo.webp"
                singleColumn={true}
                milestones={milestones}
                description="Maintaining the track record of providing students with the best job opportunities and rewarding salary packages at top companies."
                footerText="Trusted by 400+ Global Recruiters"
                noContainer={true}
            />
            <MediaCardSlider
                categoryTitle=""
                title="Campus Drives"
                videoItems={videoItems1}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />
            <MainIntro
                title="Training And Placement Cell"
                description={[
                    "The Career and Corporate Centre of Kalinga University is a hub for career guidance and training, and corporate partnerships. With modern infrastructure and resources, the centre meets industry standards and has even received appreciation from top organisations. The Kalinga University campus placements support cell introduces you to the professional world. We don't just prepare you for the corporate world, but give you a 360-degree training so that you can turn out to be a confident individual who is ready to tackle any challenge in life.",
                    "With our personalised training programs, expert-led sessions, and interview preparation, you will be well-prepared to clear any job interview according to your skill set. Our expert mentors go beyond and guide you with skills that companies are looking for in the current job market, and even update the training modules accordingly. Apart from this, we also keep the database of job openings in various companies up-to-date, so that our students don't miss out on any opportunities. With our strong industry connections, we conduct campus drives each year, ensuring that our graduates are placed in leading companies with competitive salary packages.",
                    "<h3 style='font-size: 1.3rem; margin-bottom: 0.5rem;'>Objectives of Training </h3>"
                ]}
                points={items.map((item) => item.text)}
                hidePointsUntilExpanded={true}
                knowMoreLabel="Read More"
                imageUrl="https://cdn.kalingauniversity.ac.in/placement/placement-training-cell/placemnt-intro.webp"
                imageAlt="Objectives"
                initialVisibleParagraphs={1}
                showKnowMore={true}
                reverseLayout={true}
                applyTransform3dSlant={false}
                sectionClassName="bg-white !py-0 !pb-0"
            />
            <QuickLinks
                links={links}
                title="Training Initiatives Of Kalinga\u2019s TnP Cell"
                description="Kalinga University's placement program bridges academia and industry with 400+ recruitment partners, comprehensive training, and dedicated support to prepare students for successful careers in top companies."
                backgroundColor="bg-white"
                textColorClassName="text-black"
                showReadMore={true}
            />
            <div className="container mx-auto mt-8 rounded-2xl bg-[var(--card-gray)] p-5 md:p-7">
                <Tabs defaultValue="tab1">
                    <TabsList className="gap-0">
                        <TabsTrigger value="tab1">Training Programs</TabsTrigger>
                        <TabsTrigger value="tab2">Student Training Initiatives</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="pt-7">
                        {/* ... Content from original tab1 ... */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-stix text-2xl text-[var(--foreground)] mb-4">Campus Recruitment Training (CRT)</h3>
                                <p className="text-[var(--light-text-gray)] leading-relaxed">Companies today look for graduates who don't just excel in academics but also possess some real workplace skills like problem-solving, communication, and confidence. Our Campus Recruitment Training (CRT) offers a 100-hour training cycle on attitude (50 hours) and aptitude (50 hours) and prepares students for early success.</p>
                            </div>
                            {/* ... more content ... */}
                        </div>
                    </TabsContent>
                    <TabsContent value="tab2" className="pt-7">
                        {/* ... Content from original tab2 ... */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-stix text-2xl text-[var(--foreground)] mb-4">Our Student Training Initiatives</h3>
                                <p className="text-[var(--light-text-gray)] leading-relaxed">The training and placement cell takes the conventional idea of campus training to a whole new dimension where learnings are transformed into employability.</p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            {/* ... Other sections from original file ... */}
            <FAQ
                items={mapTablesToFAQ([...collaborationTables, ...guidanceForCompetitiveExamsTables, ...DetailsofCareerCounsellingTables, ...CapacityInitiatives202425Tables, ...CapacityInitiatives202324Tables, ...CapacityInitiatives202223Tables, ...CapacityInitiatives202122Tables, ...CapacityInitiatives202021Tables, ...CapacityInitiatives201819Tables])}
                title=""
                showHeading={false}
                variant="default"
                pyClassName="py-8"
            />
            {/* ... and so on ... */}
            <AdmissionCareer />
        </>
    );
}
