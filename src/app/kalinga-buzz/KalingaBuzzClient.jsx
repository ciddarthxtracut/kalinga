"use client";

import React from "react";
import MainIntro from "@/app/components/about/main_intro";
import KalingaBuzzTabs from "@/app/components/kalinga-buzz/KalingaBuzzTabs";

export default function KalingaBuzzClient({ buttons, buttons2, buttons3, buttons4 }) {
    return (
        <>
            <MainIntro
                title="A One-Stop Update on Campus Life"
                subtitle="An Initiative By Kalinga University"
                description={[
                    "Stay connected and updated with our monthly newsletters! It highlights cultural events, ceremonies, research breakthroughs, sports achievements, academic achievements, students' and faculty achievements, and much more.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/common/kalinga-buzz.webp"
                imageAlt="Kalinga University Buzz"
            />
            <KalingaBuzzTabs
                year2025={buttons4}
                year2021={buttons3}
                year2020={buttons2}
                year2019={buttons}
            />
        </>
    );
}
