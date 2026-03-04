"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import ResearchCE from '../components/research-facilities/research-coe'
import FAQ from "@/app/components/general/faq";
import Gallery from "@/app/components/general/gallery";
import AdmissionCareer from "@/app/components/general/admission_cta";

const LaboratoriesClient = ({ labFaqItems, galleryImages, aboutP1, aboutP2 }) => {
    return (
        <main className="bg-white">
            <MainIntro
                title="About Our Cutting-Edge Laboratories"
                description={[aboutP1, aboutP2]}
                imageUrl="https://cdn.kalingauniversity.ac.in/laboratories/laboratories-mainintro.webp"
                imageAlt="Laboratories"
                showKnowMore={true}
                knowMoreLabel="Read More"
                initialVisibleParagraphs={1}
            />

            <FAQ
                title="Introducing Our Labs"
                subtitle=""
                items={labFaqItems}
                allowMultipleOpen={false}
                backgroundColor="bg-white"
                titleClassName="text-center"
            />
            <ResearchCE />

            <Gallery
                title="Glimpses"
                images={galleryImages}
            />

            <AdmissionCareer />
            <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 30% !important;
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

export default LaboratoriesClient;
