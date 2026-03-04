"use client";

import React from 'react';
import MainIntro from '../components/about/main_intro';
import ImageContent from "@/app/components/ccrc/imagecontent";
import ImageListItem from "@/app/components/ccrc/imagelistitem";
import FAQ from '../components/general/faq';
import GlobalArrowButton from '../components/general/global-arrow_button';
import { useFlipbook } from '../components/general/FlipbookContext';

const DocumentVerificationClient = ({ tableSections, faqContent, boxItems }) => {
    const { openFlipbook } = useFlipbook();
    return (
        <div>
            <ImageContent
                hasImage={false}
                readmore={false}
                className="items-center justify-center"
                title="Document Verification"
                subtitleclassName="hidden"
                description="We understand the importance of accurate documentation verification..."
            />
            <MainIntro
                title="Public Notice"
                description="The general public is advised that only verifications conducted directly through Kalinga University are valid."
                imageSrc="https://cdn.kalingauniversity.ac.in/common/kalinga-front-banner02.webp"
                readmore={false}
                knowMoreLabel="IBC Verifications Bangalore 21st September 2024"
                knowMoreHref="https://cdn.kalingauniversity.ac.in/common/Public+Notice+IBC+Verifictions+Bangalore+21st+September+2024.pdf"
                showKnowMore={true}
            />
            <ImageListItem boxItems={boxItems} imageSrc="https://cdn.kalingauniversity.ac.in/ccrc/ccrc.webp" title="" description="" />
            <FAQ
                title="Our Document Verification Procedure "
                subtitle=""
                variant="table-display"
                items={[]}
                tableSections={tableSections}
                className="mt-8 mb-8" />
            <FAQ
                title="Frequently Asked Questions"
                subtitle=""
                items={faqContent} />
            <div className="flex justify-center py-8">
                <GlobalArrowButton
                    className="px-8 py-3 text-base"
                    arrowClassName="!px-2 !py-1"
                    arrowSize={24}
                    onClick={() => openFlipbook("https://cdn.kalingauniversity.ac.in/common/Verification+Form.pdf", "Verification Form")}
                >
                    Download Application Form
                </GlobalArrowButton>
            </div>
        </div>
    );
};

export default DocumentVerificationClient;
