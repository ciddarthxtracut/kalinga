"use client";

import React from 'react';
import GlobalArrowButton from "../components/general/global-arrow_button";

const DownloadsClient = ({ downloadsreport }) => {
    return (
        <section className="pt-16 pb-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {downloadsreport.map((item) => (
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
    );
};

export default DownloadsClient;
