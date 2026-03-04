"use client";

import React from "react";
import GlobalArrowButton from "../components/general/global-arrow_button";
import FlipbookTrigger from "../components/general/FlipbookTrigger";

const AcademicCalendarClient = ({ annualReportButtons }) => {
    return (
        <section className="pt-16 pb-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-10 text-center">
                    <h2 className="mb-4">Academic Calendar 2025-26</h2>
                    <p className="text-[16px] text-[#555]">
                        The academic calendar for the year 2025-26 covers all the academic events scheduled throughout the year at Kalinga University.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {annualReportButtons.map((item) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcademicCalendarClient;
