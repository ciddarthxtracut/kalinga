"use client";

import React from "react";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import DataTable from "@/app/components/general/data-table";
import AdmissionCareer from "@/app/components/general/admission_cta";
import SectionHeading from "@/app/components/general/SectionHeading";

const ConferencesClient = ({ whyAttendItems, conferencesHeldAtKU }) => {
    return (
        <>
            <section className="pt-10 pb-6">
                <ImageListItem
                    items={whyAttendItems}
                    imageSrc="https://cdn.kalingauniversity.ac.in/conferences/conferences-banner.webp"
                    title="Why Attend Our Conferences and Events?"
                    description=""
                />
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Conferences Held At KU"
                        titleClassName="text-[var(--title-color)] text-center"
                    />
                    <div className="mt-6">
                        <DataTable
                            overflowX
                            headerBgColor="bg-[var(--dark-blue)]"
                            columns={[
                                { key: "slNo", label: "S. No.", width: "w-24" },
                                { key: "faculty", label: "Faculty", widthPx: 220 },
                                { key: "conferenceName", label: "Name of The Conference", widthPx: 520 },
                                { key: "level", label: "National/International", widthPx: 220 },
                                { key: "date", label: "Date", widthPx: 220 },
                                { key: "year", label: "Year", width: "w-28" },
                            ]}
                            data={conferencesHeldAtKU}
                        />
                    </div>
                </div>
            </section>
            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 20% !important;
        }

        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>
            <AdmissionCareer />
        </>
    );
};

export default ConferencesClient;
