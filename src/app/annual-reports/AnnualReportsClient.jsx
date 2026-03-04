"use client";

import React from "react";
import GlobalArrowButton from "../components/general/global-arrow_button";
import FlipbookTrigger from "../components/general/FlipbookTrigger";

const AnnualReportsClient = ({ annualReportButtons }) => {
    return (
        <section className="pt-16 pb-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-10 text-center">
                    <h2>Annual Reports</h2>
                    <p className="text-[16px] text-[#555] leading-relaxed">
                        Our annual reports will give you a detailed overview of the University’s growth and achievements.
                        These reports show transparency, academic excellence, and overall institutional development.
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

export default AnnualReportsClient;
