"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import DataTable from "@/app/components/general/data-table";
import AdmissionCareer from "@/app/components/general/admission_cta";
import GrievanceForm from "@/app/components/forms/GrievanceForm";

const GrievanceClient = ({
    aboutP1,
    aboutP2,
    functionsList,
    columns,
    data
}) => {
    return (
        <main className="bg-white font-plus-jakarta-sans">
            <MainIntro
                title="Grievance Redressal Cell"
                description={[aboutP1, aboutP2]}
                imageUrl="https://cdn.kalingauniversity.ac.in/grievance/grievance-main-intro.webp"
                imageAlt="Grievance Redressal Cell"
                showKnowMore={true}
                initialVisibleParagraphs={2}
            />

            <ImageListItem
                title="Functions"
                subtitle=""
                items={functionsList}
                imageSrc="https://cdn.kalingauniversity.ac.in/grievance/grievance-functions.webp"
                description=""
            />

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl text-[var(--title-color)] font-stix text-center">
                        Grievance Redressal Committee
                    </h2>

                    <div className="mt-10 max-w-4xl mx-auto">
                        <DataTable columns={columns} data={data} overflowX={true} />
                    </div>
                </div>
            </section>

            <GrievanceForm />
            <AdmissionCareer />

            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 35% !important;
        }

        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>
        </main>
    );
};

export default GrievanceClient;
