"use client";

import React from "react";
import FeatureCards from "@/app/components/home/featurecard";
import RaipurMainIntro from '@/app/components/about-raipur/raipur_main_intro'
import ImageContent from "@/app/components/ccrc/imagecontent";

const ChhattisgarhClient = ({ cards }) => {
    return (
        <div>
            <ImageContent
                title="A Land Rich in Culture, Heritage & Diversity"
                subtitle="Discover Chhattisgarh"
                description="Located in the heart of India and also known as the ‘Rice Bowl of India’, Chhattisgarh is known for its popular temples, waterfalls, and historical sites. It has become a hub for students, researchers, travellers, and entrepreneurs due to growing opportunities in education, sustainable development, innovation, and exploration. It is famous for its Dhokra (bell metal) art, terracotta sculptures, and bamboo crafts that are admired globally for their detailing and precision. Chhattisgarh offers an inspiring learning environment and lifestyle."
                imageSrc="https://cdn.kalingauniversity.ac.in/about-raipur/2148248881.jpg"
                imageAlt="Chhattisgarh Banner"
            />
            <RaipurMainIntro
                knowMoreLabel="Know More"
                knowMoreHref="/about-raipur"
            />
            <FeatureCards
                title="Popular Tourist Attractions"
                subtitle="Discover Chhattisgarh"
                description="Explore popular tourist places of Chhattisgarh that offer impeccable views."
                cards={cards}
                cardMinHeight="180px"
                cardLineClamp={3}
                imageUrl="https://cdn.kalingauniversity.ac.in/common/Map-chat.webp"
            />
        </div>
    );
};

export default ChhattisgarhClient;
