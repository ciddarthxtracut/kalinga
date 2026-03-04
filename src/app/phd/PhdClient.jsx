"use client";

import React from "react";
import Link from "next/link";
import AdmissionCareer from "../components/general/admission_cta";
import PhdGrid from "../components/phd/phd-grid";
import PhdIntro from "../components/phd/phd-intro";
import ScholarStats from "../components/phd/scholar_stats";
import WhyChoosePhd from "../components/phd/why-phd";
import FlipbookTrigger from "../components/general/FlipbookTrigger";
import GlobalArrowButton from "../components/general/global-arrow_button";
import ImageListItem from "@/app/components/ccrc/imagelistitem";

export default function PhdClient({ researchOverviewItems, phdResources, Items }) {
    return (
        <>
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

            <PhdIntro />
            <PhdGrid />
            <WhyChoosePhd />
            <ImageListItem
                items={Items}
                imageSrc="https://cdn.kalingauniversity.ac.in/research-resources/research-toolkit.webp"
                title="Your Research Toolkit"
                description=""
            />
            <section className="pt-16 pb-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-10 text-center">
                        <h2 className="font-stix mb-2 !py-2">Ph.D. Resources</h2>
                        <p className="text-[16px] text-[#555] leading-relaxed max-w-3xl mx-auto">
                            Access essential documents, policies, and guidelines for your Ph.D. journey.
                            From ordinances to thesis formats, everything you need is right here.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {phdResources.map((item) => {
                            const isInternalLink = item.href && item.href.startsWith("/");

                            if (isInternalLink) {
                                return (
                                    <Link key={item.id} href={item.href} className="block">
                                        <GlobalArrowButton
                                            className="!w-full h-[60px] justify-between"
                                            arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                                            arrowSize={29}
                                        >
                                            {item.text}
                                        </GlobalArrowButton>
                                    </Link>
                                );
                            }

                            return (
                                <FlipbookTrigger key={item.id} pdfUrl={item.href} title={item.text}>
                                    <a
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
                                </FlipbookTrigger>
                            );
                        })}
                    </div>
                </div>
            </section>

            <ScholarStats />
            <AdmissionCareer />
        </>
    );
}
