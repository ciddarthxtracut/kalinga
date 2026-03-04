"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import MediaCardSlider from '../components/general/media-card-slider';

export default function PodcastClient({ videoItems }) {
    return (
        <div>
            <MainIntro
                title="An Initiative By Kalinga University"
                subtitle=""
                description={[
                    <>
                        <strong>Big Ideas, Bold Voices, and Conversations that Inspire</strong> - Welcome to Kalinga Podcast!
                    </>,
                    "A platform that shapes the voice of our students, faculty members, alumni, and industry leaders. From inspiring talks to engaging conversations, experience a whole new vibe at our podcast studio. Our students don’t just learn by listening, but they also learn how to create and host their own podcasts. ",
                    "So, plug in your earphones and discover new stories and ideas that will inspire you.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/common/podcast.webp"
                imageAlt="Kalinga University Podcast"
                showKnowMore={false}
                showButton={false}
                initialVisibleParagraphs={5}
                disableClipPath={false}
            />

            <MediaCardSlider
                categoryTitle=""
                title="Our Podcasts"
                description=""
                videoItems={videoItems}
                cardBgClass="bg-white"
                nameTextClass="text-[var(--button-red)]"
                descriptionTextClass=""
                swiperClassName="ccrc-video-slider"
            />
        </div>
    );
}
