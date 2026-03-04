"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import FAQ from "@/app/components/general/faq";

const ChairsClient = ({ chairsData, activitiesData, tableSections }) => {
    return (
        <>
            <MainIntro
                title="Chairs and Their Activities"
                description={[
                    "At the heart of Kalinga University’s research and innovation, our distinguished chairs play a crucial role in knowledge advancement in different areas and in creating solutions that remove societal challenges.",
                    "The chairs offer a platform to students, faculty members, researchers, and experts where they can share their unique ideas and conduct project works, presentations, competitions, guest lectures, training, and workshops. They not only contribute to the growth of the institution but also to the overall betterment of society."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/admission/library.webp"
                imageAlt="Kalinga University Library"
                showKnowMore={false}
            />

            <FAQ
                variant="table-display"
                tableSections={tableSections}
                items={[]}
                title="Overview"
                subtitle=""
                showHeading={false}
                pyClassName="pb-16"
            />
        </>
    );
};

export default ChairsClient;
