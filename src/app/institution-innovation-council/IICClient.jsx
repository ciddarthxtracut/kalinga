"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import DataTable from "@/app/components/general/data-table";
import ImageContent from "@/app/components/ccrc/imagecontent";
import ImageListItem from "../components/ccrc/imagelistitem";
import SectionHeading from "../components/general/SectionHeading";
import GlobalArrowButton from "../components/general/global-arrow_button";
import FlipbookTrigger from "../components/general/FlipbookTrigger";
import Gallery from "@/app/components/general/gallery";
import PdfThumbnail from "../components/general/PdfThumbnail";

const IICClient = ({
    objectives,
    innovationParagraph,
    iicCommitteeTable,
    certificates,
    annualReportButtons,
    iicTrainingAchievements,
    iicfound,
    iicfounds,
    annualReportButtons2,
    events2024,
    events2023,
    events2022,
    events2021,
    events2020,
    events2019
}) => {
    return (
        <div className="bg-white">
            <ImageContent
                imageSrc="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                description="An Initiative of the Ministry of Education"
                additionalContent={[
                    "In 2018, the Ministry of Education (MoE), through the MoE’s Innovation Cell (MIC), launched the Institution’s Innovation Council (IIC) in collaboration with AICTE for Higher Educational Institutions (HEIs) to promote the culture of innovation and start-up ecosystem in educational institutions. The main objective of IIC is to engage a large number of faculty members and students in various entrepreneurship and innovation-related activities. It includes IPR, Ideathon, Proof of Concept Development, Design Thinking, and project handling and management at the pre-incubation level. The IIC model enables HEIs to address key challenges such as limited people’s involvement, occasional or unplanned Innovation and Entrepreneurship (I&E) activities, limited engagement of top leaders, poor coordination, weak resource planning, and underutilization of students’ creative potential."
                ]}
                subtitle=""
                title="Institution Innovation Council"
                readmore={false}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <Image
                            src="https://cdn.kalingauniversity.ac.in/institution-innovation-council/chart+(2).png"
                            alt="Innovation & Startups"
                            width={500}
                            height={400}
                            className="rounded-xl shadow-md object-cover"
                        />
                    </div>
                    <div>
                        <SectionHeading
                            title="Driving Innovation & Entrepreneurship"
                            titleClassName="text-[var(--foreground)] mb-4"
                        />
                        <p className="text-[var(--light-text-gray)] leading-relaxed">
                            {innovationParagraph}
                        </p>
                    </div>
                </div>
            </section>

            <ImageListItem
                items={objectives}
                imageSrc="https://cdn.kalingauniversity.ac.in/common/kalinga-students-2.jpg"
                title="Functions of IIC at Kalinga University"
                description={false}
            />

            <div className="container mx-auto mt-16 bg-[var(--lite-sand)] p-6 rounded-xl">
                <h2 className="font-stix text-2xl md:text-[36px] text-center text-[var(--foreground)] mb-6">
                    IIC Committee
                </h2>
                <div className="overflow-x-auto">
                    <DataTable
                        columns={[
                            { key: "memberType", label: "Member Type", width: "w-[35%]" },
                            { key: "role", label: "Key Role / Position Assigned in IIC", width: "w-[65%]" },
                        ]}
                        data={iicCommitteeTable}
                        overflowX={true}
                        className="shadow-none"
                        headerBgColor="bg-[var(--button-red)]"
                        headerTextColor="text-white"
                        evenRowBg="bg-white"
                        oddRowBg="bg-gray-50"
                    />
                </div>
            </div>

            <SportsFacilitiesTabs
                events2024={events2024}
                events2023={events2023}
                events2022={events2022}
                events2021={events2021}
                events2020={events2020}
                events2019={events2019}
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-2">
                    <div className="text-center mb-12">
                        <SectionHeading
                            title="IIC Star Rating"
                            titleClassName="text-3xl md:text-4xl lg:text-5xl mb-6"
                        />
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {certificates.map((img) => (
                            <div key={img.id} className="flex flex-col items-center">
                                <div className="relative w-full max-w-md aspect-[4/3] border-4 border-[var(--button-red)] rounded-2xl overflow-hidden shadow-lg bg-white">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-contain"
                                        priority={img.id === 1}
                                    />
                                </div>
                                <p className="mt-4 font-semibold text-lg text-center">{img.alt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pt-16 pb-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-10 text-center">
                        <h2>Letter of Appreciation</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {annualReportButtons.map((item) => (
                            <FlipbookTrigger
                                key={item.id}
                                pdfUrl={item.href}
                                title={`Appreciation Letter ${item.text}`}
                                className="group relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg focus:outline-none block"
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <PdfThumbnail url={item.href} alt={item.text} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex flex-col justify-end p-5">
                                    <div className="flex items-end justify-between gap-4">
                                        <p className="font-plus-jakarta-sans text-white leading-tight text-left line-clamp-2 mb-1 drop-shadow-md font-bold text-lg">
                                            {item.text}
                                        </p>
                                        <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--button-red)] text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--dark-orange-red)] shadow-lg">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
                                                <path d="M7 0L5.76625 1.23375L10.6538 6.125H0V7.875H10.6538L5.76625 12.7663L7 14L14 7L7 0Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </FlipbookTrigger>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeading title="IIC Training Achievements" titleClassName="text-center mb-10" subtitle={false} />
                    <Gallery images={iicTrainingAchievements} backgroundColor="bg-white" paddingClassName="py-0" forceSliderOnMobile={true} title={false} />
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeading title="Foundation level" titleClassName="text-center mb-10" subtitle={false} />
                    <Gallery images={iicfound} backgroundColor="bg-white [&_.swiper-wrapper]:justify-center" paddingClassName="py-0" forceSliderOnMobile={true} title={false} />
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <SectionHeading title="Advanced level" titleClassName="text-center mb-10" subtitle={false} />
                    <Gallery images={iicfounds} backgroundColor="bg-white [&_.swiper-wrapper]:justify-center" paddingClassName="py-0" forceSliderOnMobile={true} title={false} />
                </div>
            </section>

            <ImageContent
                hasImage={false}
                readmore={false}
                className="items-center justify-center"
                title="Impact Lecture Series"
                subtitleclassName="hidden"
                description=" The IIC Impact Lecture Series aims to promote innovation and entrepreneurship among students of higher education institutions across India. The lecture enables students to learn from leading experts on topics like start-ups, intellectual property rights, innovation, and entrepreneurship challenges and solutions. Kalinga University hosted its first session of the Impact Lecture Series on 15th April 2024 in an offline mode. Students learn to become successful entrepreneurs, gain real-life experiences, and received guidance on how to think and act creatively and innovatively by setting goals in the right direction. "
            />

            <section className="pt-16 pb-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-10 text-center">
                        <h2>IIC Annual Reports</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {annualReportButtons2.map((item) => (
                            <FlipbookTrigger key={item.id} pdfUrl={item.href} title={`IIC Annual Report ${item.text}`}>
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                                    <GlobalArrowButton className="!w-full h-[60px] justify-between" arrowClassName="p-[3px] !px-2 mr-2 !py-1" arrowSize={29}>
                                        {item.text}
                                    </GlobalArrowButton>
                                </a>
                            </FlipbookTrigger>
                        ))}
                    </div>
                </div>
            </section>

            <Gallery
                title="Glimpses"
                images={[
                    { id: 1, image: "https://cdn.kalingauniversity.ac.in/IIC/DSC06210.jpg", alt: "Institution Innovation Council" },
                    { id: 2, image: "https://cdn.kalingauniversity.ac.in/IIC/Vikshit+Bharat.jpg", alt: "Institution Innovation Council" },
                    { id: 3, image: "https://cdn.kalingauniversity.ac.in/IIC/Q1.7.png", alt: "Institution Innovation Council" },
                    { id: 4, image: "https://cdn.kalingauniversity.ac.in/IIC/Q1.6.png", alt: "Institution Innovation Council" },
                    { id: 5, image: "https://cdn.kalingauniversity.ac.in/IIC/Machine+Learning+2.jpeg", alt: "Institution Innovation Council" },
                    { id: 6, image: "https://cdn.kalingauniversity.ac.in/IIC/IIC+Meet.jpeg", alt: "Institution Innovation Council" },
                    { id: 7, image: "https://cdn.kalingauniversity.ac.in/IIC/Hackathon+2.jpeg", alt: "Institution Innovation Council" },
                    { id: 8, image: "https://cdn.kalingauniversity.ac.in/IIC/Hackathon+1.jpg", alt: "Institution Innovation Council" },
                ]}
            />
        </div>
    );
};

function SportsFacilitiesTabs({ events2024, events2023, events2022, events2021, events2020, events2019 }) {
    const tabs = useMemo(() => [
        { id: "y2018", label: "2024–25 (QUATER 4)" },
        { id: "y2019", label: "2024–25 (QUATER 3)" },
        { id: "y2020", label: "2024–25 (QUATER 2)" },
        { id: "y2021", label: "2024–25 (QUATER 1)" },
        { id: "y2022", label: "2023–24 (QUATER 2)" },
        { id: "y2023", label: "2023–24(QUATER 1)" },
        { id: "y2024", label: "2022–23 " },
    ], []);

    const [activeTab, setActiveTab] = useState("y2024");

    const toggleAccordion = (id) => {
        setActiveTab((prev) => (prev === id ? "" : id));
    };

    const renderTabContent = (tabId) => {
        if (tabId === "y2024") return <EventsTable title="Activities Performed During the Calendar Year 2022-23" data={events2024} />;
        if (tabId === "y2023") return <EventsTable title="Activities Performed During Quarter 1 of Calendar Year 2023-24" data={events2023} />;
        if (tabId === "y2022") return <EventsTable title="Activities Performed During Quarter 2 of Calendar Year 2023-24" data={events2022} />;
        if (tabId === "y2021") return <EventsTable title="Activities Performed During Quarter 1 of Calendar year 2024-25" data={events2021} />;
        if (tabId === "y2020") return <EventsTable title="Activities Performed During Quarter 2 of Calendar year 2024-25" data={events2020} />;
        if (tabId === "y2019") return <EventsTable title="Activities Performed During Quarter 3 of Calendar year 2024-25" data={events2019} />;
        return null;
    };

    return (
        <section className="py-10 md:py-14">
            <div className="mx-auto max-w-6xl rounded-3xl bg-[#0d4a75] p-4 md:p-6">
                <div className="hidden md:flex gap-3 overflow-x-auto pb-2">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            type="button"
                            onClick={() => setActiveTab(t.id)}
                            className={[
                                "whitespace-nowrap rounded-lg border px-4 py-2 text-base font-medium transition-colors",
                                t.id === activeTab ? "bg-[var(--button-red)] text-white border-white/10" : "bg-white text-[var(--foreground)] border-white/30 hover:bg-white/95"
                            ].join(" ")}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
                <div className="mt-4 rounded-2xl bg-white p-6 md:p-10">
                    <div className="md:hidden space-y-3">
                        {tabs.map((t) => {
                            const isOpen = t.id === activeTab;
                            return (
                                <div key={t.id} className="rounded-xl border border-black/10 overflow-hidden">
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(t.id)}
                                        className={["w-full flex items-center justify-between px-4 py-3 text-left transition-colors", isOpen ? "bg-black/5" : "bg-white"].join(" ")}
                                    >
                                        <span className="font-plus-jakarta-sans font-semibold text-[var(--foreground)]">{t.label}</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" className={["transition-transform", isOpen ? "rotate-180" : "rotate-0"].join(" ")} fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    {isOpen && <div className="px-4 py-6">{renderTabContent(t.id)}</div>}
                                </div>
                            );
                        })}
                    </div>
                    <div className="hidden md:block">{renderTabContent(activeTab)}</div>
                </div>
            </div>
        </section>
    );
}

function EventsTable({ title, data }) {
    const columns = [
        { key: "sno", label: "S. No.", width: "w-20" },
        { key: "name", label: "Name of the Activity", width: "flex-1" },
        { key: "date", label: "Date of the Activity", width: "w-48" },
    ];
    return (
        <div>
            <h3 className="text-center mb-[30px]">{title}</h3>
            <div className="max-h-[450px] overflow-y-auto">
                <DataTable columns={columns} data={data.map((item, idx) => ({ ...item, sno: idx + 1 }))} overflowX={true} />
            </div>
        </div>
    );
}

export default IICClient;
