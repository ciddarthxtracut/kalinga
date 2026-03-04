"use client";

import { useFlipbook } from "../components/general/FlipbookContext";
import PublicationGrid from "../components/research/publication-grid";
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import MainIntro from "../components/about/main_intro";
import QuickLinks from "../components/general/quick_links";
import MentorIntro from "../components/department/dept_head_intro";
import ResearchCE from '../components/research-facilities/research-coe'
import ResearchLab from '../components/research-facilities/research-lab'
import AwardsScrollbar from '../components/home/awards-scrollbar';
import AdmissionCareer from "../components/general/admission_cta";
import PhdObjectivesPanel from "../components/phd/phd-objectives";
import FAQ from "../components/general/faq";

const ResearchClient = ({ awards, resourceFaqItems }) => {
    const { openFlipbook } = useFlipbook();

    return (
        <div>
            <MainIntro
                title="Research and Innovation"
                description={[
                    "Kalinga University promotes research through a knowledge-sharing mechanism that goes beyond textbooks and classroom-based studies. The primary aim of our research department is to make the outcome impactful by collaborating with renowned universities and R&D institutions. Our research-ready curriculum is constantly updated with innovative programs to tackle real-world challenges, encouraging interdisciplinary and multidisciplinary education.",
                    "Our IPR cell supports patent filing, technology development, and commercialisation, while our incubation cell connects us with local/national industry, research labs & institutions, civil society, and the Government. We conduct research work under our well-designed research policy, and to promote that, we have ample online study material, SPSS tools for research, and Drillbit to check plagiarism in research. The Central Instrumentation Facility at Kalinga has all the high-tech instruments available only in limited institutions in Central India."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Kalinga University Research"
                showButton={false}
                showKnowMore={true}
                initialVisibleParagraphs={1}
            />

            <PublicationGrid />
            <MainIntro
                title="Powering Your Curiosity at Every Step"
                subtitle="Research Resources"
                description={[
                    "Kalinga University is one of the best Research-Intensive University as it is more than just your academic curriculum; it’s about generating curiosity, creativity, and a continuous learning environment. From the first year, we encourage our students to develop a passion for research and execute their ideas into a paper, a book, or a startup. Our tech-savvy research scholars transform their ideas into impactful outcomes through our abundant research facilities."
                    , "With our open-access tools and next-gen facilities, our research team ensures that your output is not only academically correct but also socially and economically relevant. Our National and Global tie-ups will change the game of your research work by extending your networking opportunities.",
                ]}
                readMoreLabel="Read More"
                readLessLabel="Read Less"
                imageUrl="https://cdn.kalingauniversity.ac.in/campus-life/whywork.webp"
                showKnowMore={true}
                initialVisibleParagraphs={1}
            />

            <PhdObjectivesPanel />
            <OrganogramOfKalinga
                title="Apply Now for Ph.D. Admissions"
                description="Begin your research journey with world-class faculty, advanced labs, and a structured research ecosystem."
                buttonLabel="Apply Now"
                href="/phd"
                useContainer={true}
            />

            <QuickLinks
                title="Research Facilities and Resources"
                titleClassName="text-white"
                description="We provide a conducive environment for research work through our advanced laboratories, IPR cell, Central Instrumentation Facility and library."
                links={[
                    { id: 1, href: "/ipr-cell", icon: "https://cdn.kalingauniversity.ac.in/kif/Entrepreneurial+Thinking.svg", title: "IPR Cell", description: "Whether you are developing an app or a gadget, our IPR cell will always guide you in protecting your unique work, providing patents, and launching them on different platforms." },
                    { id: 2, href: "/laboratories", icon: "https://cdn.kalingauniversity.ac.in/icons/facility-management.svg", title: "Laboratories", description: "Our laboratories offer all-around facilities with modern machines, helping young researchers acquire complete practical knowledge and support in their research pursuits." },
                    { id: 3, href: "/central-instrumentation-facility", icon: "https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg", title: "Central Instrumentation Facility", description: "Convert your bold ideas into a great discovery! Our CIF are packed with high-end instruments like an X-Ray Diffractometer, 3D Printer, Bio-Chemistry Analyser, Scanning Electron Microscope, and more." },
                    { id: 4, href: "/library", icon: "https://cdn.kalingauniversity.ac.in/academics/icons/teachings.svg", title: "Library", description: "Curious minds, get ready to explore the pool of resources! Our library houses vast academic materials in both physical and digital forms, where students gain new knowledge at every stage of their research journey." },
                ]}
                showReadMore={true}
                showDescriptionReadMore={false}
            />

            <MentorIntro
                imageSrc="https://cdn.kalingauniversity.ac.in/research/harsha.webp"
                title="Dr. Harsha Patil"
                subtitle="Message from HoD"
                department="HoD - Research"
                quote="Turning curiosity into discovery through disciplined and responsible research."
                message="Research is the soul of academic excellence, and Kalinga University strives to develop a rich research ecosystem that generates curiosity, problem-solving, and inspiration among young researchers and faculty. With our advanced research labs, high-tech instruments, updated policy guidelines, IPR facilitation, CIF and connections with national and international organisations, our research scholars work together towards societal progress. With hands-on training opportunities, workshops, and seminars on how to use modern machines, students learn to lead in their field. Our faculty members support students in publishing their research papers, filing patents, and presenting their work on different platforms."
            />

            <div id="seedmoney">
                <FAQ
                    items={resourceFaqItems}
                    variant="button"
                    title=""
                    subtitle=""
                    pyClassName="py-5"
                />
            </div>

            <ResearchCE />
            <AwardsScrollbar
                title="Awards Received for Research & Innovation"
                awards={awards}
                hideTitle={false}
                headerButtonLabel="View All Awards"
                onHeaderButtonClick={() => console.log('View all awards clicked')}
                hideTopLeaves={true}
                showLeavesAroundButton={true}
                dottedLineTop="top-[200px] sm:top-[70px]"
            />
            <ResearchLab />
            <AdmissionCareer />
        </div>
    );
};

export default ResearchClient;
