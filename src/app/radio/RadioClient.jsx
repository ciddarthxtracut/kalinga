"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import Gallery from "@/app/components/general/gallery";

export default function RadioClient({ images }) {
    return (
        <div>
            <MainIntro
                title="Kalinga Radio"
                subtitle="An Initiative By Kalinga University"
                description={[
                    <strong key="radio-intro">Tune in to Kalinga Radio & never miss a moment!</strong>,
                    "From college happenings, trending news, live shows, and important information on examinations or on upcoming events and activities, Kalinga Radio will always keep you connected and stay updated. It offers students a great platform where they can conduct shows, host interviews, and hear inspiring stories from alumni, faculty members, and special guests. Be a part of the campus conversation - anytime, anywhere.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/common/kalinga-radio.webp"
                imageAlt="Kalinga University Radio"
                showKnowMore={true}
                knowMoreHref="https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
                knowMoreLabel="Download Now"
                initialVisibleParagraphs={2}
                disableClipPath={false}
            />
            <Gallery images={images} title="Kalinga Radio Highlights" paddingClassName="py-16" forceSlider={true} />
        </div>
    );
}
