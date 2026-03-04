"use client";

import { useMemo, useState } from "react";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import ImageListItem from "../components/ccrc/imagelistitem";
import DataTable from "@/app/components/general/data-table";
import GlobalArrowButton from "../components/general/global-arrow_button";
import Gallery from "../components/campuslife/campusgallery";

const AntiRaggingClient = ({ visionMissionData, objectives, annualReportButtons, AntiImages, events2024, events2023 }) => {
    return (
        <>
            <MainIntro
                title="Anti-Ragging Cell"
                subtitle={false}
                subtitleClassName="!text-blue"
                showReadMore={false}
                description={[
                    "Ragging is ruining the lives and careers of innocent students and even harming their health. Ragging is completely banned on our campus, and we take strict action against any student who is found guilty of ragging. Our cell ensures that every student pursues their education without the fear of harassment or bullying. As per the order of the Supreme Court of India, UGC guidelines, and State Government instructions, Kalinga University is following the “Zero-Tolerance Policy” towards ragging.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/common/students-3.jpg"
                imageAlt="Anti-Ragging Cell - Kalinga University"
                showKnowMore={false}
                initialVisibleParagraphs={1}
            />

            <VisionMission data={visionMissionData} showImg={false} />

            <ImageListItem
                items={objectives}
                imageSrc="https://cdn.kalingauniversity.ac.in/anti-ragging-cell/2149502730.jpg"
                title="Anti-Ragging Policy"
                description="As per the order of Supreme Court of India and subsequent Notification from University Grants Commission (UGC), ragging constitutes one or more of any intention by any student or group of students on:"
            />

            <SportsFacilitiesTabs events2024={events2024} events2023={events2023} />

            <section className="pt-16 pb-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {annualReportButtons.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <GlobalArrowButton
                                    className="!w-full h-[60px] justify-between"
                                    arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                                    arrowSize={29}
                                >
                                    {item.text}
                                </GlobalArrowButton>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Gallery
                title="Anti-Ragging Week - 2024"
                description="It was an interactive session organised for newcomers in which they were informed about the university's commitment to maintaining a ragging-free campus. Senior students shared their positive experiences in the University regarding this matter and even encouraged them to report any issue to the anti-ragging cell."
                images={AntiImages}
                paddingClassName="py-0"
                titleClassName="text-[var(--foreground)] text-center"
                forceSliderOnMobile={true}
            />
        </>
    );
};

function SportsFacilitiesTabs({ events2024, events2023 }) {
    const tabs = [
        { id: "y2024", label: "Anti-Ragging Committee" },
        { id: "y2023", label: "Anti-Ragging Squad" },
    ];

    const [activeTab, setActiveTab] = useState("y2024");

    const toggleAccordion = (id) => {
        setActiveTab((prev) => (prev === id ? "" : id));
    };

    const renderTabContent = (tabId) => {
        if (tabId === "y2024")
            return <EventsTable title="Anti-Ragging Committee (2023-24)" description="The Anti-Ragging Committee is the Supervisory and Advisory Committee in preserving a culture of Ragging-Free Environment in Kalinga University Campus. The Anti-Ragging Squad- office bearers work under the Supervision of the Anti-Ragging Committee and engage in the work of checking places like Hostels, Buses, Canteens, Classrooms and other places of student congregation. The Anti-Ragging Committee is involved in designing strategies and an action plan for curbing the Menace of Ragging in the college by adopting an array of activities." data={events2024} />;

        if (tabId === "y2023")
            return <EventsTable title="Anti-Ragging Squad (2023-24)" data={events2023} />;

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
                                "whitespace-nowrap rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                                t.id === activeTab
                                    ? "bg-[var(--button-red)] text-white border-white/10"
                                    : "bg-white text-[var(--foreground)] border-white/30 hover:bg-white/95",
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

function EventsTable({ title, description, data }) {
    const columns = [
        { key: "sno", label: "S. No.", width: "w-20" },
        { key: "name", label: "Name", width: "flex-1" },
        { key: "designation", label: "Designation", width: "w-56" },
        { key: "area", label: "Area", width: "w-56" },
    ];
    return (
        <div>
            <h2 className="text-center mb-[20px]">{title}</h2>
            {description && <p className="text-center mb-[20px] text-gray-700 font-plus-jakarta-sans">{description}</p>}
            <div className="max-h-[450px] overflow-y-auto">
                <DataTable columns={columns} data={data} overflowX={true} />
            </div>
        </div>
    );
}

export default AntiRaggingClient;
